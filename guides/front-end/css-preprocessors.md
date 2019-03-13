---
layout: guide
parent: "Front-end"
title: "CSS Preprocessors"
intro: "The FSA Design System takes advantage of an automated build system which utilizes SASS and SCSS."
---

## What is a CSS Preprocessor

Cascading Style Sheets (CSS) control the majority of the visual elements within an application, and while the technology is fairly straight forward, keeping your styles organized and structured properly can be an arguous task. Preprocessors extend CSS with variables, operators, function, and mixins which allow for more programatic control and structure over your CSS. Some CSS preprocessors include SASS and LESS, and are generally paired with Gulp or Grunt to create an automated build process for Developers.

The FSA Design System utilizes SASS along with a Grunt automated build process. All components and style are structured in a modular and systematic format to allow for easy of integration into projects. This also allows for better code optimization, system maintenance, and feature updates.

### CSS Preprocessor Code Snippet

```scss
.fsa-breadcrumb {

  &__list {
    margin: 0 0 $size-small;
    padding: 0;
  }

  &__item {

    @include font-size(1);
    margin: 0;
    display: inline-block;

    @include breakpoint(M) {
      @include font-size(3);
    }
  }
}
```

As seen in the above example, the ability to apply variables (`$size-small`) and functions (`font-size(1)` and `breakpoint(M)`) across multiple projects and components allows for a cohesive design and an efficient development environment.

## Related Information

* [SASS](http://sass-lang.com/)
* [LESS](http://lesscss.org/)
* [Grunt](https://gruntjs.com/)
* [Gulp](https://gulpjs.com/)
