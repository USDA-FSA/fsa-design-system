---
layout: guide
parent: "Applications"
title: "Header"
intro: "FSA Applications shall have a consistent header and shall utilize the header component (and associated styles) defined in the Design System. Only certain aspects of the header may be customized for individual applications (specified below).  Fonts, colors, alignment, etc shall not be modified from the common header component provided by the design system.  Nor shall applications add customizations such as logos, imagery, icons, etc."

---

Below is a sample screenshot of an FSA application header that represents a good example of the below guidelines.

<figure>
  <a href="{{ site.baseurl }}img/subcategories/applications/app-name-approved.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/app-name-approved.jpg" alt="Image of example FSA application header"></a>
</figure>


## Department and Agency

The department name and agency name shall be displayed in a consistent style and location as seen in the above example. These elements shall not be customized per application. The Design System will provide responsive behavior based on screen size and condense this section as the screen gets smaller.

## Application Name

The application name shall display as shown in the following format: a paired acronym to the left of the application name that is fully spelled out. On smaller screens and resolutions, only the application acronym will be shown.

## Application Logo

FSA applications shall not use an application logo.

## Application Help

All FSA applications shall use a help icon located next to the User name (see below screenshot) to access the application's help system. When clicked the User will be taken to a separate page with instructions on how to receive help, based on the specific application. The content of the help system shall be decided by Business Requirements for the specific application. The design system only specifies a consistent mechanism to access the help system.

## User Profile & Control System

When a User is logged in to an FSA application their Display Name shall be displayed at a level complementary to the Application Name.

An **optional Dropdown** may be displayed to reveal further User-specific details and actions, if available and relevant. Example labels and controls to display within the User Control dropdown:

* User Role Label(s)
* View/Edit Profile Link
* Application Sign Out Button

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <h3>With Dropdown</h3>
    <figure>
      <img src="{{ site.baseurl }}img/subcategories/applications/user-control-dropdown.png" alt="Image of FSA User Controls">
    </figure>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@m">
    <h3>Without Dropdown</h3>
    <figure>
      <img src="{{ site.baseurl }}img/subcategories/applications/user-control-no-dropdown.png" alt="Image of FSA User Profile display">
    </figure>
  </div>
</div>
