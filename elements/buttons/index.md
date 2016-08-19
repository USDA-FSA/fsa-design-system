---
layout: page
parent: "Elements"
title: "Buttons"
intro: "Use buttons to signal actions."
jump_menu: true
---

There are 4 distinct styles available, each are modifiable with several states, e.g. `--large`, `--disabled`, etc.

<div class="pb-preview">
  <button class="fsa-btn fsa-btn--primary">Label</button>
  <button class="fsa-btn fsa-btn--secondary">Label</button>
  <button class="fsa-btn fsa-btn--tertiary">Label</button>
  <button class="fsa-btn fsa-btn--alt">Label</button>
</div>

## Variations

```html
<button class="fsa-btn fsa-btn--[variation]">Label</button>
```

### Default

```html
<button class="fsa-btn fsa-btn--primary">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--primary">Label</button>
</div>

### Secondary

```html
<button class="fsa-btn fsa-btn--secondary">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--secondary">Label</button>
</div>

### Tertiary

```html
<button class="fsa-btn fsa-btn--tertiary">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--tertiary">Label</button>
</div>

### Alt

```html
<button class="fsa-btn fsa-btn--alt">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--alt">Label</button>
</div>

## States

Buttons may be presented in several ways:

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--[state]">Label</button>
```

### Full-width

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--block">Label</button>
```
<div class="pb-preview"><button class="fsa-btn fsa-btn--primary fsa-btn--block">Label</button></div>

### Disabled

```html
<button class="fsa-btn fsa-btn--[variation]" disabled="">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--primary" disabled="">Label</button>
</div>

### Small

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--small">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--[variation] fsa-btn--small">Label</button>
</div>

### Large

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--large">Label</button>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--[variation] fsa-btn--large">Label</button>
</div>

## HTML Guidance

Button styles can be applied to nearly any **HTML** element, e.g. `<foo class="fsa-btn fsa-btn--[variant]">Label</foo>`. 99% of the time it will be a `<button>` or `<a>`

#### Button Element

```html
<button type="button" class="fsa-btn fsa-btn--primary">label</button>
```
<div class="pb-preview">
  <button type="button" class="fsa-btn fsa-btn--primary">label</button>
</div>

### Anchor Element
```html
<a class="fsa-btn fsa-btn--primary" href="//fsa.usda.gov">label</a>
```
<div class="pb-preview">
  <a class="fsa-btn fsa-btn--primary" href="//fsa.usda.gov">label</a>
</div>

## Usage

### Use When

Use buttons for the most important actions you want users to take on your site, such as "download," "sign up," or "log out."

### Don't Use When

* If you want to lead users between pages of a website. Use links instead.
* Less popular or less important actions may be visually styled as links.

## Accessibility

* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

## General Guidance

* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons should look clickable — use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Use sentence case for button labels.
* Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”).
* Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc).

## Related

* [Color]({{ site.baseurl }}visual-style/color/)
