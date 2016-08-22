---
layout: page
parent: "Elements"
title: "Textarea"
intro: "Textareas can accept any combination of letters, numbers, or symbols - typically longform user entry across multiple lines."
jump_menu: true
---

<div class="pb-preview">
  <p>
    <textarea class="fsa-textarea" name="Name" placeholder="Placeholder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
  </p>
</div>

## Variations

The style for `<textarea>` elements always start with `class="fsa-textarea"`, modifiable with one or multiple `fsa-textarea--[variation]`.

```html
<textarea class="fsa-textarea fsa-textarea--[variation]" name="Name" placeholder="Placeholder"></textarea>
```

### Default

```html
<p><textarea class="fsa-textarea" name="1324hgxi" placeholder="Placeholder"></textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea" name="1324hgxi" placeholder="Placeholder"></textarea></p>
</div>

### Small

```html
<p><textarea class="fsa-textarea fsa-textarea--small" name="hj8h23gxi" placeholder="Placeholder"></textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea fsa-textarea--small" name="hj8h23gxi" placeholder="Placeholder"></textarea></p>
</div>

### Large

```html
<p><textarea class="fsa-textarea fsa-textarea--large" name="hj8h2hjkjxi" placeholder="Placeholder"></textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea fsa-textarea--large" name="hj8h2hjkjxi" placeholder="Placeholder"></textarea></p>
</div>

### Response: Error

```html
<p><textarea class="fsa-textarea fsa-textarea--error" name="hloremjkjxi" placeholder="Placeholder"></textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea fsa-textarea--error" name="hloremjkjxi" placeholder="Placeholder"></textarea></p>
</div>

### Response: Positive

```html
<p><textarea class="fsa-textarea fsa-textarea--positive" name="hloremipsxi" placeholder="Placeholder"></textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea fsa-textarea--positive" name="hloremipsxi" placeholder="Placeholder"></textarea></p>
</div>

### Disabled

Disabled fields do not have a `class="fsa-textarea--[variation]"`, instead using the `disabled` attribute.

```html
<p><textarea class="fsa-textarea" disabled="disabled" name="iephg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea" disabled="disabled" name="iephg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea></p>
</div>

### Readonly

Readonly fields do not have a `class="fsa-textarea--[variation]"`, instead using the `readonly` attribute.

```html
<p><textarea class="fsa-textarea" readonly="readonly" name="ilozuphg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea></p>
```
<div class="pb-preview">
  <p><textarea class="fsa-textarea" readonly="readonly" name="ilozuphg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea></p>
</div>

## Usage

### Use When

* If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
* When using another type of input will make answering more difficult.
* When users want to be able to paste in a response, particularly longform text.
* When a [text input]({{ site.baseurl }}elements/text-input/) field may not satisfy the amount of text a user could enter; for example, long prose values that may amount to a sentence.

### Don't Use

* When users need only enter short form content. Consider the [textarea]({{ site.baseurl }}elements/text-input/) element.
* When users are choosing from a specific set of options. Consider [select]({{ site.baseurl }}elements/select/), [radio]({{ site.baseurl }}elements/radio/), or [checkbox]({{ site.baseurl }}elements/checkbox/).


## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the textarea, ensure they continue to meet the the accessibility requirements that apply to all form controls.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.
* Only show error validation messages or stylings after a user has interacted with a particular field.
* Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet)
