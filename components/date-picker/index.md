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
    <label class="fsa-field__label" for="date-picker-default">Date of Birth</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-default" aria-describedby="date-picker-default__help" aria-required="true" name="date-picker-default" type="text" value="">
    <span class="fsa-field__help" id="date-picker-default__help">Example 05/14/1975</span>
  </div>
</div>

## Variations and Examples

The Date Picker can be used with either a basic [Text Input]({{ site.baseurl }}components/text-input/) component or the [Form Fields]({{ site.baseurl }}components/form-fields/) component. To instantiate an instance of the Date Picker, you pass in the Input element's ID and select a display format. The Date display format options are listed in the [table below](#date-formatting-options).

### Basic JavaScript Initialization

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="date-picker-basic">Date of Birth</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-basic" aria-describedby="date-picker-basic__help" aria-required="true" name="date-picker-basic" type="text" value="">
  <span class="fsa-field__help" id="date-picker-basic__help">Example 05/14/1975</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    // Associate the text input to a DD/MM/YYYY date format
    formElements: { "date-picker-basic": "%m/%d/%Y" }
  });
</script>
```

### Block Example

<div class="ds-preview">
  <div class="fsa-field--block">
    <label class="fsa-field__label" for="date-picker-block">Date of Birth</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-block" aria-describedby="date-picker-block__help" aria-required="true" name="date-picker-block" type="text" value="">
    <span class="fsa-field__help" id="date-picker-block__help">Example 05/14/1975</span>
  </div>
</div>

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="date-picker-block">Date of Birth</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-block" aria-describedby="date-picker-block__help" aria-required="true" name="date-picker-block" type="text" value="">
  <span class="fsa-field__help" id="date-picker-block__help">Example 05/14/1975</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    // Associate the text input to a DD/MM/YYYY date format
    formElements: { "date-picker-block": "%m/%d/%Y" }
  });
</script>
```

### Disabled Example

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-disabled">Date of Birth</label>
    <input placeholder="mm/dd/yyyy" disabled class="fsa-input fsa-field__item" id="date-picker-disabled" aria-describedby="date-picker-disabled__help" aria-required="true" name="date-picker-disabled" type="text" value="">
    <span class="fsa-field__help" id="date-picker-disabled__help">Example 05/14/1975</span>
  </div>
</div>

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="date-picker-disabled">Date of Birth</label>
  <input placeholder="mm/dd/yyyy" disabled class="fsa-input fsa-field__item" id="date-picker-disabled" aria-describedby="date-picker-disabled__help" aria-required="true" name="date-picker-disabled" type="text" value="">
  <span class="fsa-field__help" id="date-picker-disabled__help">Example 05/14/1975</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    // Associate the text input to a DD/MM/YYYY date format
    formElements: { "date-picker-disabled": "%m/%d/%Y" },
    staticPos: true
  });
</script>
```

### Disable Weekends

You can only allow for the selection of weekdays on the calendar, by assigning an array <code>[0,0,0,0,0,1,1]</code> as the <code>disabledDays</code> property when instantiating an instance of the Date Picker. The first spot in the array is represented by a Monday. You can also disable a specific day of the week by adding a one to the array for any of the days represented.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-disabledweekends">Select Date</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-disabledweekends" aria-describedby="date-picker-disabledweekends__help" aria-required="true" name="date-picker-disabledweekends" type="text" value="">
    <span class="fsa-field__help" id="date-picker-disabledweekends__help">Example 07/04/2019</span>
  </div>
</div>

```html
<div class="fsa-field--block">
  <label class="fsa-field__label" for="date-picker-disabledweekends">Select Date</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-disabledweekends" aria-describedby="date-picker-disabledweekends__help" aria-required="true" name="date-picker-disabledweekends" type="text" value="">
  <span class="fsa-field__help" id="date-picker-disabledweekends__help">Example 07/04/2019</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    formElements: { "date-picker-disabledweekends": "%m/%d/%Y" },
    disabledDays:[0,0,0,0,0,1,1]
  });
</script>
```

### Upper and Lower Dates

Additional JavaScript methods can be used to limit the selection of a date. If you would like to limit the selection of a date to AFTER a period of time, you can us the JavaScript method <code>setRangeLow</code>. To limit the selection of a date BEFORE a period of time, you use the <code>setRangeHigh</code> JavaScript Method. Both JavaScript methods require you to pass in a string for the date in the <code>YYYYDDMM</code> format or pass in a new Date object. The example below uses both JavaScript methods to only allow for the selection between April 7th, 2019 and Today.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-upper-lower">Select Date Between 04/07/2019 - Today</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-upper-lower" aria-describedby="date-picker-upper-lower__help" aria-required="true" name="date-picker-upper-lower" type="text" value="">
    <span class="fsa-field__help" id="date-picker-upper-lower__help">Example 06/06/2019</span>
  </div>
</div>

```html
<div class="fsa-field--block">
  <label class="fsa-field__label" for="date-picker-upper-lower">Select Date Between 04/07/2019 - Today</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-upper-lower" aria-describedby="date-picker-upper-lower__help" aria-required="true" name="date-picker-upper-lower" type="text" value="">
  <span class="fsa-field__help" id="date-picker-upper-lower__help">Example 06/06/2019</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    formElements: { "date-picker-upper-lower": "%m/%d/%Y" },
  });
  // disabled PRIOR to April 7, 2019
  datePickerController.setRangeLow("date-picker-upper-lower", '20190407');
  // disabled AFTER today
  datePickerController.setRangeHigh("date-picker-upper-lower", new Date());
</script>
```

### Static Calendar Location

By utilising the <code>staticPos</code> property and setting the value to <code>true</code>, you can have a static Calendar component displayed on the page.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-static-display">Select Date</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-static-display" aria-describedby="date-picker-static-display__help" aria-required="true" name="date-picker-static-display" type="text" value="">
    <span class="fsa-field__help" id="date-picker-static-display__help">Example 05/14/1975</span>
  </div>
</div>

```html
<div class="fsa-field--block">
  <label class="fsa-field__label" for="date-picker-static-display">Select Date</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-static-display" aria-describedby="date-picker-static-display__help" aria-required="true" name="date-picker-static-display" type="text" value="">
  <span class="fsa-field__help" id="date-picker-static-display__help">Example 05/14/1975</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    formElements: { "date-picker-static-display": "%m/%d/%Y" },
    disabledDays:[0,0,0,0,0,1,1],
    staticPos: true
  });
</script>
```

### Disabled Static Calendar Location

Adding the <code>disabled</code> parameter to the Input element will disable the Input and also the entire Static Calendar.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-static-display-disabled">Select Date</label>
    <input placeholder="mm/dd/yyyy" disabled class="fsa-input fsa-field__item" id="date-picker-static-display-disabled" aria-describedby="date-picker-static-display-disabled__help" aria-required="true" name="date-picker-static-display-disabled" type="text" value="">
    <span class="fsa-field__help" id="date-picker-static-display-disabled__help">Example 05/14/1975</span>
  </div>
</div>

```html
<div class="fsa-field--block">
  <label class="fsa-field__label" for="date-picker-static-display-disabled">Select Date</label>
  <input placeholder="mm/dd/yyyy" disabled class="fsa-input fsa-field__item" id="date-picker-static-display-disabled" aria-describedby="date-picker-static-display-disabled__help" aria-required="true" name="date-picker-static-display-disabled" type="text" value="">
  <span class="fsa-field__help" id="date-picker-static-display-disabled__help">Example 05/14/1975</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    formElements: { "date-picker-static-display-disabled": "%m/%d/%Y" },
    staticPos: true
  });
</script>
```

### Calendar with Status Bar

To augment the visual impact of date selection, you can add a status message, displaying at the bottom of the calendar. Add the JavaScript method <code>statusFormat</code> to the initialized object, and specify a date format that follows the Date Formatting Options shown below. The below example uses <code>"%l, %d%S %F %Y"</code>.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-status">Select Date</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-status" aria-describedby="date-picker-status__help" aria-required="true" name="date-picker-status" type="text" value="">
    <span class="fsa-field__help" id="date-picker-status__help">Example 05/14/1975</span>
  </div>
</div>

```html
<div class="fsa-field--block">
  <label class="fsa-field__label" for="date-picker-status">Select Date</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-status" aria-describedby="date-picker-status__help" aria-required="true" name="date-picker-status" type="text" value="">
  <span class="fsa-field__help" id="date-picker-status__help">Example 05/14/1975</span>
