---
layout: page
parent: "Components"
type: "UI Component"
title: "Pagination"
shortName: "component__pagination"
intro: "Navigate through split views of large datasets of content."
jump_menu: true
relatedItems:
  - "Action Bar with Table"
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-preview">
  <nav aria-label="Pagination">
    <div class="fsa-pagination" data-current="1" data-total="120">
      <ul class="fsa-pagination__list">
        <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
          <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></span>
        </li>
        <li class="fsa-pagination__item">
          <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 1</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 2</a>
        </li>
        <li class="fsa-pagination__item" aria-hidden="true">
          <span class="fsa-pagination__label">…</span>
        </li>
        <li class="fsa-pagination__item">
          <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 120</a>
        </li>
        <li class="fsa-pagination__item fsa-pagination__item--next">
          <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
        </li>
      </ul>
    </div>
  </nav>
</div>

## Variations and Examples

Pagination Components can be styled using the `fsa-pagination__label--[variation]` class on Unordered Lists.

### Default

{% capture snippet %}
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="1" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
        <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></span>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 1</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 2</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 120</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Internal

{% capture snippet %}
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="56" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 1</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 55</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 56</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 57</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 120</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Last

{% capture snippet %}
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="120" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 1</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 119</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 120</span>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next" aria-hidden="true">
        <span class="fsa-pagination__label fsa-pagination__label--next fsa-pagination__label--disabled"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></span>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Fewer than 6 pages

{% capture snippet %}
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="2" data-total="5">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 1</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 2</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 3</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 4</a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 5</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### 6 or more pages

{% capture snippet %}
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="2" data-total="6">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous">
        <a class="fsa-pagination__label fsa-pagination__label--previous" href="link.html"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></a>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 1</a>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="step"><span class="fsa-sr-only">Currently on page</span> 2</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 3</a>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <a class="fsa-pagination__label" href="link.html"><span class="fsa-sr-only">Go to page</span> 6</a>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <a class="fsa-pagination__label fsa-pagination__label--next" href="link.html"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: as `<button>` elements

Each actionable item, e.g. `fsa-pagination__label`, may typically be an `<a>` element, though depending on its use might be an `<button>` element. By that same token, non-actionable items would a `<span>` element.

{% capture snippet %}
<nav aria-label="Pagination">
  <div class="fsa-pagination" data-current="1" data-total="120">
    <ul class="fsa-pagination__list">
      <li class="fsa-pagination__item fsa-pagination__item--previous" aria-hidden="true">
        <span class="fsa-pagination__label fsa-pagination__label--previous fsa-pagination__label--disabled"><span class="fsa-sr-only">Go to</span> Previous <span class="fsa-sr-only">page</span></span>
      </li>
      <li class="fsa-pagination__item">
        <span class="fsa-pagination__label fsa-pagination__label--current" aria-current="page"><span class="fsa-sr-only">Currently on page</span> 1</span>
      </li>
      <li class="fsa-pagination__item">
        <button type="button" class="fsa-pagination__label"><span class="fsa-sr-only">Go to page</span> 2</button>
      </li>
      <li class="fsa-pagination__item" aria-hidden="true">
        <span class="fsa-pagination__label">…</span>
      </li>
      <li class="fsa-pagination__item">
        <button type="button" class="fsa-pagination__label"><span class="fsa-sr-only">Go to page</span> 120</button>
      </li>
      <li class="fsa-pagination__item fsa-pagination__item--next">
        <button type="button" class="fsa-pagination__label fsa-pagination__label--next"><span class="fsa-sr-only">Go to</span> Next <span class="fsa-sr-only">page</span></button>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

At narrower breakpoints Pagination will render as two directional buttons, suppressing specific paginated groups.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__pagination.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* When the application requires showing a large set of data that needs to be broken up into more consumable chunks.
* When the application requires showing search results of information that would extend too far down the page.
* When the result set should be broken up into groupings of 10 or 20, based on the toal amount of data visible.
{% endcapture %}

{% capture usage_dont %}
* If the dataset or search results of an application have a maximum total of 20 or fewer results needing to be displayed.
* As a navigation system for a stepped process, and instead utilize the [Stepped Control Component]({{ site.baseurl }}components/stepped-control).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* As seen in the variation above, the number of pages within the dataset dictates the variation that should be applied.
* A maximum total of five numbers should be visible at any given time for desktop screens, which the very first number and last number always being shown.
* When six or more pages are available, an ellipsis (`...`) shall be used to indicate the existence of available pages not shown.
* When the first page is in view, the first page button shall be selected and the `Previous` button shall be disabled.
* When the last page is in view, the last page button shall be selected and the `Next` button shall be disabled.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* `<nav aria-label="Pagination">...</nav>` contains this component as it serves as **navigation**, informing users where they currently are, and where they may navigate to.
* Note the use of all `aria-` attributes, e.g. `aria-label`, `aria-current`, and `aria-hidden`.
* The Use of buttons as text link styles instead of anchor tags allows for a larger hit area for selecting the desired page.
