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
          <input id="quick-find-id" class="ds-quick-find__input fsa-input fsa-input--block fsa-input--large" type="text" name="search" value="" placeholder="Quick Find" autocomplete="off" aria-owns="quick-find-results-id" aria-describedby="quick-find-instructions" aria-expanded="false" aria-autocomplete="list">
          <button id="quick-find-clear-id" class="ds-quick-find__clear" type="reset" title="Clear" aria-label="Clear"></button>
        </div>
        <div id="quick-find-results-id">
        </div>
        <div class="fsa-sr-only" id="quick-find-instructions">When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.</div>
        <div id="quick-find-results-count-id" aria-live="polite" class="fsa-sr-only">0 results</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__4/12@l fsa-grid__3/12@xl">
      <div class="fsa-level@s fsa-level--inline@s fsa-level--none@l fsa-m-b--s">
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
        <div class="fsa-m-b--xs">
          <a href="https://www.figma.com/community/file/994660481391659106/USDA-%7C-FPAC-Design-System" class="fsa-btn fsa-btn--flat fsa-link--underline-none">
            <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9917 1.99167H12H15.0385C17.226 1.99167 19.0083 3.75716 19.0083 5.94608C19.0083 7.11825 18.4972 8.16899 17.6865 8.89222C18.4972 9.61546 19.0083 10.6662 19.0083 11.8384C19.0083 14.0273 17.226 15.7928 15.0385 15.7928H14.9615C14.2522 15.7928 13.5855 15.6071 13.0083 15.2816V15.7928V17.6922C13.0083 19.9107 11.1809 21.6849 8.98064 21.6849C6.8016 21.6849 4.9917 19.9278 4.9917 17.7305C4.9917 16.5584 5.50276 15.5077 6.31343 14.7844C5.50276 14.0612 4.9917 13.0105 4.9917 11.8384C4.9917 10.6661 5.50284 9.61537 6.31362 8.89213C5.50298 8.1689 4.99194 7.11821 4.99194 5.94611C4.99194 3.75719 6.77427 1.9917 8.96178 1.9917H10.9917V1.99167ZM10.9917 9.90059V13.7761H8.96154L8.94774 13.7761C7.87048 13.7687 7.00834 12.8991 7.00834 11.8384C7.00834 10.7731 7.87784 9.90059 8.96154 9.90059H10.9917ZM8.96154 15.7928L8.94774 15.7928C7.87048 15.8001 7.00834 16.6698 7.00834 17.7305C7.00834 18.7873 7.88848 19.6683 8.98064 19.6683C10.094 19.6683 10.9917 18.7702 10.9917 17.6922V15.7928H8.96154ZM10.9917 7.88389V4.00834H8.96178C7.87809 4.00834 7.00859 4.88087 7.00859 5.94611C7.00859 7.01137 7.87809 7.88389 8.96178 7.88389H10.9917ZM15.0385 7.88386H13.0085V4.00831H15.0385C16.1222 4.00831 16.9917 4.88084 16.9917 5.94608C16.9917 7.01133 16.1221 7.88386 15.0385 7.88386ZM13.0083 11.8384C13.0083 10.7731 13.8778 9.90059 14.9615 9.90059H15.0385C16.1222 9.90059 16.9917 10.7731 16.9917 11.8384C16.9917 12.9036 16.1221 13.7761 15.0385 13.7761H14.9615C13.8778 13.7761 13.0083 12.9036 13.0083 11.8384Z"></path></svg>
            <span>Figma UI Kit</span>
            <span class="fsa-show@l fsa-label fsa-label--warning">Alpha</span>
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
