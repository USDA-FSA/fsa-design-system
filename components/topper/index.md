---
layout: page
parent: "Components"
type: "UI Component"
title: "Topper"
intro: "Convenient access to top of the page from the bottom."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

{% capture snippet %}
<div class="fsa-topper">
    <div class="fsa-topper__bd">
      <a class="fsa-topper__link" href="#main-content">
        <span class="fsa-topper__icon"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></span> Return to top
      </a>
    </div>
  </div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Variants

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

{% capture snippet %}
<div class="fsa-topper fsa-topper--fullscreen">
  <div class="fsa-topper__bd">
    <a class="fsa-topper__link" href="#main-content">
      <span class="fsa-topper__icon"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></span> Return to top
    </a>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

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
