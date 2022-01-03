---
layout: page
parent: "Components"
type: "UI Component"
title: "Buttons"
shortName: "component__buttons"
intro: "Signal key actions on a page, form, or dialog."
relatedItems:
  - "Action Bar with Table"
  - "Button Group"
  - "Destroy Prompt"
  - "Form Fields"
  - "Growl Notification"
  - "Icons"
  - "Page Title Area"
  - "Search"
  - "Stepped Control"
  - "Stepped Process"
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-combinator">
  <div class="ds-combinator__props">
    <h3 class="fsa-sr-only">Props</h3>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorText">Text</label>
      <input class="fsa-input fsa-input--small fsa-field__item" id="TheItem2" id="combinatorText" name="combinatorText" value="Label" data-behavior="combinator-custom-text">
    </div>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorType">Type</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorType" name="combinatorType" data-behavior="combinator-select" data-remove="fsa-btn--primary fsa-btn--secondary fsa-btn--tertiary fsa-btn--flat fsa-btn--plain">
        <option value="fsa-btn--primary" selected="selected">Primary</option>
        <option value="fsa-btn--secondary">Secondary</option>
        <option value="fsa-btn--tertiary">Tertiary</option>
        <option value="fsa-btn--flat">Flat</option>
        <option value="fsa-btn--plain">Plain</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorType">Type</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorType" name="combinatorType" data-behavior="combinator-select" data-remove="fsa-btn--primary fsa-btn--secondary fsa-btn--tertiary fsa-btn--flat fsa-btn--plain">
        <option value="fsa-btn--primary" selected="selected">Primary</option>
        <option value="fsa-btn--secondary">Secondary</option>
        <option value="fsa-btn--tertiary">Tertiary</option>
        <option value="fsa-btn--flat">Flat</option>
        <option value="fsa-btn--plain">Plain</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSize">Size</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorSize" name="combinatorSize" data-behavior="combinator-select" data-remove="fsa-btn--small fsa-btn--large">
        <option value="fsa-btn--small">Small</option>
        <option value="" selected="selected">Medium</option>
        <option value="fsa-btn--large">Large</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorFill">Fill</label>
      <label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorFill" name="combinatorFill" data-behavior="combinator-toggle-class" value="fsa-btn--block">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIconLeft">Icon Left</label>
      <label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIconLeft" name="combinatorIconLeft" data-behavior="combinator-toggle-icon" data-icon-target="combinatorIconSampleLeft">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIconRight">Icon Right</label>
      <label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIconRight" name="combinatorIconRight" data-behavior="combinator-toggle-icon" data-icon-target="combinatorIconSampleRight">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIconOnly">Icon Only</label>
      <label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIconOnly" name="combinatorIconOnly" data-behavior="combinator-toggle-icon-only" data-label-target="combinatorTextLabel">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorDisabled">Disabled</label>
      <label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorDisabled" name="combinatorDisabled" data-behavior="combinator-toggle-attr" value="disabled">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
  </div>
  <div class="ds-combinator__preview">
    <h3 class="fsa-sr-only">Props Demo</h3>
    <button class="fsa-btn fsa-btn--primary" type="button" id="combinatorTarget">
      <svg hidden id="combinatorIconSampleLeft" class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
      <span id="combinatorTextLabel">Label</span>
      <svg hidden id="combinatorIconSampleRight" class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
    </button>
  </div>
</div>
```html
<button class="fsa-btn fsa-btn--primary" type="button">
  Label
</button>
```

## Variants

Buttons are styled with `class="fsa-btn"`, modifiable with one or multiple `fsa-btn--[variant]`.

```html
<button class="fsa-btn fsa-btn--[variant]" type="button">Label</button>
<a class="fsa-btn fsa-btn--[variant]" href="link.html">Label</a>
```

### Primary

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Secondary

{% capture snippet %}
<button class="fsa-btn fsa-btn--secondary" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Tertiary

{% capture snippet %}
<button class="fsa-btn fsa-btn--tertiary" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Flat

{% capture snippet %}
<button class="fsa-btn fsa-btn--flat" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Plain

{% capture snippet %}
<button class="fsa-btn fsa-btn--plain" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

## States

Each button variant can be modified with one or multiple states:

{% capture snippet %}
<button class="fsa-btn fsa-btn--[variant] fsa-btn--[state]" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Fill

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary fsa-btn--fill" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Disabled

Disabled buttons do not have a `class="fsa-btn--[state]"`, instead using the `disabled` attribute.

{% capture snippet %}
<div class="fsa-level">
  <button class="fsa-btn fsa-btn--primary" type="button" disabled="disabled">Label</button>
  <button class="fsa-btn fsa-btn--secondary" type="button" disabled="disabled">Label</button>
  <button class="fsa-btn fsa-btn--tertiary" type="button" disabled="disabled">Label</button>
  <button class="fsa-btn fsa-btn--flat" type="button" disabled="disabled">Label</button>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary fsa-btn--small" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary fsa-btn--large" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

## Icons

[Icons]({{ site.baseurl }}components/icons/) can be used to heighten or clarify the button's action. There may be acceptable uses where a label may be visually hidden (i.e. using a [Screenreader-only CSS Utility]({{ site.baseurl }}utilities/#screenreader-only)) and/or paired with an `aria-label` attribute, though Product Teams should use icon-only buttons cautiously.

### Medium
{% capture snippet %}
<div class="fsa-level">
  <button class="fsa-btn fsa-btn--primary" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
    Save
  </button>
  <button class="fsa-btn fsa-btn--secondary" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    Download
  </button>
  <button class="fsa-btn fsa-btn--tertiary" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
    Remove
  </button>
  <button class="fsa-btn fsa-btn--flat" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
    Edit
  </button>
  <button class="fsa-btn fsa-btn--plain" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>
    Print
  </button>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

### Small
{% capture snippet %}
<div class="fsa-level">
  <button class="fsa-btn fsa-btn--small fsa-btn--primary" type="button">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
    Save
  </button>
  <button class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    Download
  </button>
  <button class="fsa-btn fsa-btn--small fsa-btn--tertiary" type="button">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
    Remove
  </button>
  <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
    Edit
  </button>
  <button class="fsa-btn fsa-btn--small fsa-btn--plain" type="button">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>
    Print
  </button>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

### Large
{% capture snippet %}
<div class="fsa-level">
  <button class="fsa-btn fsa-btn--large fsa-btn--primary" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
    Save
  </button>
  <button class="fsa-btn fsa-btn--large fsa-btn--secondary" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    Download
  </button>
  <button class="fsa-btn fsa-btn--large fsa-btn--tertiary" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
    Remove
  </button>
  <button class="fsa-btn fsa-btn--large fsa-btn--flat" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
    Edit
  </button>
  <button class="fsa-btn fsa-btn--large fsa-btn--plain" type="button">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>
    Print
  </button>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Directional

Use an icon on the right if the button's implicit action conveys a forward progression.

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary" type="button">
  Continue
  <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
</button>
{% endcapture %}
{% include preview-and-snippet.html %}

### Custom

Combine the `fsa-btn--plain` variant with **Utilities** such as [Text Color]({{ site.baseurl }}utilities/#color-foreground) and [Background Color]({{ site.baseurl }}utilities/#color-background).

{% capture snippet %}
<div class="fsa-level fsa-level--wrap">
  <div>
    <button type="button" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-bg--tertiary-100 fsa-color--tertiary fsa-link:hover--primary fsa-bg:hover--primary-100" title="Vote Up" aria-label="Vote Up">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></svg>
    </button>
  </div>
  <div>
    <button type="button" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-bg--tertiary-100 fsa-color--tertiary fsa-link:hover--red fsa-bg:hover--red-100" title="Vote Down" aria-label="Vote Down">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
    </button>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}


## Responsive

Several of a button's style properties can be selectively modified across each Media Query breakpoint.

<code>fsa-btn--<strong>[property]@[breakpoint]</strong></code>, where
<code>property</code> is one of
<code>small</code>,
<code>medium</code>,
<code>large</code>,
<code>fill</code>, or
<code>inline</code>; and <code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__buttons.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* To trigger an action or behavior, such as submitting a form or spawning a Modal.
{% endcapture %}

{% capture usage_dont %}
* Avoid using to navigate between destinations, deferring to a [text link]({{ site.baseurl }}components/links/) instead (SPA implementations may be an exception).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th>Variant/State</th>
      <th>Usage</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Variant/State">
        <button type="button" class="fsa-btn fsa-btn--fill fsa-btn--primary">Primary</button>
      </td>
      <td aria-label="Usage"> A primary style shall be applied to a button that represents the <strong>top priority action</strong> a User might take <strong>within a given UI context</strong>. </td>
      <td aria-label="Example"> Submitting a form or continuing a stepped process would be considered primary. </td>
    </tr>
    <tr>
      <td aria-label="Variant/State">
        <button type="button" class="fsa-btn fsa-btn--fill fsa-btn--secondary">Secondary</button>
      </td>
      <td aria-label="Usage"> A secondary style shall be applied to buttons that are <strong>not top priority</strong>, may be viewed as contrary to progress, or the action is relevant for <strong>adjacent features and functionality</strong>. You may think of this as the <strong>default</strong> button state (despite it's "secondary" name); that is, all buttons are default unless one of the other use cases mentioned on this page come into play. </td>
      <td aria-label="Example"> A button labeled "View Producer" that displays data on the same screen without continuing a process. </td>
    </tr>
    <tr>
      <td aria-label="Variant/State">
        <button type="button" class="fsa-btn fsa-btn--fill fsa-btn--tertiary">Tertiary</button>
      </td>
      <td aria-label="Usage"> A tertiary style shall be applied only to buttons that perform a <strong>destructive</strong> action. </td>
      <td aria-label="Example"> "Delete" or "Remove". </td>
    </tr>
    <tr>
      <td aria-label="Variant/State">
        <button type="button" class="fsa-btn fsa-btn--fill fsa-btn--flat">Flat</button>
      </td>
      <td aria-label="Usage"> Identical in visual nature to a text link (<code>&lt;a&gt;</code>), this treatment is reserved for items of the <strong> least importance </strong> or deserves no strong prominence.<br><br>Using this style ensures the button will not be easily mistaken as an action to take without contemplation from a User. </td>
      <td aria-label="Example"> Single Page Application architecture (e.g. Angular, React, Vue, etc) often have text links that are technically a &lt;<code>button&gt;</code>, but its UI presents them as more navigational. <br><br> A "Cancel" button. By giving this button very low priority and prominence on the screen. While canceling a process may be destructive in nature, it does not remove stored data from the database. </td>
    </tr>
    <tr>
      <td aria-label="Variant/State">
        <button type="button" class="fsa-btn fsa-btn--fill fsa-btn--plain">Plain</button>
      </td>
      <td aria-label="Usage">Unsets all style properties, effectively rendering as plain text.</td>
      <td aria-label="Example">Typically used when designing a custom button, e.g. pairing with CSS Utilities like <a href="{{ site.baseurl }}utilities/#color">Color</a>, <a href="{{ site.baseurl }}utilities/#color-background">Background</a>, <a href="{{ site.baseurl }}utilities/#padding">Padding</a>, etc.</td>
    </tr>
    <tr>
      <td aria-label="Variant/State">
        <div class="fsa-m-b--s"><button type="button" class="fsa-btn fsa-btn--fill fsa-btn--primary" disabled>Disabled</button></div>
        <div class="fsa-m-b--s"><button type="button" class="fsa-btn fsa-btn--fill fsa-btn--secondary" disabled>Disabled</button></div>
        <div class="fsa-m-b--s"><button type="button" class="fsa-btn fsa-btn--fill fsa-btn--tertiary" disabled>Disabled</button></div>
        <div class="fsa-m-b--s"><button type="button" class="fsa-btn fsa-btn--fill fsa-btn--flat" disabled>Disabled</button></div>
        <div class="fsa-m-b--s"><button type="button" class="fsa-btn fsa-btn--fill fsa-btn--plain" disabled>Disabled</button></div>
      </td>
      <td aria-label="Usage"> Communicates when a button isn’t actionable and is deemphasized in a UI. </td>
      <td aria-label="Example"> A button needs to remain present and visible, and becomes actionable only once any number of criteria is met. </td>
    </tr>
  </tbody>
</table>

## General Guidance

* For multi-stepped user flows (e.g. Wizard) refer to [Stepped Control]({{ site.baseurl }}fsa-design-system/components/stepped-control/) component for usage of buttons within that use case.
* Button styles can be applied to nearly any HTML element, e.g. `<foo class="fsa-btn fsa-btn--[variant]">Label</foo>`. 99% of the time it will be a `<button>` or `<a>`.
* For `<button>` elements, `type` attribute is required, and will most likely be `type="button"`. Use `type="submit"` to submit a `<form>`. Omitting `type` attribute will default to `type="submit"`.
* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons look clickable — use color variants to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Use sentence case for button labels, e.g. "Sign up" instead of "Sign Up".
* Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “Download,” “View” or “Sign up”).
* Make the first word of the button’s label an action verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“Download”, “Open in a new window”, etc).

