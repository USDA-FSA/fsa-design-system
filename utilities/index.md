---
layout: page
title: "CSS Utilities"
type: "Utility"
intro: "Single-purpose styles typically mapped to a single CSS property and value (e.g. margin)."
jump_menu: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

Utilities &ndash; also known as “trumps,” “helper classes,” or “alterations” &ndash; are high-specificity selectors for making very targeted alterations to existing elements or components.

They are most useful when you want to override a default value, in one-off situations, or even to explore design ideas; though be aware that they often use an `!important` flag in the CSS to ensure the desired alteration is achieved by superceding an element's default style. This is very deliberate as utility classes are for **final adjustments, and should not be overridden by anything that comes before them**.

Most include **Responsive** options, enabling you to make targeted alterations at different screen sizes. e.g. *"Small padding on small screens, larger padding on bigger screens."*

## Usage

A simple example adjusting a component's [margins](#margins). Here's the default rendering of a second-level header (`h2`). Note the amount of spacing above the text.

```html
<h2>Second level heading</h2>
```
<div class="docs__utilities__demo fsa-m-b--l">
  <h2>Second level heading</h2>
</div>

...let's give it a **small** top margin...

```html
<h2 class="fsa-m-t--s">Second level heading</h2>
```
<div class="docs__utilities__demo fsa-m-b--l">
  <h2 class="fsa-m-t--s">Second level heading</h2>
</div>

...or perhaps **remove** the top margin, and **increase** its bottom margin...

```html
<h2 class="fsa-m-t--none fsa-m-b--xl">Second level heading</h2>
```
<div class="docs__utilities__demo fsa-m-b--l">
  <h2 class="fsa-m-t--none fsa-m-b--xl">Second level heading</h2>
</div>

...or even **remove all** of its margins...

```html
<h2 class="fsa-m--none">Second level heading</h2>
```
<div class="docs__utilities__demo fsa-m-b--l">
  <h2 class="fsa-m--none">Second level heading</h2>
</div>

Below are the complete set of CSS Utilities for overriding or extending an element's or component's visual properties, including **Responsive** scopes to adjust at targeted breakpoints.

## Border Width

<p class="fsa-text--lead">Selectively add or adjust border thickness.</p>

### Variations

#### All
```html
<element class="fsa-border--[SIZE]">...</element>
```

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--none"><code>none</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--xxs"><code>xxs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--xs"><code>xs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--s"><code>s</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--m"><code>m</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--l"><code>l</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border--custom" style="--custom-border-width: 32px"><code>custom</code></div>
  </div>
</div>

#### Top

```html
<element class="fsa-border-top--[SIZE]">...</element>
```

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--none"><code>none</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--xxs"><code>xxs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--xs"><code>xs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--s"><code>s</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--m"><code>m</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--l"><code>l</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-top--custom" style="--custom-border-top-width: 32px"><code>custom</code></div>
  </div>
</div>

#### Right

```html
<element class="fsa-border-right--[SIZE]">...</element>
```

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--none"><code>none</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--xxs"><code>xxs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--xs"><code>xs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--s"><code>s</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--m"><code>m</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--l"><code>l</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-right--custom" style="--custom-border-right-width: 32px"><code>custom</code></div>
  </div>
</div>

#### Bottom

```html
<element class="fsa-border-bottom--[SIZE]">...</element>
```

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--none"><code>none</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--xxs"><code>xxs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--xs"><code>xs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--s"><code>s</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--m"><code>m</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--l"><code>custom</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-bottom--custom" style="--custom-border-bottom-width: 32px"><code>custom</code></div>
  </div>
</div>

#### Left

```html
<element class="fsa-border-left--[SIZE]">...</element>
```

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--none"><code>none</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--xxs"><code>xxs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--xs"><code>xs</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--s"><code>s</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--m"><code>m</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--l"><code>custom</code></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__auto@m">
    <div class="fsa-bg--white fsa-p--xs fsa-border-left--custom" style="--custom-border-left-width: 32px"><code>custom</code></div>
  </div>
</div>

### Responsive

Selectively apply Border Width at any Media Query breakpoint.

<p>
  <code>class="fsa-border--<strong>[variation]@[breakpoint]</strong>"</code>
  <code>breakpoint</code> is one of
  <code title="small">s</code>,
  <code title="medium">m</code>,
  <code title="large">l</code>, or
  <code title="extra large">xl</code>
</p>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__border-width.html
{% endcapture %}

{% include rwd-viewer.html %}

## Border Radius

<p class="fsa-text--lead">Selectively add or adjust rounded corners.</p>

### Variations

```html
<element class="fsa-border-radius--[SIZE]">...</element>
```

