---
layout: guide
parent: "Applications"
title: "Tables"
intro: "FSA applications that require data to be displayed in a tabular format shall use the below guidelines to maintain consistency."

---

## Tables Guidelines

The FSA Design System uses 3 different types of design style for tabular data, with the intention of being flexible enough to compartmentablize the data without having too much visual noise and weight on the screen. Below you will find the various types of tables that can be used, and an explanation of when to use the specific styles.

When using the custom CSS classes provided within the Design System, the structure of the table will shift based on the size of the content within the cell. The horizontal spacing of the largest text string or element will determine the width of each column. A Developer shall not hardcode the width or height of the table or table cells.

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

Below is an example of a default table that also includes button controls.

<table class="fsa-table">
  <thead>
    <tr>
      <th scope="col">Commodity</th>
      <th scope="col">Loan Rate</th>
      <th scope="col">30-Day Period PCP</th>
      <th scope="col">Effective LDP Rates ($)</th>
      <th scope="col">Tools</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley</td>
      <td>1.75</td>
      <td>3.30</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--secondary" type="button">View</button> <button class="fsa-btn fsa-btn--secondary" type="button">Edit</button></td>
    </tr>
    <tr>
      <td>Canola</td>
      <td>8.94</td>
      <td>15.99</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--secondary" type="button">View</button> <button class="fsa-btn fsa-btn--secondary" type="button">Edit</button></td>
    </tr>
    <tr>
      <td>Flaxseed</td>
      <td>10.13</td>
      <td>15.90</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--secondary" type="button">View</button> <button class="fsa-btn fsa-btn--secondary" type="button">Edit</button></td>
    </tr>
  </tbody>
</table>


## Borderless Table Style

This style of table is generally used for tables with more text content that needs to be displayed without adding extra visual noise. The horizontal row lines help to organize the content and allow the User to effortlessly read across the row. Below is an example of the same tabular data found in the first example above, but in a variation on the table style.

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


Below is an example of a Borderless table that also includes button controls.

<table class="fsa-table fsa-table--borderless">
  <thead>
    <tr>
      <th scope="col">Commodity</th>
      <th scope="col">Description</th>
      <th scope="col">Tools</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barley</td>
      <td>Barley, a member of the grass family, is a major cereal grain grown in temperate climates globally. It was one of the first cultivated grains, particularly in Eurasia as early as 10,000 years ago. Barley has been used as animal fodder, as a source of fermentable material for beer and certain distilled beverages, and as a component of various health foods.</td>
      <td><button class="fsa-btn fsa-btn--secondary" type="button">Edit</button></td>
    </tr>
    <tr>
      <td>Canola</td>
      <td>Canola may refer to an edible and industrial oil (also known as canola oil) produced from the seed of any of several cultivars of rapeseed bred to be low in erucic acid from the Brassicaceae family of plants, or to the plants themselves, namely cultivars of Brassica napus L., Brassica rapa subsp. oleifera, syn. B. campestris L. or Brassica juncea. To be called canola, the oil must contain less than 2% erucic acid and the leftover meal must contain less than 30 micromoles of aliphatic glucosinolates per gram.</td>
      <td><button class="fsa-btn fsa-btn--secondary" type="button">Edit</button></td>
    </tr>
    <tr>
      <td>Flaxseed</td>
      <td>Flax (also known as common flax or linseed), Linum usitatissimum, is a member of the genus Linum in the family Linaceae. It is a food and fiber crop cultivated in cooler regions of the world. The textiles made from flax are known in the Western countries as linen, and traditionally used for bed sheets, underclothes, and table linen. The oil is known as linseed oil. In addition to referring to the plant itself, the word "flax" may refer to the unspun fibers of the flax plant. The plant species is known only as a cultivated plant, and appears to have been domesticated just once from the wild species Linum bienne, called pale flax.</td>
      <td><button class="fsa-btn fsa-btn--secondary" type="button">Edit</button></td>
    </tr>
  </tbody>
</table>


## Related Resources

 * [Tables Component]({{ site.baseurl }}/components/tables)