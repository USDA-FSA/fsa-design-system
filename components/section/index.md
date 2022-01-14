---
layout: page
parent: "Components"
type: "UI Component"
title: "Section"
shortName: "component__section"
intro: "A page's primary container to contain content, components, and layout."
jump_menu: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

Other than background-color variants, they are not strictly visible in the user interface itself. Most page templates likely will use just one `fsa-section--[VARIANT]`, though multiple Section rows may be stacked to distinguish horizontal groups of content.

<aside>
  <div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text">View <strong><a href="http://usda-fsa.github.io/fsa-style/sections.html" target="_blank">sections.html</a></strong> and <strong><a href="http://usda-fsa.github.io/fsa-style/boilerplate.html" target="_blank">boilerplate.html</a></strong> examples to view each in full-page in context.</p>
    </div>
  </div>
</aside>

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <figure class="fsa-m-b--m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-section--default.png" alt="Section compononent screenshot: Default">
        <figcaption>Default</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <figure class="fsa-m-b--m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-section--stacked-default.png" alt="Section compononent screenshot: stacked, default">
        <figcaption>Multiple Variants</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <figure class="fsa-m-b--m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-section--fullscreen.png" alt="Section compononent screenshot: Fullscreen">
        <figcaption>Default, Fullscreen</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <figure class="fsa-m-b--m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-section--stacked-fullscreen.png" alt="Section compononent screenshot: Multiple Variants, Fullscreen">
        <figcaption>Multiple Variants, Fullscreen</figcaption>
      </figure>
    </div>
  </div>
</div>

## Anatomy

```html
<div class="fsa-section fsa-section[--variant] [fsa-section--fullscreen]">
  <div class="fsa-section__bd">
    content
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <figure>
        <a href="{{ site.baseurl }}img/screen-section--structure.png"><img class="ds-screen" src="{{ site.baseurl }}img/screen-section--structure.png" alt=""></a>
      </figure>
      <figcaption>Default</figcaption>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@m">
      <figure>
        <a href="{{ site.baseurl }}img/screen-section--structure.png"><img class="ds-screen" src="{{ site.baseurl }}img/screen-section-stacked--structure.png" alt=""></a>
      </figure>
      <figcaption>Multiple Variants Stacked</figcaption>
    </div>
  </div>
</div>

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal fsa-m--none">
  <caption class="fsa-sr-only">Class Overview</caption>
  <thead>
    <th scope="col">Key</th>
    <th scope="col">Selector</th>
    <th scope="col">Description</th>
  </thead>
  <tbody>
    <tr>
      <th aria-label="Key">1</th>
      <th aria-label="Selector"><code style="white-space: nowrap;">fsa-section</code></th>
      <td aria-label="Description">Acts as the main building block for most layouts. Typically used as direct child of <code>&lt;body&gt;</code>. Variants available for colors and fullscreen.</td>
    </tr>
    <tr>
      <th aria-label="Key">2</th>
      <th aria-label="Selector"><code style="white-space: nowrap;">fsa-section__bd</code></th>
      <td aria-label="Description">Sole child element. Unless modified by fullscreen variant, limits content to a reasonable maximum width.</td>
    </tr>
  </tbody>
</table>

## Variants

View <a href="http://usda-fsa.github.io/fsa-style/sections.html" target="_blank">sections.html</a> and <a href="http://usda-fsa.github.io/fsa-style/boilerplate.html" target="_blank">boilerplate.html</a> examples to view each in full-page in context.

### Default
```html
<div class="fsa-section">
  <div class="fsa-section__bd">
    Aspernatur voluptatem similique quidem odit laudantium pariatur modi illum officiis recusandae! Dolores odio dicta repellat similique numquam officiis repudiandae corrupti exercitationem consequatur!
  </div>
</div>
```

### Fullscreen
Likely paired with Fullscreen variants of
[Tophat]({{ site.baseurl }}components/tophat),
[Application Header]({{ site.baseurl }}components/header-app),
[Global Nav]({{ site.baseurl }}components/top-nav),
[Topper]({{ site.baseurl }}components/topper),
[Footer]({{ site.baseurl }}components/footer),
and
[Screen ID]({{ site.baseurl }}components/screen-id)

```html
<div class="fsa-section fsa-section--fullscreen">
  <div class="fsa-section__bd">
    Aspernatur voluptatem similique quidem odit laudantium pariatur modi illum officiis recusandae! Dolores odio dicta repellat similique numquam officiis repudiandae corrupti exercitationem consequatur consequuntur quia officiis impedit voluptate neque dolores itaque dolore provident, optio obcaecati deleniti ipsa voluptates ipsam minus cumque rerum fugit officia.
  </div>
</div>
```

### White
```html
<div class="fsa-section fsa-section--white">
  <div class="fsa-section__bd">
    Aspernatur voluptatem similique quidem odit laudantium pariatur modi illum officiis recusandae! Dolores odio dicta repellat similique numquam officiis repudiandae corrupti exercitationem consequatur!
  </div>
</div>
```

### Dark
```html
<div class="fsa-section fsa-section--dark">
  <div class="fsa-section__bd">
    Aspernatur voluptatem similique quidem odit laudantium pariatur modi illum officiis recusandae! Dolores odio dicta repellat similique numquam officiis repudiandae corrupti exercitationem consequatur!
  </div>
</div>
```

### Darker
```html
<div class="fsa-section fsa-section--darker">
  <div class="fsa-section__bd">
    Aspernatur voluptatem similique quidem odit laudantium pariatur modi illum officiis recusandae! Dolores odio dicta repellat similique numquam officiis repudiandae corrupti exercitationem consequatur!
  </div>
</div>
```
