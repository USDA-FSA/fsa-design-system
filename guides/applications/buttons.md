---
layout: guide
parent: "Applications"
title: "Buttons"
intro: "FPAC applications shall have the same look and feel, along with having a consistent naming convention for the most used buttons. Below you will find guidelines on how to use specific style related to various actions and features where a button is used."

---

## Variations and States

The below buttons are the default variations available for use in the Design System. For further details on variations and states, view the [Button Components]({{ site.baseurl }}components/buttons/) component documentation.

<div class="ds-preview">
  <p>
      <button class="fsa-btn fsa-btn--primary" type="button">Primary</button>
      <button class="fsa-btn fsa-btn--secondary" type="button">Secondary</button>
      <button class="fsa-btn fsa-btn--tertiary" type="button">Tertiary</button>
      <button class="fsa-btn fsa-btn--flat" type="button">Flat</button>
  </p>
  <p>
      <button class="fsa-btn fsa-btn--primary" type="button" disabled>Disabled Primary</button>
      <button class="fsa-btn fsa-btn--secondary" type="button" disabled>Disabled Secondary</button>
      <button class="fsa-btn fsa-btn--tertiary" type="button" disabled>Disabled Tertiary</button>
      <button class="fsa-btn fsa-btn--flat" type="button" disabled>Disabled Flat</button>
  </p>
