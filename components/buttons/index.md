---
layout: page
parent: "Components"
type: "UI Component"
title: "Buttons"
shortName: "component__buttons"
intro: "Signal key actions on a page, form, or dialog."
relatedItems:
  - "Action Bar with Table"
  - "Button Group"
  - "Destroy Prompt"
  - "Form Fields"
  - "Growl Notification"
  - "Page Title Area"
  - "Search"
  - "Stepped Control"
  - "Stepped Process"
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

{% capture snippet %}
<ul class="fsa-level">
  <li><button class="fsa-btn fsa-btn--primary" type="button">Label</button></li>
  <li><button class="fsa-btn fsa-btn--secondary" type="button">Label</button></li>
  <li><button class="fsa-btn fsa-btn--tertiary" type="button">Label</button></li>
  <li><button class="fsa-btn fsa-btn--flat" type="button">Label</button></li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

## Variations

Buttons are styled with `class="fsa-btn"`, modifiable with one or multiple `fsa-btn--[variation]`.

```html
<button class="fsa-btn fsa-btn--[variation]" type="button">Label</button>
<a class="fsa-btn fsa-btn--[variation]" href="link.html">Label</a>
```

### Default

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Secondary

{% capture snippet %}
<button class="fsa-btn fsa-btn--secondary" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Flat

{% capture snippet %}
<button class="fsa-btn fsa-btn--flat" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Tertiary

{% capture snippet %}
<button class="fsa-btn fsa-btn--tertiary" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

## States

Each button variation can be modified with one or multiple states:

{% capture snippet %}
<button class="fsa-btn fsa-btn--[variation] fsa-btn--[state]" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Full-width

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary fsa-btn--block" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Disabled

Disabled buttons do not have a `class="fsa-btn--[state]"`, instead using the `disabled` attribute.

{% capture snippet %}
<ul class="fsa-level">
  <li><button class="fsa-btn fsa-btn--primary" type="button" disabled="disabled">Label</button></li>
  <li><button class="fsa-btn fsa-btn--secondary" type="button" disabled="disabled">Label</button></li>
  <li><button class="fsa-btn fsa-btn--tertiary" type="button" disabled="disabled">Label</button></li>
  <li><button class="fsa-btn fsa-btn--flat" type="button" disabled="disabled">Label</button></li>
</ul>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary fsa-btn--small" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<button class="fsa-btn fsa-btn--primary fsa-btn--large" type="button">Label</button>
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

Several of a button's style properties can be selectively modified across each Media Query breakpoint.

<code>fsa-btn--<strong>[property]@[breakpoint]</strong></code>, where
<code>property</code> is one of
<code>small</code>,
<code>medium</code>,
<code>large</code>,
<code>block</code>, or
<code>inline</code>; and <code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}https://usda-fsa.github.io/fsa-style/demo/rwd__buttons.html{% endcapture %}
{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* To trigger an action or behavior, such as submitting a form or spawning a Modal.
{% endcapture %}

{% capture usage_dont %}
* Avoid using to navigate between destinations, deferring to a [text link]({{ site.baseurl }}components/links/) instead.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th>Variation/State</th>
      <th>Usage</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Variation/State">
        <button type="button" class="fsa-btn fsa-btn--block fsa-btn--primary">Primary</button>
      </td>
      <td aria-label="Usage"> A primary style shall be applied to a button that represents the <strong>top priority action</strong> a User might take <strong>within a given UI context</strong>. </td>
      <td aria-label="Example"> Submitting a form or continuing a stepped process would be considered primary. </td>
    </tr>
    <tr>
      <td aria-label="Variation/State">
        <button type="button" class="fsa-btn fsa-btn--block fsa-btn--secondary">Secondary</button>
      </td>
      <td aria-label="Usage"> A secondary style shall be applied to buttons that are <strong>not top priority</strong>, may be viewed as contrary to progress, or the action is relevant for <strong>adjacent features and functionality</strong>. You may think of this as the <strong>default</strong> button state (despite it's "secondary" name); that is, all buttons are default unless one of the other use cases mentioned on this page come into play. </td>
      <td aria-label="Example"> A button labeled "View Producer" that displays data on the same screen without continuing a process. </td>
    </tr>
    <tr>
      <td aria-label="Variation/State">
        <button type="button" class="fsa-btn fsa-btn--block fsa-btn--tertiary">Tertiary</button>
      </td>
      <td aria-label="Usage"> A tertiary style shall be applied only to buttons that perform a <strong>destructive</strong> action. </td>
      <td aria-label="Example"> "Delete" or "Remove". </td>
    </tr>
    <tr>
      <td aria-label="Variation/State">
        <button type="button" class="fsa-btn fsa-btn--block fsa-btn--flat">Flat</button>
      </td>
      <td aria-label="Usage"> Identical in visual nature to a text link (<code>&lt;a&gt;</code>), this treatment is reserved for items of the <strong> least importance </strong> or deserves no strong prominence.<br><br>Using this style ensures the button will not be easily mistaken as an action to take without contemplation from a User. </td>
      <td aria-label="Example"> Single Page Application architecture (e.g. Angular, React, Vue, etc) often have text links that are technically a &lt;<code>button&gt;</code> but its UI presents them as more navigational. <br><br> A "Cancel" button. By giving this button very low priority and prominence on the screen. While canceling a process may be destructive in nature, it does not remove stored data from the database. </td>
    </tr>
    <tr>
      <td aria-label="Variation/State">
        <button type="button" class="fsa-btn fsa-btn--block fsa-btn--primary" disabled>Disabled</button>
      </td>
      <td aria-label="Usage"> Communicates when a button isn’t actionable and is deemphasized in a UI. </td>
      <td aria-label="Example"> A button needs to remain present and visible, and becomes actionable once any number of criteria is met. </td>
    </tr>
  </tbody>
</table>

## General Guidance

* For multi-stepped user flows (e.g. Wizard) refer to [Stepped Control]({{ site.baseurl }}fsa-design-system/components/stepped-control/) component for usage of buttons within that use case.
* Button styles can be applied to nearly any HTML element, e.g. `<foo class="fsa-btn fsa-btn--[variant]">Label</foo>`. 99% of the time it will be a `<button>` or `<a>`.
* For `<button>` elements, `type` attribute is required, and will most likely be `type="button"`. Use `type="submit"` to submit a `<form>`. Omitting `type` attribute will default to `type="submit"`.
* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons look clickable — use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Use sentence case for button labels, e.g. "Sign up" instead of "Sign Up".
* Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “Download,” “View” or “Sign up”).
* Make the first word of the button’s label an action verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“Download”, “Open in a new window”, etc).

