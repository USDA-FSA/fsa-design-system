---
layout: page
parent: "Components"
title: "Breadcrumbs"
intro: "Breadcrumbs are a secondary navigation element used to help orient a User within an application, and enable quick access to a parent level."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-breadcrumb">
    <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
      <ul class="fsa-breadcrumb__list">
        <li class="fsa-breadcrumb__item">
          <a href="#" class="fsa-breadcrumb__link">Home</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="#" class="fsa-breadcrumb__link">Level 1</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="#" class="fsa-breadcrumb__link">Level 2</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="#" class="fsa-breadcrumb__link">Level 3</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
```html
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/" class="fsa-breadcrumb__link">Home</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/level-1/" class="fsa-breadcrumb__link">Level 1</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/level-1/level-2/" class="fsa-breadcrumb__link">Level 2</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/level-1/level-2/level-3" class="fsa-breadcrumb__link">Level 3</a>
      </li>
    </ol>
  </nav>
</div>
```

## Examples

Breadcrumbs are typically paired with the `<h1>` page title. The following examples demonstrate how `fsa-breadcrumb` works in concert with the `<h1>` Page Title.

### Reflect current page

Avoid using the same redundant label for the last crumb to reflect the current page, instead provide an alternate label that suffiently describes the page without being the same literal text.

In this example, the last crumb is indeed the current page - though with an alternate text label accurately describing the current page.

<div class="ds-preview">
  <div class="fsa-breadcrumb">
    <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
      <ol class="fsa-breadcrumb__list">
        <li class="fsa-breadcrumb__item">
          <a href="/" class="fsa-breadcrumb__link">Home</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="link.html" class="fsa-breadcrumb__link">Farm Micro Authority</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="link.html" class="fsa-breadcrumb__link">Inspections</a>
        </li>
        <li class="fsa-breadcrumb__item" aria-current="step">
          <a href="link.html" class="fsa-breadcrumb__link">Inspection Detail</a>
        </li>
      </ol>
    </nav>
  </div>
  <h1>Inspection #1234</h1>
</div>
```html
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/" class="fsa-breadcrumb__link">Home</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="link.html" class="fsa-breadcrumb__link">Farm Micro Authority</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="link.html" class="fsa-breadcrumb__link">Inspections</a>
      </li>
      <li class="fsa-breadcrumb__item" aria-current="step">
        <a href="link.html" class="fsa-breadcrumb__link">Inspection Detail</a>
      </li>
    </ol>
  </nav>
</div>
<h1>Inspection #1234</h1>
```

### Reflect parent

When an alternate label (to the Page Title) cannot sufficiently describe the current page, then the last crumb shall reflect the current view's **immediate** parent.

In this example the immediate parent, *American League*, acts as the last crumb to the current page, *Kansas City Royals*.

<div class="ds-preview">
  <div class="fsa-breadcrumb">
    <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
      <ol class="fsa-breadcrumb__list">
        <li class="fsa-breadcrumb__item">
          <a href="/" class="fsa-breadcrumb__link">Home</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="link.html" class="fsa-breadcrumb__link">Sports</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="link.html" class="fsa-breadcrumb__link">Baseball</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="link.html" class="fsa-breadcrumb__link">MLB</a>
        </li>
        <li class="fsa-breadcrumb__item">
          <a href="link.html" class="fsa-breadcrumb__link">American League</a>
        </li>
      </ol>
    </nav>
  </div>
  <h1>Kansas City Royals</h1>
</div>
```html
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/" class="fsa-breadcrumb__link">Home</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="link.html" class="fsa-breadcrumb__link">Sports</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="link.html" class="fsa-breadcrumb__link">Baseball</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="link.html" class="fsa-breadcrumb__link">MLB</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="link.html" class="fsa-breadcrumb__link">American League</a>
      </li>
    </ol>
  </nav>
</div>
<h1>Kansas City Royals</h1>
```

## Single Item Variation

<div class="ds-preview">
  <div class="fsa-breadcrumb">
    <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
      <ul class="fsa-breadcrumb__list">
        <li class="fsa-breadcrumb__item">
          <a href="#" class="fsa-breadcrumb__link">Level 0</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
```html
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/" class="fsa-breadcrumb__link">Level 0</a>
      </li>
      <li class="fsa-breadcrumb__item">
          <a href="#" class="fsa-breadcrumb__link">Level 1</a>
        </li>
    </ol>
  </nav>
</div>
```

## Usage

### Use When

* Displaying hierarchy.
* The application structure is several levels deep.
* You want to allow the User to navigate quickly to various levels within the application architecture without using the browser back button.
* You want to help orient the User and provide contextual awareness within a process or application structure.

### Don't Use

* In place of [Global Navigation]({{ site.baseurl }}components/top-nav/).
* To display History.
* To reflect a multi-step process. Use [Stepped Tabs]({{ site.baseurl }}components/stepped-tabs/).
* Within the page content as a hyperlink feature.
* If the application is only one level deep or if the global navigation's first level can be used.

## General Guidance

* Breadcrumbs are marked up an an Ordered List (`<ol>`) as its order matters.
* Breadcrumbs should be located just below the global navigation system and above the main content of the application, typically immediately above the `<h1>` page title.
* Keep each crumb's title brief but descriptive.

## Accessibility

* Note the use of the `<nav>` element and `aria` attributes to describe the type of navigation.
