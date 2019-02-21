---
layout: page
parent: "Visual Style"
title: "Grid and Layout"
intro: "A 12-column, responsive grid provides structure for website content."
jump_menu: true
suppress_code_toggle: true
---

Structure page content with this Grid System. Use a series of containers, rows, and columns to distribute and align content. As a flexible mobile-first grid system (aka Responsive Web Design), it can be adjusted for a variety of viewport widths. For example, it could be 2 columns on a phone while being 4 columns on a desktop.

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/1</code></p>
    </div>
  </div>
  <div class="fsa-grid">
    <div class="fsa-grid__1/2">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/2</code></p>
    </div>
    <div class="fsa-grid__1/2">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/2</code></p>
    </div>
  </div>
  <div class="fsa-grid">
    <div class="fsa-grid__1/3">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/3</code></p>
    </div>
    <div class="fsa-grid__1/3">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/3</code></p>
    </div>
    <div class="fsa-grid__1/3">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/3</code></p>
    </div>
  </div>
  <div class="fsa-grid">
    <div class="fsa-grid__1/4">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/4</code></p>
    </div>
    <div class="fsa-grid__1/4">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/4</code></p>
    </div>
    <div class="fsa-grid__1/4">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/4</code></p>
    </div>
    <div class="fsa-grid__1/4">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/4</code></p>
    </div>
  </div>
  <div class="fsa-grid">
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/6</code></p>
    </div>
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/6</code></p>
    </div>
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/6</code></p>
    </div>
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/6</code></p>
    </div>
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/6</code></p>
    </div>
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/6</code></p>
    </div>
  </div>
  <div class="fsa-grid">
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
    <div class="fsa-grid__1/12">
      <p class="fsa-grid__demo fsa-text-align--center"><code>1/12</code></p>
    </div>
  </div>
</div>

## Getting Started

### 1. Instantiate a new grid...

```html
<div class="fsa-grid">...</div>
```

### 2. Create your grid structure with columns

```html
<div class="fsa-grid">
  <div class="fsa-grid__1/2">...</div>
  <div class="fsa-grid__1/2">...</div>
</div>
```

Each grid column's proportional width is assigned via `fsa-grid__[width]`. For example: `class="fsa-grid__1/2"` is 50% proportion.

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1/2">
      <div class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
    <div class="fsa-grid__1/2">
      <div class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua. </div>
    </div>
  </div>
</div>

## Grid Column Sizes

Available column proportions are identified via the `fsa-grid__*` selector, where `*` is one of the unit fractions below. For example the selector for 50% width would be `class="fsa-grid__1/2"`.

<div class="docs__grid-inventory">
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1/12">
      <div class="fsa-grid__demo"><code>1/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1/6">
      <div class="fsa-grid__demo"><code>1/6</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__2/12">
      <div class="fsa-grid__demo"><code>2/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1/4">
      <div class="fsa-grid__demo"><code>1/4</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__3/12">
      <div class="fsa-grid__demo"><code>3/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1/3">
      <div class="fsa-grid__demo"><code>1/3</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__4/12">
      <div class="fsa-grid__demo"><code>4/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__5/12">
      <div class="fsa-grid__demo"><code>5/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1/2">
      <div class="fsa-grid__demo"><code>1/2</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__6/12">
      <div class="fsa-grid__demo"><code>6/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__7/12">
      <div class="fsa-grid__demo"><code>7/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__2/3">
      <div class="fsa-grid__demo"><code>2/3</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__8/12">
      <div class="fsa-grid__demo"><code>8/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__3/4">
      <div class="fsa-grid__demo"><code>3/4</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__9/12">
      <div class="fsa-grid__demo"><code>9/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__5/6">
      <div class="fsa-grid__demo"><code>5/6</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__10/12">
      <div class="fsa-grid__demo"><code>10/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__11/12">
      <div class="fsa-grid__demo"><code>11/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__12/12">
      <div class="fsa-grid__demo"><code>12/12</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1">
      <div class="fsa-grid__demo"><code>1</code></div>
    </div>
  </div>
  <div class="fsa-grid docs__grid-inventory-item">
    <div class="fsa-grid__1/1">
      <div class="fsa-grid__demo"><code>1/1</code></div>
    </div>
  </div>
