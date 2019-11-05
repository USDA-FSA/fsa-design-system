---
layout: guide
parent: "Applications"
title: "Modal Window"
intro: "A Popup window or Modal window is a vital part of many FPAC applications and provides a way for the system to focus solely on the content or a singl action."

---

## Modal Window Guidelines

 * A Modal window is an on-page popup window, and shall utilize the Design System component
 * A Modal window can be used as a way to confirm an action by the User
 * A Modal window can be used to show content that is specific and needs sole focus
 * All actions and content shall be restricted until a User action is taken on the modal
 * A typical Modal window example would be a popup used to confirm the deletion of data
 * No FPAC application shall trigger a modal window without a User action
   * Exception to this rule is when the system needs to display a Warning for system timeout


## Modal Window Sample

<figure>
  <a href="{{ site.baseurl }}img/subcategories/applications/modal-sample1.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/modal-sample1.jpg" alt="sample Modal Window"></a>
</figure>

## Related Resources

 * [Modal Component]({{ site.baseurl }}components/modal/)
 * [Form Validation]({{ site.baseurl }}guides/applications/form-validation/)
