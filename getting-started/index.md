---
layout: page
title: "Getting Started"
intro: "The Design System's HTML/CSS assets provide the plug-and-play design and code to help you set a new bar for simplicity and consistency across FSA digital products."
jump_menu: true
get_started: true
suppress_code_toggle: true
---

The components and style guide of the FSA Design System follow industry-standard web accessibility guidelines and use the best practices of existing style libraries and modern web design. They are designed for use by FSA product teams who want to create beautiful, easy-to-use, digitial experiences consistent with the FSA Style.

It was created and maintained by the USDA-FSA Office of Architecture, and is heavily influenced by the [Draft U.S. Web Design System](https://standards.usa.gov/) created and maintained by the wonderful folks at [18F](https://18f.gsa.gov/).

### Release History

Details about each release's significant updates and  compatibility changes are available in our [release history](https://github.com/USDA-FSA/fsa-style/releases).

## Installing or Downloading

Two options are available for usage of fsa-style HTML, CSS, Images, and Web Fonts:

* **[NPM Install](#install-using-npm)**
* **[Download ZIP](#download-zip)**

### Install using NPM

If you have `node` installed on your machine, you can use npm to install the Standards. Add `fsa-style`
to your project’s `package.json` as a dependency:

```shell
npm install --save fsa-style
```

The package will be installed in `node_modules/fsa-style`. You can either use the un-compiled files
found in the `src/` or the compiled files in the `dist/` directory. For example, if you're interested in using the SASS files (`.scss`) you would use the `src/` directory; otherwise, `dist/` is what you want.

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

### Download ZIP

If you don't have Node or the ability to incorporate source files into a build process (Grunt, Gulp, etc), follow these steps to manually use the FSA Style.

Download the latest assets: **[fsa-style-2.1.7.zip](https://github.com/usda-fsa/fsa-style/releases/download/2.1.7/fsa-style-2.1.7.zip)**

#### 1. Visual Index

`index.html` is a Visual Index of this CSS Framework's Visual Language, including basic HTML elements expressed in that style. Viewable at http://usda-fsa.github.io/fsa-style/index.html.

#### 2. Boilerplate

`boilerplate.html` provides a non-designed starting point. It serves as general guidance for the HTML structure most typically required of an FSA digital product. Viewable at
[http://usda-fsa.github.io/fsa-style/boilerplate.html](http://usda-fsa.github.io/fsa-style/boilerplate.html).

#### 3. Manually adding to your project

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

## Using the Boilerplate

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

## Contributing

For complete instructions on how to contribute code, please read [CONTRIBUTING.md](https://github.com/USDA-FSA/fsa-design-system/blob/gh-pages/CONTRIBUTING.md).

If you have questions or feedback about our contributing workflow, please  [file a GitHub issue](https://github.com/usda=fsa/fsa-style/issues).
