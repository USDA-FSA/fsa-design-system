---
layout: page
title: "Getting Started"
intro: "The FPAC Design System's CSS Framework, <code>fsa-style</code>, provides plug-and-play HTML and CSS to help you set a new bar for a cohesive user experience across FPAC digital products."
jump_menu: true
get_started: true
suppress_code_toggle: true
---

The components and style guide of the FPAC Design System follow industry-standard web accessibility guidelines and use the best practices of existing style libraries and modern web design. They are designed for use by FPAC product teams to create beautiful, easy-to-use, and consistent digitial experiences.

It was created and maintained within FPAC's ISSDOB/FBCSS division, and is heavily influenced by the [Draft U.S. Web Design System](https://standards.usa.gov/) created and maintained by the wonderful folks at [18F](https://18f.gsa.gov/).

<!-- ID below enables backwards-compatibility to legacy anchoring -->
<div id="installing-or-downloading"></div>

## How to use

### Using CSS Framework

Two options are available for usage of `fsa-style`'s HTML, CSS, Images, and Web Fonts:

* **[NPM Install](#install-using-npm)**
* **[Download ZIP](#download-zip)**

#### Install using NPM

If you have `node` installed on your machine, you can use npm to install the Standards. Add `fsa-style`
to your project’s `package.json` as a dependency:

```shell
npm install --save fsa-style
```

The package will be installed in `node_modules/fsa-style`. You can either use the un-compiled files
found in the `src/` or the compiled files in the `dist/` directory. For example, if you're interested in using the Sass files (`.scss`) you would use the `src/` directory; otherwise, `dist/` is what you want.

```
node_modules/fsa-style/
├── dist/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   ├── js/
│   ├── boilerplate.html
│   └── index.html
└── src/
    ├── fonts/
    ├── img/
    ├── js/
    ├── stylesheets/
    ├── boilerplate.html
    └── index.html
```

The main Sass (SCSS) source file is here:

```
node_modules/fsa-style/src/stylesheets/all.scss
```

The compiled and minified  CSS files' location:

```
node_modules/fsa-style/dist/css/fsa-style.css
node_modules/fsa-style/dist/css/fsa-style.min.css
```

Lastly, refer to [Using the Boilerplate](#using-the-boilerplate) for basic guidance on HTML structure.

#### Download ZIP

If you don't have Node or the ability to incorporate source files into a build process (Grunt, Gulp, etc), follow these steps to manually use the Design Sytem's CSS Framework, `fsa-style`.

Download the latest assets **[fsa-style-{{ site.fsa-style_version }}.zip](https://github.com/usda-fsa/fsa-style/releases/download/{{ site.fsa-style_version }}/fsa-style-{{ site.fsa-style_version }}.zip)**

##### 1. Visual Index

`index.html` is a Visual Index of this CSS Framework's Visual Language, including basic HTML elements expressed in that style. Also referred to as the "Kitchen Sink" of `fsa-style`, it is viewable as single HTML page at **[http://usda-fsa.github.io/fsa-style/index.html](http://usda-fsa.github.io/fsa-style/index.html)**.

##### 2. Boilerplate

`boilerplate.html` provides a non-designed starting point. It serves as general guidance for the HTML structure most typically required of an FPAC digital product.

Viewable at
**[http://usda-fsa.github.io/fsa-style/boilerplate.html](http://usda-fsa.github.io/fsa-style/boilerplate.html)**.

##### 3. Manually adding to your project

Add the downloaded ZIP's assets to a relevant place in your code base — likely a directory where you keep third-party libraries:

```sh
fsa-style-x.x.x/
├── css/
│   ├── fsa-style.css
│   ├── fsa-style.css.map
│   ├── fsa-style.min.css
│   └── fsa-style.min.css.map
├── fonts/
├── img/
└── js/
    └── vendor/
```

Note that `fonts` and `img` must be alongside `css` as the CSS files reference them at a specific relative path; e.g., `../img/file.png`

Refer to [Using the Boilerplate](#using-the-boilerplate) for further steps.

#### Using the Boilerplate

**[boilerplate.html](http://usda-fsa.github.io/fsa-style/boilerplate.html)**

Reference this basic list for the general requirements for your typical HTML structure. Reviewing this list is perhaps best done while viewing its [HTML source](https://github.com/USDA-FSA/fsa-style/blob/master/src/boilerplate.html).

1. HTML5 doctype: `<!DOCTYPE html>`.
1. Wrap `<html>` start tag in IE conditional comment.
1. Enable Responsive Web Design via `<meta name="viewport" content="width=device-width, initial-scale=1">`.
1. Reference CSS file(s) via `<link>` tag.
1. Reference IE conditional commented JS files to polyfill features below IE9.
1. Include IE conditional commented Browser Upgrade message.
1. Include "skipnav" anchor link, with `href` attribute pointing to `<main>` element.
1. Wrap primary contents with `<main id="main-content" tabindex="-1">...</main>`.
1. Build your thing!

<!-- ## Design Resources

The site contains HTML mockups of common UI components designed to follow the Draft U.S. Web Design System's visual style guide. To view the specs of each design live on this website (padding, margins, stroke weight, line-height, and so on), use your browser’s developer tools.

All of these designs are also available in various file formats, which are available for download:

### Download design files

* [Illustrator](link/to/FSA-Style--Illustrator.zip)
* [Sketch](link/to/FSA-Style--Sketch.zip)
* [EPS](link/to/FSA-Style--EPS.zip)
* [Visio](link/to/FSA-Style--Sketch.zip) -->

### Without CSS Framework

If using the Design System's CSS Framework (`fsa-style`) HTML/CSS won't be utilized, the Design System serves as your product's UI reference. Examples: developed via native technology, e.g. iOS/Andoird; an adopted platform is incompatible with the `fsa-style`'s markup or style.

If nothing else, the Design System is your reference to skin (or theme) your product's User Interface (i.e. [Color]({{ site.baseurl }}visual-style/color/), [Typography]({{ site.baseurl }}visual-style/typography/), [Size and Space]({{ site.baseurl }}visual-style/size-and-space/).) -- regardless of implementation technology.

## When to use

With the nature of application development, and the need to maintain legacy systems, the question often comes up about when to use the FPAC Design System. The answer is always "it depends", and more information is needed to accurately provide the correct answer.

Ideally, all products would be switched over to the FPAC Design System as it provides an efficient and optimized starting point to accelerate the development of your product.

Depending on your product, it can be used as intended and provide a complete Front-end design solution or it can be used as a design reference.

Consult the mini-guide below to determine the relevance of the FPAC Design System to your product.

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <caption>
    <h3>
      Should our product use the FPAC Design System?
    </h3>
  </caption>
  <thead>
    <tr>
      <th scope="col">Answer</th>
      <th scope="col">Condition</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label fsa-label--success">Yes</span>
      </td>
      <td aria-label="condition">If a new product and/or application is being developed from scratch.</td>
      <td aria-label="notes">
        <ul class="fsa-m--none">
          <li>Use the FPAC Design System as your primary design reference for new digital products being explored, designed, and/or developed.</li>
          <li>The <a href="https://wiki.tools.fsa.usda.gov/display/SPAR/Single+Page+Application+Reference"><abbr title="Single Page Application">SPA</abbr> Tech Stack</a> (Angular) is the current development standard, and the Design System's CSS Framework comes with its build system.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label fsa-label--success">Yes</span>
      </td>
      <td aria-label="condition">If the existing legacy application is being completely replaced/redeveloped.</td>
      <td aria-label="notes">
        <ul class="fsa-m--none">
          <li>The FPAC Design System is tech-stack or dev-framework-agnostic, though it does comes bundled into the Angular-based <a href="https://wiki.tools.fsa.usda.gov/display/SPAR/Single+Page+Application+Reference"><abbr title="Single Page Application">SPA</abbr> Tech Stack</a> and its example Reference App.</li>
          <li>Regardless of development framework or technology platformed employed, refer to the FPAC Design System as your primary design dependency and reference.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label fsa-label--alert">No</span>
      </td>
      <td aria-label="condition">If an existing legacy applications has no plans to complete a major Front-end redesign.</td>
      <td aria-label="notes">
        <ul class="fsa-m--none">
          <li>Consult with your product's leadership team to determine.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label fsa-label--alert">No</span>
      </td>
      <td aria-label="condition">If an existing legacy application utilizes technology, that when combined with the Design System, creates an adverse or slow User Experience on legacy devices or platforms.</td>
      <td aria-label="notes"></td>
    </tr>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label fsa-label--general">Probably</span>
      </td>
      <td aria-label="condition">
        If an existing legacy application will be significantly overhauled visually and/or from a technology perspective.
      </td>
      <td aria-label="notes">
        <ul class="fsa-m--none">
          <li>
            Many applications can be split into multiple modules, which would allow for new development work using the Design System.
          </li>
          <li>
            The criteria used to determine “overhaul” requires discussion, weighed against benefit, and priority.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label fsa-label--warning">Maybe</span>
      </td>
      <td aria-label="condition">
        If an existing legacy application has major new features that will be added.
      </td>
      <td aria-label="notes">
        <ul class="fsa-m--none">
          <li>
            As stated previously, an application can be split into features and/or modules that would allow for the use of the Design System.
          </li>
          <li>
            Consulting with the FPAC User Experience team can provide in-depth guidance for your specific project.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td aria-label="answer" scope="row">
        <span class="fsa-label">Possibly</span>
      </td>
      <td aria-label="condition">
        If an existing legacy application wishs to utilize aspects of the Design System.
      </td>
      <td aria-label="notes">
        <ul class="fsa-m--none">
          <li>
            The applicaiton may not necessarily be adding/removing features, but updates to existing markup and style can be updated to mirror the Design System.
          </li>
          <li>
            For example, could be solely about as reskinning to be generally cohesive to the Design System (color, typography, spacing).
          </li>
          <li>
            The application may likely involve not using most (or any) of the Design System’s CSS Framework <a href="https://github.com/USDA-FSA/fsa-style">fsa-style</a>; rather, it may just involve referencing the Design System to apply the visual style, e.g. "let's just align to the Typography system."
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Browser Support

We’ve designed the design system to support older and newer browsers through [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). The current major version of the design system (2.0) follows the [2% rule](https://gds.blog.gov.uk/2012/01/25/support-for-browsers/): we officially support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov/). Currently, this means that the design system version 2.0 supports the newest versions of Chrome, Firefox, Safari, Edge, and Internet Explorer 11 and up.

## Release History

Details about each release's significant updates and compatibility changes

* Current Release notes:
[`fsa-style@{{ site.fsa-style_version }}`](https://github.com/USDA-FSA/fsa-style/releases/tag/{{ site.fsa-style_version }})
* All Release Notes: [`fsa-style@{{ site.fsa-style_version }} - 0.1.1`](https://github.com/USDA-FSA/fsa-style/releases)

## Contributing

For complete instructions on how to contribute code, please read [CONTRIBUTING.md](https://github.com/USDA-FSA/fsa-design-system/blob/gh-pages/CONTRIBUTING.md).

If you have questions or feedback about our contributing workflow, please  [file a GitHub issue](https://github.com/usda=fsa/fsa-style/issues).

