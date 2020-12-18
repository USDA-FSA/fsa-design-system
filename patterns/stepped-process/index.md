---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Stepped Process"
shortName: "pattern__stepped-process"
intro: "Lead the user through a series of steps or flow."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
---

## Anatomy

{% capture anatomy__markers %}
1. [Stepped Tabs]({{ site.baseurl }}components/stepped-tabs)
1. [Stepped Control]({{ site.baseurl }}components/stepped-control)
{% endcapture %}

{% assign anatomy__image-off = "stepped-process.png" %}

{% include anatomy.html %}

## Live Demo

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="phone" class="fsa-btn-group__item" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="desktop" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="{{ site.baseurl }}/demo/stepped-process.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--desktop" id="rwd-demo_a">
      <iframe src="{{ site.baseurl }}/demo/stepped-process.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

{% include alert.rwd-rendering.html %}
