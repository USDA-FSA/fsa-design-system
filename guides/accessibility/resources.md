---
layout: guide
parent: "Accessibility"
title: "Resources"
intro: "The most common tools and tutorials FSA uses to improve and test accessibility."
---

## Code Compliance

* [achecker](http://achecker.ca/) is an accessibility reporter for HTML only.
* [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/) - provides a quick audit of any URL.
* [Google's Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) is a Chrome plugin for running basic accessibility tests from the comfort of your browser.
* [Web Developer (Chrome)](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en-US)
* [Web Accessibility Toolbar (WAT)](https://www.paciellogroup.com/resources/wat/) is an IE tool that has been developed to aid manual examination of web pages for a variety of aspects of accessibility and is used by the DHS Trusted Tester program.
* [WAVE](http://wave.webaim.org/) is a comprehensive accessibility auditor with slick document introspection features.
* The [W3C](http://www.w3.org/) maintains a comprehensive [list of web accessibility evaluation tools](http://www.w3.org/WAI/ER/tools/).
* [Inspector (Windows)](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318521%28v=vs.85%29.aspx) - tool used by DHS for its Trusted Tester Program.

## Color Checkers

* [WebAIM color contrast checker](http://webaim.org/resources/contrastchecker/) compares two hex colors and tells you whether they meet WCAG AA and AAA contrast thresholds.
* [Snook's color contrast analyzer](http://snook.ca/technical/colour_contrast/colour.html) lets you adjust RGB and HSV values and reports contrast compliance interactively.
* [NC State palette accessibility evaluator](http://accessibility.oit.ncsu.edu/tools/color-contrast/) lets you compare contrast between three or more colors for WCAG AA or AAA compliance.
* [Color Safe](http://colorsafe.co/) is a guide for choosing colors that meet WCAG contrast thresholds.
* [Color Contrast Analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) is a desktop application for contrast checking that also simulates different forms of color impairment.

### Color Impairment

* [Color Oracle](http://colororacle.org/) is another desktop application for simulating color impairment on your entire screen.
* [Daltonize](http://daltonize.appspot.com/) is a collection of bookmarklets that simulate the three most common forms of color impairment (protanopia, deuteranopia, and tritanopia) on any web page.
* [colourblind](https://github.com/Altreus/colourblind) is another simulation tool similar to Daltonize, but with more options (protanopia, protanomaly, deuteranopia, deuteranomaly, tritanopia, tritanomaly, achromatopsia, and achromatomaly) in a single bookmarklet.
* [postcss-colorblind](https://github.com/btholt/postcss-colorblind) is a CSS build tool that modifies colors in your CSS to simulate [four common impairment groups](https://github.com/skratchdot/color-blind#color-blindness-table).

## Autocomplete HTML with ARIA Tags

* [Awesomplete](http://leaverou.github.io/awesomplete/) is dependency-free.
* [jQuery UI autocomplete](http://jqueryui.com/autocomplete/) requires jQuery.
* [Select2](https://select2.github.io/) also requires jQuery.
* [ARIA autocomplete](http://www.w3.org/TR/wai-aria/states_and_properties#aria-autocomplete)

## Automated Testing

* [a11y](https://github.com/addyosmani/a11y) is a Node-based accessibility auditing with both command-line and JavaScript APIs.
* [pa11y](http://pa11y.org/) is like a11y, but consists of a larger suite of tools, including command-line and JavaScript APIs, a [web service](https://github.com/nature/pa11y-webservice), and a [dashboard](https://github.com/nature/pa11y-dashboard) for monitoring accessibility reports across multiple sites.
* [ra11y](https://github.com/benbalter/ra11y) is a Ruby-based accessibility testing tool tuned for use with [Jekyll](http://jekyllrb.com/) and static sites.
* [webalin](http://webalin.readthedocs.org/en/latest/) is a Python-based 508 compliance linter for HTML.
* There are many other [npm](https://www.npmjs.com/) packages tagged [wcag](https://www.npmjs.com/search?q=wcag) and [a11y](https://www.npmjs.com/search?q=a11y).

## Accessibility Tutorials

* [WAI Tutorials](http://www.w3.org/WAI/tutorials)
* [Simply Accessible](http://simplyaccessible.com/archives) - great blog and resource with articles about modern accessibility.
* [Creating Accessible PDFs](http://www.section508.va.gov/support/tutorials/pdf/index.asp)
* [Required Fixes for PDFs](http://www.hhs.gov/web/section-508/making-files-accessible/pdf-required/index.html)
* [Making Files Accessible](http://www.hhs.gov/web/section-508/making-files-accessible/index.html) - for PDF, Word, Excel, and Powerpoint.
* [GSA 508 Policies](http://www.gsa.gov/portal/content/105254)
* [W3 ARIA Documentation](http://www.w3.org/html/wg/drafts/html/master/dom.html#wai-aria) - ARIA (Accessible Rich Internet Applications) is used in modern browsers to provide additional information to assistive technologies (IE 8+, Chrome, Firefox, Mobile, [full browser list](http://caniuse.com/#feat=wai-aria)).
* [ARIA Practical Examples](http://heydonworks.com/practical_aria_examples/)
* [The Accessibility Project](http://a11yproject.com/) - accessibility blog.
* [CFPB Guide for Building Accessible Interfaces](http://cfpb.github.io/design-manual/guides/accessible-interfaces.html)
* [508 Laws](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards) - full Section 508 standards.
* [WebAIM 10 Easy Accessibility Tips](http://webaim.org/blog/10-easy-accessibility-tips/)
* [Tips for Creating Accessible SVGs](http://www.sitepoint.com/tips-accessible-svg/)
* [VO Compatibility for iOS](http://pauljadam.com/demos/voiceover-ios-html-aria-support.html)

----

**Disclaimer:** This resource is intended to help FSA develop accessible products and is not a replacement for the standards defined by the Access Board. Please visit the [Access Board](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards) for information on Section 508 and its compliance criteria.
