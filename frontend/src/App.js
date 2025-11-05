import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './pages/SignIn';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Simple client-side route handling without extra deps (keeps template lightweight)
  const isSignIn = typeof window !== 'undefined' && window.location.pathname === '/sign-in';

  useEffect(() => {
    // Redirect to /sign-in for quick preview if landing on root
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.history.replaceState({}, '', '/sign-in');
    }
  }, []);

  if (isSignIn || (typeof window !== 'undefined' && window.location.pathname === '/')) {
    return (
      <div className="App">
        <header className="App-header" style={{ minHeight: 'auto', paddingTop: 16 }}>
          <nav style={{ position: 'absolute', top: 16, left: 16 }}>
            <a className="App-link" href="/sign-in">Sign In</a>
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 24 }}>
          <SignIn />
        </main>
      </div>
    );
  }

  // Fallback basic screen if different routes are used in future
  return (
    <div className="App">
      <header className="App-header">
        <nav style={{ position: 'absolute', top: 16, left: 16 }}>
          <a className="App-link" href="/sign-in">Sign In</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <p>Go to <a className="App-link" href="/sign-in">/sign-in</a> to view the screen.</p>
      </header>
    </div>
  );
}

export default App;
