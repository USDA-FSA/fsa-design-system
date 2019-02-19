---
layout: page
parent: "Utilities"
title: "Floats"
intro: "Selectively adjust floating behavior of elements or components"
jump_menu: true
---

## Variations

```html
<el class="fsa-float--[direction]">...</el>
```

`[direction]` is one of `left`, `right`, `none`.

### Left

```html
<el class="fsa-float--left">...</el>
```

<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left"><strong>I'm floating to left</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio harum provident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>


### Right

```html
<el class="fsa-float--right">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--right"><strong>I'm floating to right</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio harum provident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>

### None

Effectively an override.

```html
<el class="fsa-float--none">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left fsa-float--none"><strong>I'm not floating.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio harum provident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>

## Containing Floats

aka "clearfix"

```html
<el class="fsa-clearfix">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left"><strong>I'm floating to left</strong></p>
  <p class="docs__utilities__demo-item fsa-float--right"><strong>I'm floating to right</strong></p>
</div>
<p>The above container has been cleared</p>

## Clearing Floats

```html
<el class="fsa-clear">...</el>
```
<div class="docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left"><strong>I'm floating to left</strong></p>
  <p class="docs__utilities__demo-item fsa-clear"><strong>I've been cleared</strong></p>
</div>

## Responsive

Adjust floating presentation per media query breakpoint.

<div class="fsa-hide@l">
  <div class="fsa-alert fsa-alert--info fsa-alert--no-icon" role="alert">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text">View this page on a large screen to view complete Responsive Web Design options.</p>
    </div>
  </div>
</div>

<div class="docs__rwd-demo-block">
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_float" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
    <button data-behavior="toggle-rwd-size" data-target="rwd-demo_float" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
    <button data-behavior="toggle-rwd-size" data-target="rwd-demo_float" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
    <button data-behavior="toggle-rwd-size" data-target="rwd-demo_float" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__float.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_float">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__float.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>
