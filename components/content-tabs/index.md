---
layout: page
parent: "Components"
type: "UI Component"
title: "Content Tabs"
shortName: "component__content-tabs"
intro: "Segment related content of the same parent topic in a defined area."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-preview">
  <div class="fsa-content-tabs">
    <ul class="fsa-content-tabs__list">
      <li class="fsa-content-tabs__item">
        <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link">
          <span class="fsa-content-tabs__label-text">Lorem</span>
        </a>
      </li>
      <li class="fsa-content-tabs__item">
        <a class="fsa-content-tabs__label" href="#link">
          <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
        </a>
      </li>
      <li class="fsa-content-tabs__item">
        <a class="fsa-content-tabs__label" href="#link">
          <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
        </a>
      </li>
      <li class="fsa-content-tabs__item">
        <a class="fsa-content-tabs__label" href="#link">
          <span class="fsa-content-tabs__label-text">Elit sed do</span>
        </a>
      </li>
      <li class="fsa-content-tabs__item">
        <a class="fsa-content-tabs__label" href="#link">
          <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
        </a>
      </li>
    </ul>
  </div>
</div>

## Variations

Content Tabs can be styled using `fsa-content-tabs__label--[variation]` on the archor tag class.

### Default

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small" href="#link">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small fsa-content-tabs__label--active" aria-current="step" href="#link">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small" href="#link">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label fsa-content-tabs__label--small" href="#link">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small" href="#link">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large (on desktop)

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large" href="#link">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large fsa-content-tabs__label--active" aria-current="step" href="#link">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large" href="#link">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label fsa-content-tabs__label--large" href="#link">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large" href="#link">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Light Background

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--light">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" href="link.html" aria-current="tab">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside"></div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Contrast Background

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--contrast">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" href="link.html" aria-current="tab">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside"></div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Justified (on desktop)

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--justified">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Justified Equal (on desktop)

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--justified-equal">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### As Buttons

Each tab, <code>class="fsa-content-tabs__label"</code>, may occasionally be a <code>&lt;button&gt;</code> element.

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" type="button">
        <span class="fsa-content-tabs__label-text">tab 1</span>
      </button>
    </li>
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label" type="button">
        <span class="fsa-content-tabs__label-text">tab 2</span>
      </button>
    </li>
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label" type="button">
        <span class="fsa-content-tabs__label-text">tab 3</span>
      </button>
    </li>
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label" type="button">
        <span class="fsa-content-tabs__label-text">tab 4</span>
      </button>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### With optional aside

Parallel to the list of tabs (`.fsa-content-tabs__list`), an optional region (`.fsa-content-tabs__aside`) is available for contextually relevant content.

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="#link">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside">
    <a href="#link-to-nowhere" onclick="alert('A text link is but one example of what can go here.')">Help</a>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

At narrower breakpoints Content Tabs may be horizontally scrollable.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}https://usda-fsa.github.io/fsa-style/demo/rwd__content-tabs.html{% endcapture %}
{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* When only a few specific pieces of content or functionality are required on the application screen.
* When the information needs to be displayed in a more compact area on the screen, requires multiple view states, or multiple categories.
* For switching between various content categories or features creates an optimal on-screen workflow.
{% endcapture %}

{% capture usage_dont %}
* When the number of categories for Tabs extends the Content Tabs too wide. Instead utilize a [Select Menu]({{ site.baseurl }}components/select/) to update content.
* A set of Content Tabs within another set of Content tabs (nesting)
* If the content within the Tabs is minimal and can more easily be assessed on a single scrollable application page.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Ensure that all Tab label tags have appropriate accessibility parameters (ALT, TITLE, etc) applied with intuitive descriptions for assistive devices.
* Note the use of `aria-current` attribute to declare selected tab.

## General Guidance

* Utilize Content Tabs to categorize application content for easily accessible view states.
* Ensure to maximize the width of the Content Tabs in the screen space provided for better usability.
* Best practices dictates using the full width of the application screen whenever possible.