<div class="fsa-grid fsa-m-b--s">
  <div class="fsa-grid__1 fsa-grid__1/4@m">
    <code>none</code>
    <div class="fsa-radius--none fsa-bg--aqua-900 fsa-color--aqua-100 fsa-p--l"></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/4@m">
    <code>s</code>
    <div class="fsa-radius--s fsa-bg--aqua-900 fsa-color--aqua-100 fsa-p--l"></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/4@m">
    <code>m</code>
    <div class="fsa-radius--m fsa-bg--aqua-900 fsa-color--aqua-100 fsa-p--l"></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/4@m">
    <code>l</code>
    <div class="fsa-radius--l fsa-bg--aqua-900 fsa-color--aqua-100 fsa-p--l"></div>
  </div>
</div>
<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/4@m">
    <code>full</code>
    <div class="fsa-radius--full fsa-bg--aqua-900 fsa-color--aqua-100 fsa-p--l"></div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/4@m">
    <code>oval</code>
    <div class="fsa-radius--oval fsa-bg--aqua-900 fsa-color--aqua-100 fsa-p--l"></div>
  </div>
</div>

### Responsive

Selectively apply rounded corners at any Media Query breakpoint.

<p>
  <code>class="fsa-border-radius--<strong>[SIZE]@[BREAKPOINT]</strong>"</code>
  <code>breakpoint</code> is one of
  <code title="small">s</code>,
  <code title="medium">m</code>,
  <code title="large">l</code>, or
  <code title="extra large">xl</code>
</p>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__border-radius.html
{% endcapture %}

{% include rwd-viewer.html %}


## Border Between

<p class="fsa-text--lead">Selectively add or adjust borders <strong>between</strong> blocks of content.</p>

### Direction

#### Vertical

```html
<element class="fsa-border-between-vertical--[SIZE]">
  <el>1</el>
  <!-- border appears here -->
  <el>2</el>
  <!-- border appears here -->
  <el>3</el>
</element>
```

<div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xxs">
  <div class="fsa-text-align--center fsa-text-size--6">1</div>
  <div class="fsa-text-align--center fsa-text-size--6">2</div>
  <div class="fsa-text-align--center fsa-text-size--6">3</div>
</div>

#### Horizontal

```html
<element class="fsa-border-between-horizontal--[SIZE]">
  <el>1</el>
  <!-- border appears here -->
  <el>2</el>
  <!-- border appears here -->
  <el>3</el>
</element>
```

<div class="fsa-border-between-horizontal--xxs">
  <div class="fsa-text-align--center fsa-text-size--6">1</div>
  <div class="fsa-text-align--center fsa-text-size--6">2</div>
  <div class="fsa-text-align--center fsa-text-size--6">3</div>
</div>

### Size

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>none</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--none">
      <div class="fsa-text-align--center">1</div>
      <div class="fsa-text-align--center">2</div>
      <div class="fsa-text-align--center">3</div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>xxs</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xxs">
      <div class="fsa-text-align--center">1</div>
      <div class="fsa-text-align--center">2</div>
      <div class="fsa-text-align--center">3</div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>xs</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs">
      <div class="fsa-text-align--center">1</div>
      <div class="fsa-text-align--center">2</div>
      <div class="fsa-text-align--center">3</div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>s</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--s">
      <div class="fsa-text-align--center">1</div>
      <div class="fsa-text-align--center">2</div>
      <div class="fsa-text-align--center">3</div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>m</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--m">
      <div class="fsa-text-align--center">1</div>
      <div class="fsa-text-align--center">2</div>
      <div class="fsa-text-align--center">3</div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>l</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--l">
      <div class="fsa-text-align--center">1</div>
      <div class="fsa-text-align--center">2</div>
      <div class="fsa-text-align--center">3</div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <code>custom</code>
    <div class="fsa-m-b--s fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--custom">
      <div style="--custom-border-between-vertical: 32px;" class="fsa-text-align--center">1</div>
      <div style="--custom-border-between-vertical: 32px;" class="fsa-text-align--center">2</div>
      <div style="--custom-border-between-vertical: 32px;" class="fsa-text-align--center">3</div>
    </div>
  </div>
</div>

### Examples

#### Vertical, combined with [Border Width](#border-width)

```html
<div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xxs fsa-border--xxs">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
<div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xxs fsa-border--xxs">
  <div class="fsa-text-align--center fsa-text-size--6">1</div>
  <div class="fsa-text-align--center fsa-text-size--6">2</div>
  <div class="fsa-text-align--center fsa-text-size--6">3</div>
</div>

#### Horizontal, combined with [Border Width](#border-width)

```html
<div class="fsa-border-between-horizontal--xxs fsa-border--xxs">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
<div class="fsa-border-between-horizontal--xxs fsa-border--xxs">
  <div class="fsa-text-align--center fsa-text-size--6">1</div>
  <div class="fsa-text-align--center fsa-text-size--6">2</div>
  <div class="fsa-text-align--center fsa-text-size--6">3</div>
</div>

### Responsive

Selectively apply at any Media Query breakpoint.

