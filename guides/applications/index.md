---
layout: guide
parent: "Guides"
title: "Applications"
intro: "In this section, we will cover general topics and guidelines for FPAC Applications."
---

## Guidelines for Design System Use

The main objective of the Design System is to provide a means for Developers to easily download a codebase that has a consistent look and feel baked into the CSS. By following these Guides and working with the associated Components, a Developer has the ability to very quickly build and maintain applications that look and behave the same.

For all FPAC applications, it is not permissable for a Developer to update or change any CSS within the Design System. All applications shall utilized this framework and the associated classes without modification or augmentation. All custom CSS shall be stored in a separate file, but it is permissable to concatenated CSS files into a single file at the time of a build.

## Logging Out

When a User is ready to log out of the application, the following behavior is expected. The application will close, log the User out of eAuth, and any concurrent FPAC application sessions. Any activity on any open browsers or remaining sessions will automatically navigate the User to the eAuth login screen (IE). The use of an "Exit App" link shall not be used, and Users can close the browser session and remain logged in to eAuth, if other application sessions are open concurrently.


## Screen ID

A Screen ID shall be displayed on all pages of the application, below all page content, and just above the application footer. The [Screen ID Component]( {{ site.baseurl }}components/screen-id/ ) can be found in the Components section.

<div class="fsa-screen-id">
  <div class="fsa-screen-id__bd">
    <dl class="fsa-screen-id__dl">
      <dt class="fsa-screen-id__dt">Screen ID</dt>
      <dd class="fsa-screen-id__dd">XYZ-WEB-007</dd>
    </dl>
  </div>
</div>

<!--
<figure>
  <a href="{{ site.baseurl }}img/subcategories/applications/screen-id.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/screen-id.jpg" alt="example FPAC application with Screen ID above footer"></a>
</figure>
-->

## Last Modified Date

A Last Modified Date shall not be displayed or used on any FPAC applications.


## Photo Banner

A Photo Banner shall not be used on any FPAC applications.


## Background Imagery

All FPAC applications shall be void of background imagery and/or patterns. The background shall consist only of colors that are approved and specified within the Design System, and that meet the minimum testable 508 compliance for Background and Foreground ratio. More information about FPAC-approved colors can be found in the <a href="{{ site.baseurl }}visual-style/color/">Visual Style section</a>. More information about 508 compliance can be found in the <a href="{{ site.baseurl }}guides/accessibility/" >Accessibility guide</a>.
