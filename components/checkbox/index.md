---
layout: page
parent: "Components"
title: "Checkbox"
shortName: "component__checkbox"
intro: "A form element enabling the selection of one or more options from a visible list."
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

## Variations

`class="fsa-checkbox fsa-checkbox--[variation]"`

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

### Solo

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__01" type="checkbox" name="solo-example__01" value="solo-example__01">
    <label for="solo-example__01"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__02" type="checkbox" name="solo-example__02" value="solo-example__02" checked="">
    <label for="solo-example__02"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__03" type="checkbox" name="solo-example__03" value="solo-example__03" disabled="">
    <label for="solo-example__03"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__04" type="checkbox" name="solo-example__04" value="solo-example__04" disabled="" checked>
    <label for="solo-example__04"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__05" type="checkbox" name="solo-example__05" value="solo-example__05">
    <label for="solo-example__05"><span class="fsa-sr-only">Label</span></label>
  </span>
  <script>
    document.getElementById("solo-example__05").indeterminate = true;
  </script>
</div>
```html
<span>
  <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__01" type="checkbox" name="solo-example__01" value="solo-example__01">
  <label for="solo-example__01"><span class="fsa-sr-only">Label</span></label>
</span>
<span>
  <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__02" type="checkbox" name="solo-example__02" value="solo-example__02" checked="">
  <label for="solo-example__02"><span class="fsa-sr-only">Label</span></label>
</span>
<span>
  <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__03" type="checkbox" name="solo-example__03" value="solo-example__03" disabled="">
  <label for="solo-example__03"><span class="fsa-sr-only">Label</span></label>
</span>
<span>
  <input class="fsa-checkbox fsa-checkbox--solo" id="solo-example__04" type="checkbox" name="solo-example__04" value="solo-example__04" disabled="" checked>
  <label for="solo-example__04"><span class="fsa-sr-only">Label</span></label>
</span>
```

## States

Checkbox states are styled not by a `class`, but depending on their state (primarily through the presense of an attribute) and may be combinable, e.g. `disabled` and `checked`.

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

There is no `indeterminate` attribute, and it cannot be conveyed via HTML; rather, it is a *property* modifiable via JavaScript. The example below shows a sample for doing so, though may not be typically how it is modified in Production-ready scripts.

<div class="ds-preview">
  <span>
    <input class="fsa-checkbox" id="checkbox-indeterminate-example" type="checkbox" name="checkbox-indeterminate-example" value="checkbox-indeterminate-example">
    <label for="checkbox-indeterminate-example">Label</label>
  </span>
  <script>
    document.getElementById("checkbox-indeterminate-example").indeterminate = true;
  </script>
</div>
```html
<span>
  <input class="fsa-checkbox" id="checkbox-indeterminate-example" type="checkbox" name="checkbox-indeterminate-example" value="checkbox-indeterminate-example">
  <label for="checkbox-indeterminate-example">Label</label>
</span>
<script>
  document.getElementById("checkbox-indeterminate-example")ndeterminate = true;
</script>
```

### Example: within a [Field]({{ site.baseurl }}components/form-fields/)

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

### Solo Example within a [Table]({{ site.baseurl }}components/tables/)

