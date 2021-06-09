---
layout: page
parent: "Components"
type: "UI Component"
title: "Tables"
shortName: "component__tables"
intro: "Present data or content in a tabular format."
jump_menu: true
relatedItems:
  - "Action Bar with Table"
  - "Destroy Prompt"
custom_js: ["ga/ga-tracker.js", "ga/generic.js", "table-select-demo.js"]
---

Tables are great for displaying tabular data. Minimal visual styling helps surface this information more easily.

<div class="ds-preview">
  <table class="fsa-table">
    <caption>[Table caption]</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Column A</button></th>
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

## Variations and Examples

Styled `<table>` components use `class="fsa-table"`, with several modifications available with `fsa-table--[variation]`.

Multiple modifying options are demonstrated for table rows (`tr`), table header cells (`th`), and table body cells (`td`) &ndash; along with sample use of other Design System components.

```html
<table class="fsa-table fsa-table--[variation]">
  ...
</table>
```

### Default

{% capture snippet %}
<table class="fsa-table">
  <caption>[Table caption]</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Commodity</button></th>
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Customize caption

The `<caption>`'s default presentation does not provide a hierarchical context. An `<hN>` element can be nested within to provide a stronger heading structure and clear visual hierarchy while providing stricter access through the `<caption>` element.

{% capture snippet %}
<table class="fsa-table">
  <caption>
    <h2>[Table caption as an &lt;h2&gt;]</h2>
  </caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Commodity</button></th>
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Borderless

{% capture snippet %}
<table class="fsa-table fsa-table--borderless">
  <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
  <thead>
    <tr>
      <th scope="col"><button class="fsa-table__sort" type="button">Commodity</button></th>
      <th scope="col" class="fsa-text-align--right" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Loan Rate</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate ($)</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oats $/Bushel</td>
      <td class="fsa-text-align--right">1.43</td>
      <td class="fsa-text-align--right">2.97</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
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
  </tbody>
</table>
{% endcapture %}

{% include preview-and-snippet.html %}

### Plain

Omitting the default `class="fsa-table"` outright renders a non-styled table, effectively "resetting" it.

{% capture snippet %}
<table>
  <caption>[Table caption]</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Commodity</button></th>
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Vertical Align: Middle

{% capture snippet %}
<table class="fsa-table fsa-table--borderless fsa-table--valign-middle">
  <thead>
    <tr>
      <th>Lorem ipsum dolor sit amet consec tetur</th>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
      <th>Sitaw</th>
      <th>Ametg</th>
      <th>Conse</th>
      <th>Adipi</th>
      <th>Accus</th>
      <th>Omnisi</th>
      <th>Aliqum</th>
      <th>Rerum odio volupt atibus eligendi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet consec tetur</td>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
      <th>Rerum odio volupt atibus eligendi</th>
    </tr>
    <tr>
      <td>Lorem ipsum dolor sit amet consec tetur</td>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
      <th>Rerum odio voluptatibus eligendi</th>
    </tr>
    <tr>
      <td>Lorem ipsum dolor sit amet consec tetur</td>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
      <th>Rerum odio voluptatibus eligendi</th>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include preview-and-snippet.html %}

### Vertical Align: Bottom

{% capture snippet %}
<table class="fsa-table fsa-table--borderless fsa-table--valign-bottom">
  <thead>
    <tr>
      <th>Lorem ipsum dolor sit amet consec tetur</th>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
      <th>Sitaw</th>
      <th>Ametg</th>
      <th>Conse</th>
      <th>Adipi</th>
      <th>Accus</th>
      <th>Omnisi</th>
      <th>Aliqum</th>
      <th>Rerum odio volupt atibus eligendi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet consec tetur</td>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
      <th>Rerum odio volupt atibus eligendi</th>
    </tr>
    <tr>
      <td>Lorem ipsum dolor sit amet consec tetur</td>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
      <th>Rerum odio voluptatibus eligendi</th>
    </tr>
    <tr>
      <td>Lorem ipsum dolor sit amet consec tetur</td>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
      <th>Rerum odio voluptatibus eligendi</th>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include preview-and-snippet.html %}

### Sticky Header
<div class="ds-preview ds-preview--bare ds-preview--overflow-example">
  <table class="fsa-table fsa-table--borderless">
    <thead>
      <tr>
        <th class="fsa-table__th--sticky">top header cell</th>
        <th class="fsa-table__th--sticky">top header cell</th>
        <th class="fsa-table__th--sticky">top header cell</th>
        <th class="fsa-table__th--sticky">top header cell</th>
        <th class="fsa-table__th--sticky">top header cell</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>

