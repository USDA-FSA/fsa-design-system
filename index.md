---
layout: home
title: Home
custom_js: "ds-quick-search.js"
---

<div class="ds-article">

  <h1 class="fsa-sr-only">Welcome to FPAC's Design System</h1>

  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__9/12@l">
      <p class="fsa-text--lead fsa-m-t--none"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting a new bar for cohesive user experiences across USDA Farm Production and Conservation.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__3/12@l">
      <div class="fsa-level fsa-level--none@l fsa-level--grow-auto">
        <div class="fsa-m-b--s"><a class="fsa-btn fsa-btn--block fsa-btn--secondary" href="http://usda-fsa.github.io/fsa-style/boilerplate.html">Boilerplate Template</a></div>
        <div class="fsa-m-b--s"><a class="fsa-btn fsa-btn--block fsa-btn--secondary" href="https://codepen.io/pen?template=WNQdJpp">Explore with Codepen</a></div>
      </div>
    </div>
  </div>

  <form>
    <div class="ds-quick-find">
     <div class="ds-quick-find__field">
       <input class="ds-quick-find__input fsa-input fsa-input--block fsa-input--large" type="text" name="search" value="" placeholder="Quick Find" autocomplete="off" aria-owns="quick-find-results" aria-describedby="quick-find-instructions" aria-expanded="true">
       <button class="ds-quick-find__clear" type="reset" title="Clear" aria-label="Clear"></button>
     </div>
     <ul class="ds-quick-find__output" role="listbox" id="quick-find-results">
       <li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
         Components
       </li>
       <li role="option" aria-selected="false" class="ds-quick-find__output-item">
         <a class="ds-quick-find__output-link" href="{{ site.baseurl }}components/#form-elements">
           <mark>Form</mark> Elements
         </a>
       </li>
       <li role="option" aria-selected="false" class="ds-quick-find__output-item">
        <a class="ds-quick-find__output-link" href="{{ site.baseurl }}components/form-fields">
          <mark>Form</mark> Elements
          /
          <mark>Form</mark> Field
        </a>
       </li>
       <li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
         Guides
       </li>
       <li role="option" aria-selected="false" class="ds-quick-find__output-item">
        <a class="ds-quick-find__output-link" href="{{ site.baseurl }}guides/accessibility/forms">
          Accessibility
          /
          <mark>Form</mark>s
        </a>
       </li>
       <li role="option" aria-selected="false" class="ds-quick-find__output-item">
        <a class="ds-quick-find__output-link" href="{{ site.baseurl }}guides/applications/date-format">
          Applications
          /
          Date <mark>Form</mark>at
        </a>
       </li>
       <li role="option" aria-selected="false" class="ds-quick-find__output-item">
        <a class="ds-quick-find__output-link" href="{{ site.baseurl }}guides/applications/forms">
          Applications
          /
          <mark>Form</mark>s
        </a>
       </li>
       <li role="option" aria-selected="false" class="ds-quick-find__output-item">
        <a class="ds-quick-find__output-link" href="{{ site.baseurl }}guides/applications/form-validation">
          Applications
          /
          <mark>Form</mark> Validation
        </a>
       </li>
     </ul>
     <div class="fsa-sr-only" id="quick-find-instructions">When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.</div>
     <div aria-live="polite" class="fsa-sr-only">7 results</div>
    </div>
  </form>

  <div class="fsa-grid ds-home-features">
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}visual-style/">
        <span class="ds-home-features__title">Visual Style</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_visual_style_guide_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">508-compliant colors and typography designed to establish a cohesive experience.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}components/">
        <span class="ds-home-features__title">Components</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_components_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Common web interactions with reusable and downloadable HTML/CSS.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}grid-and-layout/">
        <span class="ds-home-features__title">Layout</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_grid_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Structure your content with a responsive 12-column grid system.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}utilities/">
        <span class="ds-home-features__title">Utilities</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_utilities_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Make targeted style alterations with these helper classes.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}guides/">
        <span class="ds-home-features__title">Guides</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_designer_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Guidelines covering topics such as Accessibility and Content.</p>
    </div>
  </div>

</div>