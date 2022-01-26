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

<div class="ds-combinator">
  <div class="ds-combinator__props">
    <h3 class="fsa-sr-only">Props</h3>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorText">Text</label>
      <input class="fsa-input fsa-input--small fsa-field__item" id="TheItem2" id="combinatorText" name="combinatorText" value="Label" data-behavior="combinator-custom-text">
    </div>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorType">Type</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorType" name="combinatorType" data-behavior="combinator-select" data-remove="fsa-label--neutral fsa-label--general fsa-label--alert fsa-label--warning fsa-label--success">
        <option value="" selected="selected">Default</option>
        <option value="fsa-label--neutral">Neutral</option>
        <option value="fsa-label--general">General</option>
        <option value="fsa-label--alert">Alert</option>
        <option value="fsa-label--warning">Warning</option>
        <option value="fsa-label--success">Success</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSize">Size</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorSize" name="combinatorSize" data-behavior="combinator-select" data-remove="fsa-label--large fsa-label--extra-large">
        <option value="" selected="selected">Small</option>
        <option value="fsa-label--large">Large</option>
        <option value="fsa-label--extra-large">Extra Large</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorDismissable">Dismissable</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorDismissable" name="combinatorDismissable" data-behavior="combinator-toggle-class combinator-toggle-hidden" data-toggle-hidden-target="#combinatorDismissableButton" value="fsa-label--dismissable">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorDisabled">Disabled</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorDisabled" name="combinatorDisabled" data-behavior="combinator-toggle-disabled">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
  </div>
  <div class="ds-combinator__preview">
    <h3 class="fsa-sr-only">Props Demo</h3>
    <span class="fsa-label" id="combinatorTarget">
      <span id="combinatorTextLabel">Label</span>
      <button hidden id="combinatorDismissableButton" class="fsa-label__remove" aria-label="Remove" title="Remove"></button>
    </span>
  </div>
</div>
<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code id="combinatorCodeSnippet"></code></pre></div></div>
<div id="combinatorHolder" aria-hidden="true" hidden></div>

## Variants

Labels are styled with `class="fsa-label fsa-label--[VARIANT] fsa-label--[SIZE]"`.

* **Read-only**: use a `<span>` element.
* **Invoke an action**: use a `<button>` element.
* **Navigate somewhere**: use an `<a>` elment.

```html
<span class="fsa-label">Label</span>
<button class="fsa-label" type="button">Label</button>
<a class="fsa-label" href="/link.html">Label</a>
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