### Sticky Footer
<div class="ds-preview ds-preview--bare ds-preview--overflow-example">
  <table class="fsa-table fsa-table--borderless">
    <caption class="sr-only">Terminal Markets: Commodities</caption>
    <thead>
      <tr>
        <th scope="col" class="fsa-table__th--sticky">Market</th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Hard Red Winter Wheat">HRW</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Hard Red Spring">HRS</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Soft Red Winter">SRW</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Soft White Wheat">WHI</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Durum">HAD</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Yellow Corn">YC</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Barley">BRL</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Oats">OAT</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Yellow Soybeans">YSB</abbr></th>
        <th scope="col" class="fsa-table__th--sticky fsa-text-align--right"><abbr title="Sorghum">SOR</abbr></th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th class="fsa-table__th--sticky-foot" scope="row">Average</th>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">4.22</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">5.60</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">3.98</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">4.54</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">7.24</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">3.63</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">3.29</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">3.08</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">9.67</td>
        <td class="fsa-table__th--sticky-foot fsa-text-align--right">6.16</td>
      </tr>
      <tr>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <th scope="row"><abbr title="Amarillo, TX">AMA</abbr></th>
        <td class="fsa-text-align--right">3.22</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.64</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Amarillo, TX">AMA</abbr></th>
        <td class="fsa-text-align--right">3.22</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.64</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Cincinnati, OH">CIN</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.90</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.42</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">9.62</td>
        <td class="fsa-text-align--right">6.00</td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Evansville, IN">EVN</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">4.05</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Gulf Marketing Area">GLF</abbr></th>
        <td class="fsa-text-align--right">4.67</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">4.65</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.88</td>
        <td class="fsa-text-align--right">3.44</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">10.12</td>
        <td class="fsa-text-align--right">6.92</td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Kansas City Marketing Area">KCM</abbr></th>
        <td class="fsa-text-align--right">4.33</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.35</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.14</td>
        <td class="fsa-text-align--right">3.05</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">9.43</td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Los Angeles, CA">LOS</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">7.11</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Memphis, TN">MEM</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.91</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.59</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">9.79</td>
        <td class="fsa-text-align--right">5.69</td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Minnesota Marketing Area">MIN</abbr></th>
        <td class="fsa-text-align--right">4.27</td>
        <td class="fsa-text-align--right">5.73</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">7.35</td>
        <td class="fsa-text-align--right">2.99</td>
        <td class="fsa-text-align--right">2.85</td>
        <td class="fsa-text-align--right">2.79</td>
        <td class="fsa-text-align--right">8.98</td>
        <td class="fsa-text-align--right">5.69</td>
      </tr>
      <tr>
        <th scope="row"><abbr title="North Central Domestic">NCD</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">5.48</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">5.25</td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Pacific Northwest">PNW</abbr></th>
        <td class="fsa-text-align--right">4.92</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">4.81</td>
        <td class="fsa-text-align--right">7.35</td>
        <td class="fsa-text-align--right">4.31</td>
        <td class="fsa-text-align--right">3.19</td>
        <td class="fsa-text-align--right">3.37</td>
        <td class="fsa-text-align--right">10.61</td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="South Central Domestic">SCD</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">5.33</td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Toledo, OH">TOL</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">4.06</td>
        <td class="fsa-text-align--right">4.06</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.34</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">9.36</td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="Decatur, IL">TKO</abbr></th>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">3.62</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">9.48</td>
        <td class="fsa-text-align--right"></td>
      </tr>
      <tr>
        <th scope="row"><abbr title="West Coast Domestic">WCD</abbr></th>
        <td class="fsa-text-align--right">4.93</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">4.76</td>
        <td class="fsa-text-align--right">7.15</td>
        <td class="fsa-text-align--right">4.46</td>
        <td class="fsa-text-align--right">3.94</td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right"></td>
        <td class="fsa-text-align--right">8.28</td>
      </tr>
    </tbody>
  </table>
</div>

### Select Multiple Rows

