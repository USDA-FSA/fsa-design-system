---
layout: guide
parent: "Applications"
title: "Tables"
intro: "FSA applications that require data to be displayed in a tabular format shall use the below guidelines to maintain consistency."

---

## Tables Guidelines

The FSA Design System uses 3 different types of design style for tabular data, with the intention of being flexible enough to compartmentablize the data without having too much visual noise and weight on the screen. Below you will find the various types of tables that can be used, and an explanation of when to use the specific styles.

When using the custom CSS classes provided within the Design System, the structure of the table will shift based on the size of the content within the cell. The horizontal spacing of the largest text string or element will determine the width of each column. A Developer shall not hardcode the width or height of the table or table cells.

__Tables should be used only to display tabular data__, and shall not be used to structure a page or provide a mechanism for layout. Tables used for the purpose of layout are generally not 508 compliant. Developers shall utilize the [FSA Design System Grids]( {{ site.baseurl }}visual-style/grid/ ) in order to structure their content on a page.

## Default Table Style

Below is the default table style that should be used in the majority of instances. The borders and spacing provide enough room for most forms of tabular data and allow for easy of use and interpretation.

<table class="fsa-table">
    <caption>Generic Table with Default Style</caption>
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

## Examples with Button Controls

<caption>Please select a new farm and tract</caption>
<table class="fsa-table">
  <thead>
    <tr>
      <th scope="col">Farm Number</th>
      <th scope="col">Tract Number</th>
      <th scope="col">Description</th>
      <th scope="col">Farmland Acres</th>
      <th scope="col">Cropland Acres</th>
      <th scope="col">CRP Cropland Acres</th>
      <th scope="col">CRP MPL Acres</th>
      <th scope="col">Controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>700</td>
      <td>1269</td>
      <td>H10 NE4 35-14-23</td>
      <td>160.00</td>
      <td>74.70</td>
      <td>0.00</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--primary" type="button">Save</button></td>
    </tr>
    <tr>
      <td>700</td>
      <td>2804</td>
      <td>H7 E2SE4 27-13-23</td>
      <td>20.00</td>
      <td>7.80</td>
      <td>0.00</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--primary" type="button">Save</button></td>
    </tr>
    </tbody>
</table>

<button class="fsa-btn fsa-btn--secondary" type="button">Back</button> <button class="fsa-btn fsa-btn--secondary" type="button">Modify Search</button>

<!--

___


### Select Receipts for View
<div class="fsa-grid">
  <div class="fsa-grid__1/2"><strong>State:</strong> All states - 00</div>
  <div class="fsa-grid__1/2"><strong>Country:</strong> All counties - 00</div>
  <div class="fsa-grid__1/2"><strong>Commodity:</strong> Peanuts - All</div>
  <div class="fsa-grid__1/2"><strong>Crop Year:</strong> 2016</div>
  <div class="fsa-grid__1/2"><strong>Warehouse Code:</strong> 72150</div>
  <div class="fsa-grid__1/2"><strong>Filesequence Number:</strong> </div>
</div>

<div class="fsa-clearfix">
<div class="fsa-float--right">
    <button class="fsa-btn fsa-btn--secondary" type="button">FSA View</button> <button class="fsa-btn fsa-btn--secondary" type="button">Provider View</button>
</div>
</div>

<table class="fsa-table">
  <thead>
    <tr>
      <th scope="col">Farm Number</th>
      <th scope="col">Tract Number</th>
      <th scope="col">Description</th>
      <th scope="col">Farmland Acres</th>
      <th scope="col">Cropland Acres</th>
      <th scope="col">CRP Cropland Acres</th>
      <th scope="col">CRP MPL Acres</th>
      <th scope="col">Controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>700</td>
      <td>1269</td>
      <td>H10 NE4 35-14-23</td>
      <td>160.00</td>
      <td>74.70</td>
      <td>0.00</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--primary" type="button">Save</button></td>
    </tr>
    <tr>
      <td>700</td>
      <td>2804</td>
      <td>H7 E2SE4 27-13-23</td>
      <td>20.00</td>
      <td>7.80</td>
      <td>0.00</td>
      <td>0.00</td>
      <td><button class="fsa-btn fsa-btn--primary" type="button">Save</button></td>
    </tr>
    </tbody>
</table>

<button class="fsa-btn fsa-btn--secondary" type="button">Back</button> <button class="fsa-btn fsa-btn--secondary" type="button">Modify Search</button>
-->

## Examples with In-line Row Controls

<caption>Assigned Producers</caption>
<table class="fsa-table">
  <thead>
    <tr>
      <th scope="col">Producer Name</th>
      <th scope="col">Type</th>
      <th scope="col">Share</th>
      <th scope="col">Controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RUSS NELLORE</td>
      <td>Other</td>
      <td><input class="fsa-input" type="text" name="1iuoytytesgdf" value="0.00" placeholder="Placeholder">%</td>
      <td><input class="fsa-checkbox" id="1p" type="checkbox" name="lorem-9683783" value="lorem-9683783">
  <label for="lorem-9683783">Primary</label> <input class="fsa-checkbox" id="1r" type="checkbox" checked="checked" name="avl" value="1">
  <label for="lorem-9683783">Available</label>
  </td>
    </tr>
    <tr>
      <td>RICHARD L NELLOR</td>
      <td>Operator</td>
      <td><input class="fsa-input" type="text" name="1iuoytytesgdf" value="100.00" placeholder="Placeholder">%</td>
      <td><input class="fsa-checkbox" id="1p" type="checkbox" checked="checked" name="lorem-9683783" value="lorem-9683783">
  <label for="lorem-9683783">Primary</label> <input class="fsa-checkbox" id="2r" type="checkbox" checked="checked" name="avl" value="1">
  <label for="lorem-9683783">Available</label>
  </td>
    </tr>
    <tr>
      <td>STOCKLEY BUILDING CO</td>
      <td>Owner</td>
      <td><input class="fsa-input" type="text" name="1iuoytytesgdf" value="0.00" placeholder="Placeholder">%</td>
      <td><input class="fsa-checkbox" id="1p" type="checkbox" name="lorem-9683783" value="lorem-9683783">
  <label for="lorem-9683783">Primary</label> <input class="fsa-checkbox" id="3r" type="checkbox" checked="checked" name="avl" value="1">
  <label for="lorem-9683783">Available</label>
  </td>
    </tr>
    </tbody>
</table>

<button class="fsa-btn fsa-btn--secondary" type="button">Back</button> <button class="fsa-btn fsa-btn--primary" type="button">Save</button>


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


## Borderless Table Text-Heavy Content

The below example showcases the Borderless Table Style used with text-heavy content along with a control button. The intent of this table is to provide ample whitespace around content but still provide a strict horizontal structure for the rows of the table.

<table class="fsa-table fsa-table--borderless">
  <thead>
    <tr>
      <th scope="col">Commodity</th>
      <th scope="col">Description</th>
      <th scope="col">Controls</th>
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

 * [Tables Component]({{ site.baseurl }}components/tables)
