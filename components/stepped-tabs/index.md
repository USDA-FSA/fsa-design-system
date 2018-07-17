---
layout: page
parent: "Components"
title: "Stepped Tabs"
intro: "The Stepped Tabs Component is designed to provide guidance, context, and nagivation to the User while in a stepped process."
jump_menu: true
---

<div class="ds-preview">
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Step 1</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="true">
              <span class="fsa-stepped-tabs__text">Step 2</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Step 3</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Step 4</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
</div>

## Variations and Examples

### Default

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
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="true">
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
            <button class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" type="button" aria-current="true">
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
          <button class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" type="button" aria-current="true">
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

### Justified

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
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="true">
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
  <div class="fsa-stepped-tabs fsa-stepped-tabs--justified">
    <div class="fsa-stepped-tabs__bd">
      <ol class="fsa-stepped-tabs__list">
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
            <span class="fsa-stepped-tabs__text">Lor</span>
          </a>
        </li>
        <li class="fsa-stepped-tabs__item">
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="true">
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

### Actionable: none

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
          <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" aria-current="true">
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
        <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" aria-current="true">
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
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="true">
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
          <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="true">
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

### Use When

* A process flow requires more than 2 steps and/or screens
* A process flow can allow the User to skip multiple steps backwards to previous steps and/or screens
* Providing the User with a clear indication of the status within the process is needed 

### Don't Use

* As a system of naviation unrelated to a stepped process flow
* If the process flow will only have 2 screens and/or steps
* The Stepped Tabs Component and allow the User to skip forward using the Stepped Tabs themselves
* If the process flow will not go thru all of the steps provided in the tabs to complete the process

## General Guidance

* Ensure that all of the appropriate states of the tab are used in accordance with the instructions above
* If the User will not be able to proceed forward or go backwards within a process, utilize the `Actionable: none` variation
* Icons before the text within a tab can enhance the understanding about where the User is within a process flow
