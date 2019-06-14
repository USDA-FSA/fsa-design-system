---
layout: page
parent: "Components"
title: "Date Picker"
intro: "The Date Picker is a component designed to augment an Input element or Form Field with the ability to select a date in a Calendar view."
jump_menu: true
custom_js: "datepicker-demo.js"
---

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-example-0">Date of Birth</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-example-0" aria-describedby="date-picker-example-0__help" aria-required="true" name="date-picker-example-0" type="text" value="">
    <span class="fsa-field__help" id="date-picker-example-0__help">Example 05/14/1975</span>
  </div>
</div>

## Variations and Examples



### Basic JavaScript Initialization

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="date-picker-example-0">Date of Birth</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-example-0" aria-describedby="date-picker-example-0__help" aria-required="true" name="date-picker-example-0" type="text" value="">
  <span class="fsa-field__help" id="date-picker-example-0__help">Example 05/14/1975</span>
</div>

<script>
datePickerController.createDatePicker({
  // Associate the text input to a DD/MM/YYYY date format                            
  formElements: { "elementID": "%m/%d/%Y" }
});
</script>
```

### Initialization with Label Text

```html
datePickerController.createDatePicker({
  // Associate the text input to a DD/MM/YYYY date format                            
  formElements: { "elementID": "%m/%d/%Y" },
  labelText: "Date of birth"
});
```

### Upper and Lower Dates

There are words and phrases.

<div class="ds-preview">
  
</div>
```html

```

### Keyboard Operations

**Up Arrow and Down Arrow**
Goes to the same day of the week in the previous or next week respectively. If the user advances past the end of the month they continue into the next or previous month as appropriate.

**Left Arrow and Right Arrow**
Advances one day to the next‚ also in a continuum. Visually focus is moved from day to day and wraps from row to row in a grid of days and weeks.

**Alt + Page Up**
Moves to the same date in the previous year

**Alt + Page Down**
Moves to the same date in the next year

**Home**
Moves to the first day of the current month.

**End**
Moves to the last day of the current month.

**Page Up**
Moves to the same date in the previous month

**Page Down**
Moves to the same date in the next month

**Enter**
Selects the date that currently has focus. Keyboard focus will move back to the associated text field once the datepicker has closed.

**Escape**
In the case of a popup datepicker‚ closes the widget without any action. Keyboard focus will move back to the associated text field once the datepicker has closed.


<div class="ds-preview">
  
</div>
```html


```

## CSS Class Overview

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <thead>
    <th scope="col">Selector</th>
    <th scope="col">Description</th>
    <th scope="col">Required</th>
  </thead>
  <tbody>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__label</code></th>
      <td aria-label="Description">Provide the standard style and position of the label of the form element</td>
      <td aria-label="Required">Yes</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__label-desc</code></th>
      <td aria-label="Description"><span>Paired with <code>fsa-field__label</code>, may be used to indicate Required or Optional fields, or omitted.</span></td>
      <td aria-label="Required">No</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__item</code></th>
      <td aria-label="Description">Provides standardized style and position for form elements</td>
      <td aria-label="Required">Yes</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__help</code></th>
      <td aria-label="Description">Provides instructional text in a standardized location</td>
      <td aria-label="Required">No, though advised</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__message</code></th>
      <td aria-label="Description">Provides validation and error messaging in standardized location</td>
      <td aria-label="Required">No, though advised</td>
    </tr>
  </tbody>
</table>

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the text inputs, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Do not use the `placeholder` attribute as the sole label for accessibility reasons. Form components must have an associated `<label>` with matching `for` attribute. Additionally, most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio to sufficiently serve as the sole label.
* Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.
* Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a [textarea]({{ site.baseurl }}components/textarea/) instead.
* Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.
* Consider the type of content a user may enter to aid mobile device entry; mobile devices typically surface a keyboard UI attuned to the type. For example, `type="tel"` will surface a [phone keyboard](http://html5doctor.com/html5-forms-input-types/#input-tel).
* Only show error validation messages or styling after a user has interacted with a particular field; avoid significantly updating styles while a user is actively entering input.
* Do not use the `placeholder` attribute in place of a `<label>` element. Its purposes is different: the standard `<label>` describes the role of the form element; that is, it indicates what kind of information is expected. The `placeholder` attribute is typically a hint about the format the content should take. There are cases in which the placeholder attribute is not displayed to the user (e.g. when input field has a value), so the form must be understandable without it.
