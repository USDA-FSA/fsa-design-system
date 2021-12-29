---
layout: page
parent: "Components"
type: "UI Component"
title: "Badges"
shortName: "component__badges"
intro: "Succinctly display quantifiable information."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
relatedItems:
  - "Timeline"
---

<div class="ds-preview">
  <div class="fsa-level">
    <span class="fsa-badge">1</span>
    <span class="fsa-badge fsa-badge--neutral">8</span>
    <span class="fsa-badge fsa-badge--general">11</span>
    <span class="fsa-badge fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--success">99+</span>
  </div>
</div>

## Variants

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

{% capture snippet %}
<span class="fsa-badge">1</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Neutral

{% capture snippet %}
<span class="fsa-badge fsa-badge--neutral">8</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### General

{% capture snippet %}
<span class="fsa-badge fsa-badge--general">11</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Alert

{% capture snippet %}
<span class="fsa-badge fsa-badge--alert">11</span> Bugs Found
{% endcapture %}

{% include preview-and-snippet.html %}

### Warning

{% capture snippet %}
<span class="fsa-badge fsa-badge--warning">22</span> Issues Recorded
{% endcapture %}

{% include preview-and-snippet.html %}

### Success

{% capture snippet %}
<span class="fsa-badge fsa-badge--success">99+</span> Feature Updates
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<div class="fsa-level">
  <span class="fsa-badge fsa-badge--large">1</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--neutral">8</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--general">8</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--alert">11</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--warning">22</span>
  <span class="fsa-badge fsa-badge--large fsa-badge--success">99+</span>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Extra Large

{% capture snippet %}
<div class="fsa-level">
  <span class="fsa-badge fsa-badge--extra-large">1</span>
  <span class="fsa-badge fsa-badge--extra-large fsa-badge--neutral">8</span>
  <span class="fsa-badge fsa-badge--extra-large fsa-badge--general">8</span>
  <span class="fsa-badge fsa-badge--extra-large fsa-badge--alert">11</span>
  <span class="fsa-badge fsa-badge--extra-large fsa-badge--warning">22</span>
  <span class="fsa-badge fsa-badge--extra-large fsa-badge--success">99+</span>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Actionable

Badge styles can be applied to nearly any HTML element, defaulting to non-actionable `<span>` elements as shown above. Below are `<a>` and `<button>` elements:

{% capture snippet %}
<div class="fsa-level">
  <a class="fsa-badge" href="link.html">A</a> Anchor
  <button class="fsa-badge" type="button">B</button> Button
  <button class="fsa-badge" type="button" disabled="disabled">Z</button> Disabled
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: Dark Background

<div class="ds-preview" style="background-color: #666;">
  <div class="fsa-level">
    <span class="fsa-badge">1</span>
    <span class="fsa-badge fsa-badge--neutral">8</span>
    <span class="fsa-badge fsa-badge--general">11</span>
    <span class="fsa-badge fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--success">99+</span>
  </div>
</div>
```html
<div style="background-color: #666;">
  <div class="fsa-level">
    <span class="fsa-badge">1</span>
    <span class="fsa-badge fsa-badge--neutral">8</span>
    <span class="fsa-badge fsa-badge--general">11</span>
    <span class="fsa-badge fsa-badge--alert">11</span>
    <span class="fsa-badge fsa-badge--warning">22</span>
    <span class="fsa-badge fsa-badge--success">99+</span>
  </div>
</div>
```

## Usage

{% capture usage_do %}
* If an application requires a notification system with minimal footprint.
* If an application button requires a notification badge within it.
{% endcapture %}

{% capture usage_dont %}
* Within text paragraphs to indicate something other than a notification.
* With color as the only indicator of variant as this is not Accessible.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Badges should be used for real-time notifications with minimal footprint.
* See [Accessibility Section]( {{ site.baseurl }}guides/accessibility/color-and-contrast ) for more information on color guidelines.
