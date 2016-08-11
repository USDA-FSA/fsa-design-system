---
layout: page
parent: "Visual Style"
title: "Grid"
intro: "A 12-column, responsive grid provides structure for website content."
jump_menu: true
---

<div class="pb-preview">
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

Instantiate a new grid with...

```html
<div class="fsa-grid">...</div>
```

At least one grid column is required, each described by its proportional width via `fsa-grid__[width]`. For example: `class="fsa-grid__1/2"` = 50% proportion.

```html
<div class="fsa-grid">
  <div class="fsa-grid__1/2">...</div>
  <div class="fsa-grid__1/2">...</div>
</div>
```
<div class="pb-preview">
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

Each grid column's proportional width can be adjusted across a range of viewport sizes (aka "breakpoints") via `fsa-grid__[width]@[breakpoint]`. For example, `class="fsa-grid__1/1 fsa-grid__1/2@sm"` will render as full-width by default (`1/1`), and then 50% proportion at the `ml` breakpoint.

```html
<div class="fsa-grid">
  <div class="fsa-grid__1/1 fsa-grid__1/2@ml">...</div>
  <div class="fsa-grid__1/1 fsa-grid__1/2@ml">...</div>
</div>
```

<div class="pb-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1/1 fsa-grid__1/2@ml">
      <p class="fsa-grid__demo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="fsa-grid__1/1 fsa-grid__1/2@ml">
      <p class="fsa-grid__demo">Lorem ipsum dolor sit ametcing elit sed do gna aliqua. <</p>
    </div>
  </div>
</div>

### Breakpoints

(TBD. Document Breakpoints here, but determine better approach for communicating RWD.)

## No Gutter

```html
<div class="fsa-grid fsa-grid--no-gutter">
  <div class="fsa-grid__1/3">...</div>
  <div class="fsa-grid__1/3">...</div>
  <div class="fsa-grid__1/3">...</div>
</div>
```
<div class="pb-preview">
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

A grid column can be automatically proportioned via `class="fsa-grid__auto"`. For example, if you have two colums of variable width, e.g. `1/6` and `1/4`, then `fsa-grid__auto` will distribute across the remaining space.

```html
<div class="fsa-grid">
  <div class="fsa-grid__1/6">...</div>
  <div class="fsa-grid__auto">...</div>
  <div class="fsa-grid__1/4">...</div>
</div>
```

<div class="pb-preview">
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

<div class="pb-preview">
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

<div class="pb-preview">
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

(CONTENT TBD)

Homeroll your own semantic grids.

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

<div class="pb-preview">
  <div class="foo">
    <div class="foo__item foo__item--fu">Lorem ipsum dolor sit amet, consectetur adipisicing elitnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="foo__item foo__item--bar">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
</div>
