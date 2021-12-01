---
layout: page
parent: "Components"
type: "UI Component"
title: "Top Hat"
intro: "Indicate associated USDA agency and organization."
jump_menu: true
relatedItems:
  - "Application Header"
  - "Global Navigation"
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

## Variants

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Custom

Selectively combine with CSS Utilities, such as [Background COlors]({{ site.baseurl }}utilities/#color-background).

`class="fsa-bg--secondary-900"`

{% capture snippet %}
<div class="fsa-tophat fsa-bg--secondary-900">
  <div class="fsa-tophat__bd">
    <div class="fsa-tophat__primary">
      <span class="fsa-tophat__agency">
        <a onclick="trackLink('USDA Homepage','Header Top Hat')" class="fsa-tophat__link" href="//usda.gov" title="Link to USDA homepage">
          <img role="presentation" class="fsa-tophat__agency-logo" src="img/usda-logo--white.svg" alt="">
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
{% endcapture %}
{% include preview-and-snippet.html %}

## Responsive

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__top-hat.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* When an Application is viewable to a internal or public audience.
* When an Application needs to have a clear indication of an offical government website.
{% endcapture %}

{% capture usage_dont %}
* On any area of the page except for the first item.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* The Top Hat should be positioned above the [Application Header Component]({{ site.baseurl }}components/header-app/) when paired together in an FPAC Application.
