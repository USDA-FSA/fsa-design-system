---
layout: page
parent: "Utilities"
title: "Margins"
intro: "Selectively manipulate margins around an element or component"
jump_menu: true
---

Spacing values pointedly subscribe to the Design System's [Sizes and Spaces]({{ site.baseurl }}visual-style/size-and-space/).

```html
<element class="fsa-m-[side]--[size]">...</element>
```
* `[side]` is one of `t` (top), `r` (right), `b` (bottom), `l` (left), or omitted (all 4 sides).
* `[size]` is one of `none`, `xxs`, `xs`, `s`, `m`, `l`, or `xl`.

## Variations

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Top</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--none"><code>fsa-m-t--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--xxs"><code>fsa-m-t--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--xs"><code>fsa-m-t--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--s"><code>fsa-m-t--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--m"><code>fsa-m-t--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--l"><code>fsa-m-t--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-t--xl"><code>fsa-m-t--xl</code></div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Right</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--none"><code>fsa-m-r--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--xxs"><code>fsa-m-r--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--xs"><code>fsa-m-r--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--s"><code>fsa-m-r--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--m"><code>fsa-m-r--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--l"><code>fsa-m-r--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-r--xl"><code>fsa-m-r--xl</code></div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Bottom</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--none"><code>fsa-m-b--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--xxs"><code>fsa-m-b--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--xs"><code>fsa-m-b--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--s"><code>fsa-m-b--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--m"><code>fsa-m-b--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--l"><code>fsa-m-b--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-b--xl"><code>fsa-m-b--xl</code></div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Left</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--none"><code>fsa-m-l--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--xxs"><code>fsa-m-l--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--xs"><code>fsa-m-l--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--s"><code>fsa-m-l--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--m"><code>fsa-m-l--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--l"><code>fsa-m-l--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-m-l--xl"><code>fsa-m-l--xl</code></div>
    </div>
  </div>
</div>

### All Sides

<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--none"><code>fsa-m--none</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--xxs"><code>fsa-m--xxs</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--xs"><code>fsa-m--xs</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--s"><code>fsa-m--s</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--m"><code>fsa-m--m</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--l"><code>fsa-m--l</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-m--xl"><code>fsa-m--xl</code></div>
</div>

## Responsive

Margins can be adjusted per media query breakpoint.

<div class="fsa-hide@l">
  <div class="fsa-alert fsa-alert--info fsa-alert--no-icon" role="alert">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text">View this page on a large screen to view complete Responsive Web Design options.</p>
    </div>
  </div>
</div>
<div class="docs__rwd-demo-block">
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_margin" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_margin" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_margin" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_margin" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__margins.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_margin">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__margins.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>
