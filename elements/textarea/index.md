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

The style for `<textarea>` elements always start with `class="fsa-textarea"`, modifiable with an additional `fsa-textarea--[variation]`.

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

* asdf
* asdf
* asdf

### Don't Use When

* asdf
* asdf
* asdf

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the text inputs, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Do not use the `placeholder` attribute as the sole label for accessibility reasons. Form elements elements must have an associated `<label>` with matching `for` attribute. Additionally, most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio to sufficiently serve as the sole label.
* asdf
* asdf
* asdf

## General Guidance

* asdf
* asdf
* asdf


## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet)
