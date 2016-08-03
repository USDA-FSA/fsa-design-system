---
layout: guide
parent: "Accessibility"
title: "Color and Contrast"
intro: "There are two aspects to address when it comes to color, contrast, and color dependence."
---

<strong>Color contrast</strong> is the ratio of the foreground color (for most websites, this is often text) and background color. <strong>Color dependence</strong> is the need to see color to understand the information. Unless specific agency requirements dictate otherwise, color contrast should meet the [WCAG 2.0 AA](https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-contrast) minimum color contrast ratio of **4.5:1**.

## Testing

### Color Contrast

1. Using a [color contrast checker](http://www.paciellogroup.com/resources/contrastanalyser/), select the darkest / lightest section of the text.
2. Select the darkest / lightest section of the background.
3. Check the ratio and ensure its greater than [4.5:1][WCAG 2.0 AA] (e.g., 5.3:1 would pass).

<strong>Note:</strong> Run this test for all states of the text (e.g., `:hover`, `:visited`, `:focus`). This test should also be performed on images of text unless the image is a logo, which is exempt.

### Color Dependence

1. Identify sections which use color to convey information.
2. Check to see if the information is conveyed in another way visually and programmatically.

## Examples

### Failures

<div class="pb-preview">
  <span style = "color:#58AA02">This text fails. </span>
</div>

> This text fails because it is too light. The contrast ratio is (2.93 : 1).

<div class="pb-preview">
  <span style = "color:#FFFFFF; background:#8D8E90">This text fails.</span>
</div>

> This text fails because the background isn't dark enough. The contrast ratio is (3.28 : 1).

<div class="pb-preview">
  <p style="color:red;">Red text indicates a required field</p>
  <p>
    <label for="name">First Name&nbsp;</label>
    <input type="text" id="name">
  </p>
  <p>
    <label for="lname" style="color:red">Last Name&nbsp;</label>
    <input type="text" id="lname">
  </p>
</div>

> This is a failure because the only indication of which fields are required is the color of the text label.

### Passes

<div class="pb-preview">
  <span style="color:#458503">This text passes. </span>
</div>

> This text passes. The contrast ratio is (4.56 : 1).

<div class="pb-preview">
  <span style="color:#FFFFFF; background:#757679">This text passes.</span>
</div>

> This text passes. The contrast ratio is (4.54 : 1).

<div class="pb-preview">
  <p style="color:red;">* indicates a required field</p>
  <p>
    <label for="name-8674f67">First Name</label>
    <input type="text" id="name-8674f67">
  </p>
  <p>
    <label for="lname-2345" style="color:red">* Last Name</label>
    <input type="text" id="lname-2345">
  </p>
</div>

> This example passes because the * and the red text indicates the required field.

[WCAG 2.0 AA]: https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-contrast
