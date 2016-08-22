---
layout: page
parent: "Elements"
title: "Checkbox"
intro: "Checkboxes allow users to select one or more options from a visible list."
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

## Variations

Checkbox elements are styled via `class="fsa-checkbox"`, modifiable with one or multiple `fsa-checkbox--[variation]`.

```html
<p>
  <input class="fsa-checkbox fsa-checkbox--[variation]" id="lorem9752" type="checkbox" name="lorem9752" value="lorem9752" checked="">
  <label for="lorem9752">Label</label>
</p>
```

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

### Full-width

```html
<p>
  <select class="fsa-select fsa-select--block" name="Options ipsum">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```
<div class="pb-preview">
  <p>
    <select class="fsa-select fsa-select--block" name="Options ipsum">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

### Small

```html
<p>
  <select class="fsa-select fsa-select--small" name="Options dolor">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```
<div class="pb-preview">
  <p>
    <select class="fsa-select fsa-select--small" name="Options dolor">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

### Large

```html
<p>
  <select class="fsa-select fsa-select--large" name="Options sit">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```
<div class="pb-preview">
  <p>
    <select class="fsa-select fsa-select--large" name="Options sit">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

### Response: Error

```html
<p>
  <select class="fsa-select fsa-select--error" name="Options amet">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```
<div class="pb-preview">
  <p>
    <select class="fsa-select fsa-select--error" name="Options amet">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

### Response: Positive

```html
<p>
  <select class="fsa-select fsa-select--positive" name="Options gemino">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```
<div class="pb-preview">
  <p>
    <select class="fsa-select fsa-select--positive" name="Options gemino">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

### Disabled

Disabled select elements do not have a `class="fsa-select--[variation]"`, instead using the `disabled` attribute.

```html
<p>
  <select class="fsa-select" disabled="disabled" name="Options quis">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```
<div class="pb-preview">
  <p>
    <select class="fsa-select" disabled="disabled" name="Options quis">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

## Usage

### Use When

* Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

### Don't Use

* If the list of options is very short. Use [radio buttons]({{ site.baseurl }}elements/radio/) instead.
* If the list of options is very long. Let users type the same information into a [text input]({{ site.baseurl }}elements/text-input/) that suggests possible options instead.
* If you need to allow users to select more than one option at once. Users often don’t understand how to select multiple items from the select element. Use [checkboxes]({{ site.baseurl }}elements/checkbox/) instead.
* For site navigation.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the select element, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Make sure your dropdown has an accessible label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).
* Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

## General Guidance

* Test dropdowns thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.
* Avoid making options in one dropdown menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.
* When most users will (or should) pick a particular option, make it the default: `<option selected="selected">Default</option>`
* Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times, particularly if interacting with a form solely with keyboard. Auto-submission is also less accessible.

## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet)