<p>
  <code>class="fsa-border-between-[DIRECTION]--<strong>[SIZE]@[BREAKPOINT]</strong>"</code>
  <code>breakpoint</code> is one of
  <code title="small">s</code>,
  <code title="medium">m</code>,
  <code title="large">l</code>, or
  <code title="extra large">xl</code>
</p>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__border-between.html
{% endcapture %}

{% include rwd-viewer.html %}

## Color: Border

<p class="fsa-text--lead">Selectively add or adjust border colors.</p>

### Options

<div class="fsa-level">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="demo-background-border-color" name="demo-background-border-color" data-target="demo-background-target-border-color" data-behavior="toggle-demo-background">
    <span class="fsa-switch__track"></span>
  </label>
  <label for="demo-background-border-color">Dark Background</label>
</div>

<div class="docs__color-utilities" id="demo-background-target-border-color">
  <h4 class="fsa-m-t--none">Core</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--primary-900">fsa-border--primary-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--primary">fsa-border--primary</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--primary-300">fsa-border--primary-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--primary-200">fsa-border--primary-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--primary-100">fsa-border--primary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--secondary-900">fsa-border--secondary-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--secondary">fsa-border--secondary</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--secondary-300">fsa-border--secondary-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--secondary-200">fsa-border--secondary-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--secondary-100">fsa-border--secondary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-900">fsa-border--tertiary-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary">fsa-border--tertiary</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-300">fsa-border--tertiary-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200">fsa-border--tertiary-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-100">fsa-border--tertiary-100</div>
    </div>
  </div>
  <h4>Accent</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--aqua-900">fsa-border--aqua-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--aqua">fsa-border--aqua</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--aqua-300">fsa-border--aqua-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--aqua-200">fsa-border--aqua-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--aqua-100">fsa-border--aqua-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--red-900">fsa-border--red-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--red">fsa-border--red</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--red-300">fsa-border--red-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--red-200">fsa-border--red-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--red-100">fsa-border--red-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--transparent">&nbsp;</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--yellow">fsa-border--yellow</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--yellow-300">fsa-border--yellow-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--yellow-200">fsa-border--yellow-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--yellow-100">fsa-border--yellow-100</div>
    </div>
  </div>
  <h4>Other</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--black">fsa-border--black</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--white">fsa-border--white</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--transparent">fsa-border--transparent</div>
    </div>
  </div>
  <h4>Hover: Core</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--primary-900">fsa-border<strong>:hover</strong>--primary-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--primary">fsa-border<strong>:hover</strong>--primary</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--primary-300">fsa-border<strong>:hover</strong>--primary-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--primary-200">fsa-border<strong>:hover</strong>--primary-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--primary-100">fsa-border<strong>:hover</strong>--primary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--secondary-900">fsa-border<strong>:hover</strong>--secondary-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--secondary">fsa-border<strong>:hover</strong>--secondary</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--secondary-300">fsa-border<strong>:hover</strong>--secondary-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--secondary-200">fsa-border<strong>:hover</strong>--secondary-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--secondary-100">fsa-border<strong>:hover</strong>--secondary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--tertiary-900">fsa-border<strong>:hover</strong>--tertiary-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--tertiary">fsa-border<strong>:hover</strong>--tertiary</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--tertiary-300">fsa-border<strong>:hover</strong>--tertiary-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--tertiary-200">fsa-border<strong>:hover</strong>--tertiary-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--tertiary-100">fsa-border<strong>:hover</strong>--tertiary-100</div>
    </div>
  </div>
  <h4>Hover: Accent</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--aqua-900">fsa-border<strong>:hover</strong>--aqua-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--aqua">fsa-border<strong>:hover</strong>--aqua</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--aqua-300">fsa-border<strong>:hover</strong>--aqua-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--aqua-200">fsa-border<strong>:hover</strong>--aqua-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--aqua-100">fsa-border<strong>:hover</strong>--aqua-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--red-900">fsa-border<strong>:hover</strong>--red-900</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--red">fsa-border<strong>:hover</strong>--red</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--red-300">fsa-border<strong>:hover</strong>--red-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--red-200">fsa-border<strong>:hover</strong>--red-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--red-100">fsa-border<strong>:hover</strong>--red-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--transparent  fsa-border:hover--transparent">&nbsp;</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--yellow">fsa-border<strong>:hover</strong>--yellow</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--yellow-300">fsa-border<strong>:hover</strong>--yellow-300</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--yellow-200">fsa-border<strong>:hover</strong>--yellow-200</div>
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--yellow-100">fsa-border<strong>:hover</strong>--yellow-100</div>
    </div>
  </div>
  <h4>Hover: Other</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--black">fsa-border<strong>:hover</strong>--black</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--white">fsa-border<strong>:hover</strong>--white</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-m-b--s fsa-border--xs fsa-border--tertiary-200 fsa-border:hover--transparent">fsa-border<strong>:hover</strong>--transparent</div>
    </div>
  </div>
