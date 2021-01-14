---
layout: page
parent: "Components"
type: "UI Component"
title: "Application Header"
intro: "The Application Header component provides a prominent way to display the application name."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-header-app">
    <div class="fsa-header-app__bd">
      <div class="fsa-header-app__primary">
        <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
          <span class="fsa-header-app__app-name">
            <abbr class="fsa-header-app__app-abbr">[abbr]</abbr>
            <span class="fsa-header-app__app-full">[app name]</span>
          </span>
        </a>
      </div>
      <div class="fsa-header-app__secondary">
        <span class="fsa-header-app__profile">
          <span class="fsa-header-app__profile-name">Brandon Reuben</span>
          <a href="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">Log out</a>
        </span>
      </div>
    </div>
  </div>
</div>

## Variations

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

{% capture snippet %}
<div class="fsa-header-app fsa-header-app--fullscreen">
  <div class="fsa-header-app__bd">
    <div class="fsa-header-app__primary">
      <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
        <span class="fsa-header-app__app-name">
          <abbr class="fsa-header-app__app-abbr">[abbr]</abbr>
          <span class="fsa-header-app__app-full">[app name]</span>
        </span>
      </a>
    </div>
    <div class="fsa-header-app__secondary">
      <span class="fsa-header-app__profile">
        <span class="fsa-header-app__profile-name">Brandon Reuben</span>
        <a href="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">Log out</a>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

## Examples

### Default

{% capture snippet %}
<div class="fsa-header-app">
  <div class="fsa-header-app__bd">
    <div class="fsa-header-app__primary">
      <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
        <span class="fsa-header-app__app-name">
          <abbr class="fsa-header-app__app-abbr">SPAR</abbr>
          <span class="fsa-header-app__app-full">SPA Reference App</span>
        </span>
      </a>
    </div>
    <div class="fsa-header-app__secondary">
      <span class="fsa-header-app__profile">
        <span class="fsa-header-app__profile-name">Brandon Reuben</span>
        <a href="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">Log out</a>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

### No acronym

{% capture snippet %}
<div class="fsa-header-app">
  <div class="fsa-header-app__bd">
    <div class="fsa-header-app__primary">
      <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
        <span class="fsa-header-app__app-name">
          <span class="fsa-header-app__app-full">Design System Boilerplate</span>
        </span>
      </a>
    </div>
    <div class="fsa-header-app__secondary">
      <span class="fsa-header-app__profile">
        <span class="fsa-header-app__profile-name">Brandon Reuben</span>
        <a href="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">Log out</a>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

### Acronym only

{% capture snippet %}
<div class="fsa-header-app">
  <div class="fsa-header-app__bd">
    <div class="fsa-header-app__primary">
      <a class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
        <span class="fsa-header-app__app-name">
          <abbr class="fsa-header-app__app-abbr">ABC</abbr>
        </span>
      </a>
    </div>
    <div class="fsa-header-app__secondary">
      <span class="fsa-header-app__profile">
        <span class="fsa-header-app__profile-name">Brandon Reuben</span>
        <a href="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">Log out</a>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

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
      <iframe src="https://usda-fsa.github.io/fsa-style/demo/rwd__header-app.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Usage

{% capture usage_do %}
* When an Application is viewable to a internal or public audience.
* When an Application needs to prominently display the application abbreviation, application name, and Username.
{% endcapture %}

{% capture usage_dont %}
* On any area of the page except just below the [Top Hat Component]({{ site.baseurl }}components/tophat/).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* The Application Header should be positioned just below the [Top Hat Component]({{ site.baseurl }}components/tophat/) when paired together in an FPAC Application.
