# Changelog

All notable changes to this project will be documented in this file.

## [0.1.1] - 2025-11-05
### Changed
- Frontend dependencies updated conservatively to latest compatible versions:
  - react: pinned to latest 18.x (compatible with CRA react-scripts 5)
  - react-dom: pinned to latest 18.x (compatible with CRA react-scripts 5)
  - react-scripts: latest 5.x

### Build
- Node modules installed and production build verified: `CI=true npm run build` completed successfully.
- No code changes were required for compatibility.

### Notes
- React 19 upgrade is deferred because create-react-app (react-scripts 5) does not currently support React 19 without migrating to a different build system (e.g., Vite, CRA alternatives) or community-maintained forks.
- Consider running `npx update-browserslist-db@latest` periodically to keep Browserslist data fresh (informational warnings seen during build).

