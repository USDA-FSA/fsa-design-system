---
layout: guide
parent: "Applications"
title: "Date Format"
intro: "All FSA applications shall follow the below guidelines when handling date entered into the application. "

---

## Allowable Date Formats

When a User enters a date, the following formates shall be allowed.

 * MMDDYYYY
 * MMDDYY
 * MM/DD/YYYY
 * MM/DD/YY
 * M/D/YYYY
 * MM.DD.YYYY
 * MM.DD.YY
 * M.D.YYYY
 * M.D.YY

If the date entered, is not MM/DD/YYYY, then the date should be automatically formatted when the focus on the date field is changed or an action button is clicked.

## Warning Message for MMDDYY

There are two dates a year that require special handling and an error message to appear when entered. January 1st without leading zeros and January 2nd without leading zeros combined with any year can produce a possible User error. Below are example dates that when entered can be misinterpreted by the system:
 
<div class="fsa-field">
    <label class="fsa-field__label" for="lorem-1234">January 1st, 2018 or November 20th, 2018?<!--<span class="fsa-field__label-desc">Required</span>--></label>
                <input class="fsa-input fsa-field__item" id="lorem-1234" name="lorem-1234" type="email" value="112018">
                <!--<span class="fsa-field__help">This is how people can contact you</span>-->

</div>

<div class="fsa-field">
    <label class="fsa-field__label" for="lorem-1234">January 2nd, 2029 or December 20th, 2029?<!--<span class="fsa-field__label-desc">Required</span>--></label>
                <input class="fsa-input fsa-field__item" id="lorem-1234" name="lorem-1234" type="email" value="122029">
                <!--<span class="fsa-field__help">This is how people can contact you</span>-->

</div>
 
In these instances, a Developer shall include a warning message to be displayed when the date input field loses focus. The User shall not be able to process without confirming "Yes" to the intented date formate. If the User selects "No", the date input field shall be be cleared and coursor focus shall be returned to the date input field again.

## Related Resources

 * [Date Picker component]
