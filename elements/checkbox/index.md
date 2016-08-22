---
layout: page
parent: "Elements"
title: "Checkbox"
intro: "Checkboxes allow users to select one or more options from a visible list."
custom_js: "checkbox.js"
jump_menu: true
---

<div class="pb-preview">
  <p>
    <input class="fsa-checkbox" id="apple-pie" type="checkbox" name="pies" value="apple-pie" checked="">
    <label for="apple-pie">Apple Pie</label>
  </p>
  <p>
    <input class="fsa-checkbox" id="key-lime-pie" type="checkbox" name="pies" value="key-lime-pie">
    <label for="key-lime-pie">Key Lime Pie</label>
  </p>
  <p>
    <input class="fsa-checkbox" id="raspberry-pie" type="checkbox" name="pies" disabled="">
    <label for="raspberry-pie">Raspberry Pie</label>
  </p>
  <p>
    <input class="fsa-checkbox" id="moms-apple-pie" type="checkbox" name="pies" value="moms-apple-pie" checked="checked" disabled="disabled">
    <label for="moms-apple-pie">Moms Apple Pie</label>
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

* asdf
* asdf

### Don't Use

* asdf
* asdf

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the select element, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Make sure your dropdown has an accessible label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).
* Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

## General Guidance

* fdasklrewq
* qwerlksadf

## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet)
