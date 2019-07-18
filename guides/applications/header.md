---
layout: guide
parent: "Applications"
title: "Header"
intro: "FPAC Applications shall have a consistent header and shall utilize the header component (and associated styles) defined in the Design System."

---

Only certain aspects of the header may be customized for individual applications (specified below).  Fonts, colors, alignment, etc shall not be modified from the common header component provided by the design system.  Nor shall applications add customizations such as logos, imagery, icons, etc.

Below is a sample screenshot of an FPAC application header that represents a good example of the below guidelines.

<figure>
  <a href="{{ site.baseurl }}img/subcategories/applications/app-name-approved.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/app-name-approved.jpg" alt="Image of example application header"></a>
</figure>

## Department and Agency

The department name (e.g. USDA) and agency name (e.g. FPAC) shall be displayed in a consistent style and location. These elements shall not be customized per application. The Design System provides responsive behavior based on screen size, providing a relevant condensed rendering as the screen gets smaller.

## Application Name

The application name shall display as shown in the following format: a paired acronym to the left of the application name that is fully spelled out. On smaller screens and resolutions, only the application acronym will be shown.

## Application Logo

FPAC applications shall not use an application logo.

## User Profile and Authentication

When a User is authenticated into an FPAC application their Full Name shall be displayed at a level complementary to the Application Name, and paired with acces to log out (e.g. eAuth).