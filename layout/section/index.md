---
layout: page
parent: "Layout"
title: "Section"
shortName: "component__section"
intro: "The Section Layout component can serve as the page's primary container to arrange content, components, and layout. Other than background-color variations, they are not strictly visible in the user interface itself."
jump_menu: true
suppress_code_toggle: true
---

Most page templates likely will use just one `fsa-section--[variation]`, though multiple Section rows may be stacked to distinguish horizontal groups of content.

View <a href="http://usda-fsa.github.io/fsa-style/sections.html">sections.html</a> example to view in context.

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
        <figcaption>Multiple Variations</figcaption>
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
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-section--stacked-fullscreen.png" alt="Section compononent screenshot: Multiple Variations, Fullscreen">
        <figcaption>Multiple Variations, Fullscreen</figcaption>
      </figure>
    </div>
  </div>
</div>

## Variations

### Default
```html
<div class="fsa-section">
  <div class="fsa-section__bd">
    Aspernatur voluptatem similique quidem odit laudantium pariatur modi illum officiis recusandae! Dolores odio dicta repellat similique numquam officiis repudiandae corrupti exercitationem consequatur!
  </div>
</div>
```

### Fullscreen
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
<div class="ds-preview">
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