</div>

### Responsive

Selectively apply Border Colors at any Media Query breakpoint.

<code>class="fsa-border--<strong>[color]@[breakpoint]</strong>"</code>
<code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__border-color.html
{% endcapture %}

{% include rwd-viewer.html %}

## Color: Border Between

<p class="fsa-text--lead">Selectively add or adjust border colors <strong>between</strong> blocks of content.</p>

### Options

<div class="fsa-level">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="demo-background-border-between-color" name="demo-background-border-between-color" data-target="demo-background-target-border-between-color" data-behavior="toggle-demo-background">
    <span class="fsa-switch__track"></span>
  </label>
  <label for="demo-background-border-between-color">Dark Background</label>
</div>

<div class="docs__color-utilities" id="demo-background-target-border-between-color">
  <h4 class="fsa-m-t--none">Core</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--primary-900 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--primary fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--primary-300 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--primary-200 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--primary-100 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--secondary-900 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--secondary fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--secondary-300 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--secondary-200 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--secondary-100 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--tertiary-900 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--tertiary fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--tertiary-300 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--tertiary-200 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--tertiary-100 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
  </div>
  <h4>Accent</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--aqua-900 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--aqua fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--aqua-300 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--aqua-200 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--aqua-100 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--red-900 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--red fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--red-300 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--red-200 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--red-100 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-m-b--s">
        <div>&nbsp;</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--yellow fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--yellow-300 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--yellow-200 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--yellow-100 fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
  </div>
  <h4>Other</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--black fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--white fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-level fsa-level--grow-even fsa-level--align-stretch fsa-border-between-vertical--xs fsa-border-between-vertical--transparent fsa-m-b--s">
        <div class="fsa-text-align--center">1</div>
        <div class="fsa-text-align--center">2</div>
        <div class="fsa-text-align--center">3</div>
      </div>
    </div>
  </div>
</div>

### Responsive

Selectively apply Border Between Color at any Media Query breakpoint.

<code>class="fsa-border-between-<strong>[direction]--[color]@[breakpoint]</strong>"</code>
<code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__border-between-color.html
{% endcapture %}

{% include rwd-viewer.html %}

## Color: Background

<p class="fsa-text--lead">Selectively add or adjust background colors</p>

### Options

<div class="fsa-level">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="demo-background-bg" name="demo-background-bg" data-target="demo-background-target-bg" data-behavior="toggle-demo-background">
    <span class="fsa-switch__track"></span>
  </label>
  <label for="demo-background-bg">Dark Background</label>
</div>

<div class="docs__color-utilities" id="demo-background-target-bg">
  <h4 class="fsa-m-t--none">Core</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--primary-900">
        <div class="fsa-color--white">fsa-bg--primary-900</div>
      </div>
      <div class="fsa-p--xs fsa-bg--primary">
        <div class="fsa-color--white">fsa-bg--primary</div>
      </div>
      <div class="fsa-p--xs fsa-bg--primary-300">
        <div class="fsa-color--white">fsa-bg--primary-300</div>
      </div>
      <div class="fsa-p--xs fsa-bg--primary-200">fsa-bg--primary-200</div>
      <div class="fsa-p--xs fsa-bg--primary-100">fsa-bg--primary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--secondary-900">
        <div class="fsa-color--white">fsa-bg--secondary-900</div>
      </div>
      <div class="fsa-p--xs fsa-bg--secondary">
        <div class="fsa-color--white">fsa-bg--secondary</div>
      </div>
      <div class="fsa-p--xs fsa-bg--secondary-300">
        <div class="fsa-color--white">fsa-bg--secondary-300</div>
      </div>
      <div class="fsa-p--xs fsa-bg--secondary-200">fsa-bg--secondary-200</div>
      <div class="fsa-p--xs fsa-bg--secondary-100">fsa-bg--secondary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--tertiary-900">
        <div class="fsa-color--white">fsa-bg--tertiary-900</div>
      </div>
      <div class="fsa-p--xs fsa-bg--tertiary">
        <div class="fsa-color--white">fsa-bg--tertiary</div>
      </div>
      <div class="fsa-p--xs fsa-bg--tertiary-300">
        <div class="fsa-color--white">fsa-bg--tertiary-300</div>
      </div>
      <div class="fsa-p--xs fsa-bg--tertiary-200">fsa-bg--tertiary-200</div>
      <div class="fsa-p--xs fsa-bg--tertiary-100">fsa-bg--tertiary-100</div>
    </div>
  </div>
  <h4>Accent</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--aqua-900">
        <div class="fsa-color--white">fsa-bg--aqua-900</div>
      </div>
      <div class="fsa-p--xs fsa-bg--aqua">
        <div class="fsa-color--white">fsa-bg--aqua</div>
      </div>
      <div class="fsa-p--xs fsa-bg--aqua-300">fsa-bg--aqua-300</div>
      <div class="fsa-p--xs fsa-bg--aqua-200">fsa-bg--aqua-200</div>
      <div class="fsa-p--xs fsa-bg--aqua-100">fsa-bg--aqua-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--red-900">
        <div class="fsa-color--white">fsa-bg--red-900</div>
      </div>
      <div class="fsa-p--xs fsa-bg--red">
        <div class="fsa-color--white">fsa-bg--red</div>
      </div>
      <div class="fsa-p--xs fsa-bg--red-300">fsa-bg--red-300</div>
      <div class="fsa-p--xs fsa-bg--red-200">fsa-bg--red-200</div>
      <div class="fsa-p--xs fsa-bg--red-100">fsa-bg--red-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs">&nbsp;</div>
      <div class="fsa-p--xs fsa-bg--yellow">fsa-bg--yellow</div>
      <div class="fsa-p--xs fsa-bg--yellow-300">fsa-bg--yellow-300</div>
      <div class="fsa-p--xs fsa-bg--yellow-200">fsa-bg--yellow-200</div>
      <div class="fsa-p--xs fsa-bg--yellow-100">fsa-bg--yellow-100</div>
    </div>
  </div>
  <h4>Other</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--black">
        <div class="fsa-color--white">fsa-bg--black</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--white">fsa-bg--white</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--base">fsa-bg--base</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-p--xs fsa-bg--transparent">fsa-bg--transparent</div>
    </div>
  </div>
  <h4>Hover: Core</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--primary-900">fsa-bg<strong>:hover</strong>--primary-900</div>
        <div class="fsa-p--xs fsa-bg:hover--primary">fsa-bg<strong>:hover</strong>--primary</div>
        <div class="fsa-p--xs fsa-bg:hover--primary-300">fsa-bg<strong>:hover</strong>--primary-300</div>
        <div class="fsa-p--xs fsa-bg:hover--primary-200">fsa-bg<strong>:hover</strong>--primary-200</div>
        <div class="fsa-p--xs fsa-bg:hover--primary-100">fsa-bg<strong>:hover</strong>--primary-100</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--secondary-900">fsa-bg<strong>:hover</strong>--secondary-900</div>
        <div class="fsa-p--xs fsa-bg:hover--secondary">fsa-bg<strong>:hover</strong>--secondary</div>
        <div class="fsa-p--xs fsa-bg:hover--secondary-300">fsa-bg<strong>:hover</strong>--secondary-300</div>
        <div class="fsa-p--xs fsa-bg:hover--secondary-200">fsa-bg<strong>:hover</strong>--secondary-200</div>
        <div class="fsa-p--xs fsa-bg:hover--secondary-100">fsa-bg<strong>:hover</strong>--secondary-100</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--tertiary-900">fsa-bg<strong>:hover</strong>--tertiary-900</div>
        <div class="fsa-p--xs fsa-bg:hover--tertiary">fsa-bg<strong>:hover</strong>--tertiary</div>
        <div class="fsa-p--xs fsa-bg:hover--tertiary-300">fsa-bg<strong>:hover</strong>--tertiary-300</div>
        <div class="fsa-p--xs fsa-bg:hover--tertiary-200">fsa-bg<strong>:hover</strong>--tertiary-200</div>
        <div class="fsa-p--xs fsa-bg:hover--tertiary-100">fsa-bg<strong>:hover</strong>--tertiary-100</div>
      </div>
    </div>
  </div>
  <h4>Hover: Accent</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--aqua-900">fsa-bg<strong>:hover</strong>--aqua-900</div>
        <div class="fsa-p--xs fsa-bg:hover--aqua">fsa-bg<strong>:hover</strong>--aqua</div>
        <div class="fsa-p--xs fsa-bg:hover--aqua-300">fsa-bg<strong>:hover</strong>--aqua-300</div>
        <div class="fsa-p--xs fsa-bg:hover--aqua-200">fsa-bg<strong>:hover</strong>--aqua-200</div>
        <div class="fsa-p--xs fsa-bg:hover--aqua-100">fsa-bg<strong>:hover</strong>--aqua-100</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--red-900">fsa-bg<strong>:hover</strong>--red-900</div>
        <div class="fsa-p--xs fsa-bg:hover--red">fsa-bg<strong>:hover</strong>--red</div>
        <div class="fsa-p--xs fsa-bg:hover--red-300">fsa-bg<strong>:hover</strong>--red-300</div>
        <div class="fsa-p--xs fsa-bg:hover--red-200">fsa-bg<strong>:hover</strong>--red-200</div>
        <div class="fsa-p--xs fsa-bg:hover--red-100">fsa-bg<strong>:hover</strong>--red-100</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs">&nbsp;</div>
        <div class="fsa-p--xs fsa-bg:hover--yellow">fsa-bg<strong>:hover</strong>--yellow</div>
        <div class="fsa-p--xs fsa-bg:hover--yellow-300">fsa-bg<strong>:hover</strong>--yellow-300</div>
        <div class="fsa-p--xs fsa-bg:hover--yellow-200">fsa-bg<strong>:hover</strong>--yellow-200</div>
        <div class="fsa-p--xs fsa-bg:hover--yellow-100">fsa-bg<strong>:hover</strong>--yellow-100</div>
      </div>
    </div>
  </div>
  <h4>Hover: Other</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--black">fsa-bg<strong>:hover</strong>--black</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--white">fsa-bg<strong>:hover</strong>--white</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--base">fsa-bg<strong>:hover</strong>--base</div>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-border--xxs fsa-border-between-horizontal--xxs">
        <div class="fsa-p--xs fsa-bg:hover--transparent">fsa-bg<strong>:hover</strong>--transparent</div>
      </div>
    </div>
  </div>
