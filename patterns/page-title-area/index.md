---
layout: page
parent: "Patterns"
title: "Page Title Area"
shortName: "pattern__page-title-area"
intro: "Complement the page title with breadcrumbs and primary actions."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
---

## Anatomy

{% capture anatomy__markers %}
1. [Breadcrumb]({{ site.baseurl }}/components/breadcrumb)
1. [Heading: h1]({{ site.baseurl }}/visual-style/typography/#headings)
1. [Level]({{ site.baseurl }}/components/level)
1. [Buttons]({{ site.baseurl }}/components/buttons)
1. [Utilities: Margin]({{ site.baseurl }}/components/utilities/#margins)
{% endcapture %}

{% assign anatomy__image-off = "page-title-area--off.png" %}
{% assign anatomy__image-on = "page-title-area--on.png" %}

{% include anatomy.html %}

## Live Demo

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_page-title-area" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_page-title-area" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_page-title-area" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_page-title-area" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="{{ site.baseurl }}/demo/page-title-area.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_page-title-area">
      <iframe src="{{ site.baseurl }}/demo/page-title-area.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>


