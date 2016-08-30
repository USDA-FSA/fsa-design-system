---
layout: guide
parent: "Accessibility"
title: "Forms"
intro: "To make forms accessible, each form element should be associated with its instructions or errors, and everything should be accessible via the keyboard."
---

## Testing

1. Identify each form element.
2. Find all instructions associated with each element.
  * __If a form element isn't programmatically associated with ALL instructions, this is a failure.__
3. Ensure all field elements are accessible via the keyboard.
  * __If the form cannot be filled out with just a keyboard, this is a failure.__
4. Check for title tags.
  * Title tags can be a substitute for labels.
  * __If the title tag provides all the related information it passes, if it provides extra information it fails.__
    * Title tags are not accessible via keyboard.

## Examples

### Passes

```html
<fieldset>
  <legend>Name</legend>
  <p>
    <label for="firstname">First</label>
    <input type='text' id='firstname'>
  </p>
  <p>
    <label for="lastname">Last</label>
    <input type='text' id='lastname'>
  </p>
</fieldset>
```
<div class="pb-preview">
  <fieldset>
    <legend>Name</legend>
    <p>
      <label for="firstname">First</label>
      <input type='text' id='firstname'>
    </p>
    <p>
      <label for="lastname">Last</label>
      <input type='text' id='lastname'>
    </p>
  </fieldset>
</div>


```html
<fieldset>
  <legend>Favorite Soup?</legend>
  <p><input type='radio' name='soup' value='pea' id='peasoup-3247696' title='Pea Soup'> <label for="peasoup-3247696">Pea Soup</label></p>
  <p><input type='radio' name='soup' value='chicken' id='chicken-3247696' title='Chicken Noodle'> <label for="chicken-3247696">Chicken Noodle</label></p>
  <p><input type='radio' name='soup' value='tomato' id='tomato-3247696' title='Tomato'> <label for="tomato-3247696">Tomato</label></p>
</fieldset>
```
<div class="pb-preview">
  <fieldset>
    <legend>Favorite Soup?</legend>
    <p><input type='radio' name='soup' value='pea' id='peasoup-3247696' title='Pea Soup'> <label for="peasoup-3247696">Pea Soup</label></p>
    <p><input type='radio' name='soup' value='chicken' id='chicken-3247696' title='Chicken Noodle'> <label for="chicken-3247696">Chicken Noodle</label></p>
    <p><input type='radio' name='soup' value='tomato' id='tomato-3247696' title='Tomato'> <label for="tomato-3247696">Tomato</label></p>
  </fieldset>
</div>

> ___Name:___ Each form element has a ```label```, and its associated with the ```for``` tag. The ```for``` tag refers to the ```id``` of the ```input```. When looking at this form, 'First' and 'Last' wouldn't make since without 'Name.' This is associated with the ```fieldset``` and ```legend```. All elements are wrapped in a ```fieldset```. There can only be one ```legend``` tag per ```fieldset```. Anything in the ```legend``` tag will be associated.

> ___Favorite Soup:___ ```Fieldset``` and ```legend``` is often used for radio buttons as its the easiest way to associate the radio buttons with the question. Notice there are no ```label```s for the radio buttons, but each button has a ```title``` tag for assistive technology to read.

### Fails

```html
<fieldset>
  <legend>Name</legend>
  <p>
    <label for="first_name">First</label>
    <input type='text' id='firstname'>
  </p>
  <p>
    <label for="1lastname">Last</label>
    <input type='text' id='1lastname'>
  </p>
</fieldset>
```

<div class="pb-preview">
  <fieldset>
    <legend>Name</legend>
    <p>
      <label for="first_name">First</label>
      <input type='text' id='firstname'>
    </p>
    <p>
      <label for="1lastname">Last</label>
      <input type='text' id='1lastname'>
    </p>
  </fieldset>
</div>

> ___Failure:___ First name label ```for``` and ```id``` don't match.

> ___Failure:___ Last name has an invalid ```id```.

```html
<fieldset>
  <legend>Favorite Soup?</legend>
  <p><span style='color:red;'>This Question Is Required</span></p>
  <p>
    <input type='radio' name='soup' value='pea' id='peasoup' title='Chick Pea Soup'>
    Pea Soup
  </p>
  <p>
    <input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>
    Chicken Noodle
  </p>
  <p>
    <input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>
    Tomato
  </p>
</fieldset>
```

