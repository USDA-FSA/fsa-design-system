---
layout: page
parent: "Components"
type: "UI Component"
title: "Growl Notification"
shortName: "component__growl"
intro: "Surface application messaging about page-level or out-of-view events."
jump_menu: true
title_label: 'Requires JavaScript'
custom_js: ["ga/ga-tracker.js", "ga/generic.js", "growl-init-demo.js"]
relatedItems:
  - "Buttons"
  - "Destroy Prompt"
---

<div class="fsa-whiteout" tabindex="-1" id="fsa-whiteout" aria-hidden="true"></div>

<div class="fsa-growl-container">
  <div class="fsa-growl" id="UNIQUE-ID-AC598060D7502E9E" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Something happened</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You're probably just fine.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">OK</button>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--error" id="UNIQUE-ID-832353AD65DB511B" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--warning" id="UNIQUE-ID-BC33C95AA75A8E1C" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
  <div class="fsa-growl fsa-growl--warning" id="growl-init-demo-3" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
    </div>
    <div class="fsa-growl__bd">
      <p>Would you like to see a <strong>Modal-based example</strong>, aka "Prompt"?</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss growl-show whiteout-show" aria-controls="UNIQUE-ID-9469E21387FAF609" aria-expanded="false" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Yes</button>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">No</button>
      </p>
    </div>
  </div>
  <div class="fsa-growl" id="growl-init-demo-2" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
    </div>
    <div class="fsa-growl__bd">
      <p>You can have more than one when/if necessary.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Cool</button>
      </p>
    </div>
  </div>
  <div class="fsa-growl" id="growl-init-demo" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl Notification doc loaded</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You've viewing a sample of a <strong>Growl Notification</strong>.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">OK, thanks</button>
      </p>
    </div>
  </div>
</div>
<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="alertdialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl Title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--default.png" alt="Growl screen: default variation">
        <figcaption>Default</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--error.png" alt="Growl screen: error variation">
        <figcaption>Error</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--warning.png" alt="Growl screen: warning variation">
        <figcaption>Warning</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m fsa-m-b--none@l">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--success.png" alt="Growl screen: success variation">
        <figcaption>Success</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m fsa-m-b--none@l">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--modal.png" alt="Growl screen: modal variation">
        <figcaption>Modal / Prompt</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m fsa-m-b--none@l">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--all.png" alt="Growl screen: all variations">
        <figcaption>Multiple viewable</figcaption>
      </figure>
    </div>
  </div>
</div>

## Behavior

**Trigger sample Notifications:**

<p class="fsa-level@l fsa-level--grow-even">
  <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block" data-behavior="growl-show" aria-controls="UNIQUE-ID-AC598060D7502E9E" aria-expanded="false" type="button">Default</button></span>
  <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block" data-behavior="growl-show" aria-controls="UNIQUE-ID-832353AD65DB511B" aria-expanded="false" type="button">Error</button></span>
  <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block" data-behavior="growl-show" aria-controls="UNIQUE-ID-BC33C95AA75A8E1C" aria-expanded="false" type="button">Warning</button></span>
  <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block" data-behavior="growl-show" aria-controls="UNIQUE-ID-8A386E512C033F57" aria-expanded="false" type="button">Success</button></span>
  <span><button class="fsa-btn fsa-btn--secondary fsa-btn--block" data-behavior="growl-show whiteout-show" aria-controls="UNIQUE-ID-9469E21387FAF609" aria-expanded="false" type="button">Modal/Prompt</button></span>
</p>

