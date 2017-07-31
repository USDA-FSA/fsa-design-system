---
layout: guide
parent: "Guides"
title: "Applications"
intro: "In this section, we will cover general topics and guidelines for FSA Applications."
---


## Logging Out

When a User is ready to log out of the application, the following behavior is expected. The application will close, log the User out of eAuth, and any concurrent FSA application sessions. Any activity on any open browsers or remaining sessions will automatically navigate the User to the eAuth login screen (IE). The use of an "Exit App" link shall not be used, and Users can close the browser session and remain logged in to eAuth, if other application sessions are open concurrently.

 
## Screen ID

A Screen ID shall be displayed on all pages of the application, below all page content, and just above the application footer. 

<a href="{{ site.baseurl }}img/subcategories/applications/screen-id.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/screen-id.jpg" alt="Image of example FSA application with Screen ID above footer"></a>

## Last Modified Date

A Last Modified Date shall not be displayed or used on any FSA applications. 


## Photo Banner

A Photo Banner shall not be used on any FSA applications, and should be removed from existing FSA Applications.


## Background Imagery

All FSA applications shall be void of background imagery and/or patterns. The background shall consist only of colors that are approved and specified within the Design System, and that meet the minimum testable 508 compliance for Background and Foreground ratio. More information about FSA approved colors can be found in the <a href="{{ site.baseurl }}/guides/applications/color/">Color section</a>. More information about 508 compliance can be found in the <a href="{{ site.baseurl }}/guides/accessibility/" >Accessibility guide</a>.
