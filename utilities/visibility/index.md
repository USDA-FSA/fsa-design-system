---
layout: page
parent: "Utilities"
title: "Visibility"
intro: "Selectively show or hide elements or blocks at a variety of screen sizes (i.e. Media Query breakpoints)."
jump_menu: true
suppress_code_toggle: true
---

<div class="fsa-hide@xl">
  <div class="fsa-alert fsa-alert--warning" role="alert">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text">View this page on a larger screen to view complete Responsive Web Design options.</p>
    </div>
  </div>
</div>

## Show at minimum screen size

<div class="fsa-show@xl">
  <p class="docs__code-sample"><code>class="fsa-show@<strong>[size]</strong>"</code>. Show when <em>at least</em> [size], where [size] is one of <code>s</code>, <code>m</code>, <code>l</code>, or <code>xl</code>. </p>
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-min-screen-size" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-min-screen-size" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-min-screen-size" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-min-screen-size" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--show-min-screen-size.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_vis--show-min-screen-size">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--show-min-screen-size.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Show at only specific screen size

<div class="fsa-show@xl">
  <p><code>class="fsa-show@<strong>[size]-only</strong>"</code>. Show <em>only</em> at [size], where [size] is one of <code>s</code>, <code>m</code>, <code>l</code>, or <code>xl</code>. </p>
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-at-screen-size" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-at-screen-size" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-at-screen-size" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--show-at-screen-size" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--min-screen-size.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_vis--show-at-screen-size">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--min-screen-size.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Hide at minimum screen size

<div class="fsa-show@xl">
  <p><code>class="fsa-hide@<strong>[size]</strong>"</code>. Hide when <em>at least</em> [size], where [size] is one of <code>s</code>, <code>m</code>, or <code>l</code>. </p>
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-min-screen-size" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-min-screen-size" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-min-screen-size" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-min-screen-size" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--hide-min-screen-size.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_vis--hide-min-screen-size">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--hide-min-screen-size.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Hide at specific screen size

<div class="fsa-show@xl">
  <p><code>class="fsa-hide@<strong>[size]-only</strong>"</code>. Hide <em>only</em> at [size], where [size] is one of <code>xs</code>, <code>s</code>, <code>m</code>, <code>l</code>, or <code>xl</code>.</p>
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-at-screen-size" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-at-screen-size" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-at-screen-size" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_vis--hide-at-screen-size" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--hide-at-screen-size.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_vis--hide-at-screen-size">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--hide-at-screen-size.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>
