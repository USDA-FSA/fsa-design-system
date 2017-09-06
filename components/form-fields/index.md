---
layout: page
parent: "Components"
title: "Form Fields"
intro: "Form fields are multifaceted components that allow Developers to create application forms with appropriate instructional and validation features."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-1234">Email address <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="lorem-1234" name="lorem-1234" type="email" value="">
    <span class="fsa-field__help">This is how people can contact you</span>
  </div>
</div>

## Field Class Extentions

`class="fsa-field__label"` - Used to provide the standard style and position of the label of the form element

`class="fsa-field__label-desc"` - Paired with label, label-desc can be used to indicate Required or Optional fields

`class="... fsa-field__item"` - Paired with elements using fsa classes, this class provides standardized style and position for form elements

`class="fsa-field__message"` - Used to provide validation and error messaging in standardized location

`class="fsa-field__help"` - Used to provide instructional text in a standardized location



## Variations

Below are the variations and code snippets that can be applied using `class="fsa-field"`.

### Default

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="email">Email address <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item" id="email" name="email" type="email" value="">
  <span class="fsa-field__help">This is how people can contact you</span>
</div>
```
<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="email">Email address <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="email" name="email" type="email" value="">
    <span class="fsa-field__help">This is how people can contact you</span>
  </div>
</div>

### Short

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item fsa-field__item--short" id="TheItem" name="TheItem" type="item" value="">
  <span class="fsa-field__help">Instructional message here</span>
</div>
```
<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item fsa-field__item--short" id="TheItem" name="TheItem" type="item" value="">
    <span class="fsa-field__help">Instructional message here</span>
  </div>
</div>

### Medium

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item fsa-field__item--medium" id="TheItem" name="TheItem" type="item" value="">
  <span class="fsa-field__help">Instructional message here</span>
</div>
```
<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item fsa-field__item--medium" id="TheItem" name="TheItem" type="item" value="">
    <span class="fsa-field__help">Instructional message here</span>
  </div>
</div>

### Full Width

```html
<div class="fsa-field--block">
  <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item" id="TheItem" name="TheItem" type="item" value="">
  <span class="fsa-field__help">Instructional message here</span>
</div>
```
<div class="ds-preview">
  <div class="fsa-field--block">
    <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="TheItem" name="TheItem" type="item" value="">
    <span class="fsa-field__help">Instructional message here</span>
  </div>
</div>

## States

### Error

```html
<div class="fsa-field fsa-field--error">
  <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item fsa-input--error" id="TheItem" name="TheItem" type="item" value="">
  <span class="fsa-field__help">Instructional message here</span>
  <span class="fsa-field__message">Helpful error message here</span>
</div>
```
<div class="ds-preview">
  <div class="fsa-field fsa-field--error">
    <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item fsa-input--error" id="TheItem" name="TheItem" type="item" value="">
    <span class="fsa-field__help">Instructional message here</span>
    <span class="fsa-field__message">Helpful error message here</span>
  </div>
</div>

### Positive

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item fsa-input--positive" id="TheItem" name="TheItem" type="item" value="">
  <span class="fsa-field__help">Instructional message here</span>
</div>
```
<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="TheItem">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item fsa-input--positive" id="TheItem" name="TheItem" type="item" value="">
    <span class="fsa-field__help">Instructional message here</span>
  </div>
</div>

### Error - specific field in row

```html
<div class="fsa-field fsa-field--columns fsa-field--error">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__2/3@m">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="city">City</label>
        <input class="fsa-input fsa-field__item" id="city" name="city" type="text" value="Carpinteria">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/3@m">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="st">State</label>
        <select class="fsa-select fsa-select--error fsa-field__item" aria-describedby="st--message" id="st" name="st">
          <option value="" selected></option>
          <option value="Alabama">AL</option>
          <option value="Alaska">AK</option>
          <option value="Arizona">AZ</option>
          <option value="Arkansas">AR</option>
        </select>
        <span class="fsa-field__message" id="st--message" role="alert">State is required</span>
      </div>
    </div>
  </div>
</div>
```
<div class="ds-preview">
  <div class="fsa-field fsa-field--columns fsa-field--error">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__2/3@m">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="city">City</label>
          <input class="fsa-input fsa-field__item" id="city" name="city" type="text" value="Carpinteria">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__1/3@m">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="st">State</label>
          <select class="fsa-select fsa-select--error fsa-field__item" aria-describedby="st--message" id="st" name="st">
            <option value="" selected></option>
            <option value="Alabama">AL</option>
            <option value="Alaska">AK</option>
            <option value="Arizona">AZ</option>
            <option value="Arkansas">AR</option>
          </select>
          <span class="fsa-field__message" id="st--message" role="alert">State is required</span>
        </div>
      </div>
    </div>
  </div>
</div>

## Usage

### Use When

* If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
* When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
* When users want to be able to paste in a response.
* When users need only a single line of entry.

### Don't Use

* When the value user enter are limited in amount
* When users are choosing from a specific set of options. Consider [select]({{ site.baseurl }}components/select/), [radio]({{ site.baseurl }}components/radio/), or [checkbox]({{ site.baseurl }}components/checkbox/).
* When users need to enter multiple lines of content, consider the [textarea]({{ site.baseurl }}components/textarea/) element.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the text inputs, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Do not use the `placeholder` attribute as the sole label for accessibility reasons. Form components must have an associated `<label>` with matching `for` attribute. Additionally, most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio to sufficiently serve as the sole label.
* Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a [textarea]({{ site.baseurl }}components/textarea/) instead.
* Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.
* Consider the type of content a user may enter to aid mobile device entry; mobile devices typically surface a keyboard UI attuned to the type. For example, `type="tel"` will surface a [phone keyboard](http://html5doctor.com/html5-forms-input-types/#input-tel).
* Only show error validation messages or styling after a user has interacted with a particular field; avoid significantly updating styles while a user is actively entering input.
* Do not use the `placeholder` attribute in place of a `<label>` element. Its purposes is different: the standard `<label>` describes the role of the form element; that is, it indicates what kind of information is expected. The `placeholder` attribute is typically a hint about the format the content should take. There are cases in which the placeholder attribute is not displayed to the user (e.g. when input field has a value), so the form must be understandable without it.
