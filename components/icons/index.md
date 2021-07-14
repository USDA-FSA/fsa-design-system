---
layout: page
parent: "Components"
type: "UI Component"
title: "Icons"
shortName: "component__icons"
intro: "Visually communicate meaning, actions, status, or feedback."
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js", "ga/icon-finder.js", "ds-icon-find.js"]
relatedItems:
  - "Action Bar with Table"
  - "Box"
  - "Buttons"
  - "Button Group"
  - "Breadcrumbs"
  - "Destroy Prompt"
  - "Global Navigation"
  - "Growl Notification"
  - "Content Tabs"
  - "Page Title Area"
  - "Stepped Process"
  - "Stepped Tabs"
  - "Timeline"
---

<code>class="fsa-icon--<strong>[size]</strong>"</code>, where `[size]` is one of `0`, `1`, `2`, `3`, `4`, or `5`.

{% capture snippet %}
<div class="fsa-level">
  <svg class="fsa-icon fsa-icon--size-5" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
  <svg class="fsa-icon fsa-icon--size-4" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
  <svg class="fsa-icon fsa-icon--size-3" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
  <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
  <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
  <svg class="fsa-icon fsa-icon--size-0" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Find an Icon
<div class="fsa-level fsa-level--justify-between">
  <div class="fsa-field">
    <label class="fsa-field__label fsa-sr-only" for="ds-icon-find">Find an Icon</label>
    <input class="fsa-input fsa-input--large fsa-field__item" id="ds-icon-find" name="ds-icon-find" type="text" value="" placeholder="Type to filter icons" aria-describedby="ds-icon-find__help-1 ds-icon-find__help-2">
  </div>
  <div class="fsa-field">
    <label class="fsa-field__label fsa-sr-only" for="ds-icon-filter">Filter Icons</label>
    <select onchange="IconFinder.setCategory(this)" data-most-popular="49" class="fsa-select fsa-field__item" id="ds-icon-filter" aria-describedby="ds-icon-filter-help" aria-required="true" name="ds-icon-filter">
      <option value="" selected="selected">Select a Category</option>
      <option value="popular">Most Popular</option>
    </select>
  </div>
</div>

<!-- used to populate JSON into textarea
<div>
  <textarea id="thejson" class="fsa-textarea fsa-textarea--small" name="Name" placeholder="Placeholder"></textarea>
</div>
-->

<div class="fsa-level fsa-level--justify-between fsa-level--align-baseline">
  <h3 id="ds-icon-find__icon-list-title-id" aria-live="polite" class="fsa-m--none">
    <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
      <div class="fsa-progress__details">
        <div class="fsa-progress__label">Loading icons... please wait.</div>
      </div>
      <div class="fsa-progress__bar" aria-hidden="true">
        <div class="fsa-progress__primary"></div>
        <div class="fsa-progress__secondary"></div>
      </div>
    </div>
  </h3>
  
  <div id="ds-icon-find__icon-list-desc" class="fsa-color--tertiary-300">Click an icon to copy its code snippet</div>
</div>

<div id="ds-icon-find-results-id" class="docs__icons" aria-labelledby="ds-icon-find__icon-list-title" aria-describedby="ds-icon-find__icon-list-desc">
<!-- Icons will display here dynamically. -->
</div>

## Responsive

Selectively override icon size at each Media Query breakpoint.

<code>fsa-icon--<strong>[size]]@[breakpoint]</strong></code>, where
<code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
http://usda-fsa.github.io/fsa-style/demo/rwd__icons.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

Icons are a simple, easily graspable way to add visual emphasis or interest, signal an action, or indicate a feedback state — all while reducing a user’s cognitive load.

Using a consistent set of icons helps establish a familiar look and feel across a site or service, while using individual icons consistently establishes a reliable relationship between the image and a specific concept or action. For example, don’t use an envelope icon to indicate email on one page and mailing address on another. Users should be able to trust that a certain icon always means the same thing, no matter where it’s used on your site. It’s important that icons always serve a single functional purpose throughout a site or service.

