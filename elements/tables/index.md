---
layout: page
parent: "Elements"
title: "Tables"
intro: "Tables show tabular data in columns and rows."
jump_menu: true
---

<div class="ds-preview">
  <table class="fsa-table">
    <thead>
      <tr>
        <th scope="col">A</th>
        <th scope="col">B</th>
        <th scope="col">C</th>
        <th scope="col">D</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1A</td>
        <td>1B</td>
        <td>1C</td>
        <td>1D</td>
      </tr>
      <tr>
        <td>2A</td>
        <td>2B</td>
        <td>2C</td>
        <td>2D</td>
      </tr>
      <tr>
        <td>3A</td>
        <td>3B</td>
        <td>3C</td>
        <td>3D</td>
      </tr>
    </tbody>
  </table>  
</div>

## Variations

The style for `<table>` elements always start with `class="fsa-table"`, modifiable with one or multiple `fsa-table--[variation]`.

```html
<table class="fsa-table fsa-table--[variation]">
  ...
</table>
```

### Default

```html
<table class="fsa-table">
  <thead>
    <tr>
      <th scope="col">Commodity</th>
      <th scope="col">Loan Rate</th>
      <th scope="col">30-Day Period PCP</th>
      <th scope="col">Effective LDP Rate ($)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley $/Bushel</td>
      <td>1.75</td>
      <td>3.30</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Canola $/Cwt.</td>
      <td>8.94</td>
      <td>15.99</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Flaxseed $/Cwt.</td>
      <td>10.13</td>
      <td>15.90</td>
      <td>0.00</td>
    </tr>
    <tr>
      <td>Oats $/Bushel</td>
      <td>1.43</td>
      <td>2.97</td>
      <td>0.00</td>
    </tr>
  </tbody>
</table>
```
<div class="ds-preview">
  <table class="fsa-table">
    <thead>
      <tr>
        <th scope="col">Commodity</th>
        <th scope="col">Loan Rate</th>
        <th scope="col">30-Day Period PCP</th>
        <th scope="col">Effective LDP Rate ($)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Barley $/Bushel</td>
        <td>1.75</td>
        <td>3.30</td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>Canola $/Cwt.</td>
        <td>8.94</td>
        <td>15.99</td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>Flaxseed $/Cwt.</td>
        <td>10.13</td>
        <td>15.90</td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>Oats $/Bushel</td>
        <td>1.43</td>
        <td>2.97</td>
        <td>0.00</td>
      </tr>
    </tbody>
  </table>  
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
