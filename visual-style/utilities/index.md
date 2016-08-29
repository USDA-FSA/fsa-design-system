---
layout: page
parent: "Visual Style"
title: "Utilities"
intro: "Utilities are single-purpose immutable styles that can be appended to elements."
jump_menu: true
---

[TODO]: more documentation explaining the role of these

Spacing values for margins and padding pointedly subscribe to the Design System's [Sizes and Spaces]({{ site.baseurl }}visual-style/size-and-space/).

## Margins

```html
<element class="fsa-m-[side]--[size]">...</element>
```
* `[side]` is one of `t` (top), `r` (right), `b` (bottom), `l` (left), or omitted (all 4 sides).
* `[size]` is one of `none`, `xxs`, `xs`, `s`, `m`, `l`, or `xl`.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
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
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
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
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
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
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
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

### All
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

(TBD)

## Padding

```html
<element class="fsa-p-[side]--[size]">...</element>
```
* `[side]` is one of `t` (top), `r` (right), `b` (bottom), `l` (left), or omitted (all 4 sides).
* `[size]` is one of `none`, `xxs`, `xs`, `s`, `m`, `l`, or `xl`.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
    <h4 class="docs__sub_style">Top</h4>
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
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
    <h4 class="docs__sub_style">Right</h4>
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
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
    <h4 class="docs__sub_style">Bottom</h4>
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
  <div class="fsa-grid__1 fsa-grid__1/2@sm fsa-grid__1/4@m">
    <h4 class="docs__sub_style">Left</h4>
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

### All

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

(TBD)

## Font Face

* `[option]` is one of `sans`, `sans-light`, `sans-bold`, `serif`, `serif-light`, `serif-bold`.

```html
<element class="fsa-font--[option]">...</element>
```

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <p class="docs__code-sample"><code>class="fsa-font--sans"</code></p>
      <p class="fsa-font--sans">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

      <p class="docs__code-sample"><code>class="fsa-font--sans-light"</code></p>
      <p class="fsa-font--sans-light">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

      <p class="docs__code-sample"><code>class="fsa-font--sans-bold"</code></p>
      <p class="fsa-font--sans-bold">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <p class="docs__code-sample"><code>class="fsa-font--serif"</code></p>
      <p class="fsa-font--serif">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

      <p class="docs__code-sample"><code>class="fsa-font--serif-light"</code></p>
      <p class="fsa-font--serif-light">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>

      <p class="docs__code-sample"><code>class="fsa-font--serif-bold"</code></p>
      <p class="fsa-font--serif-bold">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
    </div>
  </div>
</div>


### Responsive

(TBD)

## Text Size

`[size]` is one of `0` - `7`

```html
<element class="fsa-text-size--[size]">...</element>
```
<div class="ds-preview">
  <p class="fsa-ellipsis fsa-text-size--0">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--1">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--2">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--3">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--4">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--5">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--6">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-ellipsis fsa-text-size--7">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>


### Responsive

(TBD)

## Text Alignment

`[direction]` is one of `right`, `center`, `left`.

```html
<element class="fsa-text-align--[direction]">...</element>
```
<div class="ds-preview">
  <p class="fsa-text-align--right">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-text-align--center">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
  <p class="fsa-text-align--left">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p>
</div>

### Responsive

(TBD)

## Text Headers

While `h1` – `h6` elements have a hierarchical style assigned, sometimes the heading level may vary depending on its context. These Text Header Utilities enable you to maintain the visual hierarchy independent from the structural HTML heading level.

* [header] is one of `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
* This example uses an `<h2>` for demo purposes, but can be applied to any `<hN>` element

```html
<hN class="fsa-text--[header]">...</hN>
```
<div class="ds-preview">
  <h2 class="fsa-text--h1">h2 that looks like an h1</h2>
  <h2 class="fsa-text--h2">h2 that looks like an h2</h2>
  <h2 class="fsa-text--h3">h2 that looks like an h3</h2>
  <h2 class="fsa-text--h4">h2 that looks like an h4</h2>
  <h2 class="fsa-text--h5">h2 that looks like an h5</h2>
  <h2 class="fsa-text--h6">h2 that looks like an h6</h2>
</div>


### Responsive

(TBD)

## Floats

### Responsive

(TBD)
