---
layout: guide
parent: "Applications"
title: "Buttons"
intro: "Buttons Introduction text"

---

## Button Examples

The below buttons are the various options available for use in the FSA Design System.



<div class="dut-button-demo__section">

<button class="fsa-btn fsa-btn--primary" type="button">Primary</button> 
<button class="fsa-btn fsa-btn--secondary" type="button">Secondary</button>
<button class="fsa-btn fsa-btn--tertiary" type="button">Tertiary</button>
<button class="fsa-btn fsa-btn--alt" type="button">Alt</button>
<button class="fsa-btn fsa-btn--primary" disabled="disabled" type="button">Disabled</button>
<a href="#" class="dut-button-demo__cancel-link">Cancel</a>
</div>

**PRIMARY:** A primary style should be applied to a button that represents the top priority action that a User should be taking in a given situation. Submitting a form or continuing a stepped process would be considered primary.

**SECONDARY:** A secondary style should be applied to buttons that are not top priority, but the action is relevant for features and functionality that keep a User on the same screen. An example of this would be a button that is labeled "View Producer" that displays data on the same screen without continuing a process.

**TERTIARY:** A tertiary style should be applied ONLY to button that perform a destructive action. A "Delete" button is a good example of an action that requires the tertiary style. 

**ALT:** The alt style should be applied to buttons available to the User, but the actions are viewed as contrary to progress. An example of this would be a "Reset" button that starts a process on the screen over, but does not delete data that is stored in a database.

**DISABLED:** The disabled style should be applied to any buttons that a User should not be able to click, but should remain present and visible as an action that can be performed once other criteria is met.

**UNDERLINED:** In most cases, a button labeled as "Cancel" should be shown with a style that usings an underline. By giving this button very low priority and prominance on the screen, it will not be easily mistaken as an action to take without contemplation from a User. Canceling a process can be destructive in nature, but it does not remove stored data from the database.

## Situational Button Guidelines:

 * All buttons SHOULD use an action word to start the label. Eg. "View Details" vs. "Details"
 * A Cancel button SHALL NOT be used unless the online form uses a multi-step process.
 * A Cancel button SHALL be used in a Multi-step or multiple screen process so the User feels safe that they are aborting a process.
 * A Cancel or Close button action SHALL clear the contents of the online form for security/privacy purposes.
 * When used, the Cancel button SHOULD appear as a link or Alternative button.
 * In a multi-step or multiple screen process, Back and Next SHALL be used as button labels.
 * In a multi-step or multiple screen process, the saving of data or state is implied and clicking the Back button SHALL NOT delete data that has been entered.
 * In a multi-step or multiple screen process, Save or Submit SHALL be used on the final step.
 * Buttons SHOULD align to the left with primary or affirmative action on left and secondary or dismissive action on right
 * Reset & Clear buttons:
   * Reset - defined as removing all data and returning to the initial state of the application or online form inputs.
   * Clear - defined as removing all data from application or online form fields.
   * Reset and Clear buttons, if used, SHALL NOT be placed near the Next, Submit, or Save buttons.
   
   
