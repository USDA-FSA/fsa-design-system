---
layout: page
parent: "Components"
title: "Stepped Tabs"
shortName: "component__stepped-tabs"
intro: "Provide guidance, context, and nagivation to the User while in a stepped process workflow, typically paired with a <strong><a href=\"../stepped-control/\">Stepped Control</a></strong> component."
jump_menu: true
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

### Step States

Each Step (`fsa-stepped-tabs__label`) can be one of three possible states. In the above example:

1. **Step 1**: Completed
1. **Step 2**: Current
1. **Step 3**: Incomplete / Upcoming / Future
1. **Step 4**: Incomplete / Upcoming / Future

## Variations and Examples

### Default

<div class="ds-preview">
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
</div>
```html
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
```

### Buttons

**Actionable** steps can be an `<a>` element or `<button>`, depending on how your system is set up.
<div class="ds-preview">
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
</div>
```html
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
```

### Actionable: none

Use when user should be **prevented** from using Stepped Tabs as a means of navigation (forward backwards within a process), utilize this variation. Each `fsa-stepped-tabs__label` is a `<span>` instead of an actionable `<a>` or `<button>`.

<div class="ds-preview">
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
</div>
```html
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
```

### Actionable: all

<div class="ds-preview">
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
</div>
```html
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
```

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
* A process flow requires more than 2 linear steps and/or screens.
* A process flow can allow the User to skip multiple steps backwards to previous steps and/or screens.
* Providing the User with a clear indication of the status within the process is needed.
{% endcapture %}

{% capture usage_dont %}
* As a system of navigation unrelated to a linear stepped process workflow.
* If the process flow will only have 2 screens and/or steps.
* The Stepped Tabs Component and allow the User to skip forward using the Stepped Tabs themselves.
* If the process flow will not go through each steps provided in the tabs to complete the process.
* As a Breadcrumb. Use [Breadcrumb]({{ site.baseurl }}components/breadcrumb/).
{% endcapture %}

{% include do-dont.html %}

## General Guidance

* Typically paired with the [Stepped Control]({{ site.baseurl }}components/stepped-control/) component.
* Ensure that all of the appropriate states of the tab are used in accordance with the instructions above.
* If the User will not be able to proceed forward or go backwards within a process, utilize the `Actionable: none` variation.
* Icons before the text within a tab can enhance the understanding about where the User is within a process flow.

## Accessibility

* Note the use of `aria` atttributes, most especially `aria-current`.
* When each step is actionable, wrap the component with a `<nav>` element.