<div class="ds-preview ds-preview--bare">
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
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--17" type="checkbox" name="inpections__select-inspection--17" value="17">
            <label for="inpections__select-inspection--17"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 17</button>
          </strong>
        </td>
        <td aria-label="State">California</td>
        <td aria-label="County">Ventura</td>
        <td aria-label="Farm Number">5644</td>
        <td aria-label="Assigned to"><span class="sr-only">not assigned</span></td>
        <td aria-label="Due Date">
          <time datetime="2018-11-10">11/10/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label">Not Started</span></div>
        </td>
      </tr>
      <tr class="fsa-table__row--selected">
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--24" type="checkbox" name="inpections__select-inspection--24" value="24" checked>
            <label for="inpections__select-inspection--24"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 24</button>
          </strong>
        </td>
        <td aria-label="State">California</td>
        <td aria-label="County">Los Angeles</td>
        <td aria-label="Farm Number">6662</td>
        <td aria-label="Assigned to"><a href="link.html">Diane Chambers</a></td>
        <td aria-label="Due Date">
          <time datetime="2018-11-16">11/16/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--general">In Progress</span></div>
        </td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--31" type="checkbox" name="inpections__select-inspection--31" value="31">
            <label for="inpections__select-inspection--31"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 31</button>
          </strong>
        </td>
        <td aria-label="State">California</td>
        <td aria-label="County">San Bernardino</td>
        <td aria-label="Farm Number">6664</td>
        <td aria-label="Assigned to"><span class="sr-only">not assigned</span></td>
        <td aria-label="Due Date">
          <time datetime="2018-10-07">10/07/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--warning">On Hold</span></div>
        </td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input disabled="disabled" class="fsa-checkbox fsa-checkbox--solo" id="inpections__select-inspection--33" type="checkbox" name="inpections__select-inspection--33" value="33">
            <label for="inpections__select-inspection--33"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 33</button>
          </strong>
        </td>
        <td aria-label="State">Kansas</td>
        <td aria-label="County">Miami</td>
        <td aria-label="Farm Number">7510</td>
        <td aria-label="Assigned to"><a href="link.html">Woody Boyd</a></td>
        <td aria-label="Due Date">
          <time datetime="2018-10-05">10/05/2018</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--success">Complete</span></div>
        </td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--37" type="checkbox" name="inpections__select-inspection--37" value="37">
            <label for="inpections__select-inspection--37"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 37</button>
          </strong>
        </td>
        <td aria-label="State">Maryland</td>
        <td aria-label="County">Anne Arundel</td>
        <td aria-label="Farm Number">1325</td>
        <td aria-label="Assigned to"><a href="link.html">Woody Boyd</a></td>
        <td aria-label="Due Date">
          <time datetime="2019-05-05">05/05/2019</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label fsa-label--general">In Progress</span></div>
        </td>
      </tr>
      <tr class="fsa-table__row--selected">
        <td aria-label="Select">
          <span>
            <input class="fsa-checkbox fsa-checkbox--solo" data-behavior="select-table-row" id="inpections__select-inspection--39" type="checkbox" name="inpections__select-inspection--39" value="39" checked>
            <label for="inpections__select-inspection--39"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td aria-label="Inspection Number">
          <strong>
            <button type="button" class="fsa-btn fsa-btn--flat">Inspection 39</button>
          </strong>
        </td>
        <td aria-label="State">Oregon</td>
        <td aria-label="County">Clackamas </td>
        <td aria-label="Farm Number">1196</td>
        <td aria-label="Assigned to"><span class="sr-only">not assigned</span></td>
        <td aria-label="Due Date">
          <time datetime="2019-05-05">05/05/2019</time>
        </td>
        <td aria-label="Status">
          <div><span class="fsa-label">Not Started</span></div>
        </td>
      </tr>
    </tbody>
  </table>
  <script>
    var checkboxIndeterminateExampleTable = document.getElementById("inpections__select-all");
    checkboxIndeterminateExampleTable.indeterminate = true;
  </script>
</div>

### Select a Single Row

