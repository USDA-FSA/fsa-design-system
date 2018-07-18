---
layout: page
parent: "Components"
title: "Pagination"
intro: "The Pagination Component allows for an optimized way to provide a more consumable structure for large datasets."
jump_menu: true
---

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="1" data-total="120">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
          <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled">Previous</span>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">1</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">2</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">120</a>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next">
          <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

## Variations and Examples

Pagination Components can be styled using the `fsa-pagination__label--[variation]` class on Unordered Lists.

### Default

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="1" data-total="120">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
          <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled">Previous</span>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">1</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">2</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">120</a>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next">
          <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
```html
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="1" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
        <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled">Previous</span>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">1</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">2</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">120</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
      </li>
    </ul>
  </div>
</nav>
```

### Internal

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="56" data-total="120">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous">
          <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">1</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">55</a>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">56</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">57</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">120</a>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next">
          <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
```html
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="56" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">1</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">55</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">56</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">57</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">120</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
      </li>
    </ul>
  </div>
</nav>
```

### Last

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="120" data-total="120">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous">
          <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">1</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">119</a>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">120</span>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next" aria-hidden="true">
          <span class="fsa-pagination__label fsa-pagination__label--next fsa-pagination__label--disabled">Next</span>
        </li>
      </ul>
    </div>
  </nav>
</div>
```html
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="120" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">1</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">119</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">120</span>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next" aria-hidden="true">
        <span class="fsa-pagination__label fsa-pagination__label--next fsa-pagination__label--disabled">Next</span>
      </li>
    </ul>
  </div>
</nav>
```

### Fewer than 6 pages

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="2" data-total="5">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous">
          <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">1</a>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">2</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">3</a>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">4</a>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">5</a>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next">
          <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
```html
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="2" data-total="5">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">1</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">2</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">3</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">4</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">5</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
      </li>
    </ul>
  </div>
</nav>
```

### 6 or more pages

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="2" data-total="6">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous">
          <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">1</a>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">2</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">3</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html">6</a>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next">
          <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
```html
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="2" data-total="6">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html">Previous</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">1</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="true">2</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">3</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html">6</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html">Next</a>
      </li>
    </ul>
  </div>
</nav>
```

## Usage

### Use When

* The application requires showing a large set of data that needs to be broken up into more consumable chunks.
* The application requires showing search results of information that would extend too far down the page.
* The result set should be broken up into groupings of 10 or 20, based on the toal amount of data visible.

### Don't Use

* The dataset or search results of an application have a maximum total of 10 or fewer results needing to be displayed.
* As a navigation system for a stepped process, and instead utilize the [Stepped Control Component]({{ site.baseurl }}components/stepped-control).

## General Guidance

* As seen in the variation above, the number of pages within the dataset dictates the variation that should be applied.
* A maximum total of five numbers should be visible at any given time for desktop screens, which the very first number and last number always being shown.
* When six or more pages are available, an elipsis (`...`) shall be used to indicate the existence of available pages not shown.
* When the first page is in view, the first page button shall be selected and the `Previous` button shall be disabled.
* When the last page is in view, the last page button shall be selected and the `Next` button shall be disabled.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Note the use of `aria-` attributes, e.g. `aria-label`, `aria-current`, and `aria-hidden`.
* The Use of buttons as text link styles instead of anchor tags allows for a larger hit area for selecting the desired page.
