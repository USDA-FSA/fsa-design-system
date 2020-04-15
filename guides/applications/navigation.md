---
layout: guide
parent: "Applications"
title: "Navigation"
intro: "FPAC Applications should have cohesive implementation of a global navigation."

---

* The first navigational item shall direct to the applications entry experience, e.g. Home, Dashboard, etc.
* Target fewer than 6 navigation categories
* Navigation dropdowns, sub-lists, or sub-navigation may be available
* Third-level deep navigation should be avoided

The below demonstrates a responsive implementation of a header with Design System components [Tophat]({{ site.baseurl }}components/tophat/), [Application Header]({{ site.baseurl }}components/header-app/), and [Globabl Nav]({{ site.baseurl }}components/top-nav/).

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="phone" class="fsa-btn-group__item" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="tablet" class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="https://usda-fsa.github.io/fsa-style/boilerplate.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--tablet" id="rwd-demo_buttons">
      <iframe src="https://usda-fsa.github.io/fsa-style/boilerplate.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>