{% capture usage_do %}
* **To draw attention to actions.** Icons are helpful when combined with text to inform users about performing an action. The icon should directly relate to the text it accompanies.
* **To help readers find key information.** Use icons as scannable, easy-to-understand visual indicators for key information like a phone number or email address.
* **To enhance an actionable target.** Icons make great touch or click targets. Use an icon for common actions like opening a menu or sharing an article.
{% endcapture %}

{% capture usage_dont %}
* **If meaning is ambiguous.** Use icons in a common or conventional way only. If the meaning of an icon is ambiguous by itself, it needs accompanying text.
* **To compensate for page structure.** Icons don’t fix unclear page hierarchy or confusing content organization. Don’t rely on an icon to help draw attention to something important that’s hard to find. Fix the content’s placement first.
* **For illustrative artwork.** Icons have a specific, functional meaning. Avoid using icons outside their intended usage for illustrative purposes (like using the “visibility” eye icon to illustrate an actual eye). If you want to use a graphic to enhance your content or explain a more in-depth concept, consider using an illustration instead of an icon.
{% endcapture %}

{% include do-dont.html %}

## Examples

### Combine with CSS Utilities

Combine with Color Utilities such as [Text Color]({{ site.baseurl }}utilities/#color-foreground) and [Background Color]({{ site.baseurl }}utilities/#color-background).

{% capture snippet %}
<div class="fsa-level fsa-level--wrap">
  <div class="fsa-color--red">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </div>
  <div class="fsa-color--primary">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </div>
  <div class="fsa-color--secondary">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </div>
  <div class="fsa-color--white fsa-bg--red fsa-p--xs">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </div>
  <div class="fsa-color--white fsa-bg--primary fsa-p--xs">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </div>
  <div class="fsa-color--white fsa-bg--secondary fsa-p--xs">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </div>
  <div class="fsa-radius--full fsa-p--xs fsa-color--primary-900 fsa-bg--primary-100 fsa-border--xxs fsa-border--primary-200">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path> </svg>
  </div>
  <div class="fsa-radius--full fsa-p--xs fsa-color--aqua-900 fsa-bg--aqua-100 fsa-border--xxs fsa-border--aqua-200">
    <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="24px" height="24px"> <g> <rect fill="none" height="24" width="24"></rect> </g> <g> <g> <path d="M19.5,12c0.93,0,1.78,0.28,2.5,0.76V8c0-1.1-0.9-2-2-2h-6.29l-1.06-1.06l1.41-1.41l-0.71-0.71L9.82,6.35l0.71,0.71 l1.41-1.41L13,6.71V9c0,1.1-0.9,2-2,2h-0.54c0.95,1.06,1.54,2.46,1.54,4c0,0.34-0.04,0.67-0.09,1h3.14 C15.3,13.75,17.19,12,19.5,12z"></path> <path d="M19.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S21.43,13,19.5,13z M19.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S20.33,18,19.5,18z"></path> <path d="M4,9h5c0-1.1-0.9-2-2-2H4C3.45,7,3,7.45,3,8C3,8.55,3.45,9,4,9z"></path> <path d="M9.83,13.82l-0.18-0.47L10.58,13c-0.46-1.06-1.28-1.91-2.31-2.43l-0.4,0.89l-0.46-0.21l0.4-0.9C7.26,10.13,6.64,10,6,10 c-0.53,0-1.04,0.11-1.52,0.26l0.34,0.91l-0.47,0.18L4,10.42c-1.06,0.46-1.91,1.28-2.43,2.31l0.89,0.4l-0.21,0.46l-0.9-0.4 C1.13,13.74,1,14.36,1,15c0,0.53,0.11,1.04,0.26,1.52l0.91-0.34l0.18,0.47L1.42,17c0.46,1.06,1.28,1.91,2.31,2.43l0.4-0.89 l0.46,0.21l-0.4,0.9C4.74,19.87,5.36,20,6,20c0.53,0,1.04-0.11,1.52-0.26l-0.34-0.91l0.47-0.18L8,19.58 c1.06-0.46,1.91-1.28,2.43-2.31l-0.89-0.4l0.21-0.46l0.9,0.4C10.87,16.26,11,15.64,11,15c0-0.53-0.11-1.04-0.26-1.52L9.83,13.82z M7.15,17.77c-1.53,0.63-3.29-0.09-3.92-1.62c-0.63-1.53,0.09-3.29,1.62-3.92c1.53-0.63,3.29,0.09,3.92,1.62 C9.41,15.38,8.68,17.14,7.15,17.77z"></path> </g> </g> </svg>
  </div>
  <div>
    <button type="button" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-bg--tertiary-100 fsa-color--tertiary fsa-link:hover--primary fsa-bg:hover--primary-100" title="Vote Up" aria-label="Vote Up">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></svg>
    </button>
  </div>
  <div>
    <button type="button" class="fsa-btn fsa-btn--plain fsa-p--s fsa-radius--full fsa-bg--tertiary-100 fsa-color--tertiary fsa-link:hover--red fsa-bg:hover--red-100" title="Vote Down" aria-label="Vote Down">
      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
    </button>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}


