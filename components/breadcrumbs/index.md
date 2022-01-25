---
layout: page
parent: "Components"
type: "UI Component"
title: "Breadcrumbs"
shortName: "component__breadcrumbs"
intro: "Provide hierarchical position within an application, and enable quick access through its levels."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-combinator">
  <div class="ds-combinator__props">
    <h3 class="fsa-sr-only">Props</h3>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIcon">Icon</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIcon" name="combinatorIcon" data-behavior="combinator-toggle-item" data-toggle-target="#combinatorTarget .combinatorIconSample">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" id="combinatorLevelsLabel">Levels</label>
      <span class="fsa-btn-group fsa-btn-group--small" role="group" aria-describedby="combinatorLevelsLabel">
        <button class="fsa-btn-group__item" data-behavior="combinator-level" data-level-target=".fsa-breadcrumb__list" data-level-direction="down" type="button" aria-label="Remove" title="Remove">
          <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"></path></svg>
        </button>
        <button class="fsa-btn-group__item" data-behavior="combinator-level" data-level-target=".fsa-breadcrumb__list" data-level-direction="up" type="button" aria-label="Add" title="Add">
          <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
        </button>
      </span>
    </div>
  </div>
  <div class="ds-combinator__preview">
    <h3 class="fsa-sr-only">Props Demo</h3>
    <div class="fsa-breadcrumb" id="combinatorTarget">
      <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
        <ol class="fsa-breadcrumb__list">
          <li class="fsa-breadcrumb__item">
            <a href="/link.html" class="fsa-breadcrumb__link">
              <svg hidden class="fsa-icon fsa-icon--size-1 combinatorIconSample" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path> </svg>
              Level
            </a>
          </li>
          <li class="fsa-breadcrumb__item">
            <a href="/link.html" class="fsa-breadcrumb__link">
              <svg hidden class="fsa-icon fsa-icon--size-1 combinatorIconSample" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path> </svg>
              Level
            </a>
          </li>
          <li class="fsa-breadcrumb__item" aria-current="page">
            <a href="/link.html" class="fsa-breadcrumb__link">
              <svg hidden class="fsa-icon fsa-icon--size-1 combinatorIconSample" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path> </svg>
              Level
            </a>
          </li>
        </ol>
      </nav>
    </div>

  </div>
</div>

## Examples

Breadcrumbs are typically paired with the `<h1>` page title. The following examples demonstrate how `fsa-breadcrumb` works in concert with the `<h1>` Page Title.

### Single Item

{% capture snippet %}
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Home</a>
      </li>
    </ol>
  </nav>
</div>
<h1>Sports</h1>
{% endcapture %}
{% include preview-and-snippet.html %}

### Icons

Use any variety of [Icons]({{ site.baseurl }}components/icons/) to heighten or clarify each Breadcrumb item.

{% capture snippet %}
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">
          <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          Home
        </a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">
          <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
          </svg>
          Folder
        </a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">
          <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
          </svg>
          Folder
        </a>
      </li>
      <li class="fsa-breadcrumb__item" aria-current="page">
        <a href="/link.html" class="fsa-breadcrumb__link">
          <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path>
          </svg>
          New Document
        </a>
      </li>
    </ol>
  </nav>
</div>
<h1>Untitled Document</h1>
{% endcapture %}
{% include preview-and-snippet.html %}

### Reflect current page

Avoid using the same redundant label for the last crumb to reflect the current page, instead provide an alternate label that suffiently describes the page without being the same literal text.

In this example, the last crumb is indeed the current page - though with an alternate text label accurately describing the current page.

{% capture snippet %}
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Home</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Farm Micro Authority</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Inspections</a>
      </li>
      <li class="fsa-breadcrumb__item" aria-current="step">
        <a href="/link.html" class="fsa-breadcrumb__link">Inspection Detail</a>
      </li>
    </ol>
  </nav>
</div>
<h1>Inspection #1234</h1>
{% endcapture %}

{% include preview-and-snippet.html %}

### Reflect parent

When an alternate label (to the Page Title) cannot sufficiently describe the current page, then the last crumb shall reflect the current view's **immediate** parent.

In this example the immediate parent, *American League*, acts as the last crumb to the current page, *Kansas City Royals*.

{% capture snippet %}
<div class="fsa-breadcrumb">
  <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
    <ol class="fsa-breadcrumb__list">
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Home</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Sports</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">Baseball</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">MLB</a>
      </li>
      <li class="fsa-breadcrumb__item">
        <a href="/link.html" class="fsa-breadcrumb__link">American League</a>
      </li>
    </ol>
  </nav>
</div>
<h1>Kansas City Royals</h1>
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* For communicating hierarchy.
* When the application structure is several levels deep.
* When you want to allow the User to navigate quickly to various levels within the application architecture without using the browser back button.
* When you want to help orient the User and provide contextual awareness within a process or application structure.
{% endcapture %}

{% capture usage_dont %}
* In place of [Global Navigation]({{ site.baseurl }}components/top-nav/).
* To display History.
* To reflect a multi-step process. Use [Stepped Tabs]({{ site.baseurl }}components/stepped-tabs/).
* Within the page content as a hyperlink feature.
* If the application is only one level deep or if the global navigation's first level can be used.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Breadcrumbs are marked up an an Ordered List (`<ol>`) as its order matters.
* Breadcrumbs should be located just below the global navigation system and above the main content of the application, typically immediately above the `<h1>` page title.
* Keep each crumb's title brief but descriptive.

## Accessibility

* Note the use of the `<nav>` element and `aria` attributes to describe the type of navigation.
