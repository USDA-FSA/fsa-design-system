---
layout: page
parent: "Components"
title: "Badges"
intro: "Badges are used as indicators of an update or action items that have yet to be completed."
jump_menu: true
---

<div class="ds-preview">
  <p>
    <span class="fsa-badge">1</span>
    <span class="fsa-badge fsa-badge--general">11</span>
    <span class="fsa-badge fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--success">99+</span>
  </p>
</div>

## Variations

Badges are styled with `class="fsa-badge fsa-badge--[type] fsa-badge--[size]"`.

* **Read-only**: use a `<span>` element.
* **Invoke an action**: use a `<button>` element.
* **Navigate somewhere**: use an `<a>` elment.

```html
<span class="fsa-badge">1</span>
<button class="fsa-badge" type="button">1</button>
<a class="fsa-badge" href="link.html">1</a>
```

### Default

<div class="ds-preview">
  <span class="fsa-badge">1</span>
</div>
```html
<span class="fsa-badge">1</span>
```

### General

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--general">11</span>
</div>
```html
<span class="fsa-badge fsa-badge--general">11</span>
```

### Alert

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
</div>
```html
<span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
```

### Warning

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
</div>
```html
<span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
```

### Success

<div class="ds-preview">
  <span class="fsa-badge fsa-badge--success">99+</span> Feature Updates
</div>
```html
<span class="fsa-badge fsa-badge--success">99+</span> Feature Updates
```

### Large

<div class="ds-preview">
  <p>
    <span class="fsa-badge fsa-badge--large">1</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--general">8</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--success">99+</span>
  </p>
</div>
```html
<p>
  <span class="fsa-badge fsa-badge--large">1</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--general">8</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--success">99+</span>
</p>
```

### Actionable

Badge styles can be applied to nearly any HTML element, defaulting to non-actionable `<span>` elements as shown above. Below are `<a>` and `<button>` elements:

<div class="ds-preview">
  <a class="fsa-badge fsa-badge--general" href="link.html">A</a>
  <button class="fsa-badge fsa-badge--general" type="button">B</button>
  <button class="fsa-badge fsa-badge--general" type="button" disabled="disabled">Z</button>
</div>
```html
<a class="fsa-badge fsa-badge--general" href="link.html">A</a>
<button class="fsa-badge fsa-badge--general" type="button">B</button>
<button class="fsa-badge fsa-badge--general" type="button" disabled="disabled">Z</button>
```

### Inverse

<div class="ds-preview">
  <p style="background-color: #666; padding: 12px">
    <a class="fsa-badge fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
    <span class="fsa-badge fsa-badge--inverse">1</span>
    <span class="fsa-badge fsa-badge--inverse">11</span>
    <span class="fsa-badge fsa-badge--inverse">22</span>
    <span class="fsa-badge fsa-badge--inverse">99+</span>
  </p>
</div>
```html
<p style="background-color: #666; padding: 12px">
  <a class="fsa-badge fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
  <span class="fsa-badge fsa-badge--inverse">1</span>
  <span class="fsa-badge fsa-badge--inverse">11</span>
  <span class="fsa-badge fsa-badge--inverse">22</span>
  <span class="fsa-badge fsa-badge--inverse">99+</span>
</p>
```

### Inverse & Large


<div class="ds-preview">
  <p style="background-color: #666; padding: 12px">
    <a class="fsa-badge fsa-badge--large fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">1</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">11</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">22</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">99+</span>
  </p>
</div>
```html
<p style="background-color: #666; padding: 12px">
  <a class="fsa-badge fsa-badge--large fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">1</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">11</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">22</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">99+</span>
</p>
```

## Usage

### Use When

* The application requires a notification system with minimal footprint.
* An application button requires a notification badge within it.

### Don't Use

* Within text paragraphs to indicate something other than a notification.
* With color as the only indicator of variation as this is not Accessible.

## General Guidance

* Badges should be used for real-time notifications with minimal footprint.
* See [Accessibility Section]( {{ site.baseurl }}guides/accessibility/color-and-contrast ) for more information on color guidelines.
