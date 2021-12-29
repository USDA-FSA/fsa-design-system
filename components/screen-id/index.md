---
layout: page
parent: "Components"
type: "UI Component"
title: "Screen ID"
intro: "Display a unique ID to each page view."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

{% capture snippet %}
<div class="fsa-screen-id">
  <div class="fsa-screen-id__bd">
    <dl class="fsa-screen-id__dl">
      <dt class="fsa-screen-id__dt">Screen ID</dt>
      <dd class="fsa-screen-id__dd">XYZ-WEB-007</dd>
    </dl>
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
<div class="fsa-screen-id fsa-screen-id--fullscreen">
  <div class="fsa-screen-id__bd">
    <dl class="fsa-screen-id__dl">
      <dt class="fsa-screen-id__dt">Screen ID</dt>
      <dd class="fsa-screen-id__dd">XYZ-WEB-007</dd>
    </dl>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* When an FPAC Application requires the use of a page identifier to help with technical issues.
{% endcapture %}

{% capture usage_dont %}
* As a title bar or other visual or functional purpose.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidelines

* The Screen ID is used by FPAC Technical Support representatives and County Offices to identify areas of FPAC Applications that are having technical issues.
