---
layout: page
parent: "Components"
title: "Footer"
intro: "The Global Footer Component shall be used across all FSA applications with standard links along with application specific links."
jump_menu: true
---

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
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Inside FSA</a></li>
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
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" target="_blank">1-800-555-1234</a></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.fsa.usda.gov/" target="_blank">FSA Website</a></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Variations

The Global Footer shall use `class="fsa-footer"` paired with the FSA grid system for optimal layout.

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
              <li class="fsa-footer__list-item"><a href="link.html" target="_blank">Inside FSA</a></li>
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
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" target="_blank">1-800-555-1234</a></li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.fsa.usda.gov/" target="_blank">FSA Website</a></li>
          <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Usage

### Use When

* An FSA Application requires a global footer within the application.
* An FSA Application requires additional application specific navigation or links to documentation.

### Don't Use

* As as a component that is not anchored to the bottom of the page.
* As a jump menu that directs Users to content on the same page.

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Maintain the Unordered List and Anchor Link structure of the HTML to allow a User to Tab thru each element of the navigation.

## General Guidance

* The first column of the Global Footer is used for application-specific links to supplemental content, such as Handbooks.
* The links in the remaining columns are standard and shall be included in all FSA Applications. [See Footer Guide for more information.]({{ site.baseurl }}guides/applications/footer)
