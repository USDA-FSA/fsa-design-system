---
layout: page
parent: "Components"
title: "Slider"
shortName: "component__slider"
intro: "The Slider component, also known as Range Input, provides..."
jump_menu: true
title_label: 'May require JavaScript'
---

<div class="ds-preview">
  <input class="fsa-slider" id="lorem-range-2229" name="lorem-range-2229" type="range" min="0" max="100" value="3" step="1">
</div>
```html
<input class="fsa-slider" id="lorem-range-2229" name="lorem-range-2229" type="range" min="0" max="100" value="90" step="1">
```

## Variations

### Full-width

<div class="ds-preview">
  <input class="fsa-slider fsa-slider--block" id="lorem-range-4453" name="lorem-range-4453" type="range" min="0" max="100" value="90" step="1">
</div>
```html
<input class="fsa-slider fsa-slider--block" id="lorem-range-4453" name="lorem-range-4453" type="range" min="0" max="100" value="90" step="1">
```

### Disabled

<div class="ds-preview">
  <input class="fsa-slider" id="lorem-range-3309" name="lorem-range-3309" type="range" min="0" max="100" value="40" step="1" disabled="">
</div>
```html
<input class="fsa-slider" id="lorem-range-3309" name="lorem-range-3309" type="range" min="0" max="100" value="40" step="1" disabled="">
```

### Vertical

<div class="ds-preview">
  <div class="fsa-slider-vertical">
    <input class="fsa-slider" id="lorem-range-2229" name="lorem-range-2229" type="range" min="0" max="100" value="30" step="10">
  </div>
</div>
```html
<div class="fsa-slider-vertical">
  <input class="fsa-slider" id="lorem-range-2229" name="lorem-range-2229" type="range" min="0" max="100" value="30" step="10">
</div>
```

### Vertical, Custom Height

<div class="ds-preview">
  <div class="fsa-slider-vertical" style="--slider-vertical-height: 10rem">
    <input class="fsa-slider" id="lorem-range-2229" name="lorem-range-2229" type="range" min="0" max="100" value="30" step="10">
  </div>
</div>
```html
<div class="fsa-slider-vertical" style="--slider-vertical-height: 10rem">
  <input class="fsa-slider" id="lorem-range-2229" name="lorem-range-2229" type="range" min="0" max="100" value="30" step="10">
</div>
```

## Examples

### With output

Combine with [Level]({{ site.baseurl }}components/level/) to arrange Slider with an `<output>` element (note [JavaScript guidance](#javascript-guidance)).

<div class="ds-preview">
  <div class="fsa-level">
    <span>
      <input class="fsa-slider fsa-slider--block" id="lorem-range-4672" name="lorem-range-4672" type="range" min="0" max="100" value="90" step="1">
    </span>
    <span><output id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">90</output></span>
  </div>
</div>
```html
<div class="fsa-level">
  <span>
    <input class="fsa-slider fsa-slider--block" id="lorem-range-4672" name="lorem-range-4672" type="range" min="0" max="100" value="90" step="1">
  </span>
  <span><output id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">90</output></span>
</div>
```

### With output, Full-width

Combine the `fsa-slider--block` variation with [Level]({{ site.baseurl }}components/level/) to arrange Slider with an `<output>` element (note [JavaScript guidance](#javascript-guidance)).

<div class="ds-preview">
  <div class="fsa-level">
    <span class="fsa-level__item--grow-auto">
      <input class="fsa-slider fsa-slider--block" id="lorem-range-4672" name="lorem-range-4672" type="range" min="0" max="100" value="9" step="1">
    </span>
    <span><output id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">9</output></span>
  </div>
</div>
```html
<div class="fsa-level">
  <span class="fsa-level__item--grow-auto">
    <input class="fsa-slider fsa-slider--block" id="lorem-range-4672" name="lorem-range-4672" type="range" min="0" max="100" value="9" step="1">
  </span>
  <span><output id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">9</output></span>
</div>
```

### Within Field component

Nested within a [Form Field]({{ site.baseurl }}components/form-fields/).

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-range-1234">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-slider fsa-field__item" id="lorem-range-1234" name="lorem-range-1234" type="range" min="0" max="10" value="3" step="1">
  </div>
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-range-7710">Label <span class="fsa-field__label-desc">Required</span></label>
    <div class="fsa-level">
      <span class="fsa-level__item--grow-auto">
        <input class="fsa-slider fsa-field__item" id="lorem-range-7710" name="lorem-range-7710" type="range" min="0" max="100" value="90" step="1">
      </span>
      <span><output id="lorem-range-ouput-7710" name="lorem-range-ouput-7710" for="lorem-range-7710">90</output></span>
    </div>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="lorem-range-7710">Label <span class="fsa-field__label-desc">Required</span></label>
  <div class="fsa-level">
    <span class="fsa-level__item--grow-auto">
      <input class="fsa-slider fsa-field__item" id="lorem-range-7710" name="lorem-range-7710" type="range" min="0" max="100" value="90" step="1">
    </span>
    <span><output id="lorem-range-ouput-7710" name="lorem-range-ouput-7710" for="lorem-range-7710">90</output></span>
  </div>
</div>
```

## JavaScript Guidance

Some [example implementations](#examples) of this component can pair with an `<output>` element to reflect its value, however JavaScript could be required to surface its approximate value to the user. Below is an example script to reflect the Slider's dynamic updated value:

<div class="ds-preview">
  <div class="fsa-level">
    <input oninput="result.value=a.value" class="fsa-slider" id="a" name="a" type="range" min="0" max="100" value="30" step="10">
    <output aria-live="polite" id="result" name="result" for="a">30</output>
  </div>
</div>

{% include scripts.about.html %}

