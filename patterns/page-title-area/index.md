---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Page Title Area"
shortName: "pattern__page-title-area"
intro: "Complement the page title with breadcrumbs and primary actions."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Anatomy

{% capture anatomy__markers %}
1. [Breadcrumb]({{ site.baseurl }}/components/breadcrumb)
1. [Heading: h1]({{ site.baseurl }}/visual-style/typography/#headings)
1. [Level]({{ site.baseurl }}/components/level)
1. [Buttons]({{ site.baseurl }}/components/buttons)
1. [Utilities: Margin]({{ site.baseurl }}/utilities/#margins)
{% endcapture %}

{% assign anatomy__image-off = "page-title-area--off.png" %}
{% assign anatomy__image-on = "page-title-area--on.png" %}

{% include anatomy.html %}

## Live Demo

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
{{ site.baseurl }}/demo/page-title-area.html
{% endcapture %}

{% include rwd-viewer.html %}
