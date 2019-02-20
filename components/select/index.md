---
layout: page
parent: "Components"
title: "Select"
intro: "Sometimes referred to as a “drop down,” the select element allows users to select one option from a list."
jump_menu: true
---

<div class="ds-preview">
  <p>
    <select class="fsa-select" name="Options">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>

## Variations

The style for `<select>` components always start with `class="fsa-select"`, modifiable with one or multiple `fsa-select--[variation]`.

```html
<select class="fsa-select fsa-select--[variation]" name="Options">
  ...
</select>
```

### Default

<div class="ds-preview">
  <p>
    <select class="fsa-select" name="Options lorem">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
  </p>
</div>
```html
<p>
  <select class="fsa-select" name="Options lorem">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</p>
```

### Full-width

<div class="ds-preview">
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

### Small

<div class="ds-preview">
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

### Large

<div class="ds-preview">
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

### Response: Error

<div class="ds-preview">
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

### Response: Positive

<div class="ds-preview">
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

### Disabled

Disabled select components do not have a `class="fsa-select--[variation]"`, instead using the `disabled` attribute.

<div class="ds-preview">
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

## Usage

### Use When

* Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

### Don't Use

* If the list of options is very short. Use [radio buttons]({{ site.baseurl }}components/radio/) instead.
* If the list of options is very long. Let users type the same information into a [text input]({{ site.baseurl }}components/text-input/) that suggests possible options instead.
* If you need to allow users to select more than one option at once. Users often don’t understand how to select multiple items from the select element. Use [checkboxes]({{ site.baseurl }}components/checkbox/) instead.
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

<!-- ## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet) -->
