---
layout: page
parent: "Components"
type: "UI Component"
title: "Splash"
intro: "Momentarily display a launch screen while an application is loading."
jump_menu: true
suppress_code_toggle: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

The intention of a Splash screen is to provide a good first imporession of an application. By providing a visual cue that progress is being made to load the various technologies required to run the application, trust and understanding is gained by the User, creating a better experience.

{% assign rwdSize = "tablet" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__splash.html
{% endcapture %}

{% include rwd-viewer.html %}

```html
<div class="fsa-splash">
  <div class="fsa-splash__hd">
    <div class="fsa-tophat fsa-splash__tophat">
      <div class="fsa-tophat__bd fsa-splash__tophat__bd">
        <div class="fsa-tophat__primary">
          <span class="fsa-tophat__agency">
            <a class="fsa-tophat__link fsa-splash__tophat__link" href="http://usda.gov" title="Link to USDA homepage">
              <img role="presentation" class="fsa-tophat__agency-logo" src="../img/usda-logo.svg" alt="">
              <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
              <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
            </a>
          </span>
        </div>
        <div class="fsa-tophat__secondary">
          <span class="fsa-tophat__subagency">
            <a class="fsa-tophat__link fsa-splash__tophat__link" href="http://fsa.usda.gov" title="FPAC homepage">Farm Production and Conservation</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="fsa-splash__bd">
    <div class="fsa-splash__item">
      <div class="fsa-splash__progress">
        <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
          <div class="fsa-progress__details fsa-sr-only">
            <div class="fsa-progress__label">Application is loading</div>
          </div>
          <div class="fsa-progress__bar" aria-hidden="true">
            <div class="fsa-progress__primary"></div>
            <div class="fsa-progress__secondary"></div>
          </div>
        </div>
      </div>
      <div class="fsa-splash__title">
        <span class="fsa-splash__title-abbr">SPAR</span>
        <span class="fsa-splash__title-name">SPA Reference App</span>
      </div>
    </div>
  </div>
</div>
```

## Usage

{% capture usage_do %}
* When the application is initially loading data and the interface is not ready for User interactions.
* Whem an application is between pages (Routes) within an SPA and the interface won't be ready to display content for a number of seconds.
{% endcapture %}

{% capture usage_dont %}
* To display loading of individual interface elements while a User has the capability to review or interact with infromation on the screen.
* In place of [Progress]({{ site.baseurl }}components/progress/) components.
* To add superfluous or additional information or animation.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Take into consideration the resources that are loading in the background, device, and network connectivity of the User.
* A Splash screen should be used when a longer asynchronous process within an application is running, and the User must not interact with the application.
* A [Progress]({{ site.baseurl }}components/progress/) component should be used in the majority of cases during the loading of data, to allow for other areas of the application screen to be reviewed.

## Accessibility

* Note the use of the `aria-live="polite"` attribute, which will alert the User with assistive technologies when they are not performing actions.

## Related Resources

* [Progress]({{ site.baseurl }}components/progress/)
