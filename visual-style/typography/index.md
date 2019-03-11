---
layout: page
parent: "Visual Style"
title: "Typography"
intro: "Clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. "
jump_menu: true
---

## Typeface

**Source Sans Pro** is an open-source sans-serif typeface created for **legibility in UI design**. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/3@l">
    <h4 class="docs__sub_style">Default</h4>
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
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/3@l">
    <h4 class="docs__sub_style">Light</h4>
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
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/3@l">
    <h4 class="docs__sub_style">Bold</h4>
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

### Fallback

Should the Web Font, Source Sans Pro, fail to load for any reason.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/3@l">
    <div class="docs__font docs__font--helvetica">
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

<div class="ds-preview">
  <h1>h1 header</h1>
  <h2>h2 header</h2>
  <h3>h3 header</h3>
  <h4>h4 header</h4>
  <h5>h5 header</h5>
  <h6>h6 header</h6>
</div>
```html
<h1>h1 header</h1>
<h2>h2 header</h2>
<h3>h3 header</h3>
<h4>h4 header</h4>
<h5>h5 header</h5>
<h6>h6 header</h6>
```

## Paragraphs

### Default

<div class="ds-preview">
  <p><a href="https://www.nps.gov/yose/index.htm">Yosemite National Park</a> is set within California’s <a href="https://en.wikipedia.org/wiki/Sierra_Nevada_(U.S.)">Sierra Nevada</a> mountains. </p>
  <p>It’s famed for its <em>giant</em>, <em>ancient sequoias</em>, and for <strong>Tunnel View</strong>, the iconic vista of towering <strong>Bridalveil Fall</strong> and the granite cliffs of <strong>El Capitan</strong> and <strong>Half Dome</strong>.</p>
</div>
```html
<p><a href="https://www.nps.gov/yose/index.htm">Yosemite National Park</a> is set within California’s <a href="https://en.wikipedia.org/wiki/Sierra_Nevada_(U.S.)">Sierra Nevada</a> mountains. </p>
<p>It’s famed for its <em>giant</em>, <em>ancient sequoias</em>, and for <strong>Tunnel View</strong>, the iconic vista of towering <strong>Bridalveil Fall</strong> and the granite cliffs of <strong>El Capitan</strong> and <strong>Half Dome</strong>.</p>
```

### Lead

<div class="ds-preview">
  <p class="fsa-text--lead">Lorem ipsum dolor <strong>bold text</strong> dignissim brevitas vindico nisl. <a href="link-to-nowhere.html">Inline link</a> olim aliquip tego ideo, iustum validus regula. Enim conventio praesent, duis hendrerit consequat ingenium neque et saepius suscipere velit. Ideo enim mara facilisis ad, validus abluo eligo odio.</p>
</div>
```html
<p class="fsa-text--lead">Lorem ipsum dolor <strong>bold text</strong> dignissim brevitas vindico nisl. <a href="link-to-nowhere.html">Inline link</a> olim aliquip tego ideo, iustum validus regula. Enim conventio praesent, duis hendrerit consequat ingenium neque et saepius suscipere velit. Ideo enim mara facilisis ad, validus abluo eligo odio.</p>

```

## Lists

### Unordered List (bullet)

<div class="ds-preview">
  <ul>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

### Ordered List (numbered)

<div class="ds-preview">
  <ol>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ol>
</div>
```html
<ol>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```

### Inline List

<div class="ds-preview">
  <ul class="fsa-list--inline">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul class="fsa-list--inline">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

### Definition List

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

### Unstyled

#### SASS Mixin

Resets `<ul>` or `<ol>` elements by stripping all style properties, e.g. bullets, numbers, margins, etc.

<div class="ds-preview">
  <ul class="your-custom-list">
    <li class="your-custom-list__item">List item one</li>
    <li class="your-custom-list__item">List item two</li>
    <li class="your-custom-list__item">List item three</li>
  </ul>
</div>
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

#### HTML

If SASS is not an option, these CSS Utilities will reset list styles.

##### Unordered list

<div class="ds-preview">
  <ul class="fsa-list--unstyled">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

##### Ordered list

<div class="ds-preview">
  <ol class="fsa-list--unstyled">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ol>
