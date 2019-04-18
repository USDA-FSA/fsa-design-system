---
layout: page
parent: "Components"
title: "Checkbox"
intro: "Checkboxes allow users to select one or more options from a visible list."
custom_js: "checkbox.js"
jump_menu: true
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <ul class="fsa-form-list" aria-label="Example display of the 4 checkbox states">
    <li>
      <span>
        <input class="fsa-checkbox" id="apple-pie" type="checkbox" name="pies" value="apple-pie" checked="">
        <label for="apple-pie">Apple Pie</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="key-lime-pie" type="checkbox" name="pies" value="key-lime-pie">
        <label for="key-lime-pie">Key Lime Pie</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="raspberry-pie" type="checkbox" name="pies" disabled="">
        <label for="raspberry-pie">Raspberry Pie</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="moms-apple-pie" type="checkbox" name="pies" value="moms-apple-pie" checked="checked" disabled="disabled">
        <label for="moms-apple-pie">Mom's Apple Pie</label>
      </span>
    </li>
  </ul>
</div>
```html
<ul class="fsa-form-list" aria-label="Example display of the 4 checkbox states">
  <li>
    <span>
      <input class="fsa-checkbox" id="apple-pie" type="checkbox" name="pies" value="apple-pie" checked="">
      <label for="apple-pie">Apple Pie</label>
    </span>
  </li>
  <li>
    <span>
      <input class="fsa-checkbox" id="key-lime-pie" type="checkbox" name="pies" value="key-lime-pie">
      <label for="key-lime-pie">Key Lime Pie</label>
    </span>
  </li>
  <li>
    <span>
      <input class="fsa-checkbox" id="raspberry-pie" type="checkbox" name="pies" disabled="">
      <label for="raspberry-pie">Raspberry Pie</label>
    </span>
  </li>
  <li>
    <span>
      <input class="fsa-checkbox" id="moms-apple-pie" type="checkbox" name="pies" value="moms-apple-pie" checked="checked" disabled="disabled">
      <label for="moms-apple-pie">Mom's Apple Pie</label>
    </span>
  </li>
</ul>
```

## States

Checkbox components are styled via `class="fsa-checkbox"`. Variations don't exist, though they are uniquely styled depending on their state and may be combinable, e.g. disabled and checked.

### Default

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox" id="lorem-9683783" type="checkbox" name="lorem-9683783" value="lorem-9683783">
    <label for="lorem-9683783">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-checkbox" id="lorem-9683783" type="checkbox" name="lorem-9683783" value="lorem-9683783">
  <label for="lorem-9683783">Label</label>
</span>
```

### Checked

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox" checked="checked" id="lorem-857" type="checkbox" name="lorem-857" value="lorem-857">
    <label for="lorem-857">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-checkbox" checked="checked" id="lorem-857" type="checkbox" name="lorem-857" value="lorem-857">
  <label for="lorem-857">Label</label>
</span>
```

### Disabled

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox" disabled="disabled" id="lorem-978" type="checkbox" name="lorem-978" value="lorem-978">
    <label for="lorem-978">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-checkbox" disabled="disabled" id="lorem-978" type="checkbox" name="lorem-978" value="lorem-978">
  <label for="lorem-978">Label</label>
</span>
```

### Disabled and Checked

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox" disabled="disabled" checked="checked" id="lorem-935200" type="checkbox" name="lorem-935200" value="lorem-935200">
    <label for="lorem-935200">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-checkbox" disabled="disabled" checked="checked" id="lorem-935200" type="checkbox" name="lorem-935200" value="lorem-935200">
  <label for="lorem-935200">Label</label>
</span>
```

### Indeterminate

You can't make a checkbox indeterminate through HTML, as there is no `indeterminate` attribute for an `input` element. It is a *property* of checkboxes though, modifiable via JavaScript, as has been done in this example:

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox" id="checkbox-indeterminate-example" type="checkbox" name="checkbox-indeterminate-example" value="checkbox-indeterminate-example">
    <label for="checkbox-indeterminate-example">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-checkbox" id="checkbox-indeterminate-example" type="checkbox" name="checkbox-indeterminate-example" value="checkbox-indeterminate-example">
  <label for="checkbox-indeterminate-example">Label</label>
</span>
<script>
  var checkbox = document.getElementById("checkbox-indeterminate-example");
  checkbox.indeterminate = true;
</script>
```

### Within a [Field]({{ site.baseurl }}components/form-fields/)

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" id="unique-id-lorem--1234">Pies We Like</label>
    <ul class="fsa-form-list" aria-labelledby="unique-id-lorem--1234">
      <li>
        <span>
          <input class="fsa-checkbox" id="apple" type="checkbox" name="pie" checked="">
          <label for="apple">Apple</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-checkbox" id="key-lime" type="checkbox" name="pie">
          <label for="key-lime">Key Lime</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-checkbox" id="pumpkin" type="checkbox" name="pie">
          <label for="pumpkin">Pumpkin</label>
        </span>
      </li>
    </ul>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" id="unique-id-lorem--1234">Pies We Like</label>
  <ul class="fsa-form-list" aria-labelledby="unique-id-lorem--1234">
    <li>
      <span>
        <input class="fsa-checkbox" id="apple" type="checkbox" name="pie" checked="">
        <label for="apple">Apple</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="key-lime" type="checkbox" name="pie">
        <label for="key-lime">Key Lime</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="pumpkin" type="checkbox" name="pie">
        <label for="pumpkin">Pumpkin</label>
      </span>
    </li>
  </ul>
</div>
```

## Usage

### Use When

* A user can select any number of choices from a set list.
* A user needs to choose “yes” or “no” on only one option (use a stand-alone checkbox). For example, to toggle a setting on or off.
* When users need to see all the available options at a glance.

### Don't Use

* If there are too many options to display on a mobile screen.
* If a user can only select one option from a list (use [radio buttons]({{ site.baseurl }}components/radio/) instead).

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize a checkbox element, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Surround a related set of checkboxes with a `<fieldset>`. The `<legend>` provides context for the grouping. Do not use `fieldset` and `legend` for a single check.
* Each input should have a semantic `id` attribute, and its corresponding `<label>` should have the same value in its `for` attribute.

## General guidance

* Users should be able to tap on or click on either the text `<label>` or the checkbox element itself to toggle an option. Aids accessibility.
* Options that are listed vertically are easier to read than those listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which checkbox.
* Make sure selections are adequately spaced for touch screens.