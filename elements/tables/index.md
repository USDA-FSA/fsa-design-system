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

Styled `<table>` elements use `class="fsa-table"`, with several modifications available with `fsa-table--[variation]`.

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

### Borderless

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

### Plain

Omitting the default `class="fsa-table"` outright will render in a non-styled table, effectively a "reset" table.

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


## Responsive Tables

(TBD)

## Usage

### Use When

* asdf
* asdf
* asdf

### Don't Use

* asdf
* asdf
* asdf

## Accessibility

* asdf
* asdf
* asdf

## General Guidance

* asdf
* asdf
* asdf

## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet)