</div>

## Responsive

Each grid column's proportional width can be adjusted across a range of viewport sizes (aka "breakpoints") via `fsa-grid__[width]@[breakpoint]`. For example, `class="fsa-grid__1/1 fsa-grid__1/2@s"` will render as full-width by default (`1/1`), and then 50% proportion at the `m` breakpoint.

```html
<div class="fsa-grid">
  <div class="fsa-grid__1/1 fsa-grid__1/2@m">...</div>
  <div class="fsa-grid__1/1 fsa-grid__1/2@m">...</div>
</div>
```

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1/1 fsa-grid__1/2@m">
      <p class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="fsa-grid__1/1 fsa-grid__1/2@m">
      <p class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua. </p>
    </div>
  </div>
</div>

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <h3>Demo</h3>
  <p>
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_grid" data-size="phone" class="fsa-btn-group__item" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_grid" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_grid" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_grid" data-size="desktop" class="fsa-btn-group__item fsa-btn-group__item--active" type="button" aria-selected="true">Desktop</button>
    </span>
    <a class="fsa-m-l--xs fsa-text-size--1" href="http://usda-fsa.github.io/fsa-style/demo/rwd__grid.html" target="_blank">View in new window</a>
  </p>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--desktop" id="rwd-demo_grid">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__grid.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

<!-- ### Breakpoints -->

<!-- (TBD. Document Breakpoints here, but determine better approach for communicating RWD.) -->

## Nesting

Nesting a new grid container within a grid column is allowed and follows the same rendering behavior based on the same 12-column, responsive grid.

```html
<div class="fsa-grid">
  <div class="fsa-grid__9/12">
    <div class="fsa-grid">
      <div class="fsa-grid__4/12">...</div>
      <div class="fsa-grid__4/12">...</div>
      <div class="fsa-grid__4/12">...</div>
    </div>
  </div>
  <div class="fsa-grid__3/12">...</div>
</div>
```
<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__9/12">
      <div class="fsa-grid__demo">
        <p><code>fsa-grid__<strong>9/12</strong></code><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="fsa-grid">
          <div class="fsa-grid__4/12">
            <p class="fsa-grid__demo"><code>fsa-grid__<strong>4/12</strong></code><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="fsa-grid__4/12">
            <p class="fsa-grid__demo"><code>fsa-grid__<strong>4/12</strong></code><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="fsa-grid__4/12">
            <p class="fsa-grid__demo"><code>fsa-grid__<strong>4/12</strong></code><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fsa-grid__3/12">
      <p class="fsa-grid__demo"><code>fsa-grid__<strong>3/12</strong></code><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

## No Gutter

```html
<div class="fsa-grid fsa-grid--no-gutter">
  <div class="fsa-grid__1/3">...</div>
  <div class="fsa-grid__1/3">...</div>
  <div class="fsa-grid__1/3">...</div>
</div>
```
<div class="ds-preview">
  <div class="fsa-grid fsa-grid--no-gutter">
    <div class="fsa-grid__1/3">
      <p class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="fsa-grid__1/3">
      <p class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua. </p>
    </div>
    <div class="fsa-grid__1/3">
      <p class="fsa-grid__demo">Duis aute irure dolor in reprehen gemino quisi derit in voluptateorem ipsum dolor sit ametcin velit esse cillum dolore eu fugiat</p>
    </div>
  </div>
</div>

## Auto-width

A grid column's width can automatically distribute itself via `class="fsa-grid__auto"`. For example, if you have two colums of variable width, e.g. `1/6` and `1/4`, then grid unit with `fsa-grid__auto` will flex itself to the remaining space.

