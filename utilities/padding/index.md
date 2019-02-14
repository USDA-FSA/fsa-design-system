---
layout: page
parent: "Utilities"
title: "Padding"
intro: "Selectively manipulate padding within an element or component"
jump_menu: true
---

Spacing values pointedly subscribe to the Design System's [Sizes and Spaces]({{ site.baseurl }}visual-style/size-and-space/).

```html
<element class="fsa-p-[side]--[size]">...</element>
```
* `[side]` is one of `t` (top), `r` (right), `b` (bottom), `l` (left), or omitted (all 4 sides).
* `[size]` is one of `none`, `xxs`, `xs`, `s`, `m`, `l`, or `xl`.

## Variations

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Top</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--none"><code>fsa-p-t--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--xxs"><code>fsa-p-t--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--xs"><code>fsa-p-t--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--s"><code>fsa-p-t--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--m"><code>fsa-p-t--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--l"><code>fsa-p-t--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-t--xl"><code>fsa-p-t--xl</code></div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Right</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--none"><code>fsa-p-r--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--xxs"><code>fsa-p-r--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--xs"><code>fsa-p-r--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--s"><code>fsa-p-r--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--m"><code>fsa-p-r--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--l"><code>fsa-p-r--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-r--xl"><code>fsa-p-r--xl</code></div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Bottom</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--none"><code>fsa-p-b--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--xxs"><code>fsa-p-b--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--xs"><code>fsa-p-b--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--s"><code>fsa-p-b--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--m"><code>fsa-p-b--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--l"><code>fsa-p-b--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-b--xl"><code>fsa-p-b--xl</code></div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h3>Left</h3>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--none"><code>fsa-p-l--none</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--xxs"><code>fsa-p-l--xxs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--xs"><code>fsa-p-l--xs</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--s"><code>fsa-p-l--s</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--m"><code>fsa-p-l--m</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--l"><code>fsa-p-l--l</code></div>
    </div>
    <div class="docs__utilities__demo">
      <div class="docs__utilities__demo-item fsa-p-l--xl"><code>fsa-p-l--xl</code></div>
    </div>
  </div>
</div>

### All Sides

<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--none"><code>fsa-p--none</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--xxs"><code>fsa-p--xxs</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--xs"><code>fsa-p--xs</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--s"><code>fsa-p--s</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--m"><code>fsa-p--m</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--l"><code>fsa-p--l</code></div>
</div>
<div class="docs__utilities__demo">
  <div class="docs__utilities__demo-item fsa-p--xl"><code>fsa-p--xl</code></div>
</div>

## Responsive

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
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_padding" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_padding" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_padding" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_padding" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__padding.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_padding">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__padding.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>
