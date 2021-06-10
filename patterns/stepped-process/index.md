---
layout: page
parent: "Patterns"
type: "UX Pattern"
title: "Stepped Process"
shortName: "pattern__stepped-process"
intro: "Lead the user through a series of steps or flow."
jump_menu: false
full_width: true
suppress_kitcken_sink: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Anatomy

{% capture anatomy__markers %}
1. [Stepped Tabs]({{ site.baseurl }}components/stepped-tabs)
1. [Stepped Control]({{ site.baseurl }}components/stepped-control)
{% endcapture %}

{% assign anatomy__image-off = "stepped-process.png" %}

{% include anatomy.html %}

## Live Demo

{% assign rwdSize = "phone" %}
{% assign rwdURL = "{{ site.baseurl }}/demo/stepped-process.html" %}
{% include rwd-viewer.html %}
