---
layout: page
parent: "Components"
type: "UI Component"
title: "Text Links"
intro: "Navigate between views with inline text links."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

{% capture snippet %}
This is <a href="http://www.fsa.usda.gov/">text link</a>. And a link that goes to an <a class="usa-external_link" href="https://digital.gov/">external website</a>.
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* For allowing users to navigate between destinations.
{% endcapture %}

{% capture usage_dont %}
* To trigger an action or behavior. Use a [Button]({{ site.baseurl }}components/buttons/) instead.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

* Users must be able to tab (via keyboard) to focus through each link.
* Users must be able to activate a link when pressing ‘Enter’ on their keyboard.
* Users must be able to identify links without relying on color alone.
* Users must be able to activate hover and focus states with both a mouse and a keyboard.
