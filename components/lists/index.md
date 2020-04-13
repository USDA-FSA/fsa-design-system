---
layout: page
parent: "Components"
intro: "Structure content into concise sementic sections."
title: "Lists"
shortName: "component__lists"
jump_menu: true
---

## Unordered List (bullet)

<div class="ds-preview">
  <ul>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

### Example: Nested

<div class="ds-preview">
  <ul>
    <li>List item one</li>
    <li>
      List item two
      <ul>
        <li>List item two A</li>
        <li>List item two B</li>
      </ul>
    </li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul>
  <li>List item one</li>
  <li>
    List item two
    <ul>
      <li>List item two A</li>
      <li>List item two B</li>
    </ul>
  </li>
  <li>List item three</li>
</ul>
```


## Ordered List (numbered)

<div class="ds-preview">
  <ol>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ol>
</div>
```html
<ol>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```

### Type

Where `type` attribute is one of <code title="lowercase letters">a</code>, <code title="uppercase letters">A</code>, <code title="lowercase Roman numerals">i</code>, <code title="uppercase Roman numerals">I</code>, or <code title="numbers (default)">1</code> (default).

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
      <ol type="a">
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ol>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
      <ol type="A">
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ol>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
      <ol type="i">
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ol>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m fsa-grid__1/4@l">
      <ol type="I">
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ol>
    </div>
  </div>
</div>
```html
<ol type="a">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
<ol type="A">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
<ol type="i">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
<ol type="I">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```

### Example: Nested

<div class="ds-preview">
  <ol>
    <li>List item one</li>
    <li>
      List item two
      <ol type="a">
        <li>List item two a</li>
        <li>List item two b</li>
        <li>List item two c</li>
      </ol>
    </li>
    <li>List item three</li>
  </ol>
</div>
```html
<ol>
  <li>List item one</li>
  <li>
    List item two
    <ol>
      <li>List item two A</li>
      <li>List item two B</li>
      <li>List item two C</li>
    </ol>
  </li>
  <li>List item three</li>
</ol>
```

## Inline List

<div class="ds-preview">
  <ul class="fsa-list--inline">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul class="fsa-list--inline">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

## Definition List

<div class="ds-preview">
  <dl>

    <dt>ACA</dt>
    <dd>Accredited Certifying Agent</dd>
    <dd>Authorized to issue an organic certificate to operations that comply with the USDA organic regulations.</dd>

    <dt>ACEP</dt>
    <dd>Agricultural Conservation Easement Program</dd>
    <dd>Provides financial and technical assistance to help conserve agricultural lands and wetlands and their related benefits</dd>

    <dt>ACRE</dt>
    <dd>Average Crop Revenue Election</dd>
    <dd>Offers producers an alternative to the Direct and Counter-Cyclical Program</dd>

    <dt>ADA</dt>
    <dd>Americans with Disabilities Act</dd>
    <dd>Prohibits discrimination against people with disabilities in employment, transportation, public accommodation, communications, and governmental activities</dd>

    <dt>ADAAA</dt>
    <dd>Americans with Disabilities Act Amendments Act</dd>

  </dl>
</div>
```html
<dl>

  <dt>ACA</dt>
  <dd>Accredited Certifying Agent</dd>
  <dd>Authorized to issue an organic certificate to operations that comply with the USDA organic regulations.</dd>

  <dt>ACEP</dt>
  <dd>Agricultural Conservation Easement Program</dd>
  <dd>Provides financial and technical assistance to help conserve agricultural lands and wetlands and their related benefits</dd>

  <dt>ACRE</dt>
  <dd>Average Crop Revenue Election</dd>
  <dd>Offers producers an alternative to the Direct and Counter-Cyclical Program</dd>

  <dt>ADA</dt>
  <dd>Americans with Disabilities Act</dd>
  <dd>Prohibits discrimination against people with disabilities in employment, transportation, public accommodation, communications, and governmental activities</dd>

  <dt>ADAAA</dt>
  <dd>Americans with Disabilities Act Amendments Act</dd>

</dl>
```

## Unstyled

### Sass Mixin

Resets `<ul>` or `<ol>` elements by stripping all style properties, e.g. bullets, numbers, margins, etc.

<div class="ds-preview">
  <ul class="your-custom-list">
    <li class="your-custom-list__item">List item one</li>
    <li class="your-custom-list__item">List item two</li>
    <li class="your-custom-list__item">List item three</li>
  </ul>
</div>
```scss
// SCSS
.your-custom-list {

  @include reset-ul();

  &__item {
    @include reset-li();
  }

}
```
```html
<!-- HTML -->
<ul class="your-custom-list">
  <li class="your-custom-list__item">List item one</li>
  <li class="your-custom-list__item">List item two</li>
  <li class="your-custom-list__item">List item three</li>
</ul>
```

### HTML

If Sass is not an option, these CSS Utilities will reset list styles.

#### Unordered list

<div class="ds-preview">
  <ul class="fsa-list--unstyled">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
```html
<ul class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

#### Ordered list

<div class="ds-preview">
  <ol class="fsa-list--unstyled">
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ol>
</div>
```html
<ol class="fsa-list--unstyled">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ol>
```

