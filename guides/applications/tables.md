---
layout: guide
parent: "Applications"
title: "Tables"
intro: "FSA applications that require data to be displayed in a tabular format shall use the below guidelines."

---

## Tables Guidelines

The FSA Design System uses 3 different types of design style for tabular data, with the intention of being flexible enough to compartmentablize the data without having too much visual noise and weight on the screen. Below you will find the various types of tables that can be used, and an explanation of when to use the specific styles.

## Default Table Style

Below is the default table style that should be used in the majority of instances. The borders and spacing provide enough room for most forms of tabular data and allow for easy of use and interpretation.

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
  </tbody>
</table>

## Borderless Table Style

<table class="fsa-table fsa-table--borderless">
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
  </tbody>
</table>


## Related Resources

 * [Tables Component]({{ site.baseurl }}/components/tables)