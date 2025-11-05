import React, { useEffect, useRef } from 'react';

/**
 * PUBLIC_INTERFACE
 * SignIn page renders the Figma-extracted Sign In screen with pixel-perfect fidelity.
 * It loads the exact HTML markup into a container and attaches the extracted CSS and JS from /public/assets.
 * Route: /sign-in
 */
function SignIn() {
  const containerRef = useRef(null);
  const styleElRef = useRef(null);
  const styleCommonRef = useRef(null);
  const scriptElRef = useRef(null);

  useEffect(() => {
    // Ensure CSS is appended after app CSS so it wins specificity without altering positions
    const commonCss = document.createElement('link');
    commonCss.rel = 'stylesheet';
    commonCss.href = '/assets/common.css';
    document.head.appendChild(commonCss);
    styleCommonRef.current = commonCss;

    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/assets/sign-in-11-235.css';
    document.head.appendChild(css);
    styleElRef.current = css;

    // Load JS for interactivity (focus ring, password toggle)
    const script = document.createElement('script');
    script.src = '/assets/sign-in-11-235.js';
    script.async = true;
    document.body.appendChild(script);
    scriptElRef.current = script;

    // Cleanup on unmount
    return () => {
      if (styleElRef.current) document.head.removeChild(styleElRef.current);
      if (styleCommonRef.current) document.head.removeChild(styleCommonRef.current);
      if (scriptElRef.current) document.body.removeChild(scriptElRef.current);
    };
  }, []);

  // Load the extracted HTML as innerHTML to preserve absolute layout and class names exactly
  // The HTML body wrapper is excluded; we use only the screen container div content
  const html = `
  <div id="screen-sign-in-11-235" class="figma-screen" style="width:375px; height:812px;">
    <div id="group-13-110" class="abs" style="left:30px; top:94px; width:155px; height:75px;">
      <p id="text-12-29" class="text abs hello" style="left:0px; top:0px; width:84px; height:45px;">Hello,</p>
      <p id="text-12-30" class="text abs welcome" style="left:0px; top:45px; width:155px; height:30px;">Welcome Back!</p>
    </div>
    <div id="comp-30-585" class="abs" style="left:30px; top:226px; width:315px; height:81px;">
      <div id="rect-I30-585-30-298" class="abs input-rect" style="left:0px; top:26px; width:315px; height:55px;"></div>
      <p id="text-I30-585-30-300" class="text abs placeholder" style="left:20px; top:45px; width:61px; height:17px;">Enter Email</p>
      <p id="text-I30-585-30-301" class="text abs label" style="left:0px; top:0px; width:38px; height:21px;">Email</p>
    </div>
    <div id="comp-30-590" class="abs" style="left:30px; top:337px; width:315px; height:81px;">
      <div id="rect-I30-590-30-298" class="abs input-rect" style="left:0px; top:26px; width:315px; height:55px;"></div>
      <p id="text-I30-590-30-300" class="text abs placeholder" style="left:20px; top:45px; width:84px; height:17px;">Enter Password</p>
      <p id="text-I30-590-30-301" class="text abs label" style="left:0px; top:0px; width:107px; height:21px;">Enter Password</p>
      <button id="pwd-toggle" aria-label="Toggle password visibility" class="abs" style="right:12px; top:41px; width:24px; height:24px; border:none; background:transparent; padding:0; cursor:pointer;">
        <span style="display:block; width:18px; height:12px; border:2px solid var(--color-808a96); border-radius:12px; position:relative; margin:6px 3px 0 3px;">
          <span style="position:absolute; left:7px; top:3px; width:4px; height:4px; background:var(--color-808a96); border-radius:50%;"></span>
        </span>
      </button>
    </div>
    <div id="group-12-91" class="abs" style="left:40px; top:438px; width:97px; height:17px;">
      <p id="text-12-94" class="text abs forgot" style="left:0; top:0; width:97px; height:17px;">Forgot Password?</p>
    </div>
    <button id="btn-54-668" class="abs big-button" style="left:30px; top:480px; width:315px; height:60px;">
      <span class="btn-label">Sign In</span>
      <img class="btn-icon" src="/assets/figmaimages/figma_image_54_668_53_625_ee410d62.svg" alt="Arrow Right" width="20" height="20">
    </button>
    <div id="group-12-139" class="abs" style="left:90px; top:560px; width:195px; height:17px;">
      <div id="line-12-140" class="abs hairline" style="left:0px; top:9px; width:50px; height:0px;"></div>
      <p id="text-12-142" class="text abs or" style="left:57px; top:0px; width:81px; height:17px;">Or Sign in With</p>
      <div id="line-12-141" class="abs hairline" style="left:145px; top:9px; width:50px; height:0px;"></div>
    </div>
    <div id="group-13-35" class="abs" style="left:131px; top:597px; width:44px; height:44px;">
      <div id="rect-13-36" class="abs social-bg" style="left:0; top:0; width:44px; height:44px;"></div>
      <img id="icon-13-39" class="icon abs" src="/assets/figmaimages/figma_image_13_39_ffad8cec.svg" alt="Google vector" style="left:12px; top:12px; width:20px; height:20px;">
      <img id="icon-13-42" class="icon abs" src="/assets/figmaimages/figma_image_13_42_83962b79.svg" alt="Google vector overlay" style="left:23px; top:20px; width:10px; height:9.4141206741333px;">
    </div>
    <div id="group-13-49" class="abs" style="left:200px; top:597px; width:44px; height:44px;">
      <div id="rect-13-50" class="abs social-bg" style="left:0; top:0; width:44px; height:44px;"></div>
      <img id="icon-13-58" class="icon abs" src="/assets/figmaimages/figma_image_13_58.svg" alt="Facebook icon" style="left:10px; top:10px; width:24px; height:24px;">
    </div>
    <p id="text-13-67" class="text abs signup-cta" style="left:99px; top:696px; width:177px; height:17px;">Don’t have an account? Sign up</p>
    <div id="comp-13-71" class="abs" style="left:0px; top:0px; width:375px; height:44px;">
      <div id="time-wrap" class="abs" style="left:0px; top:12px; width:180px; height:22px;">
        <p class="text time" style="position:absolute; left:29.5px; top:2px; width:37px; height:18px;">19:27</p>
      </div>
      <img id="status-battery-main" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_306_b5e63c63.svg" alt="Battery Fill" style="left:337px; top:18px; width:20px; height:9.5px;">
      <img id="status-battery-outline" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_307_97b3d1ff.svg" alt="Battery Outline" style="left:336px; top:17px; width:22px; height:11.5px;">
      <img id="status-battery-inner" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_309_907fdba9.svg" alt="Battery Inner" style="left:338px; top:19.08px; width:18px; height:7.6666665077px;">
      <img id="status-cell-1" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_311_74e08aed.svg" alt="Cell 1" style="left:293.5px; top:24.3px; width:3px; height:4px;">
      <img id="status-cell-2" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_312_4153a623.svg" alt="Cell 2" style="left:298.3px; top:22.3px; width:3px; height:6px;">
      <img id="status-cell-3" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_313_a9f566ce.svg" alt="Cell 3" style="left:302.9px; top:20px; width:3px; height:8.3px;">
      <img id="status-cell-4" class="icon abs" src="/assets/figmaimages/figma_image_13_71_128_314_664f77c4.svg" alt="Cell 4" style="left:307.6px; top:17.6px; width:3px; height:10.7px;">
    </div>
    <div id="comp-42-614" class="abs" style="left:0px; top:778px; width:375px; height:34px;">
      <div id="home-ind-bar" class="abs" style="left:120px; top:21px; width:135px; height:5px; background: var(--style-32-bg); border-radius:100px;"></div>
    </div>
  </div>
  `;

  return (
    <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', background: '#fff' }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default SignIn;