<div class="pb-preview">
  <fieldset>
    <legend>Favorite Soup?</legend>
    <p><span style='color:red;'>This Question Is Required</span></p>
    <p>
      <input type='radio' name='soup' value='pea' id='peasoup' title='Chick Pea Soup'>
      Pea Soup
    </p>
    <p>
      <input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>
      Chicken Noodle
    </p>
    <p>
      <input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>
      Tomato
    </p>
  </fieldset>
</div>

> ___Failure:___ "This Question Is Required" is not associated with the form fields.

> ___Failure:___ The ```title``` tag for Pea Soup indicates it's 'Chick Pea Soup.' This information is not available to keyboard, sighted users.


### How ARIA affects form inputs

Screen readers vary on what they read and the additional information they provide by default. What follows is a broad summary of what is read, based on VoiceOver for Mac [OS X](http://www.apple.com/accessibility/osx/voiceover/) as well as [iOS](http://www.apple.com/accessibility/ios/voiceover/) (a similar process is applicable via the Google [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) service for Android).

You can test these and other scenarios with your own screen reader. If you have OS X, you can turn VoiceOver on a Mac laptop / desktop by hitting Command+F5 or on an iPhone by accessing it in the Settings menu under General.

**<abbr title="Too long, didn't read">TL;DR</abbr>**: Using `aria-label` or `aria-labeledby` will cause a screen reader to only read them and not the default label. If you want an input to read from multiple things like an error message, use `aria-labeledby` and pass it the `for` attribute of the label and any aditional `id`s you want read. For example: `aria-labeledby='car1 car_description car-error-message'`.

#### No ARIA


```html
<label for="car_1">Car</label>
<input type="text" id="car_1"/><br/>
<span id="carmakedescription_1"><em>Please enter Make and Model.</em></span>
```
<div class="pb-preview">
  <label for="car_1">Car</label>
  <input type="text" id="car_1"/><br/>
  <span id='carmakedescription'><em>Please enter Make and Model.</em></span>
</div>

> Reads just the `label` and not the description.

> Screen Reader reads input as: "Car edit text."

#### With aria-label

```html
<label for="car_2">Car</label>
<input type="text" id="car_2" aria-label="Car, please enter make and model."/><br/>
<span id="carmakedescription_2"><em>Please enter Make and Model.</em></span>
```
<div class="pb-preview">
  <label for="car_2">Car</label>
  <input type="text" id="car_2" aria-label="Car, please enter make and model." /><br/>
  <span id='carmakedescription_2'><em>Please enter Make and Model.</em></span>
</div>

> Reads the `aria-label` and doesn't read the normal `label`.

> Screen Reader reads input as: "Car, please enter Make and Model edit text."

#### With aria-labeledby pointing at `carmakedescription`

```html
<label for="car_3">Car</label>
<input type="text" id="car_3" aria-labeledby="carmakedescription_3"/><br/>
<span id='carmakedescription_3'><em>Please enter Make and Model.</em></span>
```
<div class="pb-preview">
  <label for="car_3">Car</label>
  <input type="text" id="car_3" aria-labeledby="carmakedescription_3" /><br/>
  <span id='carmakedescription_3'><em>Please enter Make and Model.</em></span>
</div>

> Reads only the `aria-labeledby` attribute and not the default label.

> Screen Reader reads input as: "Please enter Make and Model edit text."

#### With aria-labeledby pointing at `car carmakedescription`

```html
<label for="car_4">Car</label>
<input type="text" id="car_4" aria-labeledby="car_4 carmakedescription_4" /><br/>
<span id='carmakedescription_4'><em>Please enter Make and Model.</em></span>
```
<div class="pb-preview">
  <label for="car_4">Car</label>
  <input type="text" id="car_4" aria-labeledby="car_4 carmakedescription_4" /><br/>
  <span id='carmakedescription_4'><em>Please enter Make and Model.</em></span>
</div>


> Reads both labels indicated by the `aria-labeledby` attribute.

> Screen Reader reads input as: "Car please enter Make and Model edit text."

#### With aria-describedby pointing at `carmakedescription`

VoiceOver only reads the label. Jaws (if you're testing in a Windows environment) should read the description as well.

```html
<label for="car_5">Car</label>
<input type="text" id="car_5" aria-describedby="carmakedescription_5" /><br/>
<span id='carmakedescription_5'><em>Please enter Make and Model.</em></span>
```
<div class="pb-preview">
  <label for="car_5">Car</label>
  <input type="text" id="car_5" aria-describedby="carmakedescription_5" /><br/>
  <span id='carmakedescription_5'><em>Please enter Make and Model.</em></span>
</div>

> Screen Reader reads input as: "Car edit text."