</div>

### Responsive

Selectively apply Background Colors at any Media Query breakpoint.

<code>class="fsa-bg[:hover]--<strong>[color]@[breakpoint]</strong>"</code>
<code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__border-between-color.html
{% endcapture %}

{% include rwd-viewer.html %}

## Color: Foreground

<p class="fsa-text--lead">Selectively add or adjust foreground (text) colors</p>

### Options

<div class="fsa-level">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="demo-background-text-color" name="demo-background-text-color" data-target="demo-background-target-text-color" data-behavior="toggle-demo-background">
    <span class="fsa-switch__track"></span>
  </label>
  <label for="demo-background-text-color">Dark Background</label>
</div>

<div class="docs__color-utilities" id="demo-background-target-text-color">
  <h4 class="fsa-m-t--none">Core</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--primary-900">fsa-color--primary-900</div>
      <div class="fsa-color--primary">fsa-color--primary</div>
      <div class="fsa-color--primary-300">fsa-color--primary-300</div>
      <div class="fsa-color--primary-200">fsa-color--primary-200</div>
      <div class="fsa-color--primary-100">fsa-color--primary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--secondary-900">fsa-color--secondary-900</div>
      <div class="fsa-color--secondary">fsa-color--secondary</div>
      <div class="fsa-color--secondary-300">fsa-color--secondary-300</div>
      <div class="fsa-color--secondary-200">fsa-color--secondary-200</div>
      <div class="fsa-color--secondary-100">fsa-color--secondary-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--tertiary-900">fsa-color--tertiary-900</div>
      <div class="fsa-color--tertiary">fsa-color--tertiary</div>
      <div class="fsa-color--tertiary-300">fsa-color--tertiary-300</div>
      <div class="fsa-color--tertiary-200">fsa-color--tertiary-200</div>
      <div class="fsa-color--tertiary-100">fsa-color--tertiary-100</div>
    </div>
  </div>
  <h4>Accent</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--aqua-900">fsa-color--aqua-900</div>
      <div class="fsa-color--aqua">fsa-color--aqua</div>
      <div class="fsa-color--aqua-300">fsa-color--aqua-300</div>
      <div class="fsa-color--aqua-200">fsa-color--aqua-200</div>
      <div class="fsa-color--aqua-100">fsa-color--aqua-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--red-900">fsa-color--red-900</div>
      <div class="fsa-color--red">fsa-color--red</div>
      <div class="fsa-color--red-300">fsa-color--red-300</div>
      <div class="fsa-color--red-200">fsa-color--red-200</div>
      <div class="fsa-color--red-100">fsa-color--red-100</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div>&nbsp;</div>
      <div class="fsa-color--yellow">fsa-color--yellow</div>
      <div class="fsa-color--yellow-300">fsa-color--yellow-300</div>
      <div class="fsa-color--yellow-200">fsa-color--yellow-200</div>
      <div class="fsa-color--yellow-100">fsa-color--yellow-100</div>
    </div>
  </div>
  <h4>Other</h4>
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div>default</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--black">fsa-color--black</div>
    </div>
    <div class="fsa-grid__1 fsa-grid__auto@m">
      <div class="fsa-color--white">fsa-color--white</div>
    </div>
  </div>
</div>

### Responsive

Selectively apply Text Colors at any Media Query breakpoint.

<code>class="fsa-color--<strong>[color]@[breakpoint]</strong>"</code>
<code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__text-color.html
{% endcapture %}

{% include rwd-viewer.html %}

## Ellipsis

<p class="fsa-text--lead">Selectively truncate text overflow with an ellipsis.</p>

### Variations

