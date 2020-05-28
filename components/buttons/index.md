---
layout: page
parent: "Components"
title: "Buttons"
shortName: "component__buttons"
intro: "Signal key <strong>actions</strong> on a page, form, or dialog."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-level">
    <span><button class="fsa-btn fsa-btn--primary" type="button">Label</button></span>
    <span><button class="fsa-btn fsa-btn--secondary" type="button">Label</button></span>
    <span><button class="fsa-btn fsa-btn--tertiary" type="button">Label</button></span>
    <span><button class="fsa-btn fsa-btn--flat" type="button">Label</button></span>
  </div>
</div>

## Variations

Buttons are styled with `class="fsa-btn"`, modifiable with one or multiple `fsa-btn--[variation]`.

```html
<button class="fsa-btn fsa-btn--[variation]" type="button">Label</button>
<a class="fsa-btn fsa-btn--[variation]" href="link.html">Label</a>
```

### Default

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--primary" type="button">Label</button>
```

### Secondary

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--secondary" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--secondary" type="button">Label</button>
```

### Flat

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--flat" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--flat" type="button">Label</button>
```

### Tertiary

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--tertiary" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--tertiary" type="button">Label</button>
```


## States

Each button variation can be modified with one or multiple states:

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--[state]" type="button">Label</button>
```

### Full-width

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary fsa-btn--block" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--block" type="button">Label</button>
```

### Disabled

Disabled buttons do not have a `class="fsa-btn--[state]"`, instead using the `disabled` attribute.

<div class="ds-preview">
  <div class="fsa-level">
    <span><button class="fsa-btn fsa-btn--primary" type="button" disabled="disabled">Label</button></span>
    <span><button class="fsa-btn fsa-btn--secondary" type="button" disabled="disabled">Label</button></span>
    <span><button class="fsa-btn fsa-btn--tertiary" type="button" disabled="disabled">Label</button></span>
    <span><button class="fsa-btn fsa-btn--flat" type="button" disabled="disabled">Label</button></span>
  </div>
</div>
```html
<button class="fsa-btn fsa-btn--[variation]" type="button" disabled="disabled">Label</button>
```

### Small

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary fsa-btn--small" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--small" type="button">Label</button>
```

### Large

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary fsa-btn--large" type="button">Label</button>
</div>
```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--large" type="button">Label</button>
```

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

## Usage

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

{% capture usage_do %}
* To trigger an action or behavior, such as submitting a form or spawning a Modal.
{% endcapture %}

{% capture usage_dont %}
* Avoid using to navigate between destinations, deferring to a [text link]({{ site.baseurl }}components/links/) instead.
{% endcapture %}

{% include do-dont.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>`, `<img>`, or other such tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

## General Guidance

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

## Related Resources

* [Color]({{ site.baseurl }}visual-style/color/)
* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
* [Applications Guide]({{ site.baseurl }}guides/applications/buttons)

