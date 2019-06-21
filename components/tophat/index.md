---
layout: page
parent: "Components"
title: "Top Hat"
intro: "The Header should include the Top Hat component as an indication of an official government website."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-tophat">
    <div class="fsa-tophat__bd">
      <div class="fsa-tophat__primary">
        <span class="fsa-tophat__agency">
          <a class="fsa-tophat__link" href="//usda.gov" title="Link to USDA homepage">
            <img role="presentation" class="fsa-tophat__agency-logo" src="{{ site.baseurl }}img/usda-logo--white.svg" alt="">
            <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
            <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
          </a>
        </span>
      </div>
      <div class="fsa-tophat__secondary">
        <span class="fsa-tophat__subagency">
          <a class="fsa-tophat__link" href="//fsa.usda.gov" title="Link to FSA homepage">Farm Service Agency</a>
        </span>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-tophat">
  <div class="fsa-tophat__bd">
    <div class="fsa-tophat__primary">
      <span class="fsa-tophat__agency">
        <a class="fsa-tophat__link" href="//usda.gov" title="Link to USDA homepage">
          <img role="presentation" class="fsa-tophat__agency-logo" src="img/usda-logo--white.svg" alt="">
          <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
          <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
        </a>
      </span>
    </div>
    <div class="fsa-tophat__secondary">
      <span class="fsa-tophat__subagency">
        <a class="fsa-tophat__link" href="//fsa.usda.gov" title="Link to FSA homepage">Farm Service Agency</a>
      </span>
    </div>
  </div>
</div>
```

## Responsive

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1 usa-external_link" href="http://usda-fsa.github.io/fsa-style/demo/rwd__top-hat.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_top-hat">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__top-hat.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Usage

### Use When

* An Application is viewable to a internal or public audience.
* An Application needs to have a clear indication of an offical government website.

### Don't Use

* The Top Hat component on any area of the page except for the first item.

## General Guidance

* The Top Hat should be positioned above the [Application Header Component]({{ site.baseurl }}components/header-app/) when paired together in an FPAC Application.
