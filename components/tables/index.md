---
layout: page
parent: "Components"
title: "Tables"
intro: "Tables show tabular data in columns and rows."
jump_menu: true
---

Tables are great for displaying tabular data. Minimal visual styling helps surface this information more easily.

<div class="ds-preview">
  <table class="fsa-table">
    <caption>[Table caption]</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Column A</button></th>
        <th scope="col"><button class="fsa-table__sort" type="button">Column B</button></th>
        <th scope="col"><button class="fsa-table__sort" type="button">Column C</button></th>
        <th scope="col"><button class="fsa-table__sort" type="button">Column D</button></th>
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

Styled `<table>` components use `class="fsa-table"`, with several modifications available with `fsa-table--[variation]`.

```html
<table class="fsa-table fsa-table--[variation]">
  ...
</table>
```

### Default

<div class="ds-preview">
  <table class="fsa-table">
    <caption>[Table caption]</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Commodity</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Loan Rate</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Barley $/Bushel</td>
        <td class="fsa-text-align--right">1.75</td>
        <td class="fsa-text-align--right">3.30</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Canola $/Cwt.</td>
        <td class="fsa-text-align--right">8.94</td>
        <td class="fsa-text-align--right">15.99</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Flaxseed $/Cwt.</td>
        <td class="fsa-text-align--right">10.13</td>
        <td class="fsa-text-align--right">15.90</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Oats $/Bushel</td>
        <td class="fsa-text-align--right">1.43</td>
        <td class="fsa-text-align--right">2.97</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Wheat - Soft Red Winter $/Bushel</td>
        <td class="fsa-text-align--right">2.42</td>
        <td class="fsa-text-align--right">4.49</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table class="fsa-table">
  <caption>[Table caption]</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Commodity</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Loan Rate</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley $/Bushel</td>
      <td class="fsa-text-align--right">1.75</td>
      <td class="fsa-text-align--right">3.30</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Canola $/Cwt.</td>
      <td class="fsa-text-align--right">8.94</td>
      <td class="fsa-text-align--right">15.99</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Flaxseed $/Cwt.</td>
      <td class="fsa-text-align--right">10.13</td>
      <td class="fsa-text-align--right">15.90</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Oats $/Bushel</td>
      <td class="fsa-text-align--right">1.43</td>
      <td class="fsa-text-align--right">2.97</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Wheat - Soft Red Winter $/Bushel</td>
      <td class="fsa-text-align--right">2.42</td>
      <td class="fsa-text-align--right">4.49</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
  </tbody>
</table>
```

### Customize caption

<div class="ds-preview">
  <table class="fsa-table">
  <caption class="fsa-text--h2">[Table caption that looks like an &lt;h2&gt;]</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Commodity</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Loan Rate</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Barley $/Bushel</td>
        <td class="fsa-text-align--right">1.75</td>
        <td class="fsa-text-align--right">3.30</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Canola $/Cwt.</td>
        <td class="fsa-text-align--right">8.94</td>
        <td class="fsa-text-align--right">15.99</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Flaxseed $/Cwt.</td>
        <td class="fsa-text-align--right">10.13</td>
        <td class="fsa-text-align--right">15.90</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Oats $/Bushel</td>
        <td class="fsa-text-align--right">1.43</td>
        <td class="fsa-text-align--right">2.97</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Wheat - Soft Red Winter $/Bushel</td>
        <td class="fsa-text-align--right">2.42</td>
        <td class="fsa-text-align--right">4.49</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table class="fsa-table">
  <caption class="fsa-text--h2">[Table caption that looks like an &lt;h2&gt;]</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Commodity</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Loan Rate</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley $/Bushel</td>
      <td class="fsa-text-align--right">1.75</td>
      <td class="fsa-text-align--right">3.30</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Wheat - Soft Red Winter $/Bushel</td>
      <td class="fsa-text-align--right">2.42</td>
      <td class="fsa-text-align--right">4.49</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
  </tbody>
</table>
```

### Borderless