* All buttons should use an action word to start the label. Eg. "View Details" vs. "Details".
* A Cancel button should not be used unless the online form uses a multi-step process.
* A Cancel button should be used in a Multi-step or multiple screen process so the User feels safe that they are aborting a process.
* A Cancel or Close button action shall clear the contents of the online form for security/privacy purposes.
* When used, the Cancel button should appear as a link (i.e. `fsa-btn--flat` variant) or Secondary button.
* Buttons shall align to the left with primary or progressive/affirmative action on left, and secondary or regressive/dismissive action on right.

## Labeling

<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th scope="col">Button Label</th>
      <th scope="col">Usage</th>
    </tr>
  </thead>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Submit
        <strong>vs.</strong>
        Save
      </div>
    </td>
    <td aria-label="Usage">
      Use Submit for a button label when providing data that will not be stored, or if the data is submitted by an anonymous User. Use a Save label when the User is authenticated and will be updating data within a system.
      <ul>
        <li>
          <strong>Submit</strong> - Use for submitting data to generate a report
        </li>
        <li>
          <strong>Save</strong> - Use for updating User profile information or preferences.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Search
        <strong>vs.</strong>
        Submit
      </div>
    </td>
    <td aria-label="Usage">
      <ul class="fsa-m--none">
        <li>
          <strong>Search</strong> shall be used as the button label when the application is performing a query and returning results.
        </li>
        <li>
          The Search label on a button is more ubiquitous on the web and Users are accustomed to looking for this functionality on a screen.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Back
        <strong>vs.</strong>
        Cancel
        <strong>vs.</strong>
        Exit
      </div>
    </td>
    <td aria-label="Usage">
      <ul class="fsa-m--none">
        <li>
          When returning to a previous screen or step, use <strong>Back</strong> as the button label.
        </li>
        <li>
          When ceasing a process, such as updating your profile, use <strong>Cancel</strong> as the button label.
        </li>
        <li>
          Exit shall not be used in the context of returning to a previous screen, as it could imply exiting the application as opposed to the process in the application.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Refresh
        <strong>vs.</strong>
        Reload
        <strong>vs.</strong>
        Reset
      </div>
    </td>
    <td aria-label="Usage">
      <ul class="fsa-m--none">
        <li>
          When data or a state in the application has changed, it is recommended to use <strong>Refresh</strong> as a label.
        </li>
        <li>
          The Reload label implies getting more data, while Refresh is a more general and User friendly term.
        </li>
        <li>
          Reset implies clearing data and returning to the initial state of data.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label"><div style="white-space: nowrap;">
      <div style="white-space: nowrap;">
        Delete
        <strong>vs.</strong>
        Reset
      </div>
    </div></td>
    <td aria-label="Usage">
      <ul class="fsa-m--none">
        <li>
          A button shall use the <strong>Tertiary</strong> style when the action taken has destructive capabilities.
        </li>
        <li>
          While Reset is an action that removes data from the screen, it should not be used to remove data from a database or other data storage.
        </li>
      </ul>
    </td>
  </tr>
</table>

