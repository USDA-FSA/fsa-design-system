---
layout: page
parent: "Components"
title: "Top Hat"
intro: "Indicates associated USDA agency and organization."
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
          <a class="fsa-tophat__link" href="//fsa.usda.gov" title="Link to FSA homepage">Farm Production and Conservation</a>
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
          <img role="presentation" class="fsa-tophat__agency-logo" src="{{ site.baseurl }}img/usda-logo--white.svg" alt="">
          <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
          <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
        </a>
      </span>
    </div>
    <div class="fsa-tophat__secondary">
      <span class="fsa-tophat__subagency">
        <a class="fsa-tophat__link" href="//fsa.usda.gov" title="Link to FSA homepage">Farm Production and Conservation</a>
      </span>
    </div>
  </div>
</div>
```

## Variations

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-tophat fsa-tophat--fullscreen">
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
          Farm Production and Conservation
        </span>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-tophat fsa-tophat--fullscreen">
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
        Farm Production and Conservation
      </span>
    </div>
  </div>
</div>
```

## Responsive

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_top-hat" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__top-hat.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_top-hat">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__top-hat.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Usage

{% capture usage_do %}
* An Application is viewable to a internal or public audience.
* An Application needs to have a clear indication of an offical government website.
{% endcapture %}

{% capture usage_dont %}
* The Top Hat component on any area of the page except for the first item.
{% endcapture %}

{% include do-dont.html %}

## General Guidance

* The Top Hat should be positioned above the [Application Header Component]({{ site.baseurl }}components/header-app/) when paired together in an FPAC Application.
