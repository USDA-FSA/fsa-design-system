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

### Custom

Selectively combine with CSS Utilities, such as [Background COlors]({{ site.baseurl }}utilities/#color-background).

`class="fsa-bg--secondary"`

{% capture snippet %}
<div class="fsa-header-app fsa-bg--secondary">
  <div class="fsa-header-app__bd">
    <div class="fsa-header-app__primary">
      <a onclick="trackLink('Boilerplate', 'Header App [abbr]')" class="fsa-header-app__home-link" href="boilerplate.html" title="Link to YAFANS home">
        <span class="fsa-header-app__app-name">
          <abbr class="fsa-header-app__app-abbr" title="[Spell out the acronym]">[abbr]</abbr>
          <span class="fsa-header-app__app-full">[app name]</span>
        </span>
      </a>
    </div>
    <div class="fsa-header-app__secondary">
      <span class="fsa-header-app__profile">
        <span class="fsa-header-app__profile-name">
          <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
            <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path> </svg>
            <span>Brandon Reuben</span>
      </span>
      </span>
      <a href="https://www.eauth.usda.gov/Logout/logoff.asp" class="fsa-header-app__profile-link">
        <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
            <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path> </svg>
            <span>Log out</span>
        </span>
      </a>
      </span>
    </div>
  </div>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}


## Responsive

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__header-app.html
{% endcapture %}

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