</div>
```html
<ol class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```

## Text Elements
<div class="ds-preview">
  <p>The <a href="#link-to-nowhere">a element</a> and <a class="usa-external_link" href="http://www.kansascity.com" target="_blank">external a element</a></p>
  <p>The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
  <p>The <b>b element</b> example, though you probably want to use <strong>strong</strong></p>
  <p>The <cite>cite element</cite> example</p>
  <p>The <code>code element</code> example</p>
  <p>The <del>del element</del> example</p>
  <p>The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples</p>
  <p>The <em>em element</em> example</p>
  <p>The <i>i element</i> example, though you probably want to use <em>em</em></p>
  <p>The <ins>ins element</ins> example</p>
  <p>The <kbd>kbd element</kbd> example</p>
  <p>The <mark>mark element</mark> example</p>
  <p>The <q>q element</q> example</p>
  <p>The <q>q element <q>inside</q> a q element</q> example</p>
  <p>The <s>s element</s> example</p>
  <p>The <samp>samp element</samp> example</p>
  <p>The <small>small element</small> example</p>
  <p>The <span>span element</span> example</p>
  <p>The <strong>strong element</strong> example</p>
  <p>The <sub>sub element</sub> example</p>
  <p>The <sup>sup element</sup> example</p>
  <p>The <time datetime="2005-05-15 19:00">time element</time> example</p>
  <p>The <u>u element</u> example</p>
  <p>The <var>var element</var> example</p>
</div>
```html
<a href="#link-to-nowhere">anchor element</a>
<a class="usa-external_link" href="http://www.kansascity.com" target="_blank">external anchor</a>
<abbr title="Abbreviation">abbr</abbr>
<b>b element</b>
<cite>cite element</cite>
<code>code element</code>
<del>del element</del>
<dfn title="Title text">dfn element</dfn>
<em>em element</em>
<i>i element</i>
<ins>ins element</ins>
<kbd>kbd element</kbd>
<mark>mark element</mark>
<q>q element</q>
<q>q element <q>inside</q> a q element</q>
<s>s element</s>
<samp>samp element</samp>
<small>small element</small>
<span>span element</span>
<strong>strong element</strong>
<sub>sub element</sub>
<sup>sup element</sup>
<time datetime="2005-05-15 19:00">time element</time>
<u>u element</u>
<var>var element</var>
```

## Typographical Scale

Most HTML elements and components immediately have an assigned font size, following a deliberate typographical scale. Where appropriate or necessary overriding text size can be done through available **CSS Utilities**.

* **[Utilities > Text Headers]({{ site.baseurl }}utilities/text-headers/)**: `<h1>` – `<h6>` elements have an inherent style, their **semantic level** can vary depending on its context. These CSS Utilities enable you to retain its structural and semantic level while maintaining a meaningful **visual hierarchy**.
* **[Utilities > Text Size]({{ site.baseurl }}utilities/text-size/)** A complete typographical scale available for selectively overriding text size for non-`hN` elements, e.g. `<span>`, `<p>`, etc.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <div class="ds-preview">
      <h2 class="fsa-text--h1">h2 that looks like an h1</h2>
      <h2 class="fsa-text--h2">h2 that looks like an h2</h2>
      <h2 class="fsa-text--h3">h2 that looks like an h3</h2>
      <h2 class="fsa-text--h4">h2 that looks like an h4</h2>
      <h2 class="fsa-text--h5">h2 that looks like an h5</h2>
      <h2 class="fsa-text--h6">h2 that looks like an h6</h2>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m">
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
  </div>
</div>




### CSS (via SASS)

With a <a href="http://sass-lang.com/">SASS</a> mixin, `@include font-size([size]);` - where `[size]` is one of `0-7`.

```scss
.your-custom-selector { @include font-size([size]); }
```

## Related Resources

* [Utilities > Text Size]({{ site.baseurl }}utilities/text-size/)
* [Utilities > Text Alignment]({{ site.baseurl }}utilities/text-alignment/)
* [Utilities > Text Headers]({{ site.baseurl }}utilities/text-headers/)
* [Fonts and Typography Guide]({{ site.baseurl }}guides/applications/fonts/)
