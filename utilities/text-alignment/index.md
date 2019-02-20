---
layout: page
parent: "Utilities"
title: "Text Alignment"
intro: "Selectively align blocks of text."
jump_menu: true
---

```html
<el class="fsa-text-size--[direction]">...</el>
```

Where `direction` is one of `left`, `center`, or `right`

## Variations

### Right

```html
<el class="fsa-text-align--right">...</el>
```
<div class="docs__utilities__demo">
  <p class="fsa-text-align--right">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

### Centered

```html
<el class="fsa-text-align--center">...</el>
```
<div class="docs__utilities__demo">
  <p class="fsa-text-align--center">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

### Left

```html
<el class="fsa-text-align--left">...</el>
```
<div class="docs__utilities__demo">
  <p class="fsa-text-align--left">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

## Responsive

Adjust text alignment per media query breakpoint.

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-align" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
    <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-align" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
    <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-align" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
    <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-align" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__text-align.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_text-align">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__text-align.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Related Utilities

* [Text Size]({{ site.baseurl }}utilities/text-alignment/) to selectively adjust text size.
* [Text Headers]({{ site.baseurl }}utilities/text-headers/) to selectively adjust header elements (e.g. `h1` - `h6`).
