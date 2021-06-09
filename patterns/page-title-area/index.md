---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Page Title Area"
shortName: "pattern__page-title-area"
intro: "Complement the page title with breadcrumbs and primary actions."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Anatomy

{% capture anatomy__markers %}
1. [Breadcrumb]({{ site.baseurl }}/components/breadcrumb)
1. [Heading: h1]({{ site.baseurl }}/visual-style/typography/#headings)
1. [Level]({{ site.baseurl }}/components/level)
1. [Buttons]({{ site.baseurl }}/components/buttons)
1. [Utilities: Margin]({{ site.baseurl }}/utilities/#margins)
{% endcapture %}

{% assign anatomy__image-off = "page-title-area--off.png" %}
{% assign anatomy__image-on = "page-title-area--on.png" %}

{% include anatomy.html %}

## Live Demo

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block" data-component="">
  <div class="docs__rwd-embed-container">
    <div class="fsa-level fsa-level--justify-center fsa-level--gutter-none" role="group">
      <button data-behavior="toggle-rwd-size" data-size="phone" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-color--secondary fsa-bg--secondary-100" type="button" title="Portrait" aria-label="Portrait" aria-selected="true"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg></button>
      <button data-behavior="toggle-rwd-size" data-size="phone-big" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-color--secondary fsa-bg:hover--tertiary-100" type="button" title="Landscape" aria-label="Landscape"><svg style="transform: rotate(-90deg);" class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg></button>
      <button data-behavior="toggle-rwd-size" data-size="tablet" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-color--secondary fsa-bg:hover--tertiary-100" type="button" title="Tablet" aria-label="Tablet"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"></path></svg></button>
      <button data-behavior="toggle-rwd-size" data-size="desktop" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-color--secondary fsa-bg:hover--tertiary-100" type="button" title="Desktop" aria-label="Desktop"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path></svg></button>
      <button data-behavior="toggle-rwd-size" data-size="fullscreen" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-color--secondary fsa-bg:hover--tertiary-100" type="button" title="Fullscreen" aria-label="Fullscreen"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"></path></svg></button>
    </div>
    <div class="docs__rwd-embed docs__rwd-embed--phone">
      <button data-behavior="toggle-rwd-close-fullscreen" type="button" class="docs__rwd-embed-close fsa-btn fsa-btn--plain fsa-p--xs fsa-radius--full fsa-color--tertiary fsa-bg--white fsa-bg:hover--tertiary-100 fsa-link:hover--tertiary-900" title="Close" aria-label="Close"><svg class="fsa-icon fsa-icon--size-3" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></button>
      <iframe src="{{ site.baseurl }}/demo/page-title-area.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

