---
layout: page
parent: "Components"
type: "UI Component"
title: "Topper"
intro: "Provides a way for a User to return to the top of the page."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-topper">
    <div class="fsa-topper__bd">
      <a class="fsa-topper__link" href="#main-content">Return to top</a>
    </div>
  </div>
</div>
```html
<div class="fsa-topper">
  <div class="fsa-topper__bd">
    <a class="fsa-topper__link" href="#main-content">Return to top</a>
  </div>
</div>
```

## Variations

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-topper fsa-topper--fullscreen">
    <div class="fsa-topper__bd">
      <a class="fsa-topper__link" href="#main-content">Return to top</a>
    </div>
  </div>
</div>
```html
<div class="fsa-topper fsa-topper--fullscreen">
  <div class="fsa-topper__bd">
    <a class="fsa-topper__link" href="#main-content">Return to top</a>
  </div>
</div>
```

## Usage

{% capture usage_do %}
* When an Application page is longer and requires.
* When an Application requires a quick way to return to the top of the page.
{% endcapture %}

{% capture usage_dont %}
* As link to another page.
* For anything other than returning the User to the top of the screen.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Text Links Guide]({{ site.baseurl }}guides/accessibility/links) for overall guidance.

* Users must be able to tab to use the Topper component.
* Users must be able to activate a link when pressing ‘Enter’ on their keyboard.
* Users must be able to identify the Topper link without relying on color alone.
* Users must be able to activate hover and focus states with both a mouse and a keyboard.

## General Guidance

* The Topper is generally placed just above the FPAC Application Footer.
* The Topper component can be used multiple times on a page for extended content, such as an FAQs section.
