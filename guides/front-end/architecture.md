---
layout: guide
parent: "Front-end"
title: "Architecture"
intro: "The structure of an Application should ."
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

## Agnostic JavaScript

In general, the Design System will be JavaScript agnostic, and will reframe from utilizing or suggesting any JavaScript frameworks or libraries, such as AngularJS and jQuery. Instead, the examples are coded in "Vanilla JavaScript", whose code is not intended to be used for production applications. The general concept of prototypical code is used while developing examples, and production-ready JavaScript should be developed and used within all FPAC Applications.

## Frameworks VS Libraries

In order to better understand your choices as a Developer, it is crucial to know the difference JavaScript Frameworks and JavaScript libraries. Based on your projects needs, your choice of whether to use Vanilla JavaScript or one of the numerous JavaScript frameworks and libraries needs to be informed by FPAC Best Practices.

A JavaScript Framework is a piece of software that is packaged together to solve a specific problem. Frameworks are opinionated, in that they require you to use specific methodologies or syntax to solve the problem. Your code must follow certain arrangements, definitions, or style to work within the framework. The framework dictates your application's Front-end architecture. Examples of a JavaScript framework include AngularJS, EmberJS, and ExpressJS.

A JavaScript Library is more of an add-on to a project that performs a very specific task. The software architecture of your project is not dependent on the Library, and in general, multiple libraries can be used in conjuction to form your overall JavaScript Application architecture. A library is generally used to create and implement functionality within your application using individual components or a library of components to solve a problem. Examples of JavaScript libraries include jQuery, ReactJS, and modernizr.

## Related Information

Frameworks:

* [AngularJS](https://angularjs.org/)
* [EmberJS](https://www.emberjs.com/)
* [ExpressJS](https://expressjs.com/)

Libraries:

* [jQuery](https://jquery.com/)
* [ReactJS](https://reactjs.org/)
* [modernizr](https://modernizr.com/)