</div>

<!-- Placed at bottom of page -->
<script>
  datePickerController.createDatePicker({
    formElements: { "date-picker-status": "%m/%d/%Y" },
    statusFormat:"%l, %d%S %F %Y"
  });
</script>
```

## Date Formatting Options

The following list of conversion specifiers are valid for use within the date format:

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <thead>
    <tr>
      <th scope="col">Specifier</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Specifier" scope="row">
        %d
      </td>
      <td aria-label="Description">
        Day of the month, 2 digits with leading zeros (01 – 31)
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %j
      </td>
      <td aria-label="Description">
        Day of the month without leading zeros (1 – 31)
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %m
      </td>
      <td aria-label="Description">
        Numeric representation of a month, with leading zeros
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %n
      </td>
      <td aria-label="Description">
        Numeric representation of a month, without leading zeros
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %Y
      </td>
      <td aria-label="Description">
        A full numeric representation of a year, 4 digits
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %y
      </td>
      <td aria-label="Description">
        A two digit representation of a year
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %l
      </td>
      <td aria-label="Description">
        A full textual representation of the day of the week (Monday – Sunday)
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %S
      </td>
      <td aria-label="Description">
        English ordinal suffix for the day of the month: st, nd, rd or th
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        %F
      </td>
      <td aria-label="Description">
        A full textual representation of a month, such as January or March
      </td>
    </tr>

  </tbody>
</table>

### Examples of Date Formats using Specifiers

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <thead>
    <tr>
      <th scope="col">Date Format</th>
      <th scope="col">Format Specifier Combination</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Specifier" scope="row">
        MMDDYYYY
      </td>
      <td aria-label="Description">
        %m%d%Y
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        MM/DD/YYYY
      </td>
      <td aria-label="Description">
        %m/%d/%Y
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        MM-DD-YYYY
      </td>
      <td aria-label="Description">
        %m-%d-%Y
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        M/D/YY
      </td>
      <td aria-label="Description">
        %n%j%y
      </td>
    </tr>
    <tr>
      <td aria-label="Specifier" scope="row">
        M.D.YYYY
      </td>
      <td aria-label="Description">
        %n.%j.%Y
      </td>
    </tr>
  </tbody>
</table>

## CSS Class Overview

The below Overview of CSS Classes are identical to the [Form Fields Component]({{ site.baseurl }}/components/form-fields/), and the Date Picker augments this component by utilizing JavaScript that builds the neccessary CSS at run-time.

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

## Keyboard Navigation

Using the blow set of Keyboard commands, the User can navigate the Date Picker Input field along with the Calendar portion as well.

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

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the text inputs, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Do not use the `placeholder` attribute as the sole label for accessibility reasons. Form components must have an associated `<label>` with matching `for` attribute. Additionally, most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio to sufficiently serve as the sole label.
* Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.
* Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.
* The above list of [Keyboard Commands](#keyboard-navigation) follows the recommended 508 Compliance standards.

## General Guidance

* The Date Picker utilizes a navitation bar consisting of four arrows and a Today button. These button are intended for navigation purposes within the Calendar, so selecting the Today button will navigate the User to today's date, NOT select today's date.
* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a [textarea]({{ site.baseurl }}components/textarea/) instead.
* Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.
* Only show error validation messages or styling after a user has interacted with a particular field; avoid significantly updating styles while a user is actively entering input.
* Do not use the `placeholder` attribute in place of a `<label>` element. Its purposes is different: the standard `<label>` describes the role of the form element; that is, it indicates what kind of information is expected. The `placeholder` attribute is typically a hint about the format the content should take. There are cases in which the placeholder attribute is not displayed to the user (e.g. when input field has a value), so the form must be understandable without it.
