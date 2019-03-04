---
layout: page
parent: "Components"
title: "Buttons"
intro: "Use buttons to signal actions."
jump_menu: true
---

<div class="ds-preview">
  <button class="fsa-btn fsa-btn--primary" type="button">Label</button>
  <button class="fsa-btn fsa-btn--secondary" type="button">Label</button>
  <button class="fsa-btn fsa-btn--tertiary" type="button">Label</button>
  <button class="fsa-btn fsa-btn--flat" type="button">Label</button>
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
  <button class="fsa-btn fsa-btn--primary" type="button" disabled="disabled">Label</button>
  <button class="fsa-btn fsa-btn--secondary" type="button" disabled="disabled">Label</button>
  <button class="fsa-btn fsa-btn--tertiary" type="button" disabled="disabled">Label</button>
  <button class="fsa-btn fsa-btn--flat" type="button" disabled="disabled">Label</button>
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

## Usage

### Use When

* Triggering invokes an action or behavior, such as submitting a form or spawning a Modal. Otherwise, use a [text link]({{ site.baseurl }}components/links/).

### Don't Use

* To navigate between destinations. Use a [text link]({{ site.baseurl }}components/links/) instead.

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

## Related Resources

* [Color]({{ site.baseurl }}visual-style/color/)
* [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.
