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
  - "item"
  - "item"
  - "item"
  - "item"
  - "item"
---

<code>class="fsa-icon--<strong>[size]</strong>"</code>, where `[size]` is one of `0`, `1`, `2`, `3`, `4`, or `5`.

{% capture snippet %}
<div class="fsa-level fsa-level--align-baseline">
  <svg class="fsa-icon fsa-icon--size-5" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  <svg class="fsa-icon fsa-icon--size-4" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  <svg class="fsa-icon fsa-icon--size-3" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  <svg class="fsa-icon fsa-icon--size-0" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Find an Icon
<div class="fsa-field">
  <label class="fsa-field__label fsa-sr-only" for="ds-icon-find">Find an Icon</label>
  <input class="fsa-input fsa-input--large fsa-field__item" id="ds-icon-find" name="ds-icon-find" type="text" value="" placeholder="Type to filter icons" aria-describedby="ds-icon-find__help-1 ds-icon-find__help-2">
</div>

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
{% capture rwdURL %}http://usda-fsa.github.io/fsa-style/demo/rwd__icons.html{% endcapture %}
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
<svg class="fsa-icon" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
{% endcapture %}

{% include preview-and-snippet.html %}

**Place icons *inside* links.** If icons accompany a text link, place the icon inside the link to prevent the screen reader from announcing the link twice.

{% capture snippet %}
<a href="">
  <div class="fsa-level">
    <svg class="fsa-icon" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
    <span>Profile</span>
  </div>
</a>
{% endcapture %}

{% include preview-and-snippet.html %}

**Provide descriptive text if a standalone icon has semantic meaning.** If you need to expose an icon to screen readers, provide an `aria-labelledby` attribute mapped to accompanying `id` value of a `<title>` element available within the `svg`.

{% capture snippet %}
<a href="link.html">
  <svg class="fsa-icon" aria-labelledby="profile-title" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <title id="profile-title">Profile</title>
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
  </svg>
</a>
{% endcapture %}

{% include preview-and-snippet.html %}

{% include related-cards.html %}