```html
<element class="fsa-ellipsis[--variation]">...</element>
```

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <h4>Default</h4>
    <p class="docs__code-sample"><code>class="fsa-ellipsis"</code></p>
    <div class="fsa-ellipsis">Tenetur vel enim numquam officiis dolorem soluta eveniet facere nulla esse maiores assumenda tempora nobis nde sint commodi atque consequuntur veniam nequ ibusdam incidunt accusantium enim a ea laboriosam explicabo obcaecati possimusarchitecto necessitatibus delectus reiciendis laboriosam tempore cumque natus quae ullam nam atque.</div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <h4>Unset</h4>
    <p class="docs__code-sample"><code>class="fsa-ellipsis<strong>--none</strong>"</code></p>
    <div class="fsa-ellipsis fsa-ellipsis--none">Tenetur vel enim numquam officiis dolorem soluta eveniet facere nulla esse maiores assumenda tempora nobis nde sint commodi atque consequuntur veniam nequ ibusdam incidunt accusantium enim a ea laboriosam explicabo obcaecati possimusarchitecto necessitatibus delectus reiciendis laboriosam tempore cumque natus quae ullam nam atque.</div>
  </div>
</div>

### Responsive

Set overflow of block-level elements to Ellipsis at select media query breakpoints.

<p>
  <code>fsa-ellipsis<strong>[--none]@[breakpoint]</strong></code>, where
  <code>breakpoint</code> is one of
  <code title="small">s</code>,
  <code title="medium">m</code>,
  <code title="large">l</code>, or
  <code title="extra large">xl</code>
</p>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__ellipsis.html
{% endcapture %}

{% include rwd-viewer.html %}

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
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio amet consectetur adipisicing elit. Minus pariatur quaerat commodi maxime dignissimos repellendus placeat nulla quasi, sed at accusantium cum laborum minima. Quae earum enim unde vident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>

#### Right

