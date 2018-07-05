---
layout: page
parent: "Components"
title: "Pagination"
intro: "Introduction sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

### Don't Use

## Accessibility

## General Guidance
