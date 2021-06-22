---
layout: page
parent: "Visual Style"
title: "Shadows"
intro: "[Intro]"
jump_menu: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
relatedItems:
  - "Text Input"
  - "Textarea"
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

## Usage

### CSS Utilities

(TBD)

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

Examples of components with Shadows:

{% include related-cards.html %}
