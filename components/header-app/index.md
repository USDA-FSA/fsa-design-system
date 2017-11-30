---
layout: page
parent: "Components"
title: "Application Header"
intro: "The FSA Application Header component provides a prominent way to display the application abbreviation and name."
jump_menu: true
---

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

## Variations

The Application Header shall use the following `class="fsa-header-app"`.

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

## Usage

### Use When

* An FSA Application is viewable to a internal or public audience.
* An FSA Application needs to prominently display the application abbreviation, application name, and Username.

### Don't Use

* The Application Header component on any area of the page except just below the [Top Hat Component]({{ site.baseurl }}components/tophat/).

## General Guidance

* The Application Header should be positioned just below the [Top Hat Component]({{ site.baseurl }}components/tophat/) when paired together in an FSA Application.
