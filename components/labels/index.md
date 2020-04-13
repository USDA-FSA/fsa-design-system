---
layout: page
parent: "Components"
title: "Labels"
shortName: "component__labels"
intro: "Labels are used to draw attention to new, updated, or important content within an application."
jump_menu: true
---

<div class="ds-preview">
  <span class="fsa-label">Default Label</span>
  <span class="fsa-label fsa-label--neutral">General Label</span>
  <span class="fsa-label fsa-label--general">General Label</span>
  <span class="fsa-label fsa-label--alert">Alert Label</span>
  <span class="fsa-label fsa-label--warning">Warning Label</span>
  <span class="fsa-label fsa-label--success">Success Label</span>
</div>

## Variations

Labels are styled with `class="fsa-label fsa-label--[type] fsa-label--[size]"`.

* **Read-only**: use a `<span>` element.
* **Invoke an action**: use a `<button>` element.
* **Navigate somewhere**: use an `<a>` elment.

```html
<span class="fsa-label fsa-label--[variation]">Label</span>
<button class="fsa-label fsa-label--[variation]" type="button">Label</button>
<a class="fsa-label fsa-label--[variation]" href="link.html">Label</a>
```

### Default

<div class="ds-preview">
  <span class="fsa-label">Default Label</span>
</div>
```html
<span class="fsa-label">Default Label</span>
```

### Neutral

<div class="ds-preview">
  <span class="fsa-label fsa-label--neutral">Neutral Label</span>
</div>
```html
<span class="fsa-label fsa-label--neutral">Neutral Label</span>
```

### General

<div class="ds-preview">
  <span class="fsa-label fsa-label--general">General Label</span>
</div>
```html
<span class="fsa-label fsa-label--general">General Label</span>
```

### Alert

<div class="ds-preview">
  <span class="fsa-label fsa-label--alert">Alert Label</span>
</div>
```html
<span class="fsa-label fsa-label--alert">Alert Label</span>
```

### Warning

<div class="ds-preview">
  <span class="fsa-label fsa-label--warning">Warning Label</span>
</div>
```html
<span class="fsa-label fsa-label--warning">Warning Label</span>
```

### Success

<div class="ds-preview">
  <span class="fsa-label fsa-label--success">Success Label</span>
</div>
```html
<span class="fsa-label fsa-label--success">Success Label</span>
```

### Large

<div class="ds-preview">
  <span class="fsa-label fsa-label--large">Large Default</span>
  <span class="fsa-label fsa-label--neutral fsa-label--large">Large Neutral</span>
  <span class="fsa-label fsa-label--general fsa-label--large">Large General</span>
  <span class="fsa-label fsa-label--alert fsa-label--large">Large Alert</span>
  <span class="fsa-label fsa-label--warning fsa-label--large">Large Warning</span>
  <span class="fsa-label fsa-label--success fsa-label--large">Large Success</span>
</div>
```html
<span class="fsa-label fsa-label--large">Large Default</span>
<span class="fsa-label fsa-label--neutral fsa-label--large">Large Neutral</span>
<span class="fsa-label fsa-label--general fsa-label--large">Large General</span>
<span class="fsa-label fsa-label--alert fsa-label--large">Large Alert</span>
<span class="fsa-label fsa-label--warning fsa-label--large">Large Warning</span>
<span class="fsa-label fsa-label--success fsa-label--large">Large Success</span>
```

### Actionable

Label styles can be applied to nearly any HTML element, defaulting to non-actionable `<span>` elements as shown above. Below are `<a>` and `<button>` elements:

<div class="ds-preview">
  <a class="fsa-label fsa-label--general" href="link.html">Anchor</a>
  <button class="fsa-label fsa-label--general" type="button">Button</button>
  <button class="fsa-label fsa-label--general" type="button" disabled="disabled">Disabled Button</button>
</div>
```html
<a class="fsa-label fsa-label--general" href="link.html">Anchor</a>
<button class="fsa-label fsa-label--general" type="button">Button</button>
<button class="fsa-label fsa-label--general" type="button" disabled="disabled">Disabled Button</button>
```

### Example: Dark Background

<div class="ds-preview" style="background-color: #666;">
  <span class="fsa-label">Default</span>
  <span class="fsa-label fsa-label--neutral">General</span>
  <span class="fsa-label fsa-label--general">General</span>
  <span class="fsa-label fsa-label--alert">Alert</span>
  <span class="fsa-label fsa-label--warning">Warning</span>
  <span class="fsa-label fsa-label--success">Success</span>
</div>

## Usage

### Use When

* You would like to flag or call attention to content within an application.

### Don't Use

* As a button or as any type of navigation.

## General Guidance

* Labels can be used as a call to bring attention or to categorize content.
* Labels can be used to style Tags is used within an application.