<div class="ds-preview">
  <table class="fsa-table fsa-table--borderless">
    <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
    <thead>
      <tr>
        <th scope="col"><button class="fsa-table__sort" type="button">Commodity</button></th>
        <th scope="col" class="fsa-text-align--right" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Loan Rate</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Alternative PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Barley $/Bushel</td>
        <td class="fsa-text-align--right">1.75</td>
        <td class="fsa-text-align--right">3.30</td>
        <td class="fsa-text-align--right">2.60</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Canola $/Cwt.</td>
        <td class="fsa-text-align--right">8.94</td>
        <td class="fsa-text-align--right">15.99</td>
        <td class="fsa-text-align--right">15.89</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Flaxseed $/Cwt.</td>
        <td class="fsa-text-align--right">10.13</td>
        <td class="fsa-text-align--right">15.90</td>
        <td class="fsa-text-align--right">14.62</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Oats $/Bushel</td>
        <td class="fsa-text-align--right">1.43</td>
        <td class="fsa-text-align--right">2.97</td>
        <td class="fsa-text-align--right">1.92</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Wheat - Soft Red Winter $/Bushel</td>
        <td class="fsa-text-align--right">2.42</td>
        <td class="fsa-text-align--right">4.49</td>
        <td class="fsa-text-align--right">4.19</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table class="fsa-table fsa-table--borderless">
  <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
  <thead>
    <tr>
      <th scope="col"><button class="fsa-table__sort" type="button">Commodity</button></th>
      <th scope="col" class="fsa-text-align--right" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Loan Rate</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Alternative PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley $/Bushel</td>
      <td class="fsa-text-align--right">1.75</td>
      <td class="fsa-text-align--right">3.30</td>
      <td class="fsa-text-align--right">2.60</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Canola $/Cwt.</td>
      <td class="fsa-text-align--right">8.94</td>
      <td class="fsa-text-align--right">15.99</td>
      <td class="fsa-text-align--right">15.89</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Flaxseed $/Cwt.</td>
      <td class="fsa-text-align--right">10.13</td>
      <td class="fsa-text-align--right">15.90</td>
      <td class="fsa-text-align--right">14.62</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Oats $/Bushel</td>
      <td class="fsa-text-align--right">1.43</td>
      <td class="fsa-text-align--right">2.97</td>
      <td class="fsa-text-align--right">1.92</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Wheat - Soft Red Winter $/Bushel</td>
      <td class="fsa-text-align--right">2.42</td>
      <td class="fsa-text-align--right">4.49</td>
      <td class="fsa-text-align--right">4.19</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
  </tbody>
</table>
```

### Plain

Omitting the default `class="fsa-table"` outright renders a non-styled table, effectively "resetting" it.

<div class="ds-preview">
  <caption>[Table caption]</caption>
  <table>
    <thead>
      <tr>
        <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Commodity</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Loan Rate</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Alternative PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Barley $/Bushel</td>
        <td class="fsa-text-align--right">1.75</td>
        <td class="fsa-text-align--right">3.30</td>
        <td class="fsa-text-align--right">2.60</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Canola $/Cwt.</td>
        <td class="fsa-text-align--right">8.94</td>
        <td class="fsa-text-align--right">15.99</td>
        <td class="fsa-text-align--right">15.89</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Flaxseed $/Cwt.</td>
        <td class="fsa-text-align--right">10.13</td>
        <td class="fsa-text-align--right">15.90</td>
        <td class="fsa-text-align--right">14.62</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Oats $/Bushel</td>
        <td class="fsa-text-align--right">1.43</td>
        <td class="fsa-text-align--right">2.97</td>
        <td class="fsa-text-align--right">1.92</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Wheat - Soft Red Winter $/Bushel</td>
        <td class="fsa-text-align--right">2.42</td>
        <td class="fsa-text-align--right">4.49</td>
        <td class="fsa-text-align--right">4.19</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table>
  <caption>[Table caption]</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Commodity</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Loan Rate</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Alternative PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley $/Bushel</td>
      <td class="fsa-text-align--right">1.75</td>
      <td class="fsa-text-align--right">3.30</td>
      <td class="fsa-text-align--right">2.60</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Canola $/Cwt.</td>
      <td class="fsa-text-align--right">8.94</td>
      <td class="fsa-text-align--right">15.99</td>
      <td class="fsa-text-align--right">15.89</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Flaxseed $/Cwt.</td>
      <td class="fsa-text-align--right">10.13</td>
      <td class="fsa-text-align--right">15.90</td>
      <td class="fsa-text-align--right">14.62</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Oats $/Bushel</td>
      <td class="fsa-text-align--right">1.43</td>
      <td class="fsa-text-align--right">2.97</td>
      <td class="fsa-text-align--right">1.92</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Wheat - Soft Red Winter $/Bushel</td>
      <td class="fsa-text-align--right">2.42</td>
      <td class="fsa-text-align--right">4.49</td>
      <td class="fsa-text-align--right">4.19</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
  </tbody>
</table>
```

