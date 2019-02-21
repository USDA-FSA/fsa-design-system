---
layout: page
parent: "Utilities"
title: "Text Headers"
intro: "Selectively adjust header elements."
jump_menu: true
suppress_code_toggle: true
---

While `h1` – `h6` elements have a hierarchical style assigned, sometimes the heading level may vary depending on its context. These CSS Utilities below enable you to maintain the visual hierarchy independent from the structural, semantic HTML heading level.

```html
<hN class="fsa-text--[size]">...</hN>
```

Where `size` is one of `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`.

## Variations

Each of the below examples demonstrate how the visual presentation of a second-level heading (`<h2>`) has been overridden.

<div class="fsa-m-b--m">
  <code> class="fsa-text<strong>--h1</strong>"</code>
  <div class="docs__utilities__demo"><h2 class="fsa-text--h1">h2 that looks like an h1</h2></div>
</div>

<div class="fsa-m-b--m">
  <code> class="fsa-text<strong>--h2</strong>"</code>
  <div class="docs__utilities__demo"><h2 class="fsa-text--h2">h2 that looks like an h2</h2></div>
</div>

<div class="fsa-m-b--m">
  <code> class="fsa-text<strong>--h3</strong>"</code>
  <div class="docs__utilities__demo"><h2 class="fsa-text--h3">h2 that looks like an h3</h2></div>
</div>

<div class="fsa-m-b--m">
  <code> class="fsa-text<strong>--h4</strong>"</code>
  <div class="docs__utilities__demo"><h2 class="fsa-text--h4">h2 that looks like an h4</h2></div>
</div>

<div class="fsa-m-b--m">
  <code> class="fsa-text<strong>--h5</strong>"</code>
  <div class="docs__utilities__demo"><h2 class="fsa-text--h5">h2 that looks like an h5</h2></div>
</div>

<div class="fsa-m-b--m">
  <code> class="fsa-text<strong>--h6</strong>"</code>
  <div class="docs__utilities__demo"><h2 class="fsa-text--h6">h2 that looks like an h6</h2></div>
</div>

## Responsive

Adjust <code>h<em>n</em></code> element text size per media query breakpoint.

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-headers" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-headers" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-headers" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-headers" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__text-headers.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_text-headers">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__text-headers.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Related Utilities

* [Text Size]({{ site.baseurl }}utilities/text-alignment/) to selectively adjust text size.
* [Text Alignment]({{ site.baseurl }}utilities/text-alignment/) to selectively align blocks of text.
