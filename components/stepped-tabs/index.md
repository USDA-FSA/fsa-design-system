---
layout: page
parent: "Components"
type: "UI Component"
title: "Stepped Tabs"
shortName: "component__stepped-tabs"
intro: "Provide guidance, context, and navigation through a stepped process or workflow."
jump_menu: true
relatedItems:
  - "Stepped Process"
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-preview">
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Shipping Information</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="step">
              <span class="fsa-stepped-tabs__text">Billing Information</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Payment Details</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Review & Place Order</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
</div>

## Anatomy

Each Step can be one of three possible states.

```html
<a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--[STATE]" href="link.html">
  <span class="fsa-stepped-tabs__text">Label</span>
</a>
```

{% capture anatomy__markers %}

1. <nobr><code>fsa-stepped-tabs__label<strong>--complete</strong></code></nobr>
1. <nobr><code>fsa-stepped-tabs__label<strong>--active</strong></code></nobr>
1. <nobr><code>fsa-stepped-tabs__label<strong>--incomplete</strong></code></nobr>

{% endcapture %}

{% assign anatomy__image-off = "stepped-tabs.png" %}

{% include anatomy.html %}

## Variations and Examples

### Default

{% capture snippet %}
<nav aria-label="Breadcrumbs">
  <div class="fsa-stepped-tabs">
    <div class="fsa-stepped-tabs__bd">
      <ol class="fsa-stepped-tabs__list">
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
            <span class="fsa-stepped-tabs__text">Lor</span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="step">
            <span class="fsa-stepped-tabs__text">Em ipsum</span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">Dol</span>
          </span>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">Or Sit Amet</span>
          </span>
        </li>
      </ol>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Buttons

**Actionable** steps can be an `<a>` element or `<button>`, depending on how your system is set up.

{% capture snippet %}
<nav aria-label="Breadcrumbs">
  <div class="fsa-stepped-tabs">
    <div class="fsa-stepped-tabs__bd">
      <ol class="fsa-stepped-tabs__list">
        <li class="fsa-stepped-tabs__item">
          <button class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" type="button">
            <span class="fsa-stepped-tabs__text">Lor</span>
          </button>
        </li>
        <li class="fsa-stepped-tabs__item">
          <button class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" type="button" aria-current="step">
            <span class="fsa-stepped-tabs__text">Em ipsum</span>
          </button>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">Dol</span>
          </span>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">Or Sit Amet</span>
          </span>
        </li>
      </ol>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Actionable: none

Use when user should be **prevented** from using Stepped Tabs as a means of navigation (forward backwards within a process), utilize this variation. Each `fsa-stepped-tabs__label` is a `<span>` instead of an actionable `<a>` or `<button>`.

{% capture snippet %}
<div class="fsa-stepped-tabs">
  <div class="fsa-stepped-tabs__bd">
    <ol class="fsa-stepped-tabs__list">
      <li class="fsa-stepped-tabs__item">
        <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete">
          <span class="fsa-stepped-tabs__text">Lor</span>
        </span>
      </li>
      <li class="fsa-stepped-tabs__item">
        <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" aria-current="step">
          <span class="fsa-stepped-tabs__text">Em ipsum</span>
        </span>
      </li>
      <li class="fsa-stepped-tabs__item">
        <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
          <span class="fsa-stepped-tabs__text">Dol</span>
        </span>
      </li>
      <li class="fsa-stepped-tabs__item">
        <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
          <span class="fsa-stepped-tabs__text">Or Sit Amet</span>
        </span>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Actionable: all

{% capture snippet %}
<nav aria-label="Breadcrumbs">
  <div class="fsa-stepped-tabs fsa-stepped-tabs--justified">
    <div class="fsa-stepped-tabs__bd">
      <ol class="fsa-stepped-tabs__list">
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
            <span class="fsa-stepped-tabs__text">Lor</span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="step">
            <span class="fsa-stepped-tabs__text">Em ipsum</span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete" href="link.html">
            <span class="fsa-stepped-tabs__text">Dol</span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete" href="link.html">
            <span class="fsa-stepped-tabs__text">Or Sit Amet</span>
          </a>
        </li>
      </ol>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Icons

Use any variety of [Icons]({{ site.baseurl }}components/icons/) to heighten or clarify each step.

#### Representating "Step Completion"

{% capture snippet %}
<nav aria-label="Breadcrumbs">
  <div class="fsa-stepped-tabs">
    <div class="fsa-stepped-tabs__bd">
      <ol class="fsa-stepped-tabs__list">
        <li class="fsa-stepped-tabs__item">
          <button class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" type="button">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              Discovery
            </span>
          </button>
        </li>
        <li class="fsa-stepped-tabs__item">
          <button class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" type="button" aria-current="step">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"></path>
              </svg>
              Adjustments
            </span>
          </button>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
              Review
            </span>
          </span>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
              Publish
            </span>
          </span>
        </li>
      </ol>
    </div>
  </div>
</nav>
{% endcapture %}
{% include preview-and-snippet.html %}

#### Representing step label

{% capture snippet %}
<nav aria-label="Breadcrumbs">
  <div class="fsa-stepped-tabs">
    <div class="fsa-stepped-tabs__bd">
      <ol class="fsa-stepped-tabs__list">
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              Shipping
            </span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="step">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg>
              Billing
            </span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
              Payment
            </span>
          </span>
        </li>
        <li class="fsa-stepped-tabs__item">
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
            <span class="fsa-stepped-tabs__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"/></svg>
              Review
            </span>
          </span>
        </li>
      </ol>
    </div>
  </div>
</nav>
{% endcapture %}
{% include preview-and-snippet.html %}

### Samples

<div class="ds-preview">
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs fsa-stepped-tabs--justified">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html">
              <span class="fsa-stepped-tabs__text">Discovery</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Adjustments</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Review</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Publish</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs fsa-stepped-tabs--justified">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Discovery</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html">
              <span class="fsa-stepped-tabs__text">Adjustments</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Review</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Publish</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs fsa-stepped-tabs--justified">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Discovery</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Adjustments</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html">
              <span class="fsa-stepped-tabs__text">Review</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Publish</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs fsa-stepped-tabs--justified">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Discovery</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Adjustments</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Review</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html">
              <span class="fsa-stepped-tabs__text">Publish</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </nav>
</div>

## Usage

{% capture usage_do %}
* When a process flow requires more than 2 linear steps and/or screens.
* When a process flow can allow the User to skip multiple steps backwards to previous steps and/or screens.
* If providing the User with a clear indication of the status within the process is needed.
{% endcapture %}

{% capture usage_dont %}
* As a system of navigation unrelated to a linear stepped process workflow.
* If the process flow will only have 2 screens and/or steps.
* If the process flow will not go through each steps provided in the tabs to complete the process.
* As a Breadcrumb. Use [Breadcrumb]({{ site.baseurl }}components/breadcrumb/).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Typically paired with the [Stepped Control]({{ site.baseurl }}components/stepped-control/) component.
* Ensure that all of the appropriate states of the tab are used in accordance with the instructions above.
* If the User will not be able to proceed forward or go backwards within a process, utilize the `Actionable: none` variation.
* Icons before the text within a tab can enhance the understanding about where the User is within a process flow.

## Accessibility

* Note the use of `aria` atttributes, most especially `aria-current`.
* When each step is actionable, wrap the component with a `<nav>` element.
