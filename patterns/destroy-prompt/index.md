---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Destroy Prompt"
shortName: "pattern__destroy-prompt"
intro: Prompt users to the implications of a destructive action.
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: false
title_label: 'Requires JavaScript'
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Interaction Flow

This pattern features multiple variants of the [Growl Notification]({{ site.baseurl }}components/growl/) component.
{% assign anatomy__image-off = "destroy-prompt--animated.gif" %}

{% include anatomy.html %}

## Live Demo

<div class="ds-preview fsa-text-align--center">
  <button class="fsa-btn fsa-btn--secondary fsa-btn--large" data-behavior="growl-show whiteout-show" aria-controls="UNIQUE-ID-9469E21387FAF609" aria-expanded="false" type="button">Delete thing</button>
</div>
```html
<div class="fsa-whiteout" tabindex="-1" id="fsa-whiteout" aria-hidden="true"></div>
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Inspection #1234 Deleted</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="/link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
      </p>
    </div>
  </div>
</div>
<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="alertdialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Delete</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You are about to <strong>Delete an Inspection</strong>. This will affect <strong>4</strong> Inspectors.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss whiteout-dismiss growl-show" aria-controls="UNIQUE-ID-8A386E512C033F57" aria-expanded="false" class="fsa-btn fsa-btn--small fsa-btn--tertiary" type="button">Delete</button>
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Cancel</button>
      </p>
    </div>
  </div>
</div>
```

## JavaScript Guidance

Refer to the [Growl Notification component's]({{ site.baseurl }}/components/growl/#javascript-guidance) JavaScript Guidance.

{% include scripts.about.html %}

<div class="fsa-whiteout" tabindex="-1" id="fsa-whiteout" aria-hidden="true"></div>
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Inspection #1234 Deleted</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="/link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
      </p>
    </div>
  </div>
</div>
<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="alertdialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Delete</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You are about to <strong>Delete an Inspection</strong>. This will affect <strong>4</strong> Inspectors.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss whiteout-dismiss growl-show" aria-controls="UNIQUE-ID-8A386E512C033F57" aria-expanded="false" class="fsa-btn fsa-btn--small fsa-btn--tertiary" type="button">Delete</button>
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Cancel</button>
      </p>
    </div>
  </div>
</div>