* All buttons should use an action word to start the label. Eg. "View Details" vs. "Details".
* A Cancel button should not be used unless the online form uses a multi-step process.
* A Cancel button should be used in a Multi-step or multiple screen process so the User feels safe that they are aborting a process.
* A Cancel or Close button action shall clear the contents of the online form for security/privacy purposes.
* When used, the Cancel button should appear as a link (i.e. `fsa-btn--flat` variation) or Secondary button.
* Buttons shall align to the left with primary or progressive/affirmative action on left, and secondary or regressive/dismissive action on right.

## Labeling

<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th scope="col">Button Label</th>
      <th scope="col">Usage</th>
    </tr>
  </thead>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Submit
        <strong>vs.</strong>
        Save
      </div>
    </td>
    <td aria-label="Usage">
      Use Submit for a button label when providing data that will not be stored, or if the data is submitted by an anonymous User. Use a Save label when the User is authenticated and will be updating data within a system.
      <ul>
        <li>
          <strong>Submit</strong> - Use for submitting data to generate a report
        </li>
        <li>
          <strong>Save</strong> - Use for updating User profile information or preferences.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Search
        <strong>vs.</strong>
        Submit
      </div>
    </td>
    <td aria-label="Usage">
      <ul>
        <li>
          <strong>Search</strong> shall be used as the button label when the application is performing a query and returning results.
        </li>
        <li>
          The Search label on a button is more ubiquitous on the web and Users are accustomed to looking for this functionality on a screen.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Back
        <strong>vs.</strong>
        Cancel
        <strong>vs.</strong>
        Exit
      </div>
    </td>
    <td aria-label="Usage">
      <ul>
        <li>
          When returning to a previous screen or step, use <strong>Back</strong> as the button label.
        </li>
        <li>
          When ceasing a process, such as updating your profile, use <strong>Cancel</strong> as the button label.
        </li>
        <li>
          Exit shall not be used in the context of returning to a previous screen, as it could imply exiting the application as opposed to the process in the application.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label">
      <div style="white-space: nowrap;">
        Refresh
        <strong>vs.</strong>
        Reload
        <strong>vs.</strong>
        Reset
      </div>
    </td>
    <td aria-label="Usage">
      <ul>
        <li>
          When data or a state in the application has changed, it is recommended to use <strong>Refresh</strong> as a label.
        </li>
        <li>
          The Reload label implies getting more data, while Refresh is a more general and User friendly term.
        </li>
        <li>
          Reset implies clearing data and returning to the initial state of data.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td aria-label="Label"><div style="white-space: nowrap;">
      <div style="white-space: nowrap;">
        Delete
        <strong>vs.</strong>
        Reset
      </div>
    </div></td>
    <td aria-label="Usage">
      <ul>
        <li>
          A button shall use the <strong>Tertiary</strong> style when the action taken has destructive capabilities.
        </li>
        <li>
          While Reset is an action that removes data from the screen, it should not be used to remove data from a database or other data storage.
        </li>
      </ul>
    </td>
  </tr>
