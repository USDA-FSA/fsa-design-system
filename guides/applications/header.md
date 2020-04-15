---
layout: guide
parent: "Applications"
title: "Header"
intro: "FPAC Applications should have a consistent header and make use of the Design System's header component."

---

<!-- <div class="ds-preview">
  <figure>
    <a href="{{ site.baseurl }}img/subcategories/applications/app-name-approved.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/app-name-approved.jpg" alt="example application header"></a>
    <figcaption>Screenshot: header</figcaption>
  </figure>
</div> -->

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

## Department and Agency

The department name (e.g. USDA) and agency name (e.g. FPAC) should be displayed. The Design System provides responsive behavior based on screen size, providing a relevant condensed rendering as the screen gets smaller.

## Application Name

The application name should display, paired with an acronym. On smaller screens and resolutions, only the application acronym may be shown.

## Application Logo

FPAC applications should not use an application logo, deferring to text-based rendering.

## User Profile and Authentication

When a User is authenticated into an FPAC application their Full Name shall be displayed at a level complementary to the Application Name, and paired with access to log out via eAuth.