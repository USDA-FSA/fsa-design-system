---
layout: page
parent: "Layout"
title: "Box"
shortName: "component__box"
intro: ""
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-box">
    <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
  </div>
</div>

```html
<element class="fsa-box">...</element>
```

## Variations

While these modifiers are specific to `.fsa-box`, other CSS Utilities and Helpers (e.g. [Padding](#padding)) can be combined for further flexibility.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-0</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-0">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-1</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-1">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-2</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-2">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-3</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-3">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-0</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-0">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-1</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-1">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-2</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-2">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-3</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-3">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-0</strong>"</code></p>
    <div class="fsa-box fsa-box--br-0">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-1</strong>"</code></p>
    <div class="fsa-box fsa-box--br-1">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-2</strong>"</code></p>
    <div class="fsa-box fsa-box--br-2">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-3</strong>"</code></p>
    <div class="fsa-box fsa-box--br-3">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
  </div>
</div>

## Responsive

{% include alert.rwd-rendering.html %}

Selectively apply the Box style to an element at each Media Query breakpoint, where `breakpoint` is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code>.

```html
<element class="fsa-box@[breakpoint]">...</element>
```

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait"><span class="sr-only">Portrait</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape"><span class="sr-only">Landscape</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__box.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_box">
      <iframe title="Responsive Demo: box" src="http://usda-fsa.github.io/fsa-style/demo/rwd__box.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

Selectively override several style properties of `.fsa-box` at each Media Query breakpoint, where `property` is one of <code title="background-color">bg</code>, <code title="border-width">bw</code>, or <code title="border-radius">br</code>, and where <code>breakpoint</code> is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code>

```html
<element class="fsa-box fsa-box[property]@[breakpoint]">...</element>
```

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box-modifiers" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait"><span class="sr-only">Portrait</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box-modifiers" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape"><span class="sr-only">Landscape</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box-modifiers" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_box-modifiers" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__box-modifiers.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_box-modifiers">
      <iframe title="Responsive Demo: box modifiers" src="http://usda-fsa.github.io/fsa-style/demo/rwd__box-modifiers.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

<!-- ## Usage

### Use When

asdf

### Don't Use

qwer

## General Guidance

* asdf
* asdf -->