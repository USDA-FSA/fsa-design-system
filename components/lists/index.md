---
layout: page
parent: "Components"
type: "UI Component"
intro: "Structure content into concise semantic sections."
title: "Lists"
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Unordered List (bullet)

### Default

{% capture snippet %}
<ul>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

### Explicit

Effectively a CSS Utility, acting as an override.

{% capture snippet %}
<ul class="fsa-list--bullet">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: Nested

{% capture snippet %}
<ul>
  <li>List item one</li>
  <li>
    List item two
    <ul>
      <li>List item two A</li>
      <li>List item two B</li>
    </ul>
  </li>
  <li>List item three</li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

## Ordered List (numbered)

### Default
{% capture snippet %}
<ol>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
{% endcapture %}

{% include preview-and-snippet.html %}

### Explicit

Effectively a CSS Utility, acting as an override.

{% capture snippet %}
<ol class="fsa-list--number">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
{% endcapture %}

{% include preview-and-snippet.html %}

## Unstyled

#### Unordered list

{% capture snippet %}
<ul class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

#### Ordered list

{% capture snippet %}
<ol class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
{% endcapture %}

{% include preview-and-snippet.html %}

## Inline List

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon" role="alert">
  Alternately, consider the <a href="{{ site.baseurl }}components/level/">Level component</a> for greater flexibility in arranging content horizontally.
</div>

{% capture snippet %}
<ul class="fsa-list--inline">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

## Definition List

{% capture snippet %}
<dl>

  <dt>ACA</dt>
  <dd>Accredited Certifying Agent</dd>
  <dd>Authorized to issue an organic certificate to operations that comply with the USDA organic regulations.</dd>

  <dt>ACEP</dt>
  <dd>Agricultural Conservation Easement Program</dd>
  <dd>Provides financial and technical assistance to help conserve agricultural lands and wetlands and their related benefits</dd>

  <dt>ACRE</dt>
  <dd>Average Crop Revenue Election</dd>
  <dd>Offers producers an alternative to the Direct and Counter-Cyclical Program</dd>

  <dt>ADA</dt>
  <dd>Americans with Disabilities Act</dd>
  <dd>Prohibits discrimination against people with disabilities in employment, transportation, public accommodation, communications, and governmental activities</dd>

  <dt>ADAAA</dt>
  <dd>Americans with Disabilities Act Amendments Act</dd>

</dl>
{% endcapture %}

{% include preview-and-snippet.html %}

## Type

Where `type` attribute is one of <code title="lowercase letters">a</code>, <code title="uppercase letters">A</code>, <code title="lowercase Roman numerals">i</code>, <code title="uppercase Roman numerals">I</code>, or <code title="numbers (default)">1</code> (default).

{% capture snippet %}
<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
    <ol type="a">
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ol>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
    <ol type="A">
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ol>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
    <ol type="i">
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ol>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
    <ol type="I">
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ol>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: Nested

{% capture snippet %}
<ol>
  <li>List item one</li>
  <li>
    List item two
    <ol type="a">
      <li>List item two a</li>
      <li>List item two b</li>
      <li>List item two c</li>
    </ol>
  </li>
  <li>List item three</li>
</ol>
{% endcapture %}

{% include preview-and-snippet.html %}


## Responsive

Selectively apply List styles at any Media Query breakpoint.

<code>class="fsa-list--<strong>[VARIANT]@[BREAKPOINT]</strong>"</code> where `VARIANT` is one of `bullet`, `number`, `inline`, or `unstyled`, and `BREAKPOINT` is one of `s`, `m`, `l`, or `xl`.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__lists.html
{% endcapture %}

{% include rwd-viewer.html %}

## Sass Mixin

Resets `<ul>` or `<ol>` elements by stripping all style properties, e.g. bullets, numbers, margins, etc.

```scss
// SCSS
.your-custom-list {

  @include reset-ul();

  &__item {
    @include reset-li();
  }

}
```
```html
<!-- HTML -->
<ul class="your-custom-list">
  <li class="your-custom-list__item">List item one</li>
  <li class="your-custom-list__item">List item two</li>
  <li class="your-custom-list__item">List item three</li>
</ul>
```
<div class="ds-preview">
  <ul class="your-custom-list">
    <li class="your-custom-list__item">List item one</li>
    <li class="your-custom-list__item">List item two</li>
    <li class="your-custom-list__item">List item three</li>
  </ul>
</div>