## Responsive Tables

Each table variation above can be made to fit on smaller viewports (i.e. mobile phones) via `fsa-table--responsive`. In addition to the previewed images below, view this page on a smaller device (Phone, Tablet, etc) to view the below Responsive variations.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <h3>Default</h3>
    <figure>
      <img src="{{ site.baseurl }}img/tables-responsive--default.png" alt="Image of table rendering on small devices">
      <figcaption><code>fsa-table--responsive</code></figcaption>
    </figure>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <h3>Horizontal</h3>
    <figure>
      <img src="{{ site.baseurl }}img/tables-responsive--horizontal.png" alt="Image of table rendering on small devices">
      <figcaption><code>fsa-table--responsive fsa-table--responsive-horizontal</code></figcaption>
    </figure>
  </div>
</div>

### Structure

* Responsive table styles are identical at the smaller breakpoints regardless of initial variation used.
* The key to Responsive Tables is the use of the `aria-label` attribute on each data data cell, e.g. `<td aria-label="Commodity">...</td>` to replicate each column header (`th`).

### Default

<div class="ds-preview">
  <table class="fsa-table fsa-table--responsive">
    <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
    <thead>
      <tr>
        <th scope="col">Commodity</th>
        <th scope="col" class="fsa-text-align--right">Loan Rate</th>
        <th scope="col" class="fsa-text-align--right">30-Day Period PCP</th>
        <th scope="col" class="fsa-text-align--right">Alternative PCP</th>
        <th scope="col" class="fsa-text-align--right">Effective LDP Rate ($)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td aria-label="Commodity">Barley $/Bushel</td>
        <td class="fsa-text-align--right" aria-label="Loan Rate">1.75</td>
        <td class="fsa-text-align--right" aria-label="30-Day Period PCP">3.30</td>
        <td class="fsa-text-align--right" aria-label="Alternative PCP">2.60</td>
        <td class="fsa-text-align--right" aria-label="Effective LDP Rate ($)">0.00</td>
      </tr>
      <tr>
        <td aria-label="Commodity">Canola $/Cwt.</td>
        <td class="fsa-text-align--right" aria-label="Loan Rate">8.94</td>
        <td class="fsa-text-align--right" aria-label="30-Day Period PCP">15.99</td>
        <td class="fsa-text-align--right" aria-label="Alternative PCP">15.89</td>
        <td class="fsa-text-align--right" aria-label="Effective LDP Rate ($)">0.00</td>
      </tr>
      <tr>
        <td aria-label="Commodity">Oats $/Bushel</td>
        <td class="fsa-text-align--right" aria-label="Loan Rate">1.43</td>
        <td class="fsa-text-align--right" aria-label="30-Day Period PCP">2.97</td>
        <td class="fsa-text-align--right" aria-label="Alternative PCP">1.92</td>
        <td class="fsa-text-align--right" aria-label="Effective LDP Rate ($)">0.00</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table class="fsa-table fsa-table--responsive">
  <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
  <thead>
    <tr>
      <th scope="col">Commodity</th>
      <th scope="col" class="fsa-text-align--right">Loan Rate</th>
      <th scope="col" class="fsa-text-align--right">30-Day Period PCP</th>
      <th scope="col" class="fsa-text-align--right">Alternative PCP</th>
      <th scope="col" class="fsa-text-align--right">Effective LDP Rate ($)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Commodity">Barley $/Bushel</td>
      <td class="fsa-text-align--right" aria-label="Loan Rate">1.75</td>
      <td class="fsa-text-align--right" aria-label="30-Day Period PCP">3.30</td>
      <td class="fsa-text-align--right" aria-label="Alternative PCP">2.60</td>
      <td class="fsa-text-align--right" aria-label="Effective LDP Rate ($)">0.00</td>
    </tr>
    <tr>
      <td aria-label="Commodity">Canola $/Cwt.</td>
      <td class="fsa-text-align--right" aria-label="Loan Rate">8.94</td>
      <td class="fsa-text-align--right" aria-label="30-Day Period PCP">15.99</td>
      <td class="fsa-text-align--right" aria-label="Alternative PCP">15.89</td>
      <td class="fsa-text-align--right" aria-label="Effective LDP Rate ($)">0.00</td>
    </tr>
    <tr>
      <td aria-label="Commodity">Oats $/Bushel</td>
      <td class="fsa-text-align--right" aria-label="Loan Rate">1.43</td>
      <td class="fsa-text-align--right" aria-label="30-Day Period PCP">2.97</td>
      <td class="fsa-text-align--right" aria-label="Alternative PCP">1.92</td>
      <td class="fsa-text-align--right" aria-label="Effective LDP Rate ($)">0.00</td>
    </tr>
  </tbody>