```html
<div class="fsa-grid">
  <div class="fsa-grid__1/6">...</div>
  <div class="fsa-grid__auto">...</div>
  <div class="fsa-grid__1/4">...</div>
</div>
```

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1/6">
      <p class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua.</p>
    </div>
    <div class="fsa-grid__auto">
      <p class="fsa-grid__demo">Duis aute irure dolor in reprehen gemino quisi derit in voluptateorem ipsum dolor sit ametcin velit esse cillum dolore eu fugiat</p>
    </div>
    <div class="fsa-grid__1/4">
      <p class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

### Auto-width Samples

```html
<div class="fsa-grid">
  <div class="fsa-grid__auto">...</div>
  <div class="fsa-grid__1/4">...</div>
</div>
```

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__auto">
      <p class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="fsa-grid__1/4">
      <p class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua.</p>
    </div>
  </div>
</div>

```html
<div class="fsa-grid">
  <div class="fsa-grid__auto">...</div>
  <div class="fsa-grid__auto">...</div>
  <div class="fsa-grid__auto">...</div>
</div>
```

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__auto">
      <p class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="fsa-grid__auto">
      <p class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua.</p>
    </div>
    <div class="fsa-grid__auto">
      <p class="fsa-grid__demo">Duis aute irure dolor in reprehen gemino quisi derit in voluptateorem ipsum dolor sit ametcin velit esse cillum dolore eu fugiat</p>
    </div>
  </div>
</div>

## SASS Mixins

Homeroll your own semantic grids.

### Demo

```html
<!-- HTML  -------------------------------------------------------------------->
<div class="foo">
  <div class="foo__item foo__item--fu">...</div>
  <div class="foo__item foo__item--bar">...</div>
</div>
```
```scss
////////////////////////////////////////////////////////////////////////////////
// SCSS
// 1. Start a grid...
.foo {
  @include fsa-grid-row();
}

// 2. Create your columns
.foo__item {
  @include fsa-grid-column();
}

// 3. Give each column a proportion (out of 12 columns)
.foo__item--fu {
  @include fsa-grid-column-width(3); // 25%
}

.foo__item--bar {
  @include fsa-grid-column-width(9); // 75%
}

```
<div class="ds-preview">
  <div class="foo">
    <div class="foo__item foo__item--fu">
      <p><strong>`foo__item--fu`, I'm 25% wide.</strong> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="foo__item foo__item--bar">
      <p><strong>`foo__item--bar`, I'm 75% wide.</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>

### Demo: Responsive

Let's use Media Queries to make a responsive layout.

```html
<!-- HTML  -------------------------------------------------------------------->
<div class="lorem">
  <div class="lorem__item lorem__item--fu">...</div>
  <div class="lorem__item lorem__item--bar">...</div>
</div>
```
```scss
////////////////////////////////////////////////////////////////////////////////
// SCSS
// 1. Start a grid...
.lorem {
  @include fsa-grid-row();
}

// 2. Create your columns
.lorem__item {
  @include fsa-grid-column();
}

// 3. Give each column a proportion (out of 12 columns)
.lorem__item--fu {

  @include fsa-grid-column-width(6); // 50%

  @include breakpoint(M) {
    @include fsa-grid-column-width(4); // 33%
  }

}

.lorem__item--bar {

  @include fsa-grid-column-width(6); // 50%

  @include breakpoint(M) {
    @include fsa-grid-column-width(8); // 66%
  }

}

```
<div class="ds-preview">
  <div class="lorem">
    <div class="lorem__item lorem__item--fu">
      <p>I'm <strong>50%</strong> by default, <strong>33%</strong> at <code>m</code> and above.</p>
    </div>
    <div class="lorem__item lorem__item--bar">
      <p>I'm <strong>50%</strong> by default, <strong>66%</strong> at <code>m</code> and above.</p>
    </div>
  </div>
</div>