<div class="ds-preview ds-preview--bare">
  <table class="fsa-table">
    <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
    <thead>
      <tr>
        <th class="fsa-table__th--sticky fsa-table__th--select">
          <span>
            <input class="fsa-radio fsa-radio--solo" data-behavior="select-one-table-row" id="commodities__select-row--00" type="radio" name="commodities__select-row" value="01" disabled>
            <label for="commodities__select-row--00"><span class="sr-only">Select this row</span></label>
          </span>
        </th>
        <th scope="col">Commodity</th>
        <th scope="col" class="fsa-text-align--right">Loan Rate</th>
        <th scope="col" class="fsa-text-align--right">30-Day Period PCP</th>
        <th scope="col" class="fsa-text-align--right">Alternative PCP</th>
        <th scope="col" class="fsa-text-align--right">Effective LDP Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-radio fsa-radio--solo" data-behavior="select-one-table-row" id="commodities__select-row--01" type="radio" name="commodities__select-row" value="01">
            <label for="commodities__select-row--01"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td>Barley $/Bushel</td>
        <td class="fsa-text-align--right">1.75</td>
        <td class="fsa-text-align--right">3.30</td>
        <td class="fsa-text-align--right">2.60</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr class="fsa-table__row--selected">
        <td aria-label="Select">
          <span>
            <input class="fsa-radio fsa-radio--solo" data-behavior="select-one-table-row" id="commodities__select-row--02" type="radio" name="commodities__select-row" value="02" checked>
            <label for="commodities__select-row--02"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td>Canola $/Cwt.</td>
        <td class="fsa-text-align--right">8.94</td>
        <td class="fsa-text-align--right">15.99</td>
        <td class="fsa-text-align--right">15.89</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-radio fsa-radio--solo" data-behavior="select-one-table-row" id="commodities__select-row--03" type="radio" name="commodities__select-row" value="03">
            <label for="commodities__select-row--03"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td>Flaxseed $/Cwt.</td>
        <td class="fsa-text-align--right">10.13</td>
        <td class="fsa-text-align--right">15.90</td>
        <td class="fsa-text-align--right">14.62</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-radio fsa-radio--solo" data-behavior="select-one-table-row" id="commodities__select-row--04" type="radio" name="commodities__select-row" value="04">
            <label for="commodities__select-row--04"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td>Oats $/Bushel</td>
        <td class="fsa-text-align--right">1.43</td>
        <td class="fsa-text-align--right">2.97</td>
        <td class="fsa-text-align--right">1.92</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td aria-label="Select">
          <span>
            <input class="fsa-radio fsa-radio--solo" data-behavior="select-one-table-row" id="commodities__select-row--05" type="radio" name="commodities__select-row" value="05">
            <label for="commodities__select-row--05"><span class="sr-only">Select this row</span></label>
          </span>
        </td>
        <td>Wheat - Soft Red Winter $/Bushel</td>
        <td class="fsa-text-align--right">2.42</td>
        <td class="fsa-text-align--right">4.49</td>
        <td class="fsa-text-align--right">4.19</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
    </tbody>
  </table>
</div>

## Responsive

Each table variation above can be made to fit on smaller viewports (i.e. mobile phones) via `class="fsa-table--responsive"` or `class="fsa-table--responsive fsa-table--responsive-horizontal"`. In addition to the previewed images below, view this page on a smaller device (Phone, Tablet, etc) to view the below Responsive variations.

{% capture rwdURL %}https://usda-fsa.github.io/fsa-style/demo/rwd__table.html{% endcapture %}
{% include rwd-viewer.html %}

### Structure

* Responsive table styles are identical at the smaller breakpoints regardless of initial variation used.
* The key to Responsive Tables is the use of the `aria-label` attribute on each data data cell, e.g. `<td aria-label="Commodity">...</td>` to replicate each column header (`th`).

### Default

{% include alert.rwd-rendering__small.html %}

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Horizontal

{% include alert.rwd-rendering__small.html %}

{% capture snippet %}
<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
  <thead>
    <tr>
      <th scope="col"><button class="fsa-table__sort" type="button">Document title</button></th>
      <th scope="col"><button class="fsa-table__sort" type="button">Description</button></th>
      <th scope="col" aria-sort="ascending" class="fsa-text-align--right"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Year</button></th>
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
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* When you need to display tabular information, such as statistical data.
{% endcapture %}

{% capture usage_dont %}
* For layout, use the [Grid System]({{ site.baseurl }}layout/grid/).
* If the amount of content is simple or brief enough, and depending on its context, consider structuring as an [unordered list]({{ site.baseurl }}visual-style/typography/#unordered-list-bullet), [ordered list]({{ site.baseurl }}visual-style/typography/#ordered-list-numbered), or [definition list]({{ site.baseurl }}visual-style/typography/#definition-list).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Tables Guide]({{ site.baseurl }}guides/accessibility/tables) for overall guidance.

* Note use of `aria` attributes for declaring by which column a table is sorted, and in which direction, `descending` or `ascending`.
* The `caption` element is required, as demonstrated is each example on this page. Some are visually hidden, though remain available to screenreaders; others have been visually modified to convey a visual hierarchy.
* Simple tables can have two levels of headers. Each header cell (`th`) should have `scope="col"` or `scope="row"`.
* Complex tables are tables with more than two levels of headers. Each header should be given a unique `id` and each data cell should have a `headers` attribute with each related header cell’s `id` listed.
