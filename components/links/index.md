---
layout: page
parent: "Components"
title: "Text Links"
intro: "More specifically known as <strong>anchor</strong> elements, text links are the most foundational elements of HTML, allowing user to navigate to a different page or further information."
jump_menu: true
---

<div class="ds-preview">
  This is <a href="http://www.fsa.usda.gov/">text link</a>. And a link that goes to an <a class="usa-external_link" href="http://media.giphy.com/media/8sgNa77Dvj7tC/giphy.gif">external website</a>.
</div>
```html
<a href="http://www.fsa.usda.gov/">Text link</a>
<a class="usa-external_link" href="http://media.giphy.com/media/8sgNa77Dvj7tC/giphy.gif">FSA Homepage</a>
```

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
