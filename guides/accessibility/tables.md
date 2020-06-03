---
layout: guide
parent: "Accessibility"
title: "Tables"
intro: "When tables are used to show tabular data, the header cells that relate to the data cells need to be programmatically linked. This makes table navigation for screen readers less painful."
---

Simple tables can have two levels of headers. Each header cell should have `scope="col"` or `scope="row"`.

Complex tables are tables with more than two levels of headers. Each header should be given a unique `id` and each data cell should have a `headers` attribute with each related header cell's id listed.

If a table has text associated with it, ensure the text is programmatically linked to the table. This is usually done via a `<caption>` element. This element should be the first element under the `<table>` element. While a `caption` is not required, it can be very helpful to screen reader users navigating the page. A `caption` element is **strongly** encouraged on data tables as it gives context to the data.

## Testing

1. Identify 'data' tables (layout tables are exempt).
2. View the table source code.
3. Identify the table headers:
  * Check for scope on simple tables.
  * Check for id and headers on complex tables.

## Examples

### Passes

#### Simple table

```html
<table class="fsa-table">
  <caption>User's Height and Age</caption>
  <tr>
    <th scope="col">
      Name
    </th>
    <th scope="col">
      Height
    </th>
    <th scope="col">
      Age
    </th>
  </tr>
  <tr>
    <th scope="row">
      Walter
    </th>
    <td>6'4</td>
    <td>34</td>
  </tr>
  <tr>
    <th scope="row">
      Steve
    </th>
    <td>5'4</td>
    <td>30</td>
  </tr>
</table>
```
<div class="ds-preview">
  <table class="fsa-table">
    <caption>User's Height and Age</caption>
    <tr>
      <th scope="col">
        Name
      </th>
      <th scope="col">
        Height
      </th>
      <th scope="col">
        Age
      </th>
    </tr>
    <tr>
      <th scope="row">
        Walter
      </th>
      <td>6'4</td>
      <td>34</td>
    </tr>
    <tr>
      <th scope="row">
        Steve
      </th>
      <td>5'4</td>
      <td>30</td>
    </tr>
  </table>
</div>


> **Passes:** Looking at this table, the column headers all relate to the cells below. This is done programmatically with ```scope="col"```. Each height and age value is related to the person and this is done programmatically with ```scope="row"```.

#### Complex table

```html
<table class="fsa-table">
  <caption>User's Height and Age</caption>
  <tr>
    <th rowspan="2" id="name">
      Name
    </th>
    <th colspan="2" id="height">
      Height
    </th>
    <th rowspan="2" id="age">
      Age
    </th>
  </tr>
  <tr>
    <th id="feet" headers="height">
      Feet
    </th>
    <th id="inches" headers="height">
      Inches
    </th>
  </tr>
  <tr>
    <th headers="name" id="walter">
      Walter
    </th>
    <td headers="height feet walter">6</td>
    <td headers="height inches walter">4</td>
    <td headers="age walter">34</td>
  </tr>
  <tr>
    <th headers="name" id="steve">
      Steve
    </th>
    <td headers="height feet steve">5</td>
    <td headers="height inches steve">4</td>
    <td headers="age steve">30</td>
  </tr>
</table>
```
<div class="ds-preview">
  <table class="fsa-table">
    <caption>User's Height and Age</caption>
    <tr>
      <th rowspan="2" id="name">
        Name
      </th>
      <th colspan="2" id="height">
        Height
      </th>
      <th rowspan="2" id="age">
        Age
      </th>
    </tr>
    <tr>
      <th id="feet" headers="height">
        Feet
      </th>
      <th id="inches" headers="height">
        Inches
      </th>
    </tr>
    <tr>
      <th headers="name" id="walter">
        Walter
      </th>
      <td headers="height feet walter">6</td>
      <td headers="height inches walter">4</td>
      <td headers="age walter">34</td>
    </tr>
    <tr>
      <th headers="name" id="steve">
        Steve
      </th>
      <td headers="height feet steve">5</td>
      <td headers="height inches steve">4</td>
      <td headers="age steve">30</td>
    </tr>
  </table>
</div>

> **Passes:** This is an example of a complex table, all the cells are associated to their respective headers with the ```headers``` attribute. Most tables don't require this level of complexity.
