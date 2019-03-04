---
layout: page
parent: "Components"
title: "Spinbox"
intro: "A Spinbox Component provides enhanced controls for a numeric input, designed to expedite data entry."
jump_menu: true
title_label: 'Requires JavaScript'
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__1234sdfbu" name="lorem-ipsum-amount__1234sdfbu" type="number" value="10">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>

## Variations

### Default

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__hsus" name="lorem-ipsum-amount" type="number" value="10">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__hsus" name="lorem-ipsum-amount" type="number" value="10">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Align Right

<div class="ds-preview">
  <div class="fsa-spinbox fsa-spinbox--right">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__9ssd" name="lorem-ipsum-amount" type="number" value="10">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox fsa-spinbox--right">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__9ssd" name="lorem-ipsum-amount" type="number" value="10">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Small

<div class="ds-preview">
  <div class="fsa-spinbox fsa-spinbox--small">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-input--small fsa-spinbox__input" id="lorem-ipsum-amount__445648" name="lorem-ipsum-amount__445648" type="number" value="10">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox fsa-spinbox--small">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-input--small fsa-spinbox__input" id="lorem-ipsum-amount__445648" name="lorem-ipsum-amount__445648" type="number" value="10">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Large

<div class="ds-preview">
  <div class="fsa-spinbox fsa-spinbox--large">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-input--large fsa-spinbox__input" id="lorem-ipsum-amount__64539781354" name="lorem-ipsum-amount__64539781354" type="number" value="10">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox fsa-spinbox--large">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-input--large fsa-spinbox__input" id="lorem-ipsum-amount__64539781354" name="lorem-ipsum-amount__64539781354" type="number" value="10">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Step Value (`step="5"`)

The Spinbox Component allows for incrementing of data by utilizing the `step=""` attribute of the `input` element.

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__5s5s5ga4s4g" name="lorem-ipsum-amount__5s5s5ga4s4g" type="number" value="10" step="5">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__5s5s5ga4s4g" name="lorem-ipsum-amount__5s5s5ga4s4g" type="number" value="10" step="5">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Step Value with Minimum and Maximum

This example uses `step="100"` `min="-400"` `max="500"` for attributes.

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__jdj8r8cjd7777" name="lorem-ipsum-amount__jdj8r8cjd7777" type="number" value="-300" step="100" min="-400" max="500">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__jdj8r8cjd7777" name="lorem-ipsum-amount__jdj8r8cjd7777" type="number" value="-300" step="100" min="-400" max="500">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Decimal Step Value (`step=".01"`)

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__5yhsgret" name="lorem-ipsum-amount__5yhsgret" type="number" value="1.23" step=".01">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__5yhsgret" name="lorem-ipsum-amount__5yhsgret" type="number" value="1.23" step=".01">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Larger Step Values (`step="5000"`)

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__ujsjj77" name="lorem-ipsum-amount__ujsjj77" type="number" value="30000" step="5000">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__ujsjj77" name="lorem-ipsum-amount__ujsjj77" type="number" value="30000" step="5000">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

### Within a [Field]({{ site.baseurl }}components/form-fields/)

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="spinbox-example">Label</label>
    <div class="fsa-field__item">
      <div class="fsa-spinbox">
        <div class="fsa-spinbox__number">
          <input class="fsa-input fsa-spinbox__input" id="spinbox-example" aria-describedby="lorem-1234-help-2" name="spinbox-example" type="number" value="2.05" step=".01">
        </div>
        <div class="fsa-spinbox__actions" aria-hidden="true">
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
        </div>
      </div>
    </div>
    <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="spinbox-example">Label</label>
  <div class="fsa-field__item">
    <div class="fsa-spinbox">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" id="spinbox-example" aria-describedby="lorem-1234-help-2" name="spinbox-example" type="number" value="2.05" step=".01">
      </div>
      <div class="fsa-spinbox__actions" aria-hidden="true">
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
      </div>
    </div>
  </div>
  <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
</div>
```

### Disabled

<div class="ds-preview">
  <div class="fsa-spinbox">
    <div class="fsa-spinbox__number">
      <input disabled="disabled" class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount-654asdf" name="lorem-ipsum-amount-654asdf" type="number" value="10">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button disabled="disabled" tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button disabled="disabled" tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</div>
```html
<div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input disabled="disabled" class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount-654asdf" name="lorem-ipsum-amount-654asdf" type="number" value="10">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button disabled="disabled" tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button disabled="disabled" tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>
```

## Usage

### Use When

* A form requires a numeric value to be input by the User
* The User would benefit from incrementing a numeric value by a predefined amount
* The User would benefit from incrementing a numeric value that uses decimal places

### Don't Use

* With non-numeric inputs
* For input elements designed to select a day, month, or year

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* The ability to utilize larger incremental values allows for speed of entry for Users with dexterity restrictions.
* Including `tabindex="-1"` to increment/decrement buttons intentionally removes keyboard access.
* Including `aria-hidden="true"` on the Spinbox actions, intentionally suppressing visibility to screenreaders.

## General Guidance

* Will nearly always be implemented as part of a [Form Field]({{ site.baseurl }}components/form-fields/) component.
* The Spinbox Component has the unique ability to allow for both fine tuning of numeric inputs and also allowing for larger increments.
* The Spinbox is ideal for use of an input field that has prepopulated numeric data that needs to be adjusted by the User.

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

The JavaScript for the Spinbox increases or decreases the value within the input field. It calls the native `stepUp()` or `stepDown()` methods, passing the `step` attribute's value. For browsers that do not support these native methods, debug messages are implemented and will be written to the console for testing purposes.
