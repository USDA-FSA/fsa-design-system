---
layout: page
parent: "Components"
title: "Button Group"
shortName: "component__button-group"
intro: "Use button groups as a mechanism to toggle between multiple button actions."
jump_menu: true
---

<div class="ds-preview fsa-m-t--none">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>

## Variations and Examples

Button groups are wrapped in a `<span>` tag and always start with `class="fsa-btn-group"`, modifiable with one or multiple `fsa-btn-group--[variation]`.

### Default

<div class="ds-preview">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>
```html
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```

### Small

<div class="ds-preview">
  <span class="fsa-btn-group fsa-btn-group--small" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>
```html
<span class="fsa-btn-group fsa-btn-group--small" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```


### Large

<div class="ds-preview">
  <span class="fsa-btn-group fsa-btn-group--large" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>
```html
<span class="fsa-btn-group fsa-btn-group--large" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```


### Block

<div class="ds-preview">
  <span class="fsa-btn-group fsa-btn-group--block" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>
```html
<span class="fsa-btn-group fsa-btn-group--block" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```

### Example: none selected

<div class="ds-preview">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label one</button>
  <button class="fsa-btn-group__item" type="button">Label two</button>
  <button class="fsa-btn-group__item" type="button">Label three</button>
  <button class="fsa-btn-group__item" type="button">Label fo</button>
  </span>
</div>
```html
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label one</button>
  <button class="fsa-btn-group__item" type="button">Label two</button>
  <button class="fsa-btn-group__item" type="button">Label three</button>
  <button class="fsa-btn-group__item" type="button">Label fo</button>
</span>
```

### Example: as `<a>` element

Each item, `fsa-btn-group__item`, will typically be a `<button>` element, though depending on their use might be an `<a>` element.

<div class="ds-preview">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <a class="fsa-btn-group__item" href="link.html">Label one</a>
    <a class="fsa-btn-group__item fsa-btn-group__item--active" href="link.html">Label active</a>
    <a class="fsa-btn-group__item" href="link.html">Label three</a>
    <a class="fsa-btn-group__item" href="link.html">Label fo</a>
  </span>
</div>
```html
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <a class="fsa-btn-group__item" href="link.html">Label one</a>
  <a class="fsa-btn-group__item fsa-btn-group__item--active" href="link.html">Label active</a>
  <a class="fsa-btn-group__item" href="link.html">Label three</a>
  <a class="fsa-btn-group__item" href="link.html">Label fo</a>
</span>
```

## Usage

{% capture usage_do %}
* When consolidating like actions into one condensed component acting as a toggle between the button options.
* If actions pertain to the same feature set and contextual functionality of the application.
{% endcapture %}

{% capture usage_dont %}
* When the functionality of the button does not pertain to the feature within the context of the application.
* If you want to lead users between pages of a website. Use [text links]({{ site.baseurl }}components/links/) instead.
* If less popular or lower priority actions may be visually styled as links.
{% endcapture %}

{% include do-dont.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Like buttons, button groups should display a visible focus state when users tab to them.

## General Guidance

* Make the first word of the button’s label an action verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* Use sentence case for button labels, e.g. "Sign up" instead of "Sign Up".


## Related Resources

* [Buttons]({{ site.baseurl }}components/buttons)
* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
