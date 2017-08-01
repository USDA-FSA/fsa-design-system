---
layout: guide
parent: "Applications"
title: "Fonts"
intro: "All FSA applications shall adhere to the below Typography guidelines in order to maintain consistency throughout all agency applications."

---

## Typography Guidelines

The Typefaces being used within the FSA Design System have been selected because of their legibility and availability across operating systems. All FSA applications shall utilize only the Typefaces listed below. The Typefaces used within the FSA Design system are open-source and are designed to have a clear and concise look that pairs well in numerous interface elements in an application. Fallback Typefaces are available within the CSS for legacy systems. Developers should review the [Typography section]({{ site.baseurl }}/visual-style/typography/) to gain insight on how to utilize the official Typefaces.

## Typefaces

We use two open-source font families: **Source Sans Pro** and **Merriweather**, both of which are designed for legibility and can beautifully adapt to a variety of visual styles.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@l">
    <h3>Source Sans Pro</h3>
    <div class="docs__font fsa-font--sans">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
    <p>Source Sans Pro is an open-source sans serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.</p>
    <p>Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.</p>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@l">
    <h3>Merriweather</h3>
    <div class="docs__font fsa-font--serif">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
    <p>Merriweather is an open-source serif typeface designed for on-screen reading. This font is ideal for text-dense design: the letterforms have a tall x-height but remain relatively small, making for excellent readability across screen sizes while not occupying extra horizontal space.</p>
    <p>The combination of slim and thick weights gives the font family stylistic range, while conveying a desirable mix of classic, yet modern simplicity. Merriweather communicates warmth and credibility at both large and smaller font sizes.</p>
  </div>
</div>

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

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@ml">
    <h4>Helvetica Neue</h4>
    <div class="docs__font docs__font--helvetica">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@ml">
    <h4>Georgia</h4>
    <div class="docs__font docs__font--georgia">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
</div>

## Typeface Usage

The font system being used allows for various pairings of typefaces that are contemporary and are optimized for reabability. It is not permissable for a Developer to augment or change fonts within the FSA Design System for use within FSA Applications. All approved fonts are contained within the custom CSS framework and should be applied using the appropriate classes.

## Related Resources

 * [Typography CSS Information]({{ site.baseurl }}/visual-style/typography/)
