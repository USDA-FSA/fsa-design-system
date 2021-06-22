---
layout: page
parent: "Visual Style"
title: "Shadows"
intro: "[Intro]"
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

<div class="ds-preview">
  <div class="fsa-level@l fsa-level--grow-auto fsa-level--align-top fsa-level--gutter-xl@l fsa-m--m">
    <div class="fsa-p--xl fsa-bg--white fsa-shadow--popout"></div>
    <div class="fsa-p--xl fsa-bg--white fsa-shadow--overlay"></div>
    <div class="fsa-p--xl fsa-bg--white fsa-shadow--raised"></div>
  </div>
</div>

## Types

### Popout

<div class="ds-preview">
  <div class="fsa-level fsa-level--grow-auto fsa-m--m fsa-level--gutter-xl">
    <div>
      <h4 class="docs__sub_style fsa-m-t--none">Resting</h4>
      <div class="fsa-p--xl fsa-bg--white fsa-shadow--popout"></div>
    </div>
    <div>
      <h4 class="docs__sub_style fsa-m-t--none">Hover</h4>
      <div class="fsa-p--xl fsa-bg--white fsa-shadow:hover--popout"></div>
    </div>
  </div>
</div>

### Overlay

<div class="ds-preview">
  <div class="fsa-level fsa-level--grow-auto fsa-m--m fsa-level--gutter-xl">
    <div>
      <h4 class="docs__sub_style fsa-m-t--none">Resting</h4>
      <div class="fsa-p--xl fsa-bg--white fsa-shadow--overlay"></div>
    </div>
    <div>
      <h4 class="docs__sub_style fsa-m-t--none">Hover</h4>
      <div class="fsa-p--xl fsa-bg--white fsa-shadow:hover--overlay"></div>
    </div>
  </div>
</div>

### Raised

<div class="ds-preview">
  <div class="fsa-level fsa-level--grow-auto fsa-m--m fsa-level--gutter-xl">
    <div>
      <h4 class="docs__sub_style fsa-m-t--none">Resting</h4>
      <div class="fsa-p--xl fsa-bg--white fsa-shadow--raised"></div>
    </div>
    <div>
      <h4 class="docs__sub_style fsa-m-t--none">Hover</h4>
      <div class="fsa-p--xl fsa-bg--white fsa-shadow:hover--raised"></div>
    </div>
  </div>
</div>

## Elevation

<div class="fsa-box fsa-p--xl fsa-text-align--center fsa-text-size--6 fsa-color--tertiary-200 fsa-bg--tertiary-100">Coming...</div>

## Usage

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

### CSS Utilities

<div class="fsa-box fsa-p--xl fsa-text-align--center fsa-text-size--6 fsa-color--tertiary-200 fsa-bg--tertiary-100">Coming...</div>

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
