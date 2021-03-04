---
layout: page
parent: "Components"
type: "UI Component"
title: "Inline Alerts"
shortName: "component__alerts"
intro: "Display contextual assistance or response."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js", "inline-alert.js"]
---

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional success title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

## Variations

Variations are styled with `class="fsa-alert fsa-alert--[type]"`.

### Success

{% capture snippet %}
<div class="fsa-alert fsa-alert--success" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional success title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Warning

{% capture snippet %}
<div class="fsa-alert fsa-alert--warning" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional warning title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Error

{% capture snippet %}
<div class="fsa-alert fsa-alert--error" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional error title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Info

{% capture snippet %}
<div class="fsa-alert fsa-alert--info" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional information title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### No icon

{% capture snippet %}
<div class="fsa-alert fsa-alert--success fsa-alert--no-icon" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional [type] title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Dismissable

{% capture snippet %}
<div class="fsa-alert fsa-alert--success" role="alert">
  <button class="fsa-alert__close" data-behavior="alert-dismiss" type="button" title="Dismiss this message" aria-label="Dismiss this message"></button>
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional success title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing assumenda harum accusamus nemo non iste quia. Nihil ab tenetur ipsa dolore nisi qui molestias assumenda a perferendis maxime sed do eiusmod.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* When the application needs to provide system-level messaging to the user.
* When the application needs to provide real-time inline messaging to the User, in context of components visible on the current view.
* When the application needs to report a general error not related to a User interaction.
{% endcapture %}

{% capture usage_dont %}
* When displaying error messages paired with specific form fields. Use error states provided in [Form Field]({{ site.baseurl }}components/form-fields/) component.
* If the application needs to provide real-time messaging to the User about a page-level event, out-of-view event, or background process. Use a [Growl Notification]({{ site.baseurl }}components/growl/).
* For destructive actions. If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, with an option available for user to confirm or deny. Consider the Modal-based variation of [Growl Notification]({{ site.baseurl }}components/growl/)
* When the application displays non-critical information that won’t disrupt a workflow. Use a [Growl Notification]({{ site.baseurl }}components/growl/).
* Too many Alerts at one time as this will confuse the User and push content down the screen.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Alerts should be used to help provide contextual guidance and information related to application state, processing, and events.