---
layout: page
parent: "Components"
title: "Breadcrumbs"
intro: "Breadcrumbs are a navigation element used to help orient a User within an application."
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


## Variations

Breadcrumbs are styled with `class="fsa-breadcrumb"`, and should be used with an ordered or unordered List tag.

```html
<div class="fsa-breadcrumb">
    <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
      <ol class="fsa-breadcrumb__list">
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
      </ol>
    </nav>
  </div>
```

## Usage

### Use When

Breadcrumbs can be used when the application structure is several levels deep. Breabcrumbs allow the User to navigation quickly to various levels within the application architecture without using the browser back button. Breadcrumbs are also useful as a means to help orient the User and provide contextual awareness within a process or site structure.

Breadcrumbs should be located just below the top navigation system, and be within the context of the page structure. Use appropriate page hierachy as an indicator to where the breadcrumbs should be located.

### Don't Use

* As a top navigation feature or within the page content as a hyperlink feature.
* If the application is only one level deep or if the top navigation first level navigation can be used.
