---
layout: page
parent: "Visual Style"
title: "Typography"
intro: "Clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. "
jump_menu: true
---

## Typeface

**Source Sans Pro** is an open-source sans serif typeface created for **legibility in UI design**. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <h4 class="docs__sub_style">Source Sans Pro, Regular (Default)</h4>
    <div class="docs__font fsa-font--sans">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <h4 class="docs__sub_style">Source Sans Pro, Light</h4>
    <div class="docs__font fsa-font--sans-light">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <h4 class="docs__sub_style">Source Sans Pro, Bold</h4>
    <div class="docs__font fsa-font--sans-bold">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
</div>

## Headings

```html
<h1>h1 header</h1>
<h2>h2 header</h2>
<h3>h3 header</h3>
<h4>h4 header</h4>
<h5>h5 header</h5>
<h6>h6 header</h6>
```
<div class="ds-preview">
  <h1>h1 header</h1>
  <h2>h2 header</h2>
  <h3>h3 header</h3>
  <h4>h4 header</h4>
  <h5>h5 header</h5>
  <h6>h6 header</h6>
</div>

While `<h1>` – `<h6>` elements have an inherent style, their semantic level can vary depending on its context. These CSS Utilities will enable you to maintain the visual hierarchy independent from the structural HTML heading level.

```html
<h2 class="fsa-text--h1">h2 that looks like an h1</h2>
<h2 class="fsa-text--h2">h2 that looks like an h2</h2>
<h2 class="fsa-text--h3">h2 that looks like an h3</h2>
<h2 class="fsa-text--h4">h2 that looks like an h4</h2>
<h2 class="fsa-text--h5">h2 that looks like an h5</h2>
<h2 class="fsa-text--h6">h2 that looks like an h6</h2>
```
<div class="ds-preview">
  <h2 class="fsa-text--h1">h2 that looks like an h1</h2>
  <h2 class="fsa-text--h2">h2 that looks like an h2</h2>
  <h2 class="fsa-text--h3">h2 that looks like an h3</h2>
  <h2 class="fsa-text--h4">h2 that looks like an h4</h2>
  <h2 class="fsa-text--h5">h2 that looks like an h5</h2>
  <h2 class="fsa-text--h6">h2 that looks like an h6</h2>
</div>

## Paragraphs

### Default

```html
<p><a href="https://www.nps.gov/yose/index.htm">Yosemite National Park</a> is set within California’s <a href="https://en.wikipedia.org/wiki/Sierra_Nevada_(U.S.)">Sierra Nevada</a> mountains. </p>
<p>It’s famed for its <em>giant</em>, <em>ancient sequoias</em>, and for <strong>Tunnel View</strong>, the iconic vista of towering <strong>Bridalveil Fall</strong> and the granite cliffs of <strong>El Capitan</strong> and <strong>Half Dome</strong>.</p>
```

<div class="ds-preview">
  <p><a href="https://www.nps.gov/yose/index.htm">Yosemite National Park</a> is set within California’s <a href="https://en.wikipedia.org/wiki/Sierra_Nevada_(U.S.)">Sierra Nevada</a> mountains. </p>
  <p>It’s famed for its <em>giant</em>, <em>ancient sequoias</em>, and for <strong>Tunnel View</strong>, the iconic vista of towering <strong>Bridalveil Fall</strong> and the granite cliffs of <strong>El Capitan</strong> and <strong>Half Dome</strong>.</p>
</div>

### Lead

```html
<p class="fsa-text--lead">Clear and <strong>consistent</strong> headings, highly legible body paragraphs, clear labels, and easy-to-use input fields.</p>
```
<div class="ds-preview">
  <p class="fsa-text--lead">Clear and <strong>consistent</strong> headings, highly legible body paragraphs, clear labels, and easy-to-use input fields.</p>
</div>

## Lists

### Unordered List (bullet)

```html
<ul>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```
<div class="ds-preview">
  <ul>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>

### Ordered List (numbered)

```html
<ol>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```
<div class="ds-preview">
  <ol>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ol>
</div>

### Inline

```html
<ul class="fsa-list--inline">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```
<div class="ds-preview">
  <ul class="fsa-list--inline">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>

### Definition List

```html
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
```
<div class="ds-preview">
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
</div>

### Unstyled

#### SASS Mixin

Resets `<ul>` or `<ol>` elements by stripping all style properties, e.g. bullets, numbers, margins, etc.

```scss
// SASS
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


#### HTML

If SASS is not an option, these CSS Utilities will reset list styles.

##### Unordered list

```html
<ul class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```
<div class="ds-preview">
  <ul class="fsa-list--unstyled">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>

##### Ordered list

```html
<ol class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```
<div class="ds-preview">
  <ol class="fsa-list--unstyled">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ol>
</div>

## Typographical Scale

Beyond the default styling for each HTML element, font properties can be customized via HTML or CSS (via SASS).

### HTML

With a `fsa-text-size--[size]` selector - where `[size]` is one of `0-7`.

```html
<!-- HTML -->
<element class="fsa-text-size--*">Yosemite National Park is set...</element>
```
<div class="ds-preview">
  <div class="fsa-ellipsis fsa-text-size--0">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--1">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--2">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--3">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--4">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--5">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--6">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--7">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
</div>

### CSS (via SASS)

With a <a href="http://sass-lang.com/">SASS</a> mixin, `@include font-size([size]);` - where `[size]` is one of `0-7`.

```scss
.your-custom-selector { @include font-size([size]); }
```

## Related Resources

 * [Fonts and Typography Guide]({{ site.baseurl }}guides/applications/fonts/)

<!-- ## Related Resources

(Content TBD) -->
