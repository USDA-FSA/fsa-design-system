---
layout: guide
parent: "Accessibility"
title: "Images"
intro: "When using images on a page, for Assistive Technology (AT) to be able to recognize and read it, you must provide an alternate method for that content."
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

Alternatives can be provided via a `caption`, `alt` attribute, `title` attribute, or `aria-` label. If an image has text, all the text in the image must be provided in the alternate content. No matter which method is used, an `alt` or `title` attribute must be provided, even if it is empty.

## Testing

1. Using the web developer tool, select images > Display Alt Attributes & Outline All Images.
1. Inspect each alt tag for the following:
  * A unique description of the image is provided.
  * Repeated images have the same alt text.
  * All text in the image is included in the alt text.
  * "Image of" or "Photo of" is not used.
  * If the alt tag is empty, ensure the image is purely decorative.
  * If the image is not decorative, make sure the image is described on the page.
1. Check outlined images without alt tags by doing the following:
  * Right click the image.
  * Select 'Inspect Element'.
  * Check for a title tag for the information normally found on the alt tag.

## Examples

### Passes

```html
<img src="{{ site.baseurl }}img/sign.jpg" alt="Sign that reads: Warning do not read this sign">
```
<div class="ds-preview">
  <img src="{{ site.baseurl }}img/sign.jpg" alt="Sign that reads: Warning do not read this sign">
</div>

> **Passes:** Preferred method for providing alternate content.

> **Passes:** Clear `alt` tag with all text included.

```html
<img src="{{ site.baseurl }}img/sign.jpg" title="Sign that reads: Warning do not read this sign">
```
<div class="ds-preview">
  <img src="{{ site.baseurl }}img/sign.jpg" title="Sign that reads: Warning do not read this sign">
</div>

> **Passes:** Clear `title` attribute with all text included.

> **Passes:** Acceptable, but less compatible with certain AT, defer to `alt` attribute over `title` attribute.

```html
<figure>
  <img src="{{site.baseurl}}img/sign.jpg" alt="">
  <figcaption>Sign that reads: Warning do not read this sign</figcaption>
</figure>
```
<div class="ds-preview">
  <figure>
    <img src="{{site.baseurl}}img/sign.jpg" alt="">
    <figcaption>Sign that reads: Warning do not read this sign</figcaption>
  </figure>
</div>


> **Passes:** Information contained in the image is provided on the page, in immediate context.

> **Passes:** In most instances, an `alt` attribute is preferred.

> **Passes:** Images marked with an empty alt, `alt=""`, are considered "decorative" and not read by AT.

### Incorrect

```html
<img src="{{ site.baseurl }}img/sign.jpg">
```
<div class="ds-preview">
  <img src="{{ site.baseurl }}img/sign.jpg">
</div>

> **Fails:** Image is missing an `alt` attribute and alternative content.

```html
<img src="{{ site.baseurl }}img/sign.jpg" alt="">
```
<div class="ds-preview">
  <img src="{{ site.baseurl }}img/sign.jpg" alt="">
</div>

> **Fails:** `Alt` attribute is missing text from image.

```html
<img src="{{ site.baseurl }}img/sign.jpg" alt="Image of sign that says: WARNING DO NOT READ THIS SIGN">
```
<div class="ds-preview">
  <img src="{{ site.baseurl }}img/sign.jpg" alt="Image of sign that says: WARNING DO NOT READ THIS SIGN">
</div>

> **Fails:** Avoid using "Image of" or "Picture of" as the <abbr title="Assistive Technology">AT</abbr> will notify the user that it is an image.

> **Fails:** Avoid using all caps as some screen readers will read each letter (i.e., "W-A-R-N-I-N-G").
