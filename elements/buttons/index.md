---
layout: page
parent: "Elements"
title: "Buttons"
intro: "Introduction to <strong>Buttons</strong> lorem ipsum dolor sit amet"
---

<div class="pb-jump">
  <h2 class="pb-jump__title">On this page</h2>
  <ul class="pb-jump__list">
    <li class="pb-jump__item"><a class="pb-jump__link" href="#variations">Variations</a></li>
    <li class="pb-jump__item"><a class="pb-jump__link" href="#states">States</a></li>
    <li class="pb-jump__item"><a class="pb-jump__link" href="#usage">Usage</a></li>
  </ul>
</div>

<div class="pb-preview">
  <button class="fsa-btn fsa-btn--primary">Label</button>
  <button class="fsa-btn fsa-btn--secondary">Label</button>
  <button class="fsa-btn fsa-btn--tertiary">Label</button>
  <button class="fsa-btn fsa-btn--alt">Label</button>
</div>

## Variations

Buttons have 4 distinct styles available. Refer to [Usage](#usage) for guidance on which variation fits your needs:

```html
<button class="fsa-btn fsa-btn--[variation]">Label</button>
```

### Default

<button class="fsa-btn fsa-btn--primary">Label</button>

```html
<button class="fsa-btn fsa-btn--primary">Label</button>
```

### Secondary

<button class="fsa-btn fsa-btn--secondary">Label</button>

```html
<button class="fsa-btn fsa-btn--secondary">Label</button>
```

### Tertiary

<button class="fsa-btn fsa-btn--tertiary">Label</button>

```html
<button class="fsa-btn fsa-btn--tertiary">Label</button>
```

### Alt

<button class="fsa-btn fsa-btn--alt">Label</button>

```html
<button class="fsa-btn fsa-btn--alt">Label</button>
```

## States

Buttons may be presented in several ways:

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--[state]">Label</button>
```

### Full-width

<button class="fsa-btn fsa-btn--primary fsa-btn--block">Label</button>

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--block">Label</button>
```

### Disabled

<button class="fsa-btn fsa-btn--primary" disabled="">Label</button>

```html
<button class="fsa-btn fsa-btn--[variation]" disabled="">Label</button>
```

### Small

<button class="fsa-btn fsa-btn--[variation] fsa-btn--small">Label</button>

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--small">Label</button>
```

### Large

<button class="fsa-btn fsa-btn--[variation] fsa-btn--large">Label</button>

```html
<button class="fsa-btn fsa-btn--[variation] fsa-btn--large">Label</button>
```

## Usage

### HTML

Button styles can be applied to nearly any **HTML** element, e.g. `<foo class="fsa-btn fsa-btn--[variant]">Label</foo>`. 99% of the time it will be a `<button>` or `<a>`

#### Button Element

<button type="button" class="fsa-btn fsa-btn--primary">label</button>

```html
<button type="button" class="fsa-btn fsa-btn--primary">label</button>
```

<a class="fsa-btn fsa-btn--primary" href="//fsa.usda.gov">label</a>

#### Anchor Element
```html
<a class="fsa-btn fsa-btn--primary" href="//fsa.usda.gov">label</a>
```

### Use When

Use buttons for the most important actions you want users to take on your site, such as "download," "sign up," or "log out."

### Don't Use When

* If you want to lead users between pages of a website. Use links instead.
* Less popular or less important actions may be visually styled as links.

### Accessibility

* Buttons should display a visible focus state when users tab to them.
* Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don't automatically know either is a usable button.
* When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

### Guidance

* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
* Make sure buttons should look clickable — use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Use sentence case for button labels.
* Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”).
* Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
* At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc).