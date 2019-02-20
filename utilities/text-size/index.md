---
layout: page
parent: "Utilities"
title: "Text Size"
intro: "Selectively adjust text size."
jump_menu: true
---

Text Size utility classes follow's the [Visual Style's vertical rythym]({{ site.baseurl }}visual-style/typography/).

Most elements - e.g. `p`, `h1-h6`, etc - have an assigned size; thus, these text size overrides would rarely be used when they are contextually appropriate.

```html
<el class="fsa-text-size--[size]">...</el>
```

Where `size` is one of `0` - `7`

## Variations

<p class="fsa-ellipsis fsa-text-size--0">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--1">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--2">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--3">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--4">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--5">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--6">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--7">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

## Responsive

Text size can be adjusted per media query breakpoint.

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <p><code>class="fsa-text-size<strong>--[size]@[breakpoint]</strong>"</code>, where <code>size</code> is one of <code>0</code> - <code>7</code>, and <code>breakpoint</code> is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code></p>
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-size" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-size" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-size" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_text-size" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__text-size.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_text-size">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__text-size.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Related Utilities

* [Text Alignment]({{ site.baseurl }}utilities/text-alignment/) to selectively align blocks of text.
* [Text Headers]({{ site.baseurl }}utilities/text-headers/) to selectively adjust header elements (e.g. `h1` - `h6`).
