---
layout: page
parent: "Components"
type: "UI Component"
title: "Application Header"
intro: "Display application name and account-level actions."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

This component is **not** a required Global Navigation structure; rather, it effectively serves as a ready-made UI Pattern implemented with FPAC Design System styles and parts.

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

{% capture rwdURL %}https://usda-fsa.github.io/fsa-style/demo/rwd__header-app.html{% endcapture %}
{% include rwd-viewer.html %}

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