### UI Components

Many available components have Icon options

{% include related-cards.html %}

## General Guidance

* The entire set of icons (over 900 of them) are available as raw SVGs from <code><a href="https://github.com/USDA-FSA/fsa-style/tree/master/src/img/material-design-icons">/img/material-design-icons/</a></code> of the `fsa-style` dependency or its <a href="https://github.com/USDA-FSA/fsa-style#download-zip">downloadable ZIP</a>.
* **Combine with text.** Users will not always understand the meaning of icons alone. Use icons combined with text to improve usability.
* **Be consistent with icon meaning.** Icons that are used a number of times throughout an application or site must have a consistent meaning and text description throughout. For example, if an icon of a blank piece of paper means “new document” on most screens, the same icon shouldn’t be used elsewhere to mean “reformat document.” Consistency aids users with cognitive disabilities and creates a better user experience for all users.
* **When interactive, combine with other components.** If the icon is part of an interactive element, it should be implemented within another functional component, like as part of a button or list.
* **Don’t alter icons.** You shouldn’t customize, combine, or change the icons (other than updating the color) due to their license.
* **Using color in icons.** Icons use `currentColor`, so the color of the icon will inherit from the current foreground color of its parent. Change colors with the [color utility]({{ site.baseurl }}utilities/#color).

## Accessibility

**Hide decorative icons from screen readers.** Use the `aria-hidden="true"` and `role="img"` if the icon is redundant and used solely as visual progressive enhancement.

{% capture snippet %}
<svg class="fsa-icon" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
{% endcapture %}

{% include preview-and-snippet.html %}

**Place icons *inside* links.** If icons accompany a text link, place the icon inside the link (often as part of [Level component]({{ site.baseurl }}layout/level/)) to prevent the screen reader from announcing the link twice.

{% capture snippet %}
<a href="">
  <div class="fsa-level">
    <svg class="fsa-icon" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
    <span>Settings</span>
  </div>
</a>
{% endcapture %}

{% include preview-and-snippet.html %}

**Provide descriptive text if a standalone icon has semantic meaning.** If you need to expose an icon to screen readers, provide an `aria-labelledby` attribute mapped to accompanying `id` value of a `<title>` element available within the `svg`.

{% capture snippet %}
<a href="link.html">
  <svg class="fsa-icon" aria-labelledby="settings-title" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title id="settings-title">Settings</title>
    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
  </svg>
</a>
{% endcapture %}

{% include preview-and-snippet.html %}