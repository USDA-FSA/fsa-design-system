---
layout: home
title: Home
custom_js: ["ga-tracker.js", "ds-quick-find.js"]
---

<div class="ds-article">

  <h1 class="fsa-sr-only">Welcome to FPAC's Design System</h1>

  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__9/12@l">
      <p class="fsa-text--lead fsa-m-t--none"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting a new bar for cohesive user experiences across USDA Farm Production and Conservation.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__3/12@l">
      <div class="fsa-level@s fsa-level--none@l fsa-level--grow-auto">
        <div class="fsa-m-b--s"><a class="fsa-btn fsa-btn--block fsa-btn--secondary" href="http://usda-fsa.github.io/fsa-style/boilerplate.html">Boilerplate Template</a></div>
        <div class="fsa-m-b--s"><a class="fsa-btn fsa-btn--block fsa-btn--secondary" href="https://codepen.io/pen?template=WNQdJpp">Explore with Codepen</a></div>
      </div>
    </div>
  </div>

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
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_grid_2x.png" alt="">
        <p class="ds-home-features__blurb">Structure and arrange content with Layout components.</p>
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