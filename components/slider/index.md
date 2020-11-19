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

Combine with [Level]({{ site.baseurl }}components/level/) to arrange Slider with an `<output>` element.

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

Combine the `fsa-slider--block` variation with [Level]({{ site.baseurl }}components/level/) to arrange Slider with an `<output>` element.

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

## JavaScript Guidance

Some [example implementations](#examples) of this component can pair with an `<output>` element to reflect its value, however JavaScript will be required to dynamically update its value.