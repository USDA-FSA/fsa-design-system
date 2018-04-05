---
layout: guide
parent: "Applications"
title: "Fonts"
intro: "All FSA applications shall adhere to the below Typography guidelines in order to maintain consistency throughout all agency applications."

---

## Typography Guidelines

The Typeface used within the FSA Design System has been selected because of their legibility and availability across operating systems. All FSA applications shall utilize only the Typeface listed below. They are open-source and designed to have a clear and concise look that pairs well in numerous interface elements in an application. Fallback Typefaces are available within the CSS for legacy systems. Developers should review the [Typography section]({{ site.baseurl }}visual-style/typography/) to gain further insight on how to utilize the official typeface.

## Typeface

**Source Sans Pro** is an open-source sans-serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.

### Source Sans Pro

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <div class="docs__font fsa-font--sans">
    <p class="docs__font__preview">Aa</p>
    <div class="docs__font__details">
    <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
    <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
    <p class="docs__font__item">1234567890</p>
    <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?*</p>
    </div>
    </div>
  </div>
</div>

Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.

<!--
### Weights

<div class="fsa-grid">
  <div class="fsa-grid__1/3">
    <p class="docs__font__preview docs__font--source-sans-pro">Aa</p>
  </div>
  <div class="fsa-grid__1/3">
    <p class="docs__font__preview docs__font--source-sans-pro docs__font--source-sans-pro-light">Aa</p>
  </div>
  <div class="fsa-grid__1/3">
    <p class="docs__font__preview docs__font--source-sans-pro docs__font--source-sans-pro-bold">Aa</p>
  </div>
</div>

<div class="fsa-grid">
  <div class="fsa-grid__1/3">
    <p class="docs__font__preview docs__font--merriweather">Aa</p>
  </div>
  <div class="fsa-grid__1/3">
    <p class="docs__font__preview docs__font--merriweather docs__font--merriweather-light">Aa</p>
  </div>
  <div class="fsa-grid__1/3">
    <p class="docs__font__preview docs__font--merriweather docs__font--merriweather-bold">Aa</p>
  </div>
</div>
-->

### Fallbacks

Should the Web Fonts, Source Sans Pro or Merriweather, fail to load for any reason these are the fallback typefaces.

#### Helvetica Neue

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <div class="docs__font docs__font--helvetica">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?*</p>
      </div>
    </div>
  </div>
</div>


## Usage

The font system being used allows for various pairings of fonts that are contemporary and are optimized for readability. When used properly, the FSA Design System will automatically choose a consistent (and correct) font for all elements within the web page. Developers need not explicitly specify the font for any web element. All approved fonts are contained within the custom CSS framework (fsa-style) and should be applied using the appropriate classes. Developers shall not augment or change fonts within the FSA Design System for use within FSA Applications.

## Related Resources

 * [Typography CSS Information]({{ site.baseurl }}visual-style/typography/)
