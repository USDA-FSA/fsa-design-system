---
layout: page
parent: "Components"
title: "Button Group"
intro: "Use button groups as a mechanism to toggle between multiple button actions."
jump_menu: true
---

<div class="ds-preview">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>


## Variations

Button groups are wrapped in a `<span>` tag and always start with `class="fsa-btn-group"`, modifiable with one or multiple `fsa-btn-group--[variation]`.

### Default

```html
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```
<div class="ds-preview">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>

### Small

```html
<span class="fsa-btn-group fsa-btn-group--small" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```
<div class="ds-preview">
  <span class="fsa-btn-group fsa-btn-group--small" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>


### Large

```html
<span class="fsa-btn-group fsa-btn-group--large" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```
<div class="ds-preview">
  <span class="fsa-btn-group fsa-btn-group--large" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>


### Block

```html
<span class="fsa-btn-group fsa-btn-group--block" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```
<div class="ds-preview">
  <span class="fsa-btn-group fsa-btn-group--block" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Active Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
    <button class="fsa-btn-group__item" type="button">Label</button>
  </span>
</div>

## Usage

### Use When

* You want to consolidate like actions into one condensed component that acts as a toggle between the button options.
* All actions pertain to the same feature set and contextual functionality of the application.

### Don't Use

* When the functionality of the button does not pertain to the feature within the context of the application.
* If you want to lead users between pages of a website. Use [text links]({{ site.baseurl }}components/links/) instead.
* Less popular or less important actions may be visually styled as links.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Like buttons, button groups should display a visible focus state when users tab to them.

## General Guidance

* Make the first word of the button’s label an action verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* Use sentence case for button labels, e.g. "Sign up" instead of "Sign Up".


## Related Resources

* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
