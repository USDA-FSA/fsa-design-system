---
layout: page
parent: "Elements"
title: "Tables"
intro: "Tables show tabular data in columns and rows."
jump_menu: true
---

Tables are great for displaying tabular data. Minimal visual styling helps surface this information more easily.

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

Styled `<table>` elements use `class="fsa-table"`, with several modifications available with `fsa-table--[variation]`.

```html
<table class="fsa-table fsa-table--[variation]">
  ...
</table>
```

### Default

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

### Borderless

<div class="ds-preview">
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
      <tr>
        <td>Oats $/Bushel</td>
        <td>1.43</td>
        <td>2.97</td>
        <td>0.00</td>
      </tr>
    </tbody>
  </table>  
</div>
```html
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
    <tr>
      <td>Oats $/Bushel</td>
      <td>1.43</td>
      <td>2.97</td>
      <td>0.00</td>
    </tr>
  </tbody>
</table>
```

### Plain

Omitting the default `class="fsa-table"` outright renders a non-styled table, effectively "resetting" it.

<div class="ds-preview">
  <table>
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
```html
<table>
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

## Responsive Tables

Each styled variation can be made to fit on smaller viewports (i.e. mobile phones) via `fsa-table--responsive`.

### Structure

* Responsive table styles are identical at the smaller breakpoints regardless of initial variation used.
* The key to Responsive Tables is the use of the `aria-label` attribute on each data data cell, e.g. `<td aria-label="Description">...</td>`.

<div class="ds-preview">
  <table class="fsa-table fsa-table--responsive">
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th aria-label="Document title" scope="row">Declaration of Independence</th>
        <td aria-label="Description">Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
        <td aria-label="Year">1776</td>
      </tr>
      <tr>
        <th aria-label="Document title" scope="row">Bill of Rights</th>
        <td aria-label="Description">The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
        <td aria-label="Year">1791</td>
      </tr>
      <tr>
        <th aria-label="Document title" scope="row">Declaration of Sentiments</th>
        <td aria-label="Description">A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>
        <td aria-label="Year">1848</td>
      </tr>
      <tr>
        <th aria-label="Document title" scope="row">Emancipation Proclamation</th>
        <td aria-label="Description">An executive order granting freedom to slaves in designated southern states.</td>
        <td aria-label="Year">1863</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th scope="col">Document title</th>
      <th scope="col">Description</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th aria-label="Document title" scope="row">Declaration of Independence</th>
      <td aria-label="Description">Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
      <td aria-label="Year">1776</td>
    </tr>
    <tr>
      <th aria-label="Document title" scope="row">Bill of Rights</th>
      <td aria-label="Description">The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
      <td aria-label="Year">1791</td>
    </tr>
    <tr>
      <th aria-label="Document title" scope="row">Declaration of Sentiments</th>
      <td aria-label="Description">A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>
      <td aria-label="Year">1848</td>
    </tr>
    <tr>
      <th aria-label="Document title" scope="row">Emancipation Proclamation</th>
      <td aria-label="Description">An executive order granting freedom to slaves in designated southern states.</td>
      <td aria-label="Year">1863</td>
    </tr>
  </tbody>
</table>
```

## Usage

### Use When

* When you need to display tabular information, such as statistical data.

### Don't Use

* For layout, use [Grids]({{ site.baseurl }}visual-style/grid/).
* If the amount of content is simply or brief enough, and depending on its context, consider structuring as an [unordered list]({{ site.baseurl }}visual-style/typography/#unordered-list-bullet), [ordered list]({{ site.baseurl }}visual-style/typography/#ordered-list-numbered), or [definition list]({{ site.baseurl }}visual-style/typography/#definition-list).

## Accessibility

Always refer to the [Accessibility Tables Guide]({{ site.baseurl }}guides/accessibility/tables) for overall guidance.

* Simple tables can have two levels of headers. Each header cell should have `scope="col"` or `scope="row"`.
* Complex tables are tables with more than two levels of headers. Each header should be given a unique `id` and each data cell should have a `headers` attribute with each related header cell’s `id` listed.
