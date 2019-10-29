---
layout: page
parent: "Components"
title: "Textarea"
intro: "Textareas can accept any combination of letters, numbers, or symbols - typically longform user entry across multiple lines."
jump_menu: true
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <textarea class="fsa-textarea" name="Name" placeholder="Placeholder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
</div>

## Variations

The style for `<textarea>` components always start with `class="fsa-textarea"`, modifiable with one or multiple `fsa-textarea--[variation]`.

```html
<textarea class="fsa-textarea fsa-textarea--[variation]" name="Name" placeholder="Placeholder"></textarea>
```

### Default

<div class="ds-preview">
  <textarea class="fsa-textarea" name="1324hgxi" placeholder="Placeholder"></textarea>
</div>
```html
<textarea class="fsa-textarea" name="1324hgxi" placeholder="Placeholder"></textarea>
```

### Small

<div class="ds-preview">
  <textarea class="fsa-textarea fsa-textarea--small" name="hj8h23gxi" placeholder="Placeholder"></textarea>
</div>
```html
<textarea class="fsa-textarea fsa-textarea--small" name="hj8h23gxi" placeholder="Placeholder"></textarea>
```

### Large

<div class="ds-preview">
  <textarea class="fsa-textarea fsa-textarea--large" name="hj8h2hjkjxi" placeholder="Placeholder"></textarea>
</div>
```html
<textarea class="fsa-textarea fsa-textarea--large" name="hj8h2hjkjxi" placeholder="Placeholder"></textarea>
```

### Within a [Field]({{ site.baseurl }}components/form-fields/)

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="UNIQUE-ID-88s8SUGg">Label <span class="fsa-field__label-desc">Required</span></label>
    <textarea class="fsa-textarea fsa-field__item" placeholder="Placeholder" id="UNIQUE-ID-88s8SUGg" aria-describedby="lorem-88s8SUGg-help-4" aria-required="true" name="UNIQUE-ID-88s8SUGg"></textarea>
    <span class="fsa-field__help" id="lorem-88s8SUGg-help-4">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="UNIQUE-ID-88s8SUGg">Label <span class="fsa-field__label-desc">Required</span></label>
  <textarea class="fsa-textarea fsa-field__item" placeholder="Placeholder" id="UNIQUE-ID-88s8SUGg" aria-describedby="lorem-88s8SUGg-help-4" aria-required="true" name="UNIQUE-ID-88s8SUGg"></textarea>
  <span class="fsa-field__help" id="lorem-88s8SUGg-help-4">Instructional message here</span>
</div>
```

### Custom height

`.fsa-textarea` has a default minimum height, modifiable via the `rows` attribute. Each row is approximately the `line-height` of its text. Overall default height may vary between browsers, though it is generally equivalent to `rows="6"`.

<div class="ds-preview">
  <textarea class="fsa-textarea" name="Name" placeholder="Placeholder" rows="13"></textarea>
</div>
```html
<textarea class="fsa-textarea" name="Name" placeholder="Placeholder" rows="13"></textarea>
```

## States

### Response: Error

<div class="ds-preview">
  <textarea class="fsa-textarea fsa-textarea--error" name="hloremjkjxi" placeholder="Placeholder"></textarea>
</div>
```html
<textarea class="fsa-textarea fsa-textarea--error" name="hloremjkjxi" placeholder="Placeholder"></textarea>
```

### Response: Positive

<div class="ds-preview">
  <textarea class="fsa-textarea fsa-textarea--positive" name="hloremipsxi" placeholder="Placeholder"></textarea>
</div>
```html
<textarea class="fsa-textarea fsa-textarea--positive" name="hloremipsxi" placeholder="Placeholder"></textarea>
```

### Disabled

Disabled fields do not have a `class="fsa-textarea--[variation]"`, instead using the `disabled` attribute.

<div class="ds-preview">
  <textarea class="fsa-textarea" disabled="disabled" name="iephg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea>
</div>
```html
<textarea class="fsa-textarea" disabled="disabled" name="iephg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea>
```

### Readonly

Readonly fields do not have a `class="fsa-textarea--[variation]"`, instead using the `readonly` attribute.

<div class="ds-preview">
  <textarea class="fsa-textarea" readonly="readonly" name="ilozuphg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea>
</div>
```html
<textarea class="fsa-textarea" readonly="readonly" name="ilozuphg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea>
```

## Usage

### Use When

* If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
* When using another type of input will make answering more difficult.
* When users want to be able to paste in a response, particularly longform text.
* When a [text input]({{ site.baseurl }}components/text-input/) field may not satisfy the amount of text a user could enter; for example, long prose values that may amount to a sentence.

### Don't Use

* When users need only enter short form content. Consider the [textarea]({{ site.baseurl }}components/text-input/) element.
* When users are choosing from a specific set of options. Consider [select]({{ site.baseurl }}components/select/), [radio]({{ site.baseurl }}components/radio/), or [checkbox]({{ site.baseurl }}components/checkbox/).


## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the textarea, ensure they continue to meet the the accessibility requirements that apply to all form controls.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.
* Only show error validation messages or stylings after a user has interacted with a particular field.
* Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

<!-- ## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet) -->
