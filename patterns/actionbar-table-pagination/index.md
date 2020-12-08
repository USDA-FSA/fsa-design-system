---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Action Bar, Table, and Pagination"
shortName: "pattern__a"
intro: "Complement a data table with actions and pagination."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
---

## Anatomy

{% capture anatomy__markers %}
1. [Buttons]({{ site.baseurl }}components/buttons)
1. [Table]({{ site.baseurl }}components/tables)
1. [Checkbox]({{ site.baseurl }}components/checkbox/)
1. [Level]({{ site.baseurl }}components/level/)
1. [Text Input]({{ site.baseurl }}components/text-input/)
1. [Button Group]({{ site.baseurl }}components/button-group)
1. [Label]({{ site.baseurl }}components/labels/)
1. [Pagination]({{ site.baseurl }}components/pagination/)
1. [Utilities: Padding](utilities/#padding)
1. [Utilities: Margins](utilities/#margins)
1. [Utilities: Visibility](utilities/#visibility)
{% endcapture %}

{% assign anatomy__image-off = "actionbar-table-pagination--off.png" %}
{% assign anatomy__image-on  = "actionbar-table-pagination--on.png" %}

{% include anatomy.html %}

## Live Demo

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="phone" class="fsa-btn-group__item" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_a" data-size="desktop" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="{{ site.baseurl }}/demo/actionbar-table-pagination.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--desktop" id="rwd-demo_a">
      <iframe src="{{ site.baseurl }}/demo/actionbar-table-pagination.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

{% include alert.rwd-rendering.html %}
