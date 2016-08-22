---
layout: page
parent: "Elements"
title: "Radio"
intro: "Radio buttons allow users to see all available choices at once and select exactly one option."
jump_menu: true
---

<div class="pb-preview">
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

Checkbox elements are styled via `class="fsa-checkbox"`. Variations don't exist, though they are uniquely styled depending on their state and may be combinable, e.g. disabled and checked.

### Default

```html
<p>
  <input class="fsa-checkbox" id="lorem-9683783" type="checkbox" name="lorem-9683783" value="lorem-9683783">
  <label for="lorem-9683783">Label</label>
</p>
```
<div class="pb-preview">
  <p>
    <input class="fsa-checkbox" id="lorem-9683783" type="checkbox" name="lorem-9683783" value="lorem-9683783">
    <label for="lorem-9683783">Label</label>
  </p>
</div>

### Checked

```html
<p>
  <input class="fsa-checkbox" checked="checked" id="lorem-857" type="checkbox" name="lorem-857" value="lorem-857">
  <label for="lorem-857">Label</label>
</p>
```
<div class="pb-preview">
  <p>
    <input class="fsa-checkbox" checked="checked" id="lorem-857" type="checkbox" name="lorem-857" value="lorem-857">
    <label for="lorem-857">Label</label>
  </p>
</div>

### Disabled

```html
<p>
  <input class="fsa-checkbox" disabled="disabled" id="lorem-978" type="checkbox" name="lorem-978" value="lorem-978">
  <label for="lorem-978">Label</label>
</p>
```
<div class="pb-preview">
  <p>
    <input class="fsa-checkbox" disabled="disabled" id="lorem-978" type="checkbox" name="lorem-978" value="lorem-978">
    <label for="lorem-978">Label</label>
  </p>
</div>

### Disabled and Checked

```html
<p>
  <input class="fsa-checkbox" disabled="disabled" checked="checked" id="lorem-935200" type="checkbox" name="lorem-935200" value="lorem-935200">
  <label for="lorem-935200">Label</label>
</p>
```
<div class="pb-preview">
  <p>
    <input class="fsa-checkbox" disabled="disabled" checked="checked" id="lorem-935200" type="checkbox" name="lorem-935200" value="lorem-935200">
    <label for="lorem-935200">Label</label>
  </p>
</div>

### Indeterminate

You can't make a checkbox indeterminate through HTML. There is no indeterminate attribute. It is a property of checkboxes though, which you can change via JavaScript, as has been done in this example.

```html
<!-- HTML  -->
<p>
  <input class="fsa-checkbox" id="checkbox-indeterminate-example" type="checkbox" name="checkbox-indeterminate-example" value="checkbox-indeterminate-example">
  <label for="checkbox-indeterminate-example">Label</label>
</p>
```
```javascript
// JavaScript
var checkbox = document.getElementById("checkbox-indeterminate-example");
checkbox.indeterminate = true;
```
<div class="pb-preview">
  <p>
    <input class="fsa-checkbox" id="checkbox-indeterminate-example" type="checkbox" name="checkbox-indeterminate-example" value="checkbox-indeterminate-example">
    <label for="checkbox-indeterminate-example">Label</label>
  </p>
</div>

## Usage

### Use When

* When a user can select any number of choices from a set list.
* When a user needs to choose “yes” or “no” on only one option (use a stand-alone checkbox). For example, to toggle a setting on or off.
* When users need to see all the available options at a glance.

### Don't Use

* If there are too many options to display on a mobile screen.
* If a user can only select one option from a list (use [radio buttons]({{ site.baseurl }}elements/radio/) instead).

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the select element, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Surround a related set of checkboxes with a `<fieldset>`. The `<legend>` provides context for the grouping. Do not use `fieldset` and `legend` for a single check.
* Each input should have a semantic `id` attribute, and its corresponding `<label>` should have the same value in its `for` attribute.

## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet)