</table>
```

### Horizontal
<div class="ds-preview">
  <table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
    <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Document title</button></th>
        <th scope="col"><button class="fsa-table__sort" type="button">Description</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Year</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th aria-label="Document title" scope="row">Declaration of Independence</th>
        <td aria-label="Description">Statement</td>
        <td aria-label="Year" class="fsa-text-align--right">1776</td>
      </tr>
      <tr>
        <th aria-label="Document title" scope="row">Bill of Rights</th>
        <td aria-label="Description">The first ten amendments</td>
        <td aria-label="Year" class="fsa-text-align--right">1791</td>
      </tr>
      <tr>
        <th aria-label="Document title" scope="row">Emancipation Proclamation</th>
        <td aria-label="Description">Executive order granting freedom to slaves in designated southern states.</td>
        <td aria-label="Year" class="fsa-text-align--right">1863</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="descending"><button class="fsa-table__sort fsa-table__sort--descending" type="button">Document title</button></th>
      <th scope="col"><button class="fsa-table__sort" type="button">Description</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Year</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th aria-label="Document title" scope="row">Declaration of Independence</th>
      <td aria-label="Description">Statement</td>
      <td aria-label="Year" class="fsa-text-align--right">1776</td>
    </tr>
    <tr>
      <th aria-label="Document title" scope="row">Bill of Rights</th>
      <td aria-label="Description">The first ten amendments</td>
      <td aria-label="Year" class="fsa-text-align--right">1791</td>
    </tr>
    <tr>
      <th aria-label="Document title" scope="row">Emancipation Proclamation</th>
      <td aria-label="Description">Executive order granting freedom to slaves in designated southern states.</td>
      <td aria-label="Year" class="fsa-text-align--right">1863</td>
    </tr>
  </tbody>
</table>
```

## Usage

### Use When

* When you need to display tabular information, such as statistical data.

### Don't Use

* For layout, use [Grids]({{ site.baseurl }}visual-style/grid/).
* If the amount of content is simple or brief enough, and depending on its context, consider structuring as an [unordered list]({{ site.baseurl }}visual-style/typography/#unordered-list-bullet), [ordered list]({{ site.baseurl }}visual-style/typography/#ordered-list-numbered), or [definition list]({{ site.baseurl }}visual-style/typography/#definition-list).

## Accessibility

Always refer to the [Accessibility Tables Guide]({{ site.baseurl }}guides/accessibility/tables) for overall guidance.

* Simple tables can have two levels of headers. Each header cell should have `scope="col"` or `scope="row"`.
* Complex tables are tables with more than two levels of headers. Each header should be given a unique `id` and each data cell should have a `headers` attribute with each related header cell’s `id` listed.
