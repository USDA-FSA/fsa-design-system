---
layout: guide
parent: "Applications"
title: "Modal Window"
intro: "A Popup window or Modal window is a vital part of many FPAC applications and provides a way for the system to focus solely on the content or a single action."

---

## Modal Window Guidelines

 * A Modal window is an on-page popup window, and shall utilize the Design System component
 * A Modal window can be used to show content that is specific and needs sole focus
 * All actions and content shall be restricted until a User action is taken on the modal
 * No FPAC application shall trigger a modal window without a User action

## Modal Window Sample

<figure>
  <a href="{{ site.baseurl }}img/subcategories/applications/modal-sample1.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/modal-sample1.jpg" alt="sample Modal Window"></a>
</figure>

## Responsive Sample

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_modal" data-size="phone" class="fsa-btn-group__item" type="button" title="Portrait" aria-selected="true">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_modal" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_modal" data-size="tablet" class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_modal" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__modal.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--tablet" id="rwd-demo_modal">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__modal.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Related Resources

 * [Modal Component]({{ site.baseurl }}components/modal/)
 * [Form Validation]({{ site.baseurl }}guides/applications/form-validation/)
