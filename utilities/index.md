---
layout: page
title: "Utilities"
intro: "Single-purpose styles typically mapped to a single CSS property and value (e.g. margin)."
jump_menu: true
suppress_code_toggle: true
---

Utilities &ndash; also known as “trumps,” “helper classes,” or “alterations,” &ndash; are high-specificity selectors for making very targeted alterations to existing elements or components.

They are most useful when you want to override a default value, in one-off situations, or even to explore design ideas; though be aware that they often use an `!important` flag in the CSS to ensure the desired alteration is achieved by superceding an element's default style.

### Sample use case

An `h2` element has a top margin you'd like to minimize.

```html
<!-- Before  -->
<h2>Second level heading</h2>
```
<div class="ds-preview">
  <!-- Before  -->
  <p>Modi, voluptatibus nostrum itaque cupiditate nemo magnam aliquam fuga harum suscipit architecto alias. Nobis aliquam officia voluptatibus. </p>
  <h2>Second level heading</h2>
  <p>Voluptatem cupiditate excepturi quas sequi assumenda?</p>
</div>

Apply the `fsa-m-t--m` utilty class.

```html
<!-- After  -->
<h2 class="fsa-m-t--m">Second level heading</h2>
```
<div class="ds-preview">
  <!-- After  -->
  <p>Modi, voluptatibus nostrum itaque cupiditate nemo magnam aliquam fuga harum suscipit architecto alias. Nobis aliquam officia voluptatibus. </p>
  <h2 class="fsa-m-t--m">Second level heading</h2>
  <p>Voluptatem cupiditate excepturi quas sequi assumenda?</p>
</div>

## Margins

<p class="fsa-text--lead">Selectively manipulate margins around an element or component. </p>

Spacing values pointedly subscribe to the Design System's [Sizes and Spaces]({{ site.baseurl }}visual-style/size-and-space/).

```html
<element class="fsa-m-[side]--[size]">...</element>
```
* `[side]` is one of `t` (top), `r` (right), `b` (bottom), `l` (left), or omitted (all 4 sides).
* `[size]` is one of `none`, `xxs`, `xs`, `s`, `m`, `l`, or `xl`.

### Variations

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h4>Top</h4>
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
    <h4>Right</h4>
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
    <h4>Bottom</h4>
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
    <h4>Left</h4>
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

#### All Sides

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

### Responsive

Margins can be adjusted per media query breakpoint.

{% include alert.rwd-rendering.html %}

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

## Padding

<p class="fsa-text--lead">Selectively manipulate padding within an element or component.</p>

Spacing values pointedly subscribe to the Design System's [Sizes and Spaces]({{ site.baseurl }}visual-style/size-and-space/).

```html
<element class="fsa-p-[side]--[size]">...</element>
```
* `[side]` is one of `t` (top), `r` (right), `b` (bottom), `l` (left), or omitted (all 4 sides).
* `[size]` is one of `none`, `xxs`, `xs`, `s`, `m`, `l`, or `xl`.

### Variations

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/4@m">
    <h4>Top</h4>
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
    <h4>Right</h4>
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
    <h4>Bottom</h4>
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
    <h4>Left</h4>
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

#### All Sides

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

### Responsive

{% include alert.rwd-rendering.html %}

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

## Floats

<p class="fsa-text--lead">Selectively adjust floating behavior of elements or components.</p>

### Variations

```html
<el class="fsa-float--[direction]">...</el>
```

`[direction]` is one of `left`, `right`, `none`.

#### Left

```html
<el class="fsa-float--left">...</el>
```

<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left"><strong>I'm floating to left</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio harum provident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>


#### Right

```html
<el class="fsa-float--right">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--right"><strong>I'm floating to right</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio harum provident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>

#### None

Effectively an override.

```html
<el class="fsa-float--none">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left fsa-float--none"><strong>I'm not floating.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio harum provident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>

### Containing Floats

aka "clearfix"

```html
<el class="fsa-clearfix">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left"><strong>I'm floating to left</strong></p>
  <p class="docs__utilities__demo-item fsa-float--right"><strong>I'm floating to right</strong></p>
</div>
<p>The above container has been cleared</p>

### Clearing Floats

```html
<el class="fsa-clear">...</el>
```
<div class="docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left"><strong>I'm floating to left</strong></p>
  <p class="docs__utilities__demo-item fsa-clear"><strong>I've been cleared</strong></p>
</div>

### Responsive

Adjust floating presentation per media query breakpoint.

{% include alert.rwd-rendering.html %}

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

## Text size

<p class="fsa-text--lead">Selectively adjust text size. </p>

Text Size utility classes follow's the system's **vertical rythym** &ndash; [Typography]({{ site.baseurl }}visual-style/typography/) and [Size and Space]({{ site.baseurl }}visual-style/size-and-space/) working in concert for a cohesive look and feel.

**Note** to override text size of `h1-h6` elements, refer to [Text Headers](#text-headers).

```html
<el class="fsa-text-size--[size]">...</el>
```

Where `size` is one of `0` - `7`

### Variations

<p class="fsa-ellipsis fsa-text-size--0">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--1">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--2">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--3">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--4">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--5">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--6">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
<p class="fsa-ellipsis fsa-text-size--7">National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

### Responsive

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

## Text Alignment

<p class="fsa-text--lead">Selectively align blocks of text.</p>

```html
<el class="fsa-text-size--[direction]">...</el>
```

Where `direction` is one of `left`, `center`, or `right`

### Variations

#### Right

```html
<el class="fsa-text-align--right">...</el>
```
<div class="docs__utilities__demo">
  <p class="fsa-text-align--right">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

#### Centered

```html
<el class="fsa-text-align--center">...</el>
```
<div class="docs__utilities__demo">
  <p class="fsa-text-align--center">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

#### Left

```html
<el class="fsa-text-align--left">...</el>
```
<div class="docs__utilities__demo">
  <p class="fsa-text-align--left">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

### Responsive

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

## Text Headers

<p class="fsa-text--lead">Selectively adjust header elements. </p>

While `h1` – `h6` elements have a hierarchical style assigned, sometimes the heading level may vary depending on its context. These CSS Utilities below enable you to maintain the visual hierarchy independent from the structural, semantic HTML heading level.

```html
<hN class="fsa-text--[size]">...</hN>
```

Where `size` is one of `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`.

### Variations

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

### Responsive

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

## Visibility

<p class="fsa-text--lead">Selectively show or hide elements or blocks at a variety of screen sizes (i.e. Media Query breakpoints).</p>

<div class="fsa-hide@xl">
  <div class="fsa-alert fsa-alert--warning" role="alert">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text">View this page on a larger screen to view complete Responsive Web Design options.</p>
    </div>
  </div>
</div>

### Show at minimum screen size

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

### Show at only specific screen size

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

### Hide at minimum screen size

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

### Hide at specific screen size

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
