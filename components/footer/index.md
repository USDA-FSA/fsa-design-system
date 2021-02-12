---
layout: page
parent: "Components"
type: "UI Component"
title: "Footer"
intro: "Provide access to related FPAC products or links not directly associated with application."
jump_menu: true
---

These are **not** required footer structures; rather, they effectively serve as an acceptable UI Pattern for a footer using the Design System styles and parts.

<div class="ds-preview">
  <div style="overflow: hidden">
    <div class="fsa-footer">
      <div class="fsa-footer__bd">
        <div class="fsa-grid">
          <div class="fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l">
            <div class="fsa-grid">
              <div class="fsa-grid__1/1 fsa-grid__1/3@m">
                <h3 class="fsa-footer__cat-header">Program Information</h3>
                <ul class="fsa-footer__list">
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">About XMPL</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">XMPL - Handbook 1</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">XMPL - Handbook 2</a></li>
                </ul>
              </div>
              <div class="fsa-grid__1/1 fsa-grid__1/3@m">
                <h3 class="fsa-footer__cat-header">Agency Guidelines</h3>
                <ul class="fsa-footer__list">
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Publications</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Handbooks</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Notices</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">FFAS Employee Forms</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Software Transmittals</a></li>
                </ul>
              </div>
              <div class="fsa-grid__1/1 fsa-grid__1/3@m">
                <h3 class="fsa-footer__cat-header">Resources</h3>
                <ul class="fsa-footer__list">
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Inside FPAC</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Policies and Links</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l">
            <ul class="fsa-footer__list fsa-footer__secondary-list">
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item">
                <a class="fsa-btn fsa-footer__btn" href="#" target="_blank">Contact Us</a>
              </li>
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" aria-label="FSA Telephone Number. 1 800. 5 5 5. 1 2 3 4." target="_blank">1-800-555-1234</a></li>
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="https://myfpac.usda.gov/" target="_blank">myFPAC</a></li>
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-footer">
  <div class="fsa-footer__bd">
    <div class="fsa-grid">
      <div class="fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l">
        <div class="fsa-grid">
          <div class="fsa-grid__1/1 fsa-grid__1/3@m">
            <h3 class="fsa-footer__cat-header">Program Information</h3>
            <ul class="fsa-footer__list">
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">About XMPL</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">XMPL - Handbook 1</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">XMPL - Handbook 2</a></li>
            </ul>
          </div>
          <div class="fsa-grid__1/1 fsa-grid__1/3@m">
            <h3 class="fsa-footer__cat-header">Agency Guidelines</h3>
            <ul class="fsa-footer__list">
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Publications</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Handbooks</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Notices</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">FFAS Employee Forms</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Software Transmittals</a></li>
            </ul>
          </div>
          <div class="fsa-grid__1/1 fsa-grid__1/3@m">
            <h3 class="fsa-footer__cat-header">Resources</h3>
            <ul class="fsa-footer__list">
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Inside FPAC</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Policies and Links</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l">
        <ul class="fsa-footer__list fsa-footer__secondary-list">
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item">
            <a class="fsa-btn fsa-footer__btn" href="link.html" target="_blank">Contact Us</a>
          </li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" aria-label="FSA Telephone Number. 1 800. 5 5 5. 1 2 3 4." target="_blank">1-800-555-1234</a></li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="https://myfpac.usda.gov/" target="_blank">myFPAC</a></li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Variations

### Fullscreen

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>Demo:</strong> view on <a href="https://usda-fsa.github.io/fsa-style/boilerplate.html">boilerplate.html</a> and invoke the <strong>Fullscreen Toggle</strong>.</p>
  </div>
</div>