<div class="ds-preview">
  <table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal">
    <caption class="sr-only">Inspections</caption>
    <thead>
      <tr>
        <th class="fsa-table__th--sticky fsa-table__th--select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-all" id="inpections__select-all" type="checkbox" name="inpections__select-all" value="Select all">
            <label for="inpections__select-all" title="Select all"><span class="sr-only">Select all</span></label>
          </span>
        </th>
        <th class="fsa-table__th--sticky" aria-sort="ascending">
          <button type="button" class="fsa-table__sort fsa-table__sort--ascending">Name</button>
        </th>
        <th class="fsa-table__th--sticky">
          <button type="button" class="fsa-table__sort">State</button>
        </th>
        <th class="fsa-table__th--sticky">
          <button type="button" class="fsa-table__sort">County</button>
        </th>
        <th class="fsa-table__th--sticky">
          <button type="button" class="fsa-table__sort">Farm</button>
        </th>
        <th class="fsa-table__th--sticky">
          <button type="button" class="fsa-table__sort">Assignee</button>
        </th>
        <th class="fsa-table__th--sticky">
          <button type="button" class="fsa-table__sort">Due Date</button>
        </th>
        <th class="fsa-table__th--sticky">
          <button type="button" class="fsa-table__sort">Status</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td aria-label="Select">
          <span>
            <input disabled="disabled" class="fsa-checkbox fsa-checkbox--solo" id="inpections__select-inspection--06" type="checkbox" name="inpections__select-inspection--06" value="06">
            <label for="inpections__select-inspection--06"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 06</button>
          </strong>
        </td>
        <td aria-label="State">Kansas</td>
        <td aria-label="County">Cowley</td>
        <td aria-label="Farm Number">3510</td>
        <td aria-label="Assigned to"><a href="link.html">Norm Peterson</a></td>
        <td aria-label="Due Date">
          <time datetime="2018-12-11">12/11/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--success">Complete</span></div>
        </td>
      </tr>
      <tr class="fsa-table__row--selected">
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--07" type="checkbox" name="inpections__select-inspection--07" value="07" checked>
            <label for="inpections__select-inspection--07"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 07</button>
          </strong>
        </td>
        <td aria-label="State">Kansas</td>
        <td aria-label="County">Johnson</td>
        <td aria-label="Farm Number">8787</td>
        <td aria-label="Assigned to"><a href="link.html">Carla Tortelli</a></td>
        <td aria-label="Due Date">
          <time datetime="2018-08-05">08/05/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--neutral">Assigned</span></div>
        </td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--10" type="checkbox" name="inpections__select-inspection--10" value="10">
            <label for="inpections__select-inspection--10"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 10</button>
          </strong>
        </td>
        <td aria-label="State">Missouri</td>
        <td aria-label="County">Jackson</td>
        <td aria-label="Farm Number">8080</td>
        <td aria-label="Assigned to"><a href="link.html">Ernie Pantusso</a></td>
        <td aria-label="Due Date">
          <time datetime="2018-10-01">10/01/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--alert">Rejected</span></div>
        </td>
      </tr>
    </tbody>
  </table>
  <script>
    var checkboxIndeterminateExampleTable = document.getElementById("inpections__select-all");
    checkboxIndeterminateExampleTable.indeterminate = true;
  </script>
</div>
```html
<table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal">
  <caption class="sr-only">Inspections</caption>
  <thead>
    <tr>
      <th class="fsa-table__th--sticky fsa-table__th--select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-all" id="inpections__select-all" type="checkbox" name="inpections__select-all" value="Select all">
          <label for="inpections__select-all" title="Select all"><span class="sr-only">Select all</span></label>
        </span>
      </th>
      <th class="fsa-table__th--sticky" aria-sort="ascending">
        <button type="button" class="fsa-table__sort fsa-table__sort--ascending">Name</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">State</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">County</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Farm</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Assignee</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Due Date</button>
      </th>
      <th class="fsa-table__th--sticky">
        <button type="button" class="fsa-table__sort">Status</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Select">
        <span>
          <input disabled="disabled" class="fsa-checkbox fsa-checkbox--solo" id="inpections__select-inspection--06" type="checkbox" name="inpections__select-inspection--06" value="06">
          <label for="inpections__select-inspection--06"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 06</button>
        </strong>
      </td>
      <td aria-label="State">Kansas</td>
      <td aria-label="County">Cowley</td>
      <td aria-label="Farm Number">3510</td>
      <td aria-label="Assigned to"><a href="link.html">Norm Peterson</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-12-11">12/11/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--success">Complete</span></div>
      </td>
    </tr>
    <tr class="fsa-table__row--selected">
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--07" type="checkbox" name="inpections__select-inspection--07" value="07" checked>
          <label for="inpections__select-inspection--07"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 07</button>
        </strong>
      </td>
      <td aria-label="State">Kansas</td>
      <td aria-label="County">Johnson</td>
      <td aria-label="Farm Number">8787</td>
      <td aria-label="Assigned to"><a href="link.html">Carla Tortelli</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-08-05">08/05/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--neutral">Assigned</span></div>
      </td>
    </tr>
    <tr>
      <td aria-label="Select">
        <span>
          <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--10" type="checkbox" name="inpections__select-inspection--10" value="10">
          <label for="inpections__select-inspection--10"><span class="sr-only">Select this row</span></label>
        </span>
      </td>
      <td aria-label="Inspection Number">
        <strong>
          <button type="button" class="fsa-btn fsa-btn--flat">Inspection 10</button>
        </strong>
      </td>
      <td aria-label="State">Missouri</td>
      <td aria-label="County">Jackson</td>
      <td aria-label="Farm Number">8080</td>
      <td aria-label="Assigned to"><a href="link.html">Ernie Pantusso</a></td>
      <td aria-label="Due Date">
        <time datetime="2018-10-01">10/01/2018</time>
      </td>
      <td aria-label="Status">
        <div><span class="fsa-label fsa-label--alert">Rejected</span></div>
      </td>
    </tr>
  </tbody>
</table>
<script>
  var checkboxIndeterminateExampleTable = document.getElementById("inpections__select-all");
  checkboxIndeterminateExampleTable.indeterminate = true;
</script>
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
* Negative language in labels can be counterintuitive. For example, use “I want to receive a promotional email” instead of “I don’t want to receive promotional email.
* Make sure selections are adequately spaced for touch screens.