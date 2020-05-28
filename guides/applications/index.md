---
layout: guide
parent: "Guides"
title: "Applications"
intro: "In this section, we will cover general topics and guidelines for FPAC Applications."
---

## Guidelines for Design System Use

The main objective of the Design System is to provide a means for FPAC Product Teams to easily download or install a codebase that has a consistent look and feel baked into the CSS. By following these Guides and working with the associated Components, developers and designer have the ability to very quickly build and maintain applications that look and behave cohesively.

It is not permissable to **directly** update or modify styles within the Design System's CSS Framework, `fsa-style`. Custom styles specific to your product's needs consistent with the Design System's Visual Language shall be stored in a separate file or concatenated together as part of a build system, e.g. Webpack, Grunt, Gulp, or the like.