---
layout: page
parent: "Components"
type: "UI Component"
title: "Labels"
shortName: "component__labels"
intro: "Display complementary labels, such as metadata or filters."
jump_menu: true
---

<div class="ds-preview">
  <ul class="fsa-level">
    <li><span class="fsa-label">Default Label</span></li>
    <li><span class="fsa-label fsa-label--neutral">General Label</span></li>
    <li><span class="fsa-label fsa-label--general">General Label</span></li>
    <li><span class="fsa-label fsa-label--alert">Alert Label</span></li>
    <li><span class="fsa-label fsa-label--warning">Warning Label</span></li>
    <li><span class="fsa-label fsa-label--success">Success Label</span></li>
  </ul>
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

{% capture snippet %}
<span class="fsa-label">Default Label</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Dismissable

{% capture snippet %}
<span class="fsa-label fsa-label--dismissable">
  Label
  <button class="fsa-label__remove" aria-label="Remove" title="Remove"></button>
</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Neutral

{% capture snippet %}
<span class="fsa-label fsa-label--neutral">Neutral Label</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### General

{% capture snippet %}
<span class="fsa-label fsa-label--general">General Label</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Alert

{% capture snippet %}
<span class="fsa-label fsa-label--alert">Alert Label</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Warning

{% capture snippet %}
<span class="fsa-label fsa-label--warning">Warning Label</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Success

{% capture snippet %}
<span class="fsa-label fsa-label--success">Success Label</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<ul class="fsa-level">
  <li><span class="fsa-label fsa-label--large">Large Default</span></li>
  <li><span class="fsa-label fsa-label--neutral fsa-label--large">Large Neutral</span></li>
  <li><span class="fsa-label fsa-label--general fsa-label--large">Large General</span></li>
  <li><span class="fsa-label fsa-label--alert fsa-label--large">Large Alert</span></li>
  <li><span class="fsa-label fsa-label--warning fsa-label--large">Large Warning</span></li>
  <li><span class="fsa-label fsa-label--success fsa-label--large">Large Success</span></li>
</ul>
{% endcapture %}
{% include preview-and-snippet.html %}

### Extra Large

{% capture snippet %}
<ul class="fsa-level">
  <li><span class="fsa-label fsa-label--extra-large">Label</span></li>
  <li><span class="fsa-label fsa-label--neutral fsa-label--extra-large">Label</span></li>
  <li><span class="fsa-label fsa-label--general fsa-label--extra-large">Label</span></li>
  <li><span class="fsa-label fsa-label--alert fsa-label--extra-large">Label</span></li>
  <li><span class="fsa-label fsa-label--warning fsa-label--extra-large">Label</span></li>
  <li><span class="fsa-label fsa-label--success fsa-label--extra-large">Label</span></li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

### Actionable

Label styles can be applied to nearly any HTML element, defaulting to non-actionable `<span>` elements as shown above. Below are `<a>` and `<button>` elements:

{% capture snippet %}
<ul class="fsa-level">
  <li><a class="fsa-label" href="link.html">Anchor</a></li>
  <li><button class="fsa-label" type="button">Button</button></li>
  <li><button class="fsa-label" type="button" disabled="disabled">Disabled Button</button></li>
</ul>
{% endcapture %}
{% include preview-and-snippet.html %}

### Example: Dark Background

<div class="ds-preview" style="background-color: #666;">
  <ul class="fsa-level">
    <li><span class="fsa-label">Default</span></li>
    <li><span class="fsa-label fsa-label--neutral">General</span></li>
    <li><span class="fsa-label fsa-label--general">General</span></li>
    <li><span class="fsa-label fsa-label--alert">Alert</span></li>
    <li><span class="fsa-label fsa-label--warning">Warning</span></li>
    <li><span class="fsa-label fsa-label--success">Success</span></li>
  </ul>
</div>

## Usage

{% capture usage_do %}
* When an application would like to flag or call attention to content within an application.
{% endcapture %}

{% capture usage_dont %}
* As a button or as any type of navigation.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Labels can be used as a call to bring attention or to categorize content.
* Labels can be used to style Tags is used within an application.
