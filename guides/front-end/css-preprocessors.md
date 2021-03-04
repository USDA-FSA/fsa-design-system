---
layout: guide
parent: "Front-end"
title: "CSS Preprocessors"
intro: "The Design System takes advantage of an automated build system which utilizes Sass."
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## What is a CSS Preprocessor

Cascading Style Sheets (CSS) control the majority of the visual elements within an application, and while the technology is fairly straight forward, keeping your styles organized and structured properly can be an arguous task. Preprocessors extend CSS with variables, operators, function, and mixins which allow for more programatic control and structure over your CSS. Some CSS preprocessors include [Sass](https://sass-lang.com/) and [LESS](http://lesscss.org/), and are generally paired with [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/) to create an automated build process for Developers.

The Design System's CSS Framework (`fsa-style`) utilizes Sass paired with a Grunt automated build process. Components and styles are structured in a modular and systematic format to allow for easy of integration into projects. This also allows for better code optimization, system maintenance, and feature updates.

### CSS Preprocessor Code Snippet

#### Sass

```scss
.fsa-example {

  &__list {
    margin: 0 0 $size-small; // Sass variable
    padding: 0;
  }

  &__item {

    @include font-size(1); // Sass Custom Mixin
    margin: 0;
    display: inline-block;

    @include breakpoint(M) { // Mixin: at screens M and bigger apply these styles
      @include font-size(3); // Sass Custom Mixin
    }
  }
}
```

#### Compiled CSS
```css
.fsa-example { }
.fsa-example__list {
  margin: 0 0 .8rem;
  padding: 0;
}
.fsa-example__item {
  font-size: 1.4rem;
  margin: 0;
  display: inline-block;
}
@media (min-width: 37.5em) {
  .fsa-example__item {
    font-size: 1.7rem;
  }
}
```

As seen in the above example, the ability to apply variables (`$size-small`) and custom mixins (`font-size(1)` and `breakpoint(M)`) across multiple projects and components allows for a cohesive design and an efficient development environment.

## Related Information

* [Sass](http://sass-lang.com/)
* [LESS](http://lesscss.org/)
* [Grunt](https://gruntjs.com/)
* [Gulp](https://gulpjs.com/)
