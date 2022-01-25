---
layout: page
parent: "Components"
type: "UI Component"
title: "Content Tabs"
shortName: "component__content-tabs"
intro: "Segment related content of the same parent topic in a defined area."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-combinator">
  <div class="ds-combinator__props">
    <h3 class="fsa-sr-only">Props</h3>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSize">Size</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorSize" name="combinatorSize" data-behavior="combinator-select-many" data-select-targets="#combinatorTarget .fsa-content-tabs__label-text" data-remove="fsa-content-tabs__label--small fsa-content-tabs__label--medium fsa-content-tabs__label--large">
        <option value="fsa-content-tabs__label--small">Small</option>
        <option value="" selected="selected">Medium</option>
        <option value=" fsa-content-tabs__label--large">Large</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIconLeft">Icon</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIconLeft" name="combinatorIconLeft" data-behavior="combinator-toggle-item" data-toggle-target="#combinatorIconSampleLeft">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorIconOnly">Icon Only</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorIconOnly" name="combinatorIconOnly" data-behavior="combinator-toggle-icon-only" data-label-target="#combinatorTextLabel">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
  </div>
  <div class="ds-combinator__preview">
    <h3 class="fsa-sr-only">Props Demo</h3>
    <div class="fsa-content-tabs" id="combinatorTarget">
      <ul class="fsa-content-tabs__list">
        <li class="fsa-content-tabs__item">
          <a class="fsa-content-tabs__label" href="/link.html">
            <span class="fsa-content-tabs__label-text">
              <svg class="fsa-icon fsa-icon--size-2 combinatorIconSample" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
              Account
            </span>
          </a>
        </li>
        <li class="fsa-content-tabs__item">
          <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="/link.html">
            <span class="fsa-content-tabs__label-text">
              <svg class="fsa-icon fsa-icon--size-2 combinatorIconSample" aria-hidden="true" focusable="false" role="img" fill="#494440" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
              Notifications
            </span>
          </a>
        </li>
        <li class="fsa-content-tabs__item">
          <a class="fsa-content-tabs__label" href="/link.html">
            <span class="fsa-content-tabs__label-text">
              <svg class="fsa-icon fsa-icon--size-2 combinatorIconSample" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
              Security
            </span>
          </a>
        </li>
        <li class="fsa-content-tabs__item">
          <a class="fsa-content-tabs__label" href="/link.html">
            <span class="fsa-content-tabs__label-text">
              <svg class="fsa-icon fsa-icon--size-2 combinatorIconSample" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
              Permissions
            </span>
          </a>
        </li>
      </ul>
      <div class="fsa-content-tabs__aside">
        <a href="/link.html" onclick="alert('A text link is but one example of what can go here.')" class="fsa-text-align--right">
          <span class="fsa-level fsa-level--inline fsa-level--gutter-xxs">
            <span><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg></span>
            <span>Help</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>

## Variants

Content Tabs can be styled using `fsa-content-tabs__label--[VARIANT]` on the archor tag class.

### Default

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small" href="/link.html">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label fsa-content-tabs__label--small" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--small" href="/link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large (on desktop)

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large" href="/link.html">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label fsa-content-tabs__label--large" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--large" href="/link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Light Background

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--light">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" href="/link.html" aria-current="tab">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside"></div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Contrast Background

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--contrast">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" href="/link.html" aria-current="tab">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside"></div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Justified (on desktop)

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--justified">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Justified Equal (on desktop)

{% capture snippet %}
<div class="fsa-content-tabs fsa-content-tabs--justified-equal">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### As Buttons

Each tab, <code>class="fsa-content-tabs__label"</code>, may occasionally be a <code>&lt;button&gt;</code> element.

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" type="button">
        <span class="fsa-content-tabs__label-text">tab 1</span>
      </button>
    </li>
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label" type="button">
        <span class="fsa-content-tabs__label-text">tab 2</span>
      </button>
    </li>
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label" type="button">
        <span class="fsa-content-tabs__label-text">tab 3</span>
      </button>
    </li>
    <li class="fsa-content-tabs__item">
      <button class="fsa-content-tabs__label" type="button">
        <span class="fsa-content-tabs__label-text">tab 4</span>
      </button>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### With optional aside

Parallel to the list of tabs (`.fsa-content-tabs__list`), an optional region (`.fsa-content-tabs__aside`) is available for contextually relevant content.

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">Lorem</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Ipsum dolor sit amet</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Consectetur adipiscing</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Elit sed do</span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">Eiusmod tempor</span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside">
    <a href="/link.html" onclick="alert('A text link is but one example of what can go here.')" class="fsa-text-align--right">
      <span class="fsa-level fsa-level--inline fsa-level--gutter-xxs">
        <span><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg></span>
        <span>Help</span>
      </span>
    </a>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Icons

Use any variety of [Icons]({{ site.baseurl }}components/icons/) to heighten or clarify each Tab.

{% capture snippet %}
<div class="fsa-content-tabs">
  <ul class="fsa-content-tabs__list">
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
          Account
        </span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="/link.html">
        <span class="fsa-content-tabs__label-text">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
          Notifications
        </span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
          Security
        </span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
          Permissions
        </span>
      </a>
    </li>
    <li class="fsa-content-tabs__item">
      <a class="fsa-content-tabs__label" href="/link.html">
        <span class="fsa-content-tabs__label-text">
          No icon
        </span>
      </a>
    </li>
  </ul>
  <div class="fsa-content-tabs__aside">
    <a href="/link.html" onclick="alert('A text link is but one example of what can go here.')" class="fsa-text-align--right">
      <span class="fsa-level fsa-level--inline fsa-level--gutter-xxs">
        <span><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg></span>
        <span>Help</span>
      </span>
    </a>
  </div>
</div>
{% endcapture %}
{% include preview-and-snippet.html %}

## Responsive

At narrower breakpoints Content Tabs may be horizontally scrollable.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__content-tabs.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* When only a few specific pieces of content or functionality are required on the application screen.
* When the information needs to be displayed in a more compact area on the screen, requires multiple view states, or multiple categories.
* For switching between various content categories or features creates an optimal on-screen workflow.
{% endcapture %}

{% capture usage_dont %}
* When the number of categories for Tabs extends the Content Tabs too wide. Instead utilize a [Select Menu]({{ site.baseurl }}components/select/) to update content.
* A set of Content Tabs within another set of Content tabs (nesting)
* If the content within the Tabs is minimal and can more easily be assessed on a single scrollable application page.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Ensure that all Tab label tags have appropriate accessibility parameters (ALT, TITLE, etc) applied with intuitive descriptions for assistive devices.
* Note the use of `aria-current` attribute to declare selected tab.

## General Guidance

* Utilize Content Tabs to categorize application content for easily accessible view states.
* Ensure to maximize the width of the Content Tabs in the screen space provided for better usability.
* Best practices dictates using the full width of the application screen whenever possible.
