---
layout: page
parent: "Visual Style"
title: "Typography"
intro: "Clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. "
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
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

{% capture snippet %}
<h1>h1 header</h1>
<h2>h2 header</h2>
<h3>h3 header</h3>
<h4>h4 header</h4>
<h5>h5 header</h5>
<h6>h6 header</h6>
{% endcapture %}

{% include preview-and-snippet.html %}

### Customizing Heading Size

All `h1`-`h6` elements have a deliberate size assigned to establish a predictable system of hierarchy. Occasionally the heading level may vary depending on its context, [Text Header]({{ site.baseurl }}utilities/#text-headers) utilities are available to override its visual appearance while retaining its semantic meaning.

## Paragraphs

### Default

{% capture snippet %}
<p><a href="https://www.nps.gov/yose/index.htm">Yosemite National Park</a> is set within California’s <a href="https://en.wikipedia.org/wiki/Sierra_Nevada_(U.S.)">Sierra Nevada</a> mountains. </p>
<p>It’s famed for its <em>giant</em>, <em>ancient sequoias</em>, and for <strong>Tunnel View</strong>, the iconic vista of towering <strong>Bridalveil Fall</strong> and the granite cliffs of <strong>El Capitan</strong> and <strong>Half Dome</strong>.</p>
{% endcapture %}

{% include preview-and-snippet.html %}

### Lead

{% capture snippet %}
<p class="fsa-text--lead">Lorem ipsum dolor <strong>bold text</strong> dignissim brevitas vindico nisl. <a href="link-to-nowhere.html">Inline link</a> olim aliquip tego ideo, iustum validus regula. Enim conventio praesent, duis hendrerit consequat ingenium neque et saepius suscipere velit. Ideo enim mara facilisis ad, validus abluo eligo odio.</p>
{% endcapture %}

{% include preview-and-snippet.html %}

### Customizing Font Size

Most elements and components have a deliberate size assigned to them, Utilities are available to apply [custom text size]({{ site.baseurl }}utilities/#text-size) where appropriate.

## Text Elements

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

## Typographical Scale

{% capture snippet %}
<div class="fsa-ellipsis fsa-text-size--0">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--1">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--2">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--3">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--4">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--5">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--6">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
<div class="fsa-ellipsis fsa-text-size--7">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Customizing Font Size

### With CSS Selectors

Most elements and components have a deliberate size assigned to them, Utilities are available to apply [custom text size]({{ site.baseurl }}utilities/#text-size) where appropriate.

### With a CSS Preprocessor (Sass)

With a <a href="http://sass-lang.com/">Sass</a> mixin, `@include font-size([size]);` - where `[size]` is one of `0-7`.

```scss
.your-custom-selector { @include font-size([size]); }
```

## Related Resources

* [Utilities > Text Size]({{ site.baseurl }}utilities/#text-size)
* [Utilities > Text Headers]({{ site.baseurl }}utilities/#text-headers)
* [Utilities > Text Alignment]({{ site.baseurl }}utilities/#text-alignment)
* [Fonts and Typography Guide]({{ site.baseurl }}guides/applications/fonts)
