---
layout: page
parent: "Components"
type: "UI Component"
title: "Button Group"
shortName: "component__button-group"
intro: "Toggle between mutually exclusive states."
relatedItems:
  - "Action Bar with Table"
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-combinator">
  <div class="ds-combinator__preview">
    <h3 class="fsa-sr-only">Props Demo</h3>
    <span class="fsa-btn-group" role="group" aria-label="Label describing this group" id="combinatorTarget">
      <button class="fsa-btn-group__item" type="button">Label</button>
      <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
      <button class="fsa-btn-group__item" type="button">Label</button>
      <button class="fsa-btn-group__item" type="button">Label</button>
    </span>
  </div>
  <div class="ds-combinator__props">
    <h3 class="fsa-sr-only">Props</h3>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSize">Size</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorSize" name="combinatorSize" data-behavior="combinator-select" data-remove="fsa-btn-group--small fsa-btn-group--large">
        <option value="fsa-btn-group--small">Small</option>
        <option value="" selected="selected">Medium</option>
        <option value="fsa-btn-group--large">Large</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorFill">Fill</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorFill" name="combinatorFill" data-behavior="combinator-toggle-class" value="fsa-btn-group--fill">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIcon">Icon</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIcon" name="combinatorIcon">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
  </div>
</div>
```html
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
```

## Variants and Examples

Button groups are wrapped in a `<span>` tag and always start with `class="fsa-btn-group"`, modifiable with one or multiple `fsa-btn-group--[variant]`.

### Default

{% capture snippet %}
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<span class="fsa-btn-group fsa-btn-group--small" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<span class="fsa-btn-group fsa-btn-group--large" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### FIll

{% capture snippet %}
<span class="fsa-btn-group fsa-btn-group--fill" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
  <button class="fsa-btn-group__item" type="button">Label</button>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: none selected

{% capture snippet %}
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item" type="button">Label one</button>
  <button class="fsa-btn-group__item" type="button">Label two</button>
  <button class="fsa-btn-group__item" type="button">Label three</button>
  <button class="fsa-btn-group__item" type="button">Label fo</button>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: as `<a>` element

Each item, `fsa-btn-group__item`, will typically be a `<button>` element, though depending on their use might be an `<a>` element.

{% capture snippet %}
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <a class="fsa-btn-group__item" href="link.html">Label one</a>
  <a class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" href="link.html">Label active</a>
  <a class="fsa-btn-group__item" href="link.html">Label three</a>
  <a class="fsa-btn-group__item" href="link.html">Label fo</a>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* When consolidating like actions into one condensed component acting as a toggle between the button options.
* If actions pertain to the same feature set and contextual functionality of the application.
{% endcapture %}

{% capture usage_dont %}
* When the functionality of the button does not pertain to the feature within the context of the application.
* If you want to lead users between pages of a website. Use [text links]({{ site.baseurl }}components/links/) instead.
* If less popular or lower priority actions may be visually styled as links.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Icons

[Icons]({{ site.baseurl }}components/icons/) can be used to heighten or clarify Button Groups actions.

### Medium
{% capture snippet %}
<span class="fsa-btn-group" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button" title="View by Grid" aria-selected="true">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg>
    List
  </button>
  <button class="fsa-btn-group__item" type="button" title="View by List">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path></g></svg>
    Grid
  </button>
  <button class="fsa-btn-group__item" type="button" title="View by Calendar">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z"></path></g></svg>
    Calendar
  </button>
</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Small
{% capture snippet %}
<span class="fsa-btn-group fsa-btn-group--small" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button" title="View by Grid" aria-selected="true">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg>
    List
  </button>
  <button class="fsa-btn-group__item" type="button" title="View by List">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path></g></svg>
    Grid
  </button>
  <button class="fsa-btn-group__item" type="button" title="View by Calendar">
    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z"></path></g></svg>
    Calendar
  </button>
</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Large
{% capture snippet %}
<span class="fsa-btn-group fsa-btn-group--large" role="group" aria-label="Label describing this group">
  <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button" title="View by Grid" aria-selected="true">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg>
    List
  </button>
  <button class="fsa-btn-group__item" type="button" title="View by List">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path></g></svg>
    Grid
  </button>
  <button class="fsa-btn-group__item" type="button" title="View by Calendar">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z"></path></g></svg>
    Calendar
  </button>
</span>
{% endcapture %}
{% include preview-and-snippet.html %}

### Icon only

There may be acceptable uses where a label may be visually hidden (i.e. using a [Screenreader-only CSS Utility]({{ site.baseurl }}utilities/#screenreader-only)) and/or paired with an `aria-label` attribute, though Product Teams should use icon-only buttons cautiously.

{% capture snippet %}
<div class="fsa-m-b--s">
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item fsa-btn-group__item--active" type="button" title="View by Grid" aria-selected="true">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg>
      <span class="fsa-sr-only">View by Grid</span>
    </button>
    <button class="fsa-btn-group__item" type="button" title="View by List">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path></g></svg>
      <span class="fsa-sr-only">View by List</span>
    </button>
    <button class="fsa-btn-group__item" type="button" title="View by Calendar">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z"></path></g></svg>
      <span class="fsa-sr-only">View by Calendar</span>
    </button>
  </span>
</div>
<div>
  <span class="fsa-btn-group" role="group" aria-label="Label describing this group">
    <button class="fsa-btn-group__item fsa-p-l--s fsa-p-r--s" type="button" title="View Previous">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>
      <span class="fsa-sr-only">View Previous</span>
    </button>
    <button class="fsa-btn-group__item fsa-p-l--s fsa-p-r--s" type="button" title="View Next">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>
      <span class="fsa-sr-only">View Next</span>
    </button>
  </span>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

## Responsive

Selectively override several style properties at each Media Query breakpoint.

<code>fsa-btn-group--<strong>[property]@[breakpoint]</strong></code>, where
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
https://usda-fsa.github.io/fsa-style/demo/rwd__btn-group.html
{% endcapture %}

{% include rwd-viewer.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Like buttons, button groups should display a visible focus state when users tab to them.

## General Guidance

* Make the first word of the button’s label an action verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* Use sentence case for button labels, e.g. "Sign up" instead of "Sign Up".


## Related Resources

* [Buttons]({{ site.baseurl }}components/buttons)
* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