Refer to [JavaScript Guidance](#javascript-guidance) for behaviorial details.

## Variations

Growl Notifications are styled with `class="fsa-growl fsa-growl--[variation]"`.

### Default

For events of lower relative importance, or for generic use.

<div class="ds-preview">
  <div style="max-width: 340px;">
    <div class="fsa-growl" id="UNIQUE-ID-AC598060D7502E9Efrf" aria-hidden="false" tabindex="0" role="dialog">
      <div class="fsa-growl__hd">
        <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
        <h2 class="fsa-growl__title">Something happened</h2>
      </div>
      <div class="fsa-growl__bd">
        <p>You're probably just fine.</p>
        <p class="fsa-level">
          <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">OK</button>
        </p>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-growl-container">
  <div class="fsa-growl" id="UNIQUE-ID-AC598060D7502E9E" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Something happened</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>You're probably just fine.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">OK</button>
      </p>
    </div>
  </div>
</div>
```

### Error

When things go wrong.

<div class="ds-preview">
  <div style="max-width: 340px;">
    <div class="fsa-growl fsa-growl--error" id="UNIQUE-ID-832353AD65DB5frf" aria-hidden="false" tabindex="0" role="dialog">
      <div class="fsa-growl__hd">
        <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
        <h2 class="fsa-growl__title">Growl title</h2>
      </div>
      <div class="fsa-growl__bd">
        <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
        <p>And another line here for kicks.</p>
        <p class="fsa-level">
          <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
          <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
        </p>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--error" id="UNIQUE-ID-832353AD65DB511B" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

### Warning

For events that require user attention.

<div class="ds-preview">
  <div style="max-width: 340px;">
    <div class="fsa-growl fsa-growl--warning" id="UNIQUE-ID-BC33C95AA75A8E1Cfrf" aria-hidden="false" tabindex="0" role="dialog">
      <div class="fsa-growl__hd">
        <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
        <h2 class="fsa-growl__title">Growl title</h2>
      </div>
      <div class="fsa-growl__bd">
        <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
        <p>And another line here for kicks.</p>
        <p class="fsa-level">
          <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
          <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
        </p>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--warning" id="UNIQUE-ID-BC33C95AA75A8E1C" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

### Success

For reporting of a successful end of an operation or action.

<div class="ds-preview">
  <div style="max-width: 340px;">
    <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57frf" aria-hidden="false" tabindex="0" role="dialog">
      <div class="fsa-growl__hd">
        <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
        <h2 class="fsa-growl__title">Growl title</h2>
      </div>
      <div class="fsa-growl__bd">
        <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
        <p>And another line here for kicks.</p>
        <p class="fsa-level">
          <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
          <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
        </p>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-8A386E512C033F57" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">Growl title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

### Modal / Prompt

To prompt users before further action or operation may proceed.

More often displayed as `fsa-growl--error`, though other style variations (e.g. Default, Warning, Success) may be contextually appropriate.

<button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show whiteout-show" aria-controls="UNIQUE-ID-9469E21387FAF609" aria-expanded="false" type="button">Open Prompt</button>

<div class="ds-preview">
  <img class="ds-screen" src="{{ site.baseurl }}img/screen-growl--modal.png" alt="Growl screen: modal variation">
</div>
```html
<!-- PLACE JUST BELOW BODY START TAG AT THE BEGINNING OF DOCUMENT -->
<div class="fsa-whiteout" tabindex="-1" id="fsa-whiteout" aria-hidden="true"></div>
<!-- END WHITEOUT -->

<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="alertdialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button"><img class="fsa-growl__close-icon" src="{{ site.baseurl }}img/close.svg" alt="close"></button>
      <h2 class="fsa-growl__title">Growl Title</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>And another line here for kicks.</p>
      <p class="fsa-level">
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
      </p>
    </div>
  </div>
</div>
```

### Icons

[Icons]({{ site.baseurl }}components/icons/) can optionally be used to used to heighten or clarify each Notification message.

<div class="ds-preview">
  <div style="max-width: 340px;">
    <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-2345thsdfmofa" aria-hidden="false" tabindex="0" role="dialog">
      <div class="fsa-growl__hd">
        <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
        <h2 class="fsa-growl__title">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
          With optional icon
        </h2>
      </div>
      <div class="fsa-growl__bd">
        <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
        <p class="fsa-level">
          <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
        </p>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--success" id="UNIQUE-ID-2345thsdfmofa" aria-hidden="false" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
      <button class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
      <h2 class="fsa-growl__title">
        <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </svg>
        With optional icon
      </h2>
    </div>
    <div class="fsa-growl__bd">
      <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
      <p>
        <button data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
      </p>
    </div>
  </div>
</div>
```

## Usage

{% capture usage_do %}
* When the application needs to provide real-time messaging to the User about a page-level event, out-of-view event, or background processes.
* When the application requires a message to appear and have the User take action to dismiss.
* When the application displays non-critical information that won't disrupt a workflow.
{% endcapture %}

{% capture usage_dont %}
* When displaying error messages paired with specific form fields, use [Form Field States]({{ site.baseurl }}components/form-fields/)
* When displaying messages related to specific components on the current view, consider an [Inline Alert]({{ site.baseurl }}components/alerts/)
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* The control element that triggers the Growl shall utilize an aria-controls parameter that matches the ID of the Growl.
* Growl Notifications should be used to help provide guidance and information related to application state, processing, and events.

## JavaScript Guidance

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
* Set focus to the element that initially triggered the Notification

{% include scripts.about.html %}