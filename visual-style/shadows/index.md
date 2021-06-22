---
layout: page
parent: "Visual Style"
title: "Shadows"
intro: "Distinguish content blocks with an Elevation system to convey proximity, prominence, and visual depth."
jump_menu: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
relatedItems:
  - "Date Picker"
  - "Global Navigation"
  - "Growl Notification"
  - "Modal"
  - "Stepped Control"
---

## Types

<div class="ds-preview">
  <div class="fsa-p--m fsa-bg--white fsa-m--xl fsa-shadow--popout">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__4/12@m"><strong>Sass</strong><br><code class="fsa-bg--transparent">$shadow-size-popout</code></div>
      <div class="fsa-grid__1 fsa-grid__8/12@m"><strong>CSS</strong><br><code class="fsa-bg--transparent">
        box-shadow:<br>
        &nbsp;&nbsp;0 1.2rem 1.2rem -1.2rem rgb(73 68 64 / 15%),<br>
        &nbsp;&nbsp;0 2.4rem 3.6rem 0.4rem rgb(73 68 64 / 15%),<br>
        &nbsp;&nbsp;0 0.8rem 4.8rem 0.8rem rgb(73 68 64 / 15%)<br>
        ;
        </code></div>
    </div>
  </div>
  <div class="fsa-p--m fsa-bg--white fsa-m--xl fsa-shadow--overlay">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__4/12@m"><strong>Sass</strong><br><code class="fsa-bg--transparent">$shadow-size-overlay</code></div>
      <div class="fsa-grid__1 fsa-grid__8/12@m"><strong>CSS</strong><br><code class="fsa-bg--transparent">
        box-shadow:<br>
        &nbsp;&nbsp;0 0.4rem 0.4rem -0.4rem rgb(73 68 64 / 15%),<br>
        &nbsp;&nbsp;0 0.8rem 1.2rem 0.2rem rgb(73 68 64 / 15%),<br>
        &nbsp;&nbsp;0 0.4rem 1.2rem 0.2rem rgb(73 68 64 / 15%)<br>
        ;
        </code></div>
    </div>
  </div>
  <div class="fsa-p--m fsa-bg--white fsa-m--xl fsa-shadow--raised">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__4/12@m"><strong>Sass</strong><br><code class="fsa-bg--transparent">$shadow-size-raised</code></div>
      <div class="fsa-grid__1 fsa-grid__8/12@m"><strong>CSS</strong><br><code class="fsa-bg--transparent">
        box-shadow:<br>
        &nbsp;&nbsp;0 0.2rem 0.4rem -0.4rem rgb(73 68 64 / 15%),<br>
        &nbsp;&nbsp;0 0.4rem 0.4rem 0 rgb(73 68 64 / 15%),<br>
        &nbsp;&nbsp;0 0.2rem 1.2rem 0 rgb(73 68 64 / 15%)<br>
        ;
        </code></div>
    </div>
  </div>
</div>

## Elevation

<div class="fsa-box fsa-p--xl fsa-text-align--center fsa-text-size--6 fsa-color--tertiary-200 fsa-bg--tertiary-100">Coming...</div>

## Usage

<!--
{% capture usage_do %}
* do item
* do item
* do item
* do item
{% endcapture %}

{% capture usage_dont %}
* don't item
* don't item
{% endcapture %}

{% include do-dont.html %}
-->

### CSS Classes

Refer to [CSS Utilities / Shadows]({{ site.baseurl }}utilities/#shadows) to selectively apply shadows to content blocks.

### Example

```html
<div class="fsa-m--m fsa-p--m fsa-bg--white fsa-shadow--raised fsa-text-align--center">Raised</div>
```
<div class="ds-preview">
  <div class="fsa-m--m fsa-p--m fsa-bg--white fsa-shadow--raised fsa-text-align--center">Raised</div>
</div>

### Sass

`fsa-style` has each shadow in the form of <abbr title="Syntatically Awesome Stylesheets">Sass</abbr> variables (tokens)

#### Variables

```scss
$shadow-size-popout
$shadow-size-overlay
$shadow-size-raised
$shadow-size-none
```

#### Applying with SCSS

```scss
.custom-component {
  box-shadow: [SHADOW_VARIABLE];
}
```

## UI Components

Available components implementing Shadows:

{% include related-cards.html %}
