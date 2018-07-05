---
layout: page
parent: "Components"
title: "Stepped Tabs"
intro: "(Introduction. Work in Progress)"
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

(Work in progress.)

### Use When

(Work in progress.)

### Don't Use

(Work in progress.)

## General Guidance

(Work in progress.)
