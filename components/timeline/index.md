---
layout: page
parent: "Components"
type: "UI Component"
title: "Timeline"
intro: "List system and user activity chronologically."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

The purpose of a Timeline is to show the User a series of actions that have been taken over a period of time. It is a way to chronicle the who, what, when, where, and how of a process, and the `fsa-timeline` component allows for additional features for the User as well. As seen below, variations of the component actions allow the Developer to provide a way to create, update, and delete various actions within the timeline.

The `fsa-timeline` component's structure enables flexible usage of other Design System components. For example, the featured demo below makes sample use of [Labels]({{ site.baseurl }}components/labels/), [Badge]({{ site.baseurl }}components/badges/), [Buttons]({{ site.baseurl }}components/buttons/), [Text Links]({{ site.baseurl }}components/links/), and several [CSS Utilities]({{ site.baseurl }}utilities/).

## Example

### Default

{% capture snippet %}
<div class="fsa-timeline">
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__icon">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
      </svg>
    </div>
    <div class="fsa-timeline__hd">
      <span class="fsa-label">Submitted</span> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Monday, 04/03/2015 6:02 AM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__icon">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
      </svg>
    </div>
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> <span class="fsa-label">Approved</span> request on
      <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:08 PM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:10 PM</time>
      <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button> </span>
    </div>
    <div class="fsa-timeline__bd">
      The inspection request identifies this site enrolled in three Land Use programs. While technically possible, it is quite rare and needs to be verified.
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong>
      <span class="fsa-label fsa-label--general">Assigned</span> to <a href="link.html">Todd Stanley</a> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 04/06/2015 12:28 PM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Todd Stanley</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 05/28/2015 7:02 AM</time>
      <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('See **.fsa-timeline__item--editing** example.')">Edit</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Likely use a **Prompt** Notification variation.')">Delete</button> </span>
    </div>
    <div class="fsa-timeline__bd">
      On my way to the site now.
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__icon">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path>
      </svg>
    </div>
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Todd Stanley</a></strong> changed the status to
      <span class="fsa-label fsa-label--warning">In Progress</span> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Thursday, 05/28/2015 8:30 AM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__icon">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
      </svg>
    </div>
    <div class="fsa-timeline__hd">
      <strong><abbr title="SPA Reference App">SPAR</abbr> Bot</strong> closed <span class="fsa-badge fsa-badge--neutral">8</span> sub-tasks, <span class="fsa-badge fsa-badge--neutral">99+</span> remain open
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__icon">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
      </svg>
    </div>
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> changed the Due Date to
      <time datetime="2015-05-28T09:02:10.517-05:00">06/13/2015</time> on
      <time datetime="2015-05-28T09:02:10.517-05:00">Tuesday, 05/28/2015 8:58 AM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--user">
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> commented on
      <time datetime="2015-05-28T09:02:10.517-05:00">Tuesday, 05/28/2015 9:02 AM</time>
    </div>
    <div class="fsa-timeline__bd">
      This Inspection remains on hold as operator has been using the last two months to address soil pH level.
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--system">
    <div class="fsa-timeline__icon">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path>
      </svg>
    </div>
    <div class="fsa-timeline__hd">
      <strong><a href="link.html">Jane Doe</a></strong> <span class="fsa-label fsa-label--alert">Rejected</span> this Inspection Request on
      <time datetime="2015-05-28T09:02:10.517-05:00">Friday, 06/08/2015 5:58 PM</time>
    </div>
  </div>
  <div class="fsa-timeline__item fsa-timeline__item--add-comment">
    <div class="fsa-timeline__hd">
      <label class="fsa-field__label" for="inspectionCommentField--104"><strong>Todd Stanley</strong> comments:</label>
    </div>
    <div class="fsa-timeline__bd">
      <div class="fsa-m-b--s">
        <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--104" name="inspectionCommentField"></textarea>
      </div>
      <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
    </div>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Variations

### System

{% capture snippet %}
<div class="fsa-timeline__item fsa-timeline__item--system">
  <div class="fsa-timeline__icon">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  </div>
  <div class="fsa-timeline__hd">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### User

User nodes are styled with `class="fsa-timeline__item--user"`

{% capture snippet %}
<div class="fsa-timeline__item fsa-timeline__item--user">
  <div class="fsa-timeline__hd">
    <strong><a href="link.html">Jane Doe</a></strong> commented on
    <time datetime="2015-05-28T09:02:10.517-05:00">Wednesday, 04/05/2015 5:10 PM</time>
    <span class="fsa-timeline__action"> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">[Action]</button> <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button">[Action]</button> </span>
  </div>
  <div class="fsa-timeline__bd">
    At voluptatibus reiciendis voluptatum molestiae vel magni utem veritatis quas commodi repellendus laborum illo nesciunt odit vitae nisi eius. Gemino quis obcaecati ut hic minus aut, eius maxime perspiciatis, distinctio facilis excepturi. Deserunt, aliquid tenetur. Atque, culpa. Quos, magni!
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Edit comment

Editing nodes are styled with `class="fsa-timeline__item--editing"`

{% capture snippet %}
<div class="fsa-timeline__item fsa-timeline__item--user fsa-timeline__item--editing">
  <div class="fsa-timeline__hd">
    <label class="fsa-field__label" for="inspectionCommentEditSample--56w6w440"><strong>Jane</strong> is updating comment:</label>
  </div>
  <div class="fsa-timeline__bd">
    <div class="fsa-m-b--s">
      <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentEditSample--56w6w440" name="inspectionCommentEditSample--56w6w440"></textarea>
    </div>
    <button class="fsa-btn fsa-btn--primary fsa-btn--small" type="submit" onclick="alert('1. Repaint this fsa-timeline__item to original state with updated content.\n\n2. Growl Notification noting success.')">Update Comment</button>
    <button class="fsa-btn fsa-btn--small fsa-btn--flat" type="button" onclick="alert('Revert to last saved comment. No prompt necessary.')">Cancel</button>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Add a comment

Add Comment nodes are styled with `class="fsa-timeline__item--add-comment"`

{% capture snippet %}
<div class="fsa-timeline__item fsa-timeline__item--add-comment">
  <div class="fsa-timeline__hd">
    <label class="fsa-field__label" for="inspectionCommentField--669"><strong>Todd Stanley</strong> comments:</label>
  </div>
  <div class="fsa-timeline__bd">
    <div class="fsa-m-b--s">
      <textarea class="fsa-textarea fsa-textarea--block" id="inspectionCommentField--669" name="inspectionCommentField"></textarea>
    </div>
    <button class="fsa-btn fsa-btn--primary" type="submit">Add Comment</button>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* When the application requires providing the User a vertically oriented timeline of events.
* When the application requires the ability to create, edit, and delete sequential actions mapped out visually.
{% endcapture %}

{% capture usage_dont %}
* As an alternative to a bulleted list of text or data.
* Multiple timelines that are positioned adjacent to each other.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.


## General Guidance

* The use of a Timeline component within an application will provide a highly visual method to organize system and User events.

* The Timeline component is specialized and should only be used for showing actions and documenting over a period of time.

* When adding a Timestamp to the component, always use the `datetime="2015-05-28T09:02:10.517-05:00"` UTC format.

* While the individual variants are intended to be used within a Timeline component to show individual actions or events, a single variant can be used alone.


## Related Resources

* [Badges]({{ site.baseurl }}components/badges/)
* [Buttons]({{ site.baseurl }}components/buttons/)
* [CSS Utilities]({{ site.baseurl }}utilities/)
* [Labels]({{ site.baseurl }}components/labels/)
* [Text Links]({{ site.baseurl }}components/links/)