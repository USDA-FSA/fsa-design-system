---
layout: home
title: Home
custom_js: ["ga/ga-tracker.js", "ds-quick-find.js", "ga/quick-find.js", "ga/home.js"]
---

<div class="ds-article">

  <h1 class="fsa-sr-only">Welcome to FPAC's Design System</h1>

  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__8/12@l fsa-grid__9/12@xl">
      <p class="fsa-text--lead fsa-m-t--none"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting the bar for cohesive user experiences across USDA Farm Production and Conservation.</p>
      <div class="ds-quick-find">
        <div class="ds-quick-find__field">
          <span class="fsa-affix fsa-affix--fill">
            <label for="quick-find-id" class="fsa-affix__prefix" aria-hidden="true" title="Dollars">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </label>
            <input id="quick-find-id" class="ds-quick-find__input fsa-input fsa-input--fill fsa-input--large fsa-affix__item" type="text" name="search" value="" placeholder="Quick Find" autocomplete="off" aria-owns="quick-find-results-id" aria-describedby="quick-find-instructions" aria-expanded="false" aria-autocomplete="list">
            <button id="quick-find-clear-id" class="ds-quick-find__clear" type="reset" title="Clear" aria-label="Clear"></button>
          </span>
        </div>
        <div id="quick-find-results-id">
        </div>
        <div class="fsa-sr-only" id="quick-find-instructions">When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.</div>
        <div id="quick-find-results-count-id" aria-live="polite" class="fsa-sr-only">0 results</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__4/12@l fsa-grid__3/12@xl">
      <div class="fsa-level@s fsa-level--inline@s fsa-level--none@l fsa-m-t--xs@l fsa-m-b--s">
        <div class="fsa-m-b--xs">
          <a href="https://github.com/USDA-FSA/fsa-style/releases" class="fsa-btn fsa-btn--flat fsa-link--underline-none">
            <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g> <path d="M0,0h24v24H0V0z" fill="none"></path> </g> <g> <g> <path d="M15,3H5C3.9,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V9L15,3z M8,17c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S8.55,17,8,17z M8,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S8.55,13,8,13z M8,9C7.45,9,7,8.55,7,8s0.45-1,1-1 s1,0.45,1,1S8.55,9,8,9z M14,10V4.5l5.5,5.5H14z"></path> </g> </g> </svg>
            <span><span class="fsa-show@l">Release</span> History</span>
          </a>
        </div>
        <div class="fsa-m-b--xs">
          <a href="http://usda-fsa.github.io/fsa-style/boilerplate.html" class="fsa-btn fsa-btn--flat fsa-link--underline-none">
            <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path> </svg>
            <span><span class="fsa-show@l">Boilerplate</span> Template</span>
          </a>
        </div>
        <div class="fsa-m-b--xs">
          <a href="https://codepen.io/pen?template=WNQdJpp" class="fsa-btn fsa-btn--flat fsa-link--underline-none">
            <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path> </svg>
            <span><span class="fsa-show@l">Explore with</span> CodePen</span>
          </a>
        </div>
        
      </div>
    </div>
  </div>

  <div class="fsa-grid ds-home-features">
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}visual-style/">
        <span class="ds-home-features__title">Visual Style</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_visual_style_guide_2x.png" alt="">
        <p class="ds-home-features__blurb">508-compliant colors and typography designed to establish a cohesive experience.</p>
      </a>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}components/">
        <span class="ds-home-features__title">UI Components</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_components_2x.png" alt="">
        <p class="ds-home-features__blurb">Common web interactions with reusable and downloadable HTML/CSS.</p>
      </a>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}patterns/">
        <span class="ds-home-features__title">UX Patterns</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_patterns_2x.png" alt="">
        <p class="ds-home-features__blurb">Repeatable combinations of Design System components for recurring design solutions.</p>
      </a>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}utilities/">
        <span class="ds-home-features__title">Utilities</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_utilities_2x.png" alt="">
        <p class="ds-home-features__blurb">Make targeted style alterations with these helper classes.</p>
      </a>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}guides/">
        <span class="ds-home-features__title">Guides</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_designer_2x.png" alt="">
        <p class="ds-home-features__blurb">Guidelines covering topics such as Accessibility and Content.</p>
      </a>
    </div>
  </div>

</div>