</div>

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
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
            <td aria-label="Usage"> A secondary style shall be applied to buttons that are <strong>not top priority</strong>, may be viewed as contrary        to progress, or the action is relevant for <strong>adjacent features and functionality</strong>. You may think of this as the <strong>default</strong> button state (despite it's "secondary" name); that is, all buttons are default unless one of the other use cases mentioned on this page come into play. </td>
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
            <td aria-label="Example">
                Single Page Application architecture (e.g. Angular, React, Vue, etc) often have text links that are technically a &lt;<code>button&gt;</code> but its UI presents them as more navigational.
                <br><br>
                A "Cancel" button. By giving this button very low priority and prominence on the screen. While canceling a process may be destructive in nature, it does not remove stored data from the database.
            </td>
        </tr>
        <tr>
            <td aria-label="Variation/State">
                <button type="button" class="fsa-btn fsa-btn--block fsa-btn--primary" disabled>Disabled</button>
            </td>
            <td aria-label="Usage">
                Communicates when a button isn’t actionable and is deemphasized in a UI.
            </td>
            <td aria-label="Example">
                A button needs to remain present and visible, and becomes actionable once any number of criteria is met.
            </td>
        </tr>
    </tbody>
</table>

## Size

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Default</button>
  <button class="fsa-btn fsa-btn--primary fsa-btn--small" type="button">Small</button>
  <button class="fsa-btn fsa-btn--primary fsa-btn--large" type="button">Large</button>
</div>

## Display

<div class="ds-preview">
    <p><button class="fsa-btn fsa-btn--primary fsa-btn--block" type="button">Full width (aka Block)</button></p>
    <p><button class="fsa-btn fsa-btn--primary fsa-btn--inline" type="button">Inline (default)</button></p>
</div>

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

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_buttons" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__buttons.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_buttons">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__buttons.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## General Guidelines

 * All buttons should use an action word to start the label. Eg. "View Details" vs. "Details"
 * A Cancel button shall not be used unless the online form uses a multi-step process
 * A Cancel button shall be used in a Multi-step or multiple screen process so the User feels safe that they are aborting a process
 * A Cancel or Close button action shall clear the contents of the online form for security/privacy purposes
 * When used, the Cancel button should appear as a link (i.e. `fsa-btn--flat` variation) or Secondary button
 * Buttons shall align to the left with primary or progressive/affirmative action on left, and secondary or regressive/dismissive action on right.

## Multi-Step Process Guidelines

 * A **regressive** action shall be left-aligned, followed by right-aligned **progressive** action(s)
 * Back and Next can be used as button labels
 * The saving of data or state is implied and clicking the **"Regressive"** button shall not delete data that has been entered
 * Save or Submit can be used on the final step

View [Stepped Control]({{ site.baseurl }}fsa-design-system/components/stepped-control/) component for documentation.

## Reset and Clear Guidelines

 * Reset is defined as removing all data and returning to the initial state of the application or online form inputs
 * Clear is defined as removing all data from application or online form fields
 * Reset and Clear buttons, if used, shall not be placed near a Primary button such as Next, Submit, or Save

## Which Label to Use?

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Submit</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--primary" type="button">Save</button>
</div>

Use Submit for a button label when providing data that will not be stored, or if the data is submitted by an anonymous User. Use a Save label when the User is authenticated and will be updating data within a system.

 * **Submit** - Use for submitting data to generate a report
 * **Save** - Use for updating User profile information or preferences.

 ___

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Search</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--primary" type="button">Submit</button>
</div>

* **Search** shall be used as the button label when the application is performing a query and returning results.
* The Search label on a button is more ubiquitous on the web and Users are accustomed to looking for this functionality on a screen.

___

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Back</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--flat" type="button">Cancel</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--primary" type="button">Exit</button>
</div>

* When returning to a previous screen or step, use **Back** as the button label.
* When ceasing a process, such as updating your profile, use **Cancel** as the button label.
* Exit shall not be used in the context of returning to a previous screen, as it could imply exiting the application as opposed to the process in the application.

___

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Refresh</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--primary" type="button">Reload</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--secondary" type="button">Reset</button>
</div>

* When data or a state in the application has changed, it is recommended to use **Refresh** as a label.
* The Reload label implies getting more data, while Refresh is a more general and User friendly term.
* Reset implies clearing data and returning to the initial state of data.

___

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--flat" type="button">Cancel</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--secondary" type="button">Cancel</button>
</div>

* In general, all FPAC applications should use the Flat style for a **Cancel** button.
* A Cancel button should utilize the secondary button style within a modal or popup window and the User needs to Cancel the action being performed.

___

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--tertiary" type="button">Delete</button> <span class="fsa-m-r--xxs fsa-m-l--xxs">vs.</span> <button class="fsa-btn fsa-btn--secondary" type="button">Reset</button>
</div>

* A button shall use the **Tertiary** style when the action taken has destructive capabilities.
* While Reset is an action that removes data from the screen, it should not be used to remove data from a database or other data storage.

___

## Common Button Labels and Functionality

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
    <thead>
        <tr>
            <th scope="col">Button Label</th>
            <th scope="col">Functionality</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Add</button>
                </p>
                <p>(Add [noun])</p>
            </td>
            <td aria-label="Functionality">Add data, add new row, add new template for data entry</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Approve</button>
                </p>
            </td>
            <td aria-label="Functionality">
                <p>Application specific button designed to be a single source of approval</p>
                <p>NOTE: Having an Approve button as compared to an Approve checkbox paired with a Submit button.</p>
            </td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Back</button>
                </p>
            </td>
            <td aria-label="Functionality">Return to the previous page in the application.</td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Calculate</button>
                </p>
                <p>(Calculate [noun])</p>
            </td>
            <td aria-label="Functionality">Perform Calculation</td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--flat" type="button">Cancel</button>
                </p>
                <p>(Cancel [noun])</p>
            </td>
            <td aria-label="Functionality">
                <p>Stop current action and cancels out of the process.  Returns users to the page where the action was initiated.</p>
                <p>NOTE: If data has been entered, a confirmation message shall be displayed so the user can confirm they want to cancel.</p>
            </td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--secondary" type="button">Clear</button>
                </p>
            </td>
            <td aria-label="Functionality">
                <p>Clears screen or form of all data.</p>
                <p>This button should be used with caution and generally only on pages where data is not actually saved, such as search pages or calculator type applications. When used, this button clears all fields on the page of all values.</p>
            </td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Continue</button>
                </p>
            </td>
            <td aria-label="Functionality">Go to the next page in a multi-step process.  This option is intended primarily for informational pages where no information is entered on the page.</td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--tertiary" type="button">Delete</button>
                </p>
                <p>(Delete [noun])</p>
            </td>
            <td aria-label="Functionality">
                <p>Allows the user to delete specific data or a record.</p>
                <p>NOTE: Shall require a confirmation question, such as a pop-up, with a Yes/No response for the user to confirm the deletion. Information about what is being deleted shall also be displayed for the user.</p>
            </td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Download</button>
                </p>
                <p>(Download [noun])</p>
            </td>
            <td aria-label="Functionality">Download an application file to a user's storage device.</td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Export</button>
                </p>
            </td>
            <td aria-label="Functionality">Download data in various templated formats.</td>
        </tr>

        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Filter</button>
                </p>
                <p>(Filter [noun])</p>
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
                    <button class="fsa-btn fsa-btn--primary" type="button">Go to Application</button>
                </p>
            </td>
            <td aria-label="Functionality">Allows users to access another application to view or update data.  Opens new application in a separate tab.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Log in</button>
                </p>
            </td>
            <td aria-label="Functionality">Enter an application in an authenticated state.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Log out</button>
                </p>
            </td>
            <td aria-label="Functionality">Exit an application currently in an authenticated state and return to Log in screen.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">No</button>
                </p>
            </td>
            <td aria-label="Functionality">Decline response to an action to be taken, such as deleting data or a record.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Refresh</button>
                </p>
            </td>
            <td aria-label="Functionality">Refreshes the data on the page. Primarily used after data has been updated in another application.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--secondary" type="button">Reset</button>
                </p>
            </td>
            <td aria-label="Functionality">
                <p>Reset fields to the default field values(s) or previously saved value(s).</p>
                <p>NOTE: If data had been saved by the user that varies from the default value(s), the reset will refresh to the most recently saved value(s).</p>
            </td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Save</button>
                </p>
                <p>(Save [noun])</p>
            </td>
            <td aria-label="Functionality">Save data and remains on the current page.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Save &amp; Continue</button>
                </p>
            </td>
            <td aria-label="Functionality">Saves data on the current page of a multi-step or multi-screen process and continues to the next page.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Search</button>
                </p>
            </td>
            <td aria-label="Functionality">Performs a query based on criteria submitted</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Select</button>
                </p>
            </td>
            <td aria-label="Functionality">Initiate a Selected Action</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Submit</button>
                </p>
                <p>(Submit [noun])</p>
            </td>
            <td aria-label="Functionality">
                <p>Send data to an application process, such as saving to a database. Returns users to the page where the action was initiated or to the home page.</p>
                <p>NOTE: Data is recorded on multiple pages in a multi-page process. Save or Save &amp; Continue would be the options through each of those pages. However on the page where the producer signature is recorded, the option would be to “Submit” because recording the producer signature signifies the application is being submitted to FPAC for approval consideration. Status of the contract/application would then generally go from “initiated” to “filed” or “signed” as required by the applicable program application.
                </p>
            </td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Upload</button>
                </p>
                <p>Upload (Upload [noun])</p>
            </td>
            <td aria-label="Functionality">Upload data file from a user’s storage device to the web application.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">View</button>
                </p>
                <p>(View [noun])</p>
            </td>
            <td aria-label="Functionality">Show additional information or detailed information about item.</td>
        </tr>
        <tr>
            <td aria-label="Button Label" scope="row">
                <p>
                    <button class="fsa-btn fsa-btn--primary" type="button">Yes</button>
                </p>
            </td>
            <td aria-label="Functionality">Confirmation response to an action to be taken, such as deleting data or a record.</td>
        </tr>

    </tbody>
</table>

## Related Components

* [Buttons]({{ site.baseurl }}components/buttons/)
* [Form Fields]({{ site.baseurl }}fsa-design-system/components/form-fields/)
* [Stepped Control]({{ site.baseurl }}fsa-design-system/components/stepped-control/)
* [Search]({{ site.baseurl }}fsa-design-system/components/search/)
