---
layout: page
parent: "Components"
type: "UI Component"
title: "Labels"
shortName: "component__labels"
intro: "Display complementary information such as metadata or filters."
jump_menu: true
relatedItems:
  - "Timeline"
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-preview">
  <div class="fsa-level">
    <span class="fsa-label">Default Label</span>
    <span class="fsa-label fsa-label--neutral">General Label</span>
    <span class="fsa-label fsa-label--general">General Label</span>
    <span class="fsa-label fsa-label--alert">Alert Label</span>
    <span class="fsa-label fsa-label--warning">Warning Label</span>
    <span class="fsa-label fsa-label--success">Success Label</span>
  </div>
</div>

## Variants

Labels are styled with `class="fsa-label fsa-label--[type] fsa-label--[size]"`.

* **Read-only**: use a `<span>` element.
* **Invoke an action**: use a `<button>` element.
* **Navigate somewhere**: use an `<a>` elment.

```html
<span class="fsa-label fsa-label--[variant]">Label</span>
<button class="fsa-label fsa-label--[variant]" type="button">Label</button>
<a class="fsa-label fsa-label--[variant]" href="/link.html">Label</a>
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
<div class="fsa-level">
  <span class="fsa-label fsa-label--large">Large Default</span>
  <span class="fsa-label fsa-label--neutral fsa-label--large">Large Neutral</span>
  <span class="fsa-label fsa-label--general fsa-label--large">Large General</span>
  <span class="fsa-label fsa-label--alert fsa-label--large">Large Alert</span>
  <span class="fsa-label fsa-label--warning fsa-label--large">Large Warning</span>
  <span class="fsa-label fsa-label--success fsa-label--large">Large Success</span>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

### Extra Large

{% capture snippet %}
<div class="fsa-level">
  <span class="fsa-label fsa-label--extra-large">Label</span>
  <span class="fsa-label fsa-label--neutral fsa-label--extra-large">Label</span>
  <span class="fsa-label fsa-label--general fsa-label--extra-large">Label</span>
  <span class="fsa-label fsa-label--alert fsa-label--extra-large">Label</span>
  <span class="fsa-label fsa-label--warning fsa-label--extra-large">Label</span>
  <span class="fsa-label fsa-label--success fsa-label--extra-large">Label</span>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Actionable

Label styles can be applied to nearly any HTML element, defaulting to non-actionable `<span>` elements as shown above. Below are `<a>` and `<button>` elements:

{% capture snippet %}
<div class="fsa-level">
  <a class="fsa-label" href="/link.html">Anchor</a>
  <button class="fsa-label" type="button">Button</button>
  <button class="fsa-label" type="button" disabled="disabled">Disabled Button</button>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

### Example: Dark Background

<div class="ds-preview fsa-bg--tertiary-300">
  <div class="fsa-level">
    <span class="fsa-label">Default</span>
    <span class="fsa-label fsa-label--neutral">General</span>
    <span class="fsa-label fsa-label--general">General</span>
    <span class="fsa-label fsa-label--alert">Alert</span>
    <span class="fsa-label fsa-label--warning">Warning</span>
    <span class="fsa-label fsa-label--success">Success</span>
  </div>
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
