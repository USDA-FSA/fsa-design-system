---
layout: page
parent: "Components"
title: "Alerts"
intro: "Alerts help to provide messaging for the User during specific actions or events."
jump_menu: true
---

<div class="fsa-alert fsa-alert--success" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Success Status</h3>
      <p class="fsa-alert__text">Your records have been saved.</p>
  </div>
</div>

## Variations

Alerts are styled with `class="fsa-alert fsa-alert--[type]"`.

### Success

```html
<div class="fsa-alert fsa-alert--success" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Success Status</h3>
      <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Success Status</h3>
        <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### Warning

```html
<div class="fsa-alert fsa-alert--warning" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Warning Status</h3>
    <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--warning" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Warning Status</h3>
      <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### Error

```html
<div class="fsa-alert fsa-alert--error" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Error Status</h3>
    <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--error" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Error Status</h3>
      <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### Info

```html
<div class="fsa-alert fsa-alert--info" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Information Status</h3>
    <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--info" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Information Status</h3>
      <p class="fsa-alert__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

## Usage

### Use When

* The application needs to provide real-time messaging to the User.
* The application requires a message to appear and then disappear after a short pause.
* The application needs to report a general error not related to a User interaction.

### Don't Use

* To show error messages that should be paired with specific form fields.
* Too many Alerts at one time as this will confuse the User and push content down the screen.

## General Guidance

* Alerts should be used to help provide guidance and information related to application state, processing, and events.
