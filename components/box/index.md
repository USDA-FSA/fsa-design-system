---
layout: page
parent: "Components"
type: "UI Component"
title: "Box"
shortName: "component__box"
intro: "Organize a set of content in a standalone object."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

{% capture snippet %}
<div class="fsa-box">
  <p>Deserunt excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Variations

While these modifiers are specific to `.fsa-box`, other CSS Utilities and Helpers (e.g. [Padding](#padding)) can be combined for further flexibility.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-0</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-0">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-1</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-1">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-2</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-2">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bg-3</strong>"</code></p>
    <div class="fsa-box fsa-box--bg-3">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-0</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-0">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-1</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-1">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-2</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-2">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>bw-3</strong>"</code></p>
    <div class="fsa-box fsa-box--bw-3">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-0</strong>"</code></p>
    <div class="fsa-box fsa-box--br-0">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-1</strong>"</code></p>
    <div class="fsa-box fsa-box--br-1">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-2</strong>"</code></p>
    <div class="fsa-box fsa-box--br-2">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
    <p class="docs__code-sample"><code>class="fsa-box fsa-box--<strong>br-3</strong>"</code></p>
    <div class="fsa-box fsa-box--br-3">
      <p>Deserunt db excepturi rem asperiores. Sapiente aliquid, hic natus.</p>
    </div>
  </div>
</div>

## Responsive

Selectively apply the Box style to an element at each Media Query breakpoint, where `breakpoint` is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code>.

```html
<element class="fsa-box@[breakpoint]">...</element>
```

{% capture rwdURL %}https://usda-fsa.github.io/fsa-style/demo/rwd__box.html{% endcapture %}
{% include rwd-viewer.html %}

Selectively override several style properties of `.fsa-box` at each Media Query breakpoint, where `property` is one of <code title="background-color">bg</code>, <code title="border-width">bw</code>, or <code title="border-radius">br</code>, and where <code>breakpoint</code> is one of <code title="small">s</code>, <code title="medium">m</code>, <code title="large">l</code>, or <code title="extra large">xl</code>

```html
<element class="fsa-box fsa-box[property]@[breakpoint]">...</element>
```

{% capture rwdURL %}https://usda-fsa.github.io/fsa-style/demo/rwd__box-modifiers.html{% endcapture %}
{% include rwd-viewer.html %}

{% include related-cards.html %}

