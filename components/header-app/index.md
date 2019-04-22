---
layout: page
parent: "Components"
title: "Application Header"
intro: "The FSA Application Header component provides a prominent way to display the application abbreviation and name."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-header-app">
    <div class="fsa-header-app__bd">
      <div class="fsa-header-app__primary">
        <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
          <span class="fsa-header-app__app-name">
            <abbr class="fsa-header-app__app-abbr" title="[Spell out the acronym]">[abbr]</abbr>
            <span class="fsa-header-app__app-full">[app name]</span>
          </span>
        </a>
      </div>
      <div class="fsa-header-app__secondary">
        <span class="fsa-header-app__profile">
          <a href="link.html" class="fsa-header-app__profile-link">
            <span class="fsa-header-app__profile-name" title="[first_name] [last_name]">[first_name] [last_name]</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-header-app">
  <div class="fsa-header-app__bd">
    <div class="fsa-header-app__primary">
      <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
        <span class="fsa-header-app__app-name">
          <abbr class="fsa-header-app__app-abbr" title="[Spell out the acronym]">[abbr]</abbr>
          <span class="fsa-header-app__app-full">[app name]</span>
        </span>
      </a>
    </div>
    <div class="fsa-header-app__secondary">
      <span class="fsa-header-app__profile">
        <a href="link.html" class="fsa-header-app__profile-link">
          <span class="fsa-header-app__profile-name" title="[first_name] [last_name]">[first_name] [last_name]</span>
        </a>
      </span>
    </div>
  </div>
</div>
```

## Responsive

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__bd">
    <p>
      <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-app" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-app" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-app" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
        <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-app" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      </span>
      <a class="fsa-m-l--xs fsa-text-size--1 usa-external_link" href="http://usda-fsa.github.io/fsa-style/demo/rwd__header-app.html" target="_blank">View in new window</a>
    </p>
  </div>
  <div class="docs__rwd-embed-container">
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_header-app">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__header-app.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Usage

### Use When

* An FSA Application is viewable to a internal or public audience.
* An FSA Application needs to prominently display the application abbreviation, application name, and Username.

### Don't Use

* The Application Header component on any area of the page except just below the [Top Hat Component]({{ site.baseurl }}components/tophat/).

## General Guidance

* The Application Header should be positioned just below the [Top Hat Component]({{ site.baseurl }}components/tophat/) when paired together in an FSA Application.
