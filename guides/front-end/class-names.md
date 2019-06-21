---
layout: guide
parent: "Front-end"
title: "Naming Conventions"
intro: "The Design System uses specific nomenclature and conventions to enforce a more structured approach to CSS."
---

## Class Naming Best Practices

The Cascading Style Sheets (CSS) use a naming convention that follows the Block Element Modifier (BEM) methodology. BEM aligns the approach that all FPAC Application should utilize technology and coding practices that are easy to use, modular, and flexible. The nomenclature is specifically designed to be followed in a strict way to enforce complience accross a large array of Applications. For larger, more complex websites and online applications, it is very important for all Development teams to utilize a standard naming convention. This enables better portability of assets and components across multiple projects and products.

The structure of all CSS class names are in the `"block__elem--mod"` format, and use a single hyphen to eperate individual words withing the block, element, or the modifier portion of the class name.

* block: `"fsa-nav-global"`
* block and element: `"fsa-nav-global__list"`
* block and element with hyphenated words: `"fsa-nav-global__list-item"`
* block, element, and modifier: `"fsa-nav-global__list-item--multi-column"`

All components start with a base class for the block, like `class="fsa-nav-global"`, and will expand with other class names. For example, the above Top Nav class, uses the block and them adds the block and element `class="fsa-nav-global fsa-nav-global__list"` within the class parameter to expand the functionality of the component. CSS selectors are prefixed with `fsa-` so there is no conflict with other CSS libraries.

### Good Examples

* `fsa-btn`
* `fsa-modal__close`
* `fsa-table--borderless`

### Bad Examples

* `fsabtn--large` (instead use `fsa-btn--large`)
* `fsa-breadcrumb--item` (instead use `fsa-breadcrumb__item`)
* `fsa-alert-warning` (instead use `fsa-alert--warning`)
* `appHeader` (instead use the `fsa-` prefix like `fsa-app-header`)
