---
layout: page
parent: "Components"
title: "Growl Notification"
intro: "Growl Notification provides application messaging, providing information about page-level or out-of-view events."
jump_menu: true
title_label: 'Requires JavaScript'
---
<div class="fsa-whiteout" id="fsa-whiteout" aria-hidden="true"></div>
<div class="fsa-growl-container">
  <div class="fsa-growl" id="UNIQUE-ID-AC598060D7502E9E" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Something happened</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You're probably just fine.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">OK</button>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--error" id="UNIQUE-ID-832353AD65DB511B" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--warning" id="UNIQUE-ID-BC33C95AA75A8E1C" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl Title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>

## Variations

Growl Notifications are styled with `class="fsa-growl fsa-growl--[variation]"`.

### Default

```html
<div class="fsa-growl-container">
  <div class="fsa-growl" id="UNIQUE-ID-AC598060D7502E9E" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Something happened</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You're probably just fine.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">OK</button>
      </p>
    </div>
  </div>
</div>
```
<div class="ds-preview">
  <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show" aria-controls="UNIQUE-ID-AC598060D7502E9E" aria-expanded="false" type="button">Open Default Growl</button>
</div>


### Error

```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--error" id="UNIQUE-ID-832353AD65DB511B" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show" aria-controls="UNIQUE-ID-832353AD65DB511B" aria-expanded="false" type="button">Open Error Growl</button>
</div>


### Warning

```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--warning" id="UNIQUE-ID-BC33C95AA75A8E1C" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show" aria-controls="UNIQUE-ID-BC33C95AA75A8E1C" aria-expanded="false" type="button">Open Warning Growl</button>
</div>

### Success

```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show" aria-controls="UNIQUE-ID-8A386E512C033F57" aria-expanded="false" type="button">Open Success Growl</button>
</div>

### Modal display

```html
<!-- PLACE JUST BELOW BODY TAG -->
<div class="fsa-whiteout" id="fsa-whiteout" aria-hidden="true"></div>
<!-- END WHITEOUT -->

<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl Title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p>
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```
<div class="ds-preview">
  <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show whiteout-show" aria-controls="UNIQUE-ID-9469E21387FAF609" aria-expanded="false" type="button">Open Modal Growl</button>
</div>

## Usage

### Use When

* The application needs to provide real-time messaging to the User about a page-level event, out-of-view event, or background processes.
* The application requires a message to appear and have the User take action to dismiss.
* The application displays non-critical information that won't disrupt a workflow.

### Don't Use

* When displaying error messages paired with specific form fields, use [Form Field States]({{ site.baseurl }}components/form-fields/)
* When displaying messages related to specific components on the current view, consider an [Inline Alert]({{ site.baseurl }}components/alerts/)

## General Guidance

* The control element that triggers the Growl shall utilize an aria-controls parameter that matches the ID of the Growl.
* Growl Notifications should be used to help provide guidance and information related to application state, processing, and events.

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

Growl Notifications' HTML and its content are typically injected into a page when an app requires its use. For the purposes of this demonstration, they already exist (hidden) in the HTML idle until an action calls for its state to change (show).

### Show Growl

* Set `aria-hidden` attribute to false
* Trap keydown event to set Tab Order
* Set focus of cursor to Growl

### Dismiss Growl

* Add `fsa-growl--dismissing` class
* Set `aria-hidden` attribute to true
* Remove `aria-expanded` attribute from element that triggered Growl
* Set focus to the element that triggered Growl
