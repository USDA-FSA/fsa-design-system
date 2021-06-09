---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Action Bar with Table"
shortName: "pattern__a"
intro: "Complement a data table with actions and pagination."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Anatomy

{% capture anatomy__markers %}
1. [Buttons]({{ site.baseurl }}components/buttons)
1. [Table]({{ site.baseurl }}components/tables)
1. [Checkbox]({{ site.baseurl }}components/checkbox/) or [Radio]({{ site.baseurl }}components/radio/)
1. [Level]({{ site.baseurl }}components/level/)
1. [Text Input]({{ site.baseurl }}components/text-input/)
1. [Button Group]({{ site.baseurl }}components/button-group)
1. [Label]({{ site.baseurl }}components/labels/)
1. [Pagination]({{ site.baseurl }}components/pagination/)
1. [Utilities: Padding](utilities/#padding)
1. [Utilities: Margins](utilities/#margins)
1. [Utilities: Visibility](utilities/#visibility)
{% endcapture %}

{% assign anatomy__image-off = "actionbar-and-table--off.png" %}
{% assign anatomy__image-on  = "actionbar-and-table--on.png" %}

{% include anatomy.html %}

## Live Demo

{% assign rwdSize = "desktop" %}
{% capture rwdURL %}{{ site.baseurl }}/demo/actionbar-and-table.html{% endcapture %}
{% include rwd-viewer.html %}
