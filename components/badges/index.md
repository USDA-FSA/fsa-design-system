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
    <span class="fsa-badge fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--success">197</span>
  </p>
</div>

## Variations

Badges are styled with `class="fsa-badge fsa-badge--[type] fsa-badge--[size]"`.

### Default

```html
<span class="fsa-badge">1</span> Message
```
<div class="ds-preview">
  <span class="fsa-badge">1</span> Message
</div>

### Alert

```html
<span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
```
<div class="ds-preview">
  <span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
</div>

### Warning

```html
<span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
```
<div class="ds-preview">
  <span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
</div>

### Success

```html
<span class="fsa-badge fsa-badge--success">197</span> Feature Updates
```
<div class="ds-preview">
  <span class="fsa-badge fsa-badge--success">197</span> Feature Updates
</div>

### Large

```html
<p>
  <span class="fsa-badge fsa-badge--large">1</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--success">197</span>
</p>
```
<div class="ds-preview">
  <p>
    <span class="fsa-badge fsa-badge--large">1</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--success">197</span>
  </p>
</div>

### Inverse

```html
<p style="background-color: #666; padding: 12px">
  <a class="fsa-badge fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
  <span class="fsa-badge fsa-badge--inverse">1</span>
  <span class="fsa-badge fsa-badge--inverse">11</span>
  <span class="fsa-badge fsa-badge--inverse">22</span>
  <span class="fsa-badge fsa-badge--inverse">197</span>
</p>
```

<div class="ds-preview">
  <p style="background-color: #666; padding: 12px">
    <a class="fsa-badge fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
    <span class="fsa-badge fsa-badge--inverse">1</span>
    <span class="fsa-badge fsa-badge--inverse">11</span>
    <span class="fsa-badge fsa-badge--inverse">22</span>
    <span class="fsa-badge fsa-badge--inverse">197</span>
  </p>
</div>

### Inverse & Large

```html
<p style="background-color: #666; padding: 12px">
  <a class="fsa-badge fsa-badge--large fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">1</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">11</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">22</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--inverse">197</span>
</p>
```

<div class="ds-preview">
  <p style="background-color: #666; padding: 12px">
    <a class="fsa-badge fsa-badge--large fsa-badge--inverse" href="link/to/asdfasdf.html">1</a>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">1</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">11</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">22</span>
    <span class="fsa-badge fsa-badge--large fsa-badge--inverse">197</span>
  </p>
</div>

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