### Common Button Labels and Functionality

<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th scope="col">Button Label</th>
      <th scope="col">Functionality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Button Label" scope="row">
        Add&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Add data, add new row, add new template for data entry</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Approve
      </td>
      <td aria-label="Functionality">
        <p>Application specific button designed to be a single source of approval</p>
        <p>NOTE: Having an Approve button as compared to an Approve checkbox paired with a Submit button.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Back
      </td>
      <td aria-label="Functionality">Return to the previous page in the application.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Calculate&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Perform Calculation</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Cancel&nbsp;[noun]
      </td>
      <td aria-label="Functionality">
        <p>Stop current action and cancels out of the process.  Returns users to the page where the action was initiated.</p>
        <p>NOTE: If data has been entered, a confirmation message shall be displayed so the user can confirm they want to cancel.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Clear
      </td>
      <td aria-label="Functionality">
        <p>Clears screen or form of all data.</p>
        <p>This button should be used with caution and generally only on pages where data is not actually saved, such as search pages or calculator type applications. When used, this button clears all fields on the page of all values.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Continue
      </td>
      <td aria-label="Functionality">Go to the next page in a multi-step process.  This option is intended primarily for informational pages where no information is entered on the page.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Delete
        <br><br>
        (Delete&nbsp;[noun])
      </td>
      <td aria-label="Functionality">
        <p>Allows the user to delete specific data or a record.</p>
        <p>NOTE: Shall require a confirmation question, such as a pop-up, with a Yes/No response for the user to confirm the deletion. Information about what is being deleted shall also be displayed for the user.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Download&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Download an application file to a user's storage device.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Export
      </td>
      <td aria-label="Functionality">Download data in various templated formats.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Filter&nbsp;[noun]
      </td>
      <td aria-label="Functionality">
        <p>Remove all data from data set, except that which matches the selected criteria.</p>
        <p>NOTE: Rather than having a filter button, the Farm Programs team would like to explore various types of filtering. This button may still be necessary but Farm Programs would like to see other options.
        </p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        <p>
          Go to Application
        </p>
      </td>
      <td aria-label="Functionality">Allows users to access another application to view or update data.  Opens new application in a separate tab.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Log in
      </td>
      <td aria-label="Functionality">Enter an application in an authenticated state.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Log out
      </td>
      <td aria-label="Functionality">Exit an application currently in an authenticated state and return to Log in screen.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        No
      </td>
      <td aria-label="Functionality">Decline response to an action to be taken, such as deleting data or a record.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Refresh
      </td>
      <td aria-label="Functionality">Refreshes the data on the page. Primarily used after data has been updated in another application.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Reset
      </td>
      <td aria-label="Functionality">
        <p>Reset fields to the default field values(s) or previously saved value(s).</p>
        <p>NOTE: If data had been saved by the user that varies from the default value(s), the reset will refresh to the most recently saved value(s).</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Save&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Save data and remains on the current page.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Save&nbsp;&amp;&nbsp;Continue
      </td>
      <td aria-label="Functionality">Saves data on the current page of a multi-step or multi-screen process and continues to the next page.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Search
      </td>
      <td aria-label="Functionality">Performs a query based on criteria submitted</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Select
      </td>
      <td aria-label="Functionality">Initiate a Selected Action</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Submit&nbsp;[noun]
      </td>
      <td aria-label="Functionality">
        <p>Send data to an application process, such as saving to a database. Returns users to the page where the action was initiated or to the home page.</p>
        <p>NOTE: Data is recorded on multiple pages in a multi-page process. Save or Save &amp; Continue would be the options through each of those pages. However on the page where the producer signature is recorded, the option would be to “Submit” because recording the producer signature signifies the application is being submitted to FPAC for approval consideration. Status of the contract/application would then generally go from “initiated” to “filed” or “signed” as required by the applicable program application. </p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Upload&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Upload data file from a user’s storage device to the web application.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        View&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Show additional information or detailed information about item.</td>
    </tr>
  </tbody>
</table>

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>`, `<img>`, or other such tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

## Related Resources

* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
* [Color]({{ site.baseurl }}visual-style/color/)