---
layout: page
parent: "Components"
title: "Splash"
intro: "Momentarily display a launch screen while an application loading."
jump_menu: true
suppress_code_toggle: true
---

## Variations

### Default

<div class="docs__rwd-demo-block">
  <div class="docs__bd">
    <p>
      <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_splash" data-size="phone" class="fsa-btn-group__item" aria-selected="true" type="button" title="Portrait"><span class="sr-only">Portrait</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_splash" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape"><span class="sr-only">Landscape</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_splash" data-size="tablet" class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Tablet</button>
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_splash" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      </span>
      <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__splash.html" target="_blank">View in new window</a>
    </p>
  </div>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--tablet" id="rwd-demo_splash">
      <iframe title="Responsive Demo: splash" src="http://usda-fsa.github.io/fsa-style/demo/rwd__splash.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>
```html
<div class="fsa-splash">
  <div class="fsa-splash__hd">
    <div class="fsa-tophat fsa-splash__tophat">
      <div class="fsa-tophat__bd fsa-splash__tophat__bd">
        <div class="fsa-tophat__primary">
          <span class="fsa-tophat__agency">
            <a class="fsa-tophat__link fsa-splash__tophat__link" href="http://usda.gov" title="Link to USDA homepage">
              <img role="presentation" class="fsa-tophat__agency-logo" src="../img/usda-logo.svg" alt="">
              <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
              <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
            </a>
          </span>
        </div>
        <div class="fsa-tophat__secondary">
          <span class="fsa-tophat__subagency">
            <a class="fsa-tophat__link fsa-splash__tophat__link" href="http://fsa.usda.gov" title="FPAC homepage">Farm Production and Conservation</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="fsa-splash__bd">
    <div class="fsa-splash__item">
      <div class="fsa-splash__progress">
        <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
          <div class="fsa-progress__details fsa-sr-only">
            <div class="fsa-progress__label">Application is loading</div>
          </div>
          <div class="fsa-progress__bar" aria-hidden="true">
            <div class="fsa-progress__primary"></div>
            <div class="fsa-progress__secondary"></div>
          </div>
        </div>
      </div>
      <div class="fsa-splash__title">
        <span class="fsa-splash__title-abbr">SPAR</span>
        <span class="fsa-splash__title-name">SPA Reference App</span>
      </div>
    </div>
  </div>
</div>
```

## Usage

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon" role="alert">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text">Documentation in progress.</p>
  </div>
</div>

## Related Resources

* [Progress]({{ site.baseurl }}components/progress/)
