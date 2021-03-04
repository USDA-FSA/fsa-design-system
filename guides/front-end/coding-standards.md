---
layout: guide
parent: "Front-end"
title: "Coding Standards"
intro: "While developing FPAC Applications, follow the below standards for best practice Front-end Development."
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## HTML Best Practices

* Always use Semantic HTML that prioritizes the markup over the display and layout of features on the screen.
* Your HTML should have meaningful structure, utilizing the appropriate tags.
* While `span` and `div` tags help to build structure, use as few as possible.
* If your content needs to be displayed in tablular format, use the and HTML `<table>` instead of nested `<div>` tags.
* All paragraph text should be wrapped in an element using the `<p>` tag.
* Always use closing tags when optional, such as with `<li/>` or `</body>`.
* The order of the attributes within a tag should follow `type`, `class`, `id`, and the remaining as logical to the function of the tag.
* Always use lowercase tag names and lowercase attribute names.
* Attribute values should utilize the double quotation marks.
* The use of [ARIA](https://www.w3.org/TR/2017/WD-using-aria-20171123/) to aid in [Accessibility]({{ site.baseurl }}guides/accessibility/) is recommended.

## CSS Best Practices

* Always utilize `fsa-style`'s selectors (e.g. `class="selector-name"` provided within the Design System, before creating your own classes.
* Never use inline CSS styles within an FPAC Application.
* Never style raw HTML elements, and instead utilize a linked CSS file with classes.
* Do not create CSS classes solely for programming purposes. They should always align to a style.
* The use of the `id` attribute should be done sparingly and only for programming purposes, not visual or style purposes.
* Make sure all hex values are lowercase and always use 6 characters (`#ffffff`) instead of shorthand (`#fff`).
* Avoid specifying units for zero values, i.e. `margin: 0;` instead of `margin: 0px;`.
* End all declarations with a semicolon.

## General Best Practices

* Code to standards-compliant browsers first, and then fix issues related to legacy IE versions where appropriate.
* Text links should use `a` tags and link out to external content, while buttons should be used to perform on-page actions.