```html
<el class="fsa-float--right">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--right"><strong>I'm floating to right</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio amet consectetur adipisicing elit. Minus pariatur quaerat commodi maxime dignissimos repellendus placeat nulla quasi, sed at accusantium cum laborum minima. Quae earum enim unde vident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
</div>

#### None

Most likely used to override a component's current `float` property.

```html
<el class="fsa-float--none">...</el>
```
<div class="fsa-clearfix docs__utilities__demo">
  <p class="docs__utilities__demo-item fsa-float--left fsa-float--none"><strong>I'm not floating.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae itaque velit? Excepturi commodi, tempore odio amet consectetur adipisicing elit. Minus pariatur quaerat commodi maxime dignissimos repellendus placeat nulla quasi, sed at accusantium cum laborum minima. Quae earum enim unde vident deserunt? Illo ut tempora error est corporis optio amet ipsa doloremque ad.</p>
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

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__float.html
{% endcapture %}

{% include rwd-viewer.html %}

## Font

<p class="fsa-text--lead">Selectively apply Typeface and Weight to text.</p>

```html
<el class="fsa-font--[VARIATION]">...</el>
```

Where `variation` is one of `sans` (default), `sans-light`, `fsa-font--sans-bold`, or `fsa-font--mono`.

### Variations

### Sans

```html
<div class="fsa-font--sans">Lorem ipsum dolor sit amet.</div>
```
<div class="ds-preview">
  <div class="fsa-font--sans fsa-text-size--5">Lorem ipsum dolor sit amet.</div>
</div>

### Sans Light

```html
<div class="fsa-font--sans-light">Lorem ipsum dolor sit amet.</div>
```
<div class="ds-preview">
  <div class="fsa-font--sans-light fsa-text-size--5">Lorem ipsum dolor sit amet.</div>
</div>

### Sans Bold

```html
<div class="fsa-font--sans-bold">Lorem ipsum dolor sit amet.</div>
```
<div class="ds-preview">
  <div class="fsa-font--sans-bold fsa-text-size--5">Lorem ipsum dolor sit amet.</div>
</div>

### Monospace

```html
<div class="fsa-font--mono">Lorem ipsum dolor sit amet.</div>
```
<div class="ds-preview">
  <div class="fsa-font--mono fsa-text-size--5">Lorem ipsum dolor sit amet.</div>
</div>

### Responsive

Selectively apply Font at any Media Query breakpoint.

`class="fsa-font--[variation]@[breakpoint]"` where `breakpoint` is one of `s`, `m`, `l`, or `xl`

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__font.html
{% endcapture %}

{% include rwd-viewer.html %}

## Lists

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text">Refer to <a href="{{ site.baseurl }}components/lists/">Components / Lists</a>, e.g. <a href="{{ site.baseurl }}components/lists/#explicit">Bullet List</a></p>
  </div>
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

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__margins.html
{% endcapture %}

{% include rwd-viewer.html %}

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

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__padding.html
{% endcapture %}

{% include rwd-viewer.html %}

## Screenreader only

<p class="fsa-text--lead">Visibly hidden <strong>though announced</strong> by assistive technology (e.g. screenreaders) within a variety of screen size ranges (i.e. Media Query breakpoints).</p>

This component must not be used to hide interactive content; for that, defer to [Visibility Utility classes](#visibility).

```html
<element class="fsa-sr-only@[size]">...</element>
```

Visibly hide when viewport is *within* a specific range, where `[size]` is one of `xs-only`, `s-only`, `m-only`, `l-only`, or `xl-only`.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__sr-only.html
{% endcapture %}

{% include rwd-viewer.html %}

## Shadows

Selectively apply [Shadows]({{ site.baseurl }}visual-style/shadows/) to containing blocks.

### Variations

```html
<el class="fsa-shadow--[VARIATION]">...</el>
```

Where `VARIATION` is one of `popout`, `overlay`, `raised`, or `none`.

#### Popout

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow--popout"></div>
</div>

#### Overlay

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow--overlay"></div>
</div>

#### Raised

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow--raised"></div>
</div>

#### None

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow--none"></div>
</div>

### Hover

```html
<el class="fsa-shadow--:hover--[VARIATION]">...</el>
```

Where `VARIATION` is one of `popout`, `overlay`, `raised`, or `none`.

#### Popout

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow:hover--popout"></div>
</div>

#### Overlay

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow:hover--overlay"></div>
</div>

#### Raised

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow:hover--raised"></div>
</div>

#### None

<div class="ds-preview">
  <div class="fsa-m--l fsa-p--xl fsa-bg--white fsa-shadow:hover--none"></div>
</div>

### Responsive

Selectively apply at any Media Query breakpoint.

<code>class="fsa-shadow--<strong>[variation]@[breakpoint]</strong>"</code> where
<code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__shadows.html
{% endcapture %}

{% include rwd-viewer.html %}

## Text Alignment

<p class="fsa-text--lead">Selectively align blocks of content.</p>

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

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__text-align.html
{% endcapture %}

{% include rwd-viewer.html %}

## Text Size

<p class="fsa-text--lead">Selectively adjust text size. </p>

Text Size utility classes follow's the system's **vertical rythym** &ndash; [Typography]({{ site.baseurl }}visual-style/typography/) and [Size and Space]({{ site.baseurl }}visual-style/size-and-space/) working in concert for a cohesive look and feel.

<aside>
  <div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text"><strong>Note:</strong> to override text size of <code>&lt;h1&gt;</code> &ndash; <code>&lt;h6&gt;</code> elements, refer to <a href="#text-headers">Text Headers utilities</a>.</p>
    </div>
  </div>
</aside>

Where `size` is one of `0` - `7`. For reference, the **base** font size is equal to `3`.

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

<p><code>class="fsa-text-size<strong>--[size]@[breakpoint]</strong>"</code>, where <code>size</code> is one of <code>0</code> - <code>7</code>, and <code>breakpoint</code> is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code></p>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__text-size.html
{% endcapture %}

{% include rwd-viewer.html %}

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

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
http://usda-fsa.github.io/fsa-style/demo/rwd__text-headers.html
{% endcapture %}

{% include rwd-viewer.html %}

## Visibility

<p class="fsa-text--lead">Selectively show or hide elements or blocks at a variety of screen sizes (i.e. Media Query breakpoints).</p>

<aside>
  <div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text"><strong>Note:</strong> If content should remain accessible to assistive technology (e.g. screenreaders), use <a href="#screenreader-only">Screenreader only</a> Utility classes.</p>
    </div>
  </div>
</aside>

### Show at minimum screen size

<code>class="fsa-show@<strong>[size]</strong>"</code>. Show when <em>at least</em> <code>[size]</code>, where <code>[size]</code> is one of <code>s</code>, <code>m</code>, <code>l</code>, or <code>xl</code>.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--show-min-screen-size.html
{% endcapture %}

{% include rwd-viewer.html %}

### Show at only specific screen size

<code>class="fsa-show@<strong>[size]-only</strong>"</code>. Show <em>only</em> at <code>[size]</code>, where <code>[size]</code> is one of <code>s</code>, <code>m</code>, <code>l</code>, or <code>xl</code>.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__visibility--min-screen-size.html
{% endcapture %}

{% include rwd-viewer.html %}

### Hide at minimum screen size

<code>class="fsa-hide@<strong>[size]</strong>"</code>. Hide when <em>at least</em> <code>[size]</code>, where <code>[size]</code> is one of <code>s</code>, <code>m</code>, or <code>l</code>.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--hide-min-screen-size.html
{% endcapture %}

{% include rwd-viewer.html %}

### Hide at specific screen size

<code>class="fsa-hide@<strong>[size]-only</strong>"</code>. Hide <em>only</em> at <code>[size]</code>, where <code>[size]</code> is one of <code>xs</code>, <code>s</code>, <code>m</code>, <code>l</code>, or <code>xl</code>.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
http://usda-fsa.github.io/fsa-style/demo/rwd__visibility--hide-at-screen-size.html
{% endcapture %}

{% include rwd-viewer.html %}