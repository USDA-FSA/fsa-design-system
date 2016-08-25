---
layout: guide
parent: "Accessibility"
title: "Images"
intro: "When using images on a page, for Assistive Technology (AT) to be able to recognize and read it, you must provide an alternate method for that content. This can be provided via a caption, alt tag, title tag, or aria label. If an image has text, all the text in the image must be provided in the alternate content. No matter which method is used, an alt or title tag must be provided, even if the tag is blank."
---


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

<div class="pb-preview">
  <img src="{{site.baseurl}}/img/sign.jpg" alt="Sign that reads Warning do not read this sign">
</div>

```html
<img src="{{site.baseurl}}/img/sign.jpg" alt="Sign that reads Warning do not read this sign">
```

> **Passes:** Preferred method for providing alternate content.

> **Passes:** Clear `alt` tag with all text included.

<div class="pb-preview">
  <img src="{{site.baseurl}}/img/sign.jpg" title="Sign that reads Warning do not read this sign">
</div>

```html
<img src="{{site.baseurl}}/img/sign.jpg" title="Sign that reads Warning do not read this sign">
```

> **Passes:** Clear `title` attribute with all text included.

> **Passes:** Acceptable, but less compatible with certain AT, defer to `alt` attribute over `title` attribute

<div class="pb-preview">
  <img src="{{site.baseurl}}/img/sign.jpg" alt="">
  <span>Sign that reads Warning do not read this sign</span>
</div>

```html
<img src="{{site.baseurl}}/img/sign.jpg" alt="">
<span>Sign that reads Warning do not read this sign</span>
```

> **Passes:** Information contained in the image is provided on the page.

> **Passes:** In most instances, an `alt` attribute is preferred.

> **Passes:** Images marked with an empty alt, `alt=""`, are considered "decorative" and not read by AT.


### Incorrect

<div class="pb-preview">
  <img src="{{site.baseurl}}/img/sign.jpg" >
</div>

```html
<img src="{{site.baseurl}}/img/sign.jpg" >
```

> **Fails:** Image is missing an `alt` attribute and alternative content.

<div class="pb-preview">
  <img src="{{site.baseurl}}/img/sign.jpg" alt="">
</div>

```html
<img src="{{site.baseurl}}/img/sign.jpg" alt="">
```

> **Fails:** `Alt` attribute is missing text from image.

<div class="pb-preview">
  <img src="{{site.baseurl}}/img/sign.jpg" alt="Image of sign that says WARNING DO NOT READ THIS SIGN">
</div>

```html
<img src="{{site.baseurl}}/img/sign.jpg" alt="Image of sign that says WARNING DO NOT READ THIS SIGN">
```

> **Fails:** Avoid using "Image of" or "Picture of" as the <abbr title="Assistive Technology">AT</abbr> will notify the user that it is an image.

> **Fails:** Avoid using all caps as some screen readers will read each letter (i.e., "W-A-R-N-I-N-G").
