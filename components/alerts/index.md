---
layout: page
parent: "Components"
title: "Inline Alerts"
intro: "Inline Alerts help to provide inline, page-level messaging to the User. These may be as the result of a user's specific actions or unsolicited messages."
jump_menu: true
---

<div class="fsa-alert fsa-alert--success" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional success title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

## Variations

Variations are styled with `class="fsa-alert fsa-alert--[type]"`.

### Success

```html
<div class="fsa-alert fsa-alert--success" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional success title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional success title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### Warning

```html
<div class="fsa-alert fsa-alert--warning" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional warning title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--warning" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional warning title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### Error

```html
<div class="fsa-alert fsa-alert--error" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional error title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--error" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional error title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### Info

```html
<div class="fsa-alert fsa-alert--info" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional information title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--info" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional information title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

### No icon

```html
<div class="fsa-alert fsa-alert--[type] fsa-alert--no-icon" role="alert">
  ....
</div>
```
<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success fsa-alert--no-icon" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional [type] title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>


## Usage

### Use When

* The application needs to provide real-time inline messaging to the User.
* The application needs to report a general error not related to a User interaction.

### Don't Use
* To show error messages that should be paired with specific form fields. Defer to in-context [Error States in the Form Field component](http://localhost:4000/fsa-design-system/components/form-fields/#error).
* Too many Alerts at one time as this will confuse the User and push content down the screen.

## General Guidance

* Alerts should be used to help provide guidance and information related to application state, processing, and events.