<div class="ds-preview">
  <div style="overflow: hidden">
    <div class="fsa-footer fsa-footer--fullscreen">
      <div class="fsa-footer__bd">
        <div class="fsa-grid">
          <div class="fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l">
            <div class="fsa-grid">
              <div class="fsa-grid__1/1 fsa-grid__1/3@m">
                <h3 class="fsa-footer__cat-header">Program Information</h3>
                <ul class="fsa-footer__list">
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">About XMPL</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">XMPL - Handbook 1</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">XMPL - Handbook 2</a></li>
                </ul>
              </div>
              <div class="fsa-grid__1/1 fsa-grid__1/3@m">
                <h3 class="fsa-footer__cat-header">Agency Guidelines</h3>
                <ul class="fsa-footer__list">
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Publications</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Handbooks</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Notices</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">FFAS Employee Forms</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Software Transmittals</a></li>
                </ul>
              </div>
              <div class="fsa-grid__1/1 fsa-grid__1/3@m">
                <h3 class="fsa-footer__cat-header">Resources</h3>
                <ul class="fsa-footer__list">
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Inside FPAC</a></li>
                  <li class="fsa-footer__list-item"><a href="#" target="_blank">Policies and Links</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l">
            <ul class="fsa-footer__list fsa-footer__secondary-list">
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item">
                <a class="fsa-btn fsa-footer__btn" href="#" target="_blank">Contact Us</a>
              </li>
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" aria-label="FSA Telephone Number. 1 800. 5 5 5. 1 2 3 4." target="_blank">1-800-555-1234</a></li>
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="https://myfpac.usda.gov/" target="_blank">myFPAC</a></li>
              <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-footer fsa-footer--fullscreen">
  <div class="fsa-footer__bd">
    <div class="fsa-grid">
      <div class="fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l">
        <div class="fsa-grid">
          <div class="fsa-grid__1/1 fsa-grid__1/3@m">
            <h3 class="fsa-footer__cat-header">Program Information</h3>
            <ul class="fsa-footer__list">
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">About XMPL</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">XMPL - Handbook 1</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">XMPL - Handbook 2</a></li>
            </ul>
          </div>
          <div class="fsa-grid__1/1 fsa-grid__1/3@m">
            <h3 class="fsa-footer__cat-header">Agency Guidelines</h3>
            <ul class="fsa-footer__list">
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Publications</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Handbooks</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Notices</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">FFAS Employee Forms</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Software Transmittals</a></li>
            </ul>
          </div>
          <div class="fsa-grid__1/1 fsa-grid__1/3@m">
            <h3 class="fsa-footer__cat-header">Resources</h3>
            <ul class="fsa-footer__list">
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Inside FPAC</a></li>
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Policies and Links</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l">
        <ul class="fsa-footer__list fsa-footer__secondary-list">
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item">
            <a class="fsa-btn fsa-footer__btn" href="link.html" target="_blank">Contact Us</a>
          </li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" aria-label="FSA Telephone Number. 1 800. 5 5 5. 1 2 3 4." target="_blank">1-800-555-1234</a></li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="https://myfpac.usda.gov/" target="_blank">myFPAC</a></li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Responsive

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_footer" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_footer" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_footer" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_footer" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__footer.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_footer">
      <iframe src="https://usda-fsa.github.io/fsa-style/demo/rwd__footer.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

{% include alert.rwd-rendering.html %}

## Usage

{% capture usage_do %}
* When an Application requires a global footer within the application.
* When an Application requires additional application specific navigation or links to documentation.
{% endcapture %}

{% capture usage_dont %}
* As as a component that is not anchored to the bottom of the page.
* As a jump menu that directs Users to content on the same page.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Maintain the Unordered List and Anchor Link structure of the HTML to allow a User to Tab thru each element of the navigation.
* If a telephone number is used, follow the specific spacing structure of the `aria-label` provided in the example code. This will ensure proper 508 compliance and allow screen readers to speak the phone number in the appropriate format and cadence.

## General Guidance

* The first column of the Global Footer is used for application-specific links to supplemental content, such as Handbooks.
* The links in the remaining columns are standard and shall be included in all FPAC Applications. [See Footer Guide for more information.]({{ site.baseurl }}guides/applications/footer)
