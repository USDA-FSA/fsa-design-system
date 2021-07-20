---
layout: page
parent: "Components"
type: "UI Component"
title: "Global Navigation"
shortName: "component__top-nav"
intro: "Display a global list of sections, topics, or actions."
jump_menu: true
relatedItems:
  - "Application Header"
  - "Top Hat"
title_label: 'May Require JavaScript'
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

This navigation component isn't necessarily a required Global Navigation structure; rather, it effectively serves as ready-made UI Pattern implemented with FPAC Design System styles and parts.

{% capture snippet %}
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

## Variations

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

{% capture snippet %}
<nav>
  <div class="fsa-nav-global fsa-nav-global--fullscreen">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

## Icons

[Icons]({{ site.baseurl }}components/icons/) can be used to heighten or clarify Navigation items.

{% capture snippet %}
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-07">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
              Dashboard
            </span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
              Inspections
            </span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
              Inspectors
            </span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
              Recent
            </span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
              Settings
            </span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
              About
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}
{% include preview-and-snippet.html %}

## Examples

### Sub Menus

Expanding upon the menu, utilize the sub menus with `class="fsa-nav-global__sub-menu"`.

{% capture snippet %}
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-593945">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-6sfranc6">Admin</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-593945" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfranc6">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Customer</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-852145">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-65s5scase66y">Transaction</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-852145" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-65s5scase66y">

              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfrSSc6">Cyclical Purchasing</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfrSSc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfrQQc6">Overage Charge Stream</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfrQQc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sEEanc6">Fiscal Unit Development</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sEEanc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfra55T">Lorem ipsum dolor</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfra55T">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                </ul>
              </div>

            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-6s6s66">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-A65945">Reports</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-6s6s66" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-A65945">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Resources</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### Sub Menus: expanded, single list, optional group title

{% capture snippet %}
<div style="padding-bottom: 420px">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-1234098">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-455Zs5s5">Admin</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-1234098" aria-hidden="false">

              <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-455Zs5s5">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-55ga">Group Title</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-55ga">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                </ul>
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-55gaasdf">Group Title</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-55gaasdf">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Customer</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-4u8s5s5">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-566s75">Transaction</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-4u8s5s5" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-566s75">

                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg44">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg44">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4a">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4a">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4n">Fiscal Unit Development</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4n">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4i">Lorem ipsum dolor</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4i">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-shj389">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-SPOTS65945">Reports</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-shj389" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-SPOTS65945">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Resources</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Sub Menus: expanded, single list, multi-column

{% capture snippet %}
<div style="padding-bottom: 250px;">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-ysh11app">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-5aapt75">Admin</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-ysh11app" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5aapt75">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Customer</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-222vvnk">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-trans45">Transaction</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-222vvnk" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-trans45">

                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt45er">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt45er">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4we5">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4we5">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4rt5">Fiscal Unit Development</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4rt5">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4op5">Lorem ipsum dolor</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4op5">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-geiauaport">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-5rptspt75">Reports</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-geiauaport" aria-hidden="false">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5rptspt75">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Resources</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Sub Menus: expanded, grouped lists

{% capture snippet %}
<div style="padding-bottom: 335px;">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-jsugh777">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-8minad145">Admin</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-jsugh777" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-8minad145">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Customer</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-uyysh3q00">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-sancs045">Transaction</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-uyysh3q00" aria-hidden="false">

              <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-sancs045">

                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERTSScSS6">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERTSScSS6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERWWSScOI6">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERWWSScOI6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-WWTSScOI6">Fiscal Unit Development</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-WWTSScOI6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERTSS30I6">Lorem ipsum dolor</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERTSS30I6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-7sh37ssk">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-2sppzogvvnk">Reports</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-7sh37ssk" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-2sppzogvvnk">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Resources</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### With Aside

{% capture snippet %}
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-99">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
      <div class="fsa-nav-global__aside">
        Optional aside
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### With Search

{% capture snippet %}
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-99">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
      <div class="fsa-nav-global__search">
        <form action="dest.html">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-88w84d">Search [app-name]</label>
                <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-88w84d" type="search" name="search">
              </div>
              <div class="fsa-search__submit">
                <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

### With Search, scoped

{% capture snippet %}
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-77">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
      <div class="fsa-nav-global__search">
        <form action="dest.html">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-huahfroa8">Search [app-name]</label>
                <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-huahfroa8" type="search" name="search">
              </div>
              <div class="fsa-search__entry">
                <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-PkkH6PooI6">Search Category</label>
                <select class="fsa-select fsa-select--small fsa-search__select" name="Statez" id="UNIQUE-ID-PkkH6PooI6">
                  <option value="none" selected="selected">All</option>
                  <option value="asdf">Cat 1</option>
                  <option value="asdf">Cat 2</option>
                  <option value="asdf">Cat 3</option>
                </select>
              </div>
              <div class="fsa-search__submit">
                <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__header-nav-global.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>DEMO:</strong> View <a href="http://usda-fsa.github.io/fsa-style/demo/rwd__header-nav-global.html" class="usa-external_link" target="_blank">demo</a> for an example of behavior. Note the <a href="#javascript-guidance">JavaScript guidance</a> of this component.</p>
  </div>
</div>

{% capture usage_do %}
* When an FPAC Application requires navigation to other areas within the application.
{% endcapture %}

{% capture usage_dont %}
* As any other navigation system that is not located directly below the [Application Header]({{ site.baseurl }}guides/applications/header).
* As a jump menu that directs Users to content on the same page.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Maintain the Unordered List and Anchor Link structure of the HTML to allow a User to Tab thru each element of the navigation.

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

This Global Navigation example component used JavaScript to set a couple of `aria-` attributes to increase usability and accessibility. The attribute changes listed below also affect visual state of the menu and menu items.

### Main Level Open

* Set `aria-expanded` attribute to false
* Set `aria-hidden` attribute to true

### Main Level Close

* Set `aria-expanded` attribute to true
* Set `aria-hidden` attribute to false

### Menu Items

* Toggle `aria-expanded` attribute to true or false based on active state
* Toggle `aria-hidden` attribute to true or false based on active state
* On `focus` of menu item set `aria-expanded` to true and `aria-hidden` to false