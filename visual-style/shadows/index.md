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
        &nbsp;&nbsp;0&nbsp;1.2rem&nbsp;1.2rem&nbsp;-1.2rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15),<br>
        &nbsp;&nbsp;0&nbsp;2.4rem&nbsp;3.6rem&nbsp;&nbsp;&nbsp;.4rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15),<br>
        &nbsp;&nbsp;0&nbsp;&nbsp;.8rem&nbsp;4.8rem&nbsp;&nbsp;&nbsp;.8rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15)<br>
        ;
        </code></div>
    </div>
  </div>
  <div class="fsa-p--m fsa-bg--white fsa-m--xl fsa-shadow--overlay">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__4/12@m"><strong>Sass</strong><br><code class="fsa-bg--transparent">$shadow-size-overlay</code></div>
      <div class="fsa-grid__1 fsa-grid__8/12@m"><strong>CSS</strong><br><code class="fsa-bg--transparent">
        box-shadow:<br>
        &nbsp;&nbsp;0&nbsp;.4rem&nbsp;&nbsp;.4rem&nbsp;-.4rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15),<br>
        &nbsp;&nbsp;0&nbsp;.8rem&nbsp;1.2rem&nbsp;&nbsp;.2rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15),<br>
        &nbsp;&nbsp;0&nbsp;.4rem&nbsp;1.2rem&nbsp;&nbsp;.2rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15)<br>
        ;
        </code></div>
    </div>
  </div>
  <div class="fsa-p--m fsa-bg--white fsa-m--xl fsa-shadow--raised">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__4/12@m"><strong>Sass</strong><br><code class="fsa-bg--transparent">$shadow-size-raised</code></div>
      <div class="fsa-grid__1 fsa-grid__8/12@m"><strong>CSS</strong><br><code class="fsa-bg--transparent">
        box-shadow:<br>
        &nbsp;&nbsp;0&nbsp;.2rem&nbsp;&nbsp;.4rem&nbsp;-.4rem&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15),<br>
        &nbsp;&nbsp;0&nbsp;.4rem&nbsp;&nbsp;.4rem&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15),<br>
        &nbsp;&nbsp;0&nbsp;.2rem&nbsp;1.2rem&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(73,&nbsp;68,&nbsp;64,&nbsp;.15)<br>
        ;
        </code></div>
    </div>
  </div>
</div>

## Elevation

<div class="ds-preview">
  <figure class="fsa-text-align--center">
    <img src="/fsa-design-system/img/elevation.png" alt="Visualization of Shadows' elevation">
  </figure>
</div>

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

#### Example

```html
<div class="fsa-shadow--raised">Raised</div>
```
<div class="ds-preview">
  <div class="fsa-m--m fsa-p--m fsa-bg--white fsa-shadow--raised fsa-text-align--center">Raised</div>
</div>

### Sass

`fsa-style` has each shadow in the form of <abbr title="Syntatically Awesome Stylesheets">Sass</abbr> variables (tokens).

```scss
// fsa-style/src/stylesheets/core/_fsa.variables.scss

$shadow-size-popout
$shadow-size-overlay
$shadow-size-raised
$shadow-size-none
```

```scss
// Applying with SCSS

.custom-component {
  box-shadow: $shadow-size-[TYPE];
}
```

## UI Components

Available components implementing Shadows:

{% include related-cards.html %}