</table>

### Common Button Labels and Functionality

<table class="fsa-table fsa-table--responsive">
  <thead>
    <tr>
      <th scope="col">Button Label</th>
      <th scope="col">Functionality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Button Label" scope="row">
        Add&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Add data, add new row, add new template for data entry</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Approve
      </td>
      <td aria-label="Functionality">
        <p>Application specific button designed to be a single source of approval</p>
        <p>NOTE: Having an Approve button as compared to an Approve checkbox paired with a Submit button.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Back
      </td>
      <td aria-label="Functionality">Return to the previous page in the application.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Calculate&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Perform Calculation</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Cancel&nbsp;[noun]
      </td>
      <td aria-label="Functionality">
        <p>Stop current action and cancels out of the process.  Returns users to the page where the action was initiated.</p>
        <p>NOTE: If data has been entered, a confirmation message shall be displayed so the user can confirm they want to cancel.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Clear
      </td>
      <td aria-label="Functionality">
        <p>Clears screen or form of all data.</p>
        <p>This button should be used with caution and generally only on pages where data is not actually saved, such as search pages or calculator type applications. When used, this button clears all fields on the page of all values.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Continue
      </td>
      <td aria-label="Functionality">Go to the next page in a multi-step process.  This option is intended primarily for informational pages where no information is entered on the page.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Delete
        <br><br>
        (Delete&nbsp;[noun])
      </td>
      <td aria-label="Functionality">
        <p>Allows the user to delete specific data or a record.</p>
        <p>NOTE: Shall require a confirmation question, such as a pop-up, with a Yes/No response for the user to confirm the deletion. Information about what is being deleted shall also be displayed for the user.</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Download&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Download an application file to a user's storage device.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Export
      </td>
      <td aria-label="Functionality">Download data in various templated formats.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Filter&nbsp;[noun]
      </td>
      <td aria-label="Functionality">
        <p>Remove all data from data set, except that which matches the selected criteria.</p>
        <p>NOTE: Rather than having a filter button, the Farm Programs team would like to explore various types of filtering. This button may still be necessary but Farm Programs would like to see other options.
        </p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        <p>
          Go to Application
        </p>
      </td>
      <td aria-label="Functionality">Allows users to access another application to view or update data.  Opens new application in a separate tab.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Log in
      </td>
      <td aria-label="Functionality">Enter an application in an authenticated state.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Log out
      </td>
      <td aria-label="Functionality">Exit an application currently in an authenticated state and return to Log in screen.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        No
      </td>
      <td aria-label="Functionality">Decline response to an action to be taken, such as deleting data or a record.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Refresh
      </td>
      <td aria-label="Functionality">Refreshes the data on the page. Primarily used after data has been updated in another application.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Reset
      </td>
      <td aria-label="Functionality">
        <p>Reset fields to the default field values(s) or previously saved value(s).</p>
        <p>NOTE: If data had been saved by the user that varies from the default value(s), the reset will refresh to the most recently saved value(s).</p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Save&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Save data and remains on the current page.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Save&nbsp;&amp;&nbsp;Continue
      </td>
      <td aria-label="Functionality">Saves data on the current page of a multi-step or multi-screen process and continues to the next page.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Search
      </td>
      <td aria-label="Functionality">Performs a query based on criteria submitted</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Select
      </td>
      <td aria-label="Functionality">Initiate a Selected Action</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Submit&nbsp;[noun]
      </td>
      <td aria-label="Functionality">
        <p>Send data to an application process, such as saving to a database. Returns users to the page where the action was initiated or to the home page.</p>
        <p>NOTE: Data is recorded on multiple pages in a multi-page process. Save or Save &amp; Continue would be the options through each of those pages. However on the page where the producer signature is recorded, the option would be to “Submit” because recording the producer signature signifies the application is being submitted to FPAC for approval consideration. Status of the contract/application would then generally go from “initiated” to “filed” or “signed” as required by the applicable program application. </p>
      </td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        Upload&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Upload data file from a user’s storage device to the web application.</td>
    </tr>
    <tr>
      <td aria-label="Button Label" scope="row">
        View&nbsp;[noun]
      </td>
      <td aria-label="Functionality">Show additional information or detailed information about item.</td>
    </tr>
  </tbody>
</table>

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>`, `<img>`, or other such tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

## Related Resources

* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
* [Color]({{ site.baseurl }}visual-style/color/)