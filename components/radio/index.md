---
layout: page
parent: "Components"
title: "Radio"
intro: "Radio buttons allow users to see all available choices at once and select exactly one option."
jump_menu: true
---

<div class="ds-preview">
  <p>
    <input class="fsa-radio" id="chicken-noodle" type="radio" name="soup" value="chicken-noodle" checked="">
    <label for="chicken-noodle">Chicken Noodle</label>
  </p>
  <p>
    <input class="fsa-radio" id="tomato" type="radio" name="soup" value="tomato">
    <label for="tomato">Tomato</label>
  </p>
  <p>
    <input class="fsa-radio" id="cucumber" type="radio" name="soup" value="cucumber" disabled="">
    <label for="cucumber">Cucumber</label>
  </p>
  <p>
    <input class="fsa-radio" id="lettuce" type="radio" name="qweraewr" value="lettuce" disabled="" checked="">
    <label for="lettuce">Lettuce</label>
  </p>
</div>

## States

Radio buttons are styled via `class="fsa-radio"`. Variations don't exist, though they are uniquely styled depending on their state and may be combinable, e.g. disabled and checked.

### Default

```html
<p>
  <input class="fsa-radio" id="lorem-ipsum-9" type="radio" name="lorem-ipsum-9" value="lorem-ipsum-9">
  <label for="lorem-ipsum-9">Label</label>
</p>
```
<div class="ds-preview">
  <p>
    <input class="fsa-radio" id="lorem-ipsum-9" type="radio" name="lorem-ipsum-9" value="lorem-ipsum-9">
    <label for="lorem-ipsum-9">Label</label>
  </p>
</div>

### Checked

```html
<p>
  <input class="fsa-radio" checked="checked" id="lorem-ipsum-6" type="radio" name="lorem-ipsum-6" value="lorem-ipsum-6">
  <label for="lorem-ipsum-6">Label</label>
</p>
```
<div class="ds-preview">
  <p>
    <input class="fsa-radio" checked="checked" id="lorem-ipsum-6" type="radio" name="lorem-ipsum-6" value="lorem-ipsum-6">
    <label for="lorem-ipsum-6">Label</label>
  </p>
</div>

### Disabled

```html
<p>
  <input class="fsa-radio" disabled="disabled" id="lorem-ipsum-8" type="radio" name="lorem-ipsum-8" value="lorem-ipsum-8">
  <label for="lorem-ipsum-8">Label</label>
</p>
```
<div class="ds-preview">
  <p>
    <input class="fsa-radio" disabled="disabled" id="lorem-ipsum-8" type="radio" name="lorem-ipsum-8" value="lorem-ipsum-8">
    <label for="lorem-ipsum-8">Label</label>
  </p>
</div>

### Disabled and Checked

```html
<p>
  <input class="fsa-radio" checked="checked" disabled="disabled" id="lorem-ipsum-3" type="radio" name="lorem-ipsum-3" value="lorem-ipsum-3">
  <label for="lorem-ipsum-3">Label</label>
</p>
```
<div class="ds-preview">
  <p>
    <input class="fsa-radio" checked="checked" disabled="disabled" id="lorem-ipsum-3" type="radio" name="lorem-ipsum-3" value="lorem-ipsum-3">
    <label for="lorem-ipsum-3">Label</label>
  </p>
</div>

## Usage

### Use When

* Users need to select only one option out of a set of mutually exclusive choices.
* The number of available options can fit onto a mobile screen.
* In place of [select]({{ site.baseurl }}components/select/) element if there are few enough options (e.g. <=7) and the design can support it.

### Don't Use

* Consider [checkbox]({{ site.baseurl }}components/checkbox/) if users may have the option to select more than one.
* Consider a [select]({{ site.baseurl }}components/select/) if you don’t have enough space to list out all available options.
* If users should be able to select zero of the options; radio elements are not "uncheckable." A [checkbox]({{ site.baseurl }}components/checkbox/) may be warranted.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize a radio button, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
* Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.

## General guidance

* Users should be able to tap on or click on either the text `<label>` or the radio element itself to selectan option.
* Options that are listed vertically are easier to read than those listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which radio button.
* Make sure selections are adequately spaced for touch screens.
* Use caution if you decide to set a default value as they cannot be unchecked. Setting a default value can discourage users from making conscious decisions, seem pushy, or alienate users who don’t fit into your assumptions. If you are unsure, leave nothing selected by default.

<!-- ## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet) -->
