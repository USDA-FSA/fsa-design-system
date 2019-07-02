---
layout: guide
parent: "Applications"
title: "Form Validation"
intro: "Validation and error messaging is an integral part of any Application and efficient workflow for a User. The below guidelines shall be followed."

---

## Form Validation Guidelines

Below are four common themes that should be followed when developing a validation and messaging system that will help to optimize the workflow of a User. This allows for a more positive User Experience when an system or User error has taken place.

1. __Display error messages at the right place__ - Proper error messaging should appear as close as possible to the area of the application where the error has taken place. Always display validation within the context of the action. If an error has occurred, for instance, from a User typing the wrong format of characters into an online form field, the error message shall appear below the form field. Grouping of form error messages at the top or bottom of the form and away from the pertaining form fields shall not be done.
1. __Display error messages at the right time__ - It is also important for the error message to appear in a timely manner, so that the User is still in the proper mindset for completing the task. Error messages shall appear when the action has been completed. So in the instance of wrong format of characters in an online form field, when the form field loses focus the error message shall appear.
1. __Use the appropriate color for the message__ - Generally speaking, it is best practice to use the color red, paired with error text messaging to indicated something needs to be corrected to continue. In the case of confirmation or success messaging, the color green, paired with success text messaging should be used. Based on the location and background color of the area of the error, consideration of 508 compliance shall still be used.
1. __Use clear language and provide an actionable resolution__ - The verbiage used when notifying a User of an error should be easy to understand and provide a way to solve the problem. Even if the error messaging is placed in the right spot at the right time, and in the right color scheme, it serves no purpose if the User does not understand how to correct the problem. FPAC applications shall use [plain language priciples]({{ site.baseurl }}guides/content/plain-language/) when displaying validation messaging.

## Example Messaging States

<figure class="fsa-m-b--m">
  <figcaption>Unfocused Form Field State</figcaption>
  <a href="{{ site.baseurl }}img/subcategories/applications/error-1.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/error-1.jpg" alt="Image of a form field in an unfocused state"></a>
</figure>

<figure class="fsa-m-b--m">
  <figcaption>Focused Form Field State</figcaption>
  <a href="{{ site.baseurl }}img/subcategories/applications/error-2.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/error-2.jpg" alt="Image of form field in a focused state"></a>
</figure>

<figure class="fsa-m-b--m">
  <figcaption>Unfocused State with Error Messaging</figcaption>
  <a href="{{ site.baseurl }}img/subcategories/applications/error-3.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/error-3.jpg" alt="Image of a form field with error messaging"></a>
</figure>

The themes above have been programmed into the CSS and form components within the Design system, but it is important to understand the concepts and theory behind them in order to implement validation and messaging that complies with best practice.

## Warning Messages

Some applications will require the system to confirm an action taken by a User by showing a Warning or Confirmation message. For actions that are destructive in nature, such as deleting data, Developers shall utilize a Confirmation modal. To find out more information and guidelines on modal windows, [please review the guide here]({{ site.baseurl }}guides/applications/modal/).

<figure class="fsa-m-b--m">
  <figcaption>Modal Window Confirmation</figcaption>
  <a href="{{ site.baseurl }}img/subcategories/applications/modal-sample2.png" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/modal-sample2.png" alt="Image of sample Modal Window Confirmation"></a>
</figure>

## Related Resources

 * [Form Fields]({{ site.baseurl }}components/form-fields/)
 * [Growl Component]({{ site.baseurl }}components/growl/)
 * [Plain Language Guide]({{ site.baseurl }}guides/content/plain-language/)
