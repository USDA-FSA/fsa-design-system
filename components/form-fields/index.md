---
layout: page
parent: "Components"
title: "Form Fields"
shortName: "component__form-fields"
intro: "Form fields are multifaceted components that allow Developers to create application forms with appropriate instructional and validation features."
jump_menu: true
custom_js: ["select-other.js", "datepicker-demo.js"]
title_label: 'JavaScript Included'
---

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-1234">Email address <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="lorem-1234" name="lorem-1234" aria-describedby="lorem-1234-help-1" aria-required="true" type="email" value="">
    <span class="fsa-field__help" id="lorem-1234-help-1">This is how people can contact you</span>
  </div>
</div>

## Usage

The **core nested component** of each variation and example can be one of [Text Input]({{ site.baseurl }}components/text-input/), [Textarea]({{ site.baseurl }}components/textarea/), [Checkbox]({{ site.baseurl }}components/checkbox/), [Radio]({{ site.baseurl }}components/radio/), [Select]({{ site.baseurl }}components/select/), [Select Multi]({{ site.baseurl }}components/select-multi/), or [Spinbox]({{ site.baseurl }}components/spinbox/).

Refer to each of their documentation pages for more complete usage guidelines.

## Variations and Examples

### Text

Using [Text Input]({{ site.baseurl }}components/text-input/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="TheItem2">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
    <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="TheItem2">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
  <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
</div>
```

### Text, Full Width

<div class="ds-preview">
  <div class="fsa-field fsa-field--block">
    <label class="fsa-field__label" for="TheItem5">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="TheItem5" aria-describedby="lorem-1234-help-5" aria-required="true" name="TheItem5" type="text" value="">
    <span class="fsa-field__help" id="lorem-1234-help-5">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field fsa-field--block">
  <label class="fsa-field__label" for="TheItem5">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item" id="TheItem5" aria-describedby="lorem-1234-help-5" aria-required="true" name="TheItem5" type="text" value="">
  <span class="fsa-field__help" id="lorem-1234-help-5">Instructional message here</span>
</div>
```

### Text, Custom Width

The width of `.fsa-field`'s use of `.fsa-input` defaults to the full width of its parent container (i.e. `.fsa-field`). Though it should be **rarely** necessary, its can be overridden by using the `size` attribute, which specifies the width of the `input` in number of characters. From a display perspective, one character is equivalent to `1em` (approximately `17px` wide at default font size).

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-0128">Label</label>
    <input class="fsa-input fsa-field__item" id="lorem-0128" name="lorem-0128" type="text" value="" size="4">
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="lorem-0128">Label</label>
  <input class="fsa-input fsa-field__item" id="lorem-0128" name="lorem-0128" type="text" value="" size="4">
</div>
```
<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-6719">Label</label>
    <input class="fsa-input fsa-input--block fsa-field__item" id="lorem-6719" name="lorem-6719" type="text" value="" size="14">
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="lorem-6719">Label</label>
  <input class="fsa-input fsa-input--block fsa-field__item" id="lorem-6719" name="lorem-6719" type="text" value="" size="14">
</div>
```

### Textarea

Using [Textarea]({{ site.baseurl }}components/textarea/) as core component.

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

### Textarea, Full Width

<div class="ds-preview">
  <div class="fsa-field fsa-field--block">
    <label class="fsa-field__label" for="UNIQUE-ID-yyss88xx22x2x2">Label <span class="fsa-field__label-desc">Required</span></label>
    <textarea class="fsa-textarea fsa-field__item fsa-field__item--" placeholder="Placeholder" id="UNIQUE-ID-yyss88xx22x2x2" aria-describedby="lorem-yyss88xx22x2x2-help-4" aria-required="true" name="UNIQUE-ID-yyss88xx22x2x2"></textarea>
    <span class="fsa-field__help" id="lorem-yyss88xx22x2x2-help-4">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field fsa-field--block">
  <label class="fsa-field__label" for="UNIQUE-ID-yyss88xx22x2x2">Label <span class="fsa-field__label-desc">Required</span></label>
  <textarea class="fsa-textarea fsa-field__item fsa-field__item--" placeholder="Placeholder" id="UNIQUE-ID-yyss88xx22x2x2" aria-describedby="lorem-yyss88xx22x2x2-help-4" aria-required="true" name="UNIQUE-ID-yyss88xx22x2x2"></textarea>
  <span class="fsa-field__help" id="lorem-yyss88xx22x2x2-help-4">Instructional message here</span>
</div>
```

### Checkbox List

Using [Checkboxes]({{ site.baseurl }}components/checkbox/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" id="unique-id-lorem--1234">Pies We Like</label>
    <ul class="fsa-form-list" aria-labelledby="unique-id-lorem--1234">
      <li>
        <span>
          <input class="fsa-checkbox" id="apple" type="checkbox" name="pie" checked="">
          <label for="apple">Apple</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-checkbox" id="key-lime" type="checkbox" name="pie">
          <label for="key-lime">Key Lime</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-checkbox" id="pumpkin" type="checkbox" name="pie">
          <label for="pumpkin">Pumpkin</label>
        </span>
      </li>
    </ul>
    <span class="fsa-field__help" id="lorem-yywqqq8iyxx2x2-help-8">Helpful message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" id="unique-id-lorem--1234">Pies We Like</label>
  <ul class="fsa-form-list" aria-labelledby="unique-id-lorem--1234">
    <li>
      <span>
        <input class="fsa-checkbox" id="apple" type="checkbox" name="pie" checked="">
        <label for="apple">Apple</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="key-lime" type="checkbox" name="pie">
        <label for="key-lime">Key Lime</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="pumpkin" type="checkbox" name="pie">
        <label for="pumpkin">Pumpkin</label>
      </span>
    </li>
  </ul>
</div>
```

### Radio List

Using [Radio]({{ site.baseurl }}components/radio/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" id="lorem-radio-field-1">Your Favorite Pie</label>
    <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-1">
      <li>
        <span>
          <input class="fsa-radio" id="apple-radio" type="radio" name="fav-pie-zz99">
          <label for="apple-radio">Apple</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="key-lime-radio" type="radio" name="fav-pie-zz99">
          <label for="key-lime-radio">Key Lime</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="pumpkin-radio" type="radio" name="fav-pie-zz99">
          <label for="pumpkin-radio">Pumpkin</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="none-radio" type="radio" name="fav-pie-zz99" checked>
          <label for="none-radio">None of the above</label>
        </span>
      </li>
    </ul>
    <span class="fsa-field__help" id="lorem-yyss8cytr2x2x2-help-9">Helpful message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" id="lorem-radio-field-1">Your Favorite Pie</label>
  <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-1">
    <li>
      <span>
        <input class="fsa-radio" id="apple-radio" type="radio" name="fav-pie-zz99">
        <label for="apple-radio">Apple</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="key-lime-radio" type="radio" name="fav-pie-zz99">
        <label for="key-lime-radio">Key Lime</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="pumpkin-radio" type="radio" name="fav-pie-zz99">
        <label for="pumpkin-radio">Pumpkin</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="none-radio" type="radio" name="fav-pie-zz99" checked>
        <label for="none-radio">None of the above</label>
      </span>
    </li>
  </ul>
  <span class="fsa-field__help" id="lorem-yyss8cytr2x2x2-help-9">Helpful message here</span>
</div>
```

### Select

Using [Select]({{ site.baseurl }}components/select/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">Label <span class="fsa-field__label-desc">Required</span></label>
    <select class="fsa-select fsa-field__item" id="UNIQUE-ID-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4" aria-required="true" name="UNIQUE-ID-hshhsjtext">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
    <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">Label <span class="fsa-field__label-desc">Required</span></label>
  <select class="fsa-select fsa-field__item" id="UNIQUE-ID-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4" aria-required="true" name="UNIQUE-ID-hshhsjtext">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
  <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">Instructional message here</span>
</div>
```

### Select, Full Width

<div class="ds-preview">
  <div class="fsa-field fsa-field--block">
    <label class="fsa-field__label" for="UNIQUE-ID-ssrrppou9">Label <span class="fsa-field__label-desc">Required</span></label>
    <select class="fsa-select fsa-field__item" id="UNIQUE-ID-ssrrppou9" aria-describedby="lorem-ssrrppou9-help-4" aria-required="true" name="UNIQUE-ID-ssrrppou9">
      <option value="Option A" selected="selected">Option A</option>
      <option value="Option B">Option B</option>
      <option value="Option C">Option C</option>
      <option value="Option D">Option D</option>
      <option value="Option E">Option E</option>
    </select>
    <span class="fsa-field__help" id="lorem-ssrrppou9-help-4">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="UNIQUE-ID-ssrrppou9">Label <span class="fsa-field__label-desc">Required</span></label>
  <select class="fsa-select fsa-field__item" id="UNIQUE-ID-ssrrppou9" aria-describedby="lorem-ssrrppou9-help-4" aria-required="true" name="UNIQUE-ID-ssrrppou9">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
  <span class="fsa-field__help" id="lorem-ssrrppou9-help-4">Instructional message here</span>
</div>
```

### Select Multi

Using [Select Multi]({{ site.baseurl }}components/select-multi/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">Label</label>
    <div class="fsa-select-multi fsa-field__item">
      <ul class="fsa-select-multi__list" id="UNIQUE-ID-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4">
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_one" type="checkbox" name="default-loskss4ga_one" value="One" checked="">
          <label class="fsa-select-multi__label" for="default-loskss4ga_one">One</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_two" type="checkbox" name="default-loskss4ga_two" value="Two">
          <label class="fsa-select-multi__label" for="default-loskss4ga_two">Two</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_three" type="checkbox" name="default-loskss4ga_three" value="Three" checked="">
          <label class="fsa-select-multi__label" for="default-loskss4ga_three">Three</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_four" type="checkbox" name="default-loskss4ga_four" value="Four" checked="">
          <label class="fsa-select-multi__label" for="default-loskss4ga_four">Four</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_five" type="checkbox" name="default-loskss4ga_five" value="Five">
          <label class="fsa-select-multi__label" for="default-loskss4ga_five">Five</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_six" type="checkbox" name="default-loskss4ga_six" value="Six">
          <label class="fsa-select-multi__label" for="default-loskss4ga_six">Six</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_seven" type="checkbox" name="default-loskss4ga_seven" value="Seven">
          <label class="fsa-select-multi__label" for="default-loskss4ga_seven">Seven</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_eight" type="checkbox" name="default-loskss4ga_eight" value="Eight">
          <label class="fsa-select-multi__label" for="default-loskss4ga_eight">Eight</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_nine" type="checkbox" name="default-loskss4ga_nine" value="Nine">
          <label class="fsa-select-multi__label" for="default-loskss4ga_nine">Nine</label>
        </li>
      </ul>
    </div>
    <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="UNIQUE-ID-hshhsjtext">Label</label>
  <div class="fsa-select-multi fsa-field__item">
    <ul class="fsa-select-multi__list" id="UNIQUE-ID-hshhsjtext" aria-describedby="lorem-hshhsjtext-help-4">
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_one" type="checkbox" name="default-loskss4ga_one" value="One" checked="">
        <label class="fsa-select-multi__label" for="default-loskss4ga_one">One</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_two" type="checkbox" name="default-loskss4ga_two" value="Two">
        <label class="fsa-select-multi__label" for="default-loskss4ga_two">Two</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_three" type="checkbox" name="default-loskss4ga_three" value="Three" checked="">
        <label class="fsa-select-multi__label" for="default-loskss4ga_three">Three</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_four" type="checkbox" name="default-loskss4ga_four" value="Four" checked="">
        <label class="fsa-select-multi__label" for="default-loskss4ga_four">Four</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_five" type="checkbox" name="default-loskss4ga_five" value="Five">
        <label class="fsa-select-multi__label" for="default-loskss4ga_five">Five</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_six" type="checkbox" name="default-loskss4ga_six" value="Six">
        <label class="fsa-select-multi__label" for="default-loskss4ga_six">Six</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_seven" type="checkbox" name="default-loskss4ga_seven" value="Seven">
        <label class="fsa-select-multi__label" for="default-loskss4ga_seven">Seven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_eight" type="checkbox" name="default-loskss4ga_eight" value="Eight">
        <label class="fsa-select-multi__label" for="default-loskss4ga_eight">Eight</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-loskss4ga_nine" type="checkbox" name="default-loskss4ga_nine" value="Nine">
        <label class="fsa-select-multi__label" for="default-loskss4ga_nine">Nine</label>
      </li>
    </ul>
  </div>
  <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">Instructional message here</span>
</div>
```

### Select Multi, Full Width

<div class="ds-preview">
  <div class="fsa-field fsa-field--block">
    <label class="fsa-field__label" for="UNIQUE-ID-hshmul6tihsjt">Label</label>
    <div class="fsa-select-multi fsa-field__item">
      <ul class="fsa-select-multi__list" id="UNIQUE-ID-hshmul6tihsjt" aria-describedby="lorem-hshmul6tihsjt-help-4">
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_one" type="checkbox" name="default-t9kstp31a_one" value="One" checked="">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_one">One</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_two" type="checkbox" name="default-t9kstp31a_two" value="Two">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_two">Two</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_three" type="checkbox" name="default-t9kstp31a_three" value="Three" checked="">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_three">Three</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_four" type="checkbox" name="default-t9kstp31a_four" value="Four" checked="">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_four">Four</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_five" type="checkbox" name="default-t9kstp31a_five" value="Five">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_five">Five</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_six" type="checkbox" name="default-t9kstp31a_six" value="Six">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_six">Six</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_seven" type="checkbox" name="default-t9kstp31a_seven" value="Seven">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_seven">Seven</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_eight" type="checkbox" name="default-t9kstp31a_eight" value="Eight">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_eight">Eight</label>
        </li>
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_nine" type="checkbox" name="default-t9kstp31a_nine" value="Nine">
          <label class="fsa-select-multi__label" for="default-t9kstp31a_nine">Nine</label>
        </li>
      </ul>
    </div>
    <span class="fsa-field__help" id="lorem-hshmul6tihsjt-help-4">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field fsa-field--block">
  <label class="fsa-field__label" for="UNIQUE-ID-hshmul6tihsjt">Label</label>
  <div class="fsa-select-multi fsa-field__item">
    <ul class="fsa-select-multi__list" id="UNIQUE-ID-hshmul6tihsjt" aria-describedby="lorem-hshmul6tihsjt-help-4">
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_one" type="checkbox" name="default-t9kstp31a_one" value="One" checked="">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_one">One</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_two" type="checkbox" name="default-t9kstp31a_two" value="Two">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_two">Two</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_three" type="checkbox" name="default-t9kstp31a_three" value="Three" checked="">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_three">Three</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_four" type="checkbox" name="default-t9kstp31a_four" value="Four" checked="">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_four">Four</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_five" type="checkbox" name="default-t9kstp31a_five" value="Five">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_five">Five</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_six" type="checkbox" name="default-t9kstp31a_six" value="Six">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_six">Six</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_seven" type="checkbox" name="default-t9kstp31a_seven" value="Seven">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_seven">Seven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_eight" type="checkbox" name="default-t9kstp31a_eight" value="Eight">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_eight">Eight</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default-t9kstp31a_nine" type="checkbox" name="default-t9kstp31a_nine" value="Nine">
        <label class="fsa-select-multi__label" for="default-t9kstp31a_nine">Nine</label>
      </li>
    </ul>
  </div>
  <span class="fsa-field__help" id="lorem-hshmul6tihsjt-help-4">Instructional message here</span>
</div>
```

### Date Picker

Using [Date Picker]({{ site.baseurl }}components/date-picker/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="date-picker-default">Date of Birth</label>
    <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-default" aria-describedby="date-picker-default__help" aria-required="true" name="date-picker-default" type="text" value="">
    <span class="fsa-field__help" id="date-picker-default__help">Example 05/14/1975</span>
  </div>
</div>

```html
<div class="fsa-field">
  <label class="fsa-field__label" for="date-picker-default">Date of Birth</label>
  <input placeholder="mm/dd/yyyy" class="fsa-input fsa-field__item" id="date-picker-default" aria-describedby="date-picker-default__help" aria-required="true" name="date-picker-default" type="text" value="">
  <span class="fsa-field__help" id="date-picker-default__help">Example 05/14/1975</span>
</div>
```


### Spinbox

Using [Spinbox]({{ site.baseurl }}components/spinbox/) as core component.

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="UNIQUE-ID-spinsa22">Label</label>
    <div class="fsa-spinbox fsa-field__item">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" type="number" value="10" id="UNIQUE-ID-spinsa22" aria-describedby="UNIQUE-ID-spinsa22-help" name="UNIQUE-ID-spinsa22">
      </div>
      <div class="fsa-spinbox__actions" aria-hidden="true">
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
      </div>
    </div>
    <span class="fsa-field__help" id="UNIQUE-ID-spinsa22-help">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="UNIQUE-ID-spinsa22">Label</label>
  <div class="fsa-spinbox fsa-field__item">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" type="number" value="10" id="UNIQUE-ID-spinsa22" aria-describedby="UNIQUE-ID-spinsa22-help" name="UNIQUE-ID-spinsa22">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
  <span class="fsa-field__help" id="UNIQUE-ID-spinsa22-help">Instructional message here</span>
</div>
```

### Spinbox, Full Width

<div class="ds-preview">
  <div class="fsa-field fsa-field--block">
    <label class="fsa-field__label" for="UNIQUE-ID-spinsawsqz">Label</label>
    <div class="fsa-spinbox fsa-field__item">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" type="number" value="10" id="UNIQUE-ID-spinsawsqz" aria-describedby="UNIQUE-ID-spinsawsqz-help" name="UNIQUE-ID-spinsawsqz">
      </div>
      <div class="fsa-spinbox__actions" aria-hidden="true">
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
      </div>
    </div>
    <span class="fsa-field__help" id="UNIQUE-ID-spinsawsqz-help">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field fsa-field--block">
  <label class="fsa-field__label" for="UNIQUE-ID-spinsawsqz">Label</label>
  <div class="fsa-spinbox fsa-field__item">
    <div class="fsa-spinbox__number">
      <input class="fsa-input fsa-spinbox__input" type="number" value="10" id="UNIQUE-ID-spinsawsqz" aria-describedby="UNIQUE-ID-spinsawsqz-help" name="UNIQUE-ID-spinsawsqz">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
  <span class="fsa-field__help" id="UNIQUE-ID-spinsawsqz-help">Instructional message here</span>
</div>
```

### Upload File

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="uploadexample02020">Upload image preview</label>
    <input placeholder="Choosie choose choose something" accept="image/png, image/jpeg, image/gif" multiple class="fsa-input fsa-field__item" id="uploadexample02020" aria-describedby="lorem-1234-02020" aria-required="true" name="uploadexample02020" type="file" value="">
    <span class="fsa-field__help" id="lorem-1234-02020">Accepted file types: PNG, JPG, GIF</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="uploadexample02020">Upload image preview</label>
  <input placeholder="Choosie choose choose something" accept="image/png, image/jpeg, image/gif" multiple class="fsa-input fsa-field__item" id="uploadexample02020" aria-describedby="lorem-1234-02020" aria-required="true" name="uploadexample02020" type="file" value="">
  <span class="fsa-field__help" id="lorem-1234-02020">Accepted file types: PNG, JPG, GIF</span>
</div>
```

### Progressive Disclosure, or "Other"

A UI Pattern for revealing an additional form field upon selection of an "Other" option (though actual label can of course be something other than... um... "other").

#### Radio

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>DEMO:</strong> Choose <em>"Other"</em> from the radio list below.</p>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" id="lorem-radio-field-33aa">Your Favorite Pie</label>
    <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-33aa">
      <li>
        <span>
          <input class="fsa-radio" id="apple-radio-33aa" type="radio" name="fav-pie">
          <label for="apple-radio-33aa">Apple</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="key-lime-radio-33aa" type="radio" name="fav-pie">
          <label for="key-lime-radio-33aa">Key Lime</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="pumpkin-radio-33aa" type="radio" name="fav-pie">
          <label for="pumpkin-radio-33aa">Pumpkin</label>
        </span>
      </li>
      <li>
        <div>
          <input class="fsa-radio" id="none-radio-33aa" type="radio" name="fav-pie">
          <label for="none-radio-33aa">Other</label>
          <div class="fsa-radio__other">
            <input class="fsa-input fsa-input--block" type="text" name="loremasdfas" value="" placeholder="e.g. Strawberry" aria-label="Other Favorite Pie">
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" id="lorem-radio-field-33aa">Your Favorite Pie</label>
  <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-33aa">
    <li>
      <span>
        <input class="fsa-radio" id="apple-radio-33aa" type="radio" name="fav-pie">
        <label for="apple-radio-33aa">Apple</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="key-lime-radio-33aa" type="radio" name="fav-pie">
        <label for="key-lime-radio-33aa">Key Lime</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="pumpkin-radio-33aa" type="radio" name="fav-pie">
        <label for="pumpkin-radio-33aa">Pumpkin</label>
      </span>
    </li>
    <li>
      <div>
        <input class="fsa-radio" id="none-radio-33aa" type="radio" name="fav-pie">
        <label for="none-radio-33aa">Other</label>
        <div class="fsa-radio__other">
          <input class="fsa-input fsa-input--block" type="text" name="loremasdfas" value="" placeholder="e.g. Strawberry" aria-label="Other Favorite Pie">
        </div>
      </div>
    </li>
  </ul>
</div>
```

#### Checkbox

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>DEMO:</strong> Choose <em>"Other"</em> from the checkbox list below.</p>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" id="unique-id-lorem--eezz">Fruit Pies you like</label>
    <ul class="fsa-form-list" aria-labelledby="unique-id-lorem--eezz">
      <li>
        <input class="fsa-checkbox" id="apple-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="apple-pie_2-eezz" checked="">
        <label for="apple-pie_2-eezz">Apple</label>
      </li>
      <li>
        <input class="fsa-checkbox" id="key-lime-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="key-lime-pie_2-eezz">
        <label for="key-lime-pie_2-eezz">Key Lime</label>
      </li>
      <li>
        <input class="fsa-checkbox" id="pumpkin-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="pumpkin-pie_2-eezz" disabled="">
        <label for="pumpkin-pie_2-eezz">Pumpkin</label>
      </li>
      <li>
        <input class="fsa-checkbox" id="other-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="other-pie_2-eezz">
        <label for="other-pie_2-eezz">Other</label>
        <div class="fsa-checkbox__other">
          <input class="fsa-input fsa-input--block" type="text" name="-eezz-eezz-eezz-eezz" value="" placeholder="e.g. Strawberry" aria-label="Other Fruit Pie you like" id="other-pie_9-eezz">
        </div>
      </li>
    </ul>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" id="unique-id-lorem--eezz">Fruit Pies you like</label>
  <ul class="fsa-form-list" aria-labelledby="unique-id-lorem--eezz">
    <li>
      <span>
        <input class="fsa-checkbox" id="apple-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="apple-pie_2-eezz" checked="">
        <label for="apple-pie_2-eezz">Apple</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="key-lime-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="key-lime-pie_2-eezz">
        <label for="key-lime-pie_2-eezz">Key Lime</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-checkbox" id="pumpkin-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="pumpkin-pie_2-eezz" disabled="">
        <label for="pumpkin-pie_2-eezz">Pumpkin</label>
      </span>
    </li>
    <li>
      <div>
        <input class="fsa-checkbox" id="other-pie_2-eezz" type="checkbox" name="boat-pie_2-eezz" value="other-pie_2-eezz">
        <label for="other-pie_2-eezz">Other</label>
        <div class="fsa-checkbox__other">
          <input class="fsa-input fsa-input--block" type="text" name="-eezz-eezz-eezz-eezz" value="" placeholder="e.g. Strawberry" aria-label="Other Fruit Pie you like" id="other-pie_9-eezz">
        </div>
      </div>
    </li>
  </ul>
</div>
```

#### Checkbox, with `textarea`

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>DEMO:</strong> Choose <em>"Other"</em> from the checkbox list below.</p>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label">Hobbies</label>
    <ul class="fsa-form-list">
      <li>
        <input class="fsa-checkbox" id="hobby-photography" type="checkbox" name="boat-pie_3" value="hobby-photography" checked="">
        <label for="hobby-photography">Photography</label>
      </li>
      <li>
        <input class="fsa-checkbox" id="hobby-cooking" type="checkbox" name="boat-pie_3" value="hobby-cooking">
        <label for="hobby-cooking">Cooking</label>
      </li>
      <li>
        <input class="fsa-checkbox" id="hobby-other" type="checkbox" name="boat-pie_3" value="hobby-other">
        <label for="hobby-other">Other</label>
        <div class="fsa-checkbox__other">
          <textarea class="fsa-textarea" name="1324hgxi" placeholder="" aria-label="Other" aria-label="Other Hobbies">Long walks on the beach, surfing, mountain biking, carpentry</textarea>
        </div>
      </li>
    </ul>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label">Hobbies</label>
  <ul class="fsa-form-list">
    <li>
      <input class="fsa-checkbox" id="hobby-photography" type="checkbox" name="boat-pie_3" value="hobby-photography" checked="">
      <label for="hobby-photography">Photography</label>
    </li>
    <li>
      <input class="fsa-checkbox" id="hobby-cooking" type="checkbox" name="boat-pie_3" value="hobby-cooking">
      <label for="hobby-cooking">Cooking</label>
    </li>
    <li>
      <input class="fsa-checkbox" id="hobby-other" type="checkbox" name="boat-pie_3" value="hobby-other">
      <label for="hobby-other">Other</label>
      <div class="fsa-checkbox__other">
        <textarea class="fsa-textarea" name="1324hgxi" placeholder="" aria-label="Other">Long walks on the beach while sipping poorly brewed Folger's dark roast</textarea>
      </div>
    </li>
  </ul>
</div>
```

#### Select

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>DEMO:</strong> Choose <em>"Other"</em> from the <code>&lt;select&gt;</code> below.</p>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="lorem-beisbol-993">Team <span class="fsa-field__label-desc">Optional</span></label>
    <select class="fsa-select fsa-field__item" id="lorem-beisbol-993" name="lorem-beisbol-993" data-behavior="select-other-demo" data-target="select-other-target">
      <option value=""></option>
      <option value="Los Angeles Angels of Anaheim">Los Angeles Angels of Anaheim</option>
      <option value="Kansas City Royals">Kansas City Royals</option>
      <option value="Los Angeles Dodgers">Los Angeles Dodgers</option>
      <option value="San Diego Padres">San Diego Padres</option>
      <option value="Mudville Nine">Mudville Nine</option>
      <option value="other">Other</option>
    </select>
    <div class="fsa-select__other" id="select-other-target" aria-hidden="true" hidden>
      <input class="fsa-input fsa-input--block" type="text" name="asdfasdf" value="" aria-label="Other team name">
    </div>
    <span class="fsa-field__help">Where does your loyalty lie?</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="lorem-beisbol-993">Team <span class="fsa-field__label-desc">Optional</span></label>
  <select class="fsa-select fsa-field__item" id="lorem-beisbol-993" name="lorem-beisbol-993">
    <optgroup label="American League West">
      <option value="Houston Astros">Houston Astros</option>
      <option value="Los Angeles Angels of Anaheim">Los Angeles Angels of Anaheim</option>
      <option value="Oakland Athletics">Oakland Athletics</option>
      <option value="Seattle Mariners">Seattle Mariners</option>
      <option value="Texas Rangers">Texas Rangers</option>
    </optgroup>
    <optgroup label="American League East" disabled="" title="Disabled group">
      <option value="Baltimore Orioles">Baltimore Orioles</option>
      <option value="Boston Red Sox">Boston Red Sox</option>
      <option value="New York Yankees">New York Yankees</option>
      <option value="Tampa Bay Rays">Tampa Bay Rays</option>
      <option value="Toronto Blue Jays">Toronto Blue Jays</option>
    </optgroup>
    <optgroup label="American League Central">
      <option value="Chicago White Sox">Chicago White Sox</option>
      <option value="Cleveland Indians">Cleveland Indians</option>
      <option value="Detroit Tigers">Detroit Tigers</option>
      <option value="Kansas City Royals">Kansas City Royals</option>
      <option value="Minnesota Twins">Minnesota Twins</option>
    </optgroup>
    <optgroup label="National League East">
      <option value="Atlanta Braves">Atlanta Braves</option>
      <option value="Miami Marlins">Miami Marlins</option>
      <option value="New York Mets">New York Mets</option>
      <option value="Philadelphia Phillies">Philadelphia Phillies</option>
      <option value="Washington Nationals">Washington Nationals</option>
    </optgroup>
    <optgroup label="National League Central">
      <option value="Chicago Cubs">Chicago Cubs</option>
      <option value="Cincinnati Reds">Cincinnati Reds</option>
      <option value="Milwaukee Brewers">Milwaukee Brewers</option>
      <option value="Pittsburgh Pirates">Pittsburgh Pirates</option>
      <option value="St. Louis Cardinals">St. Louis Cardinals</option>
    </optgroup>
    <optgroup label="National League West">
      <option value="Arizona Diamondbacks">Arizona Diamondbacks</option>
      <option value="Colorado Rockies">Colorado Rockies</option>
      <option value="Los Angeles Dodgers">Los Angeles Dodgers</option>
      <option value="San Diego Padres">San Diego Padres</option>
      <option value="San Francisco Giants">San Francisco Giants</option>
    </optgroup>
    <option value="other" selected>Other</option>
  </select>
  <div class="fsa-select__other">
    <input class="fsa-input fsa-input--block" type="text" name="asdfasdf" value="Mudville Nine" placeholder="" aria-label="Other team name">
  </div>
  <span class="fsa-field__help">Where does your loyalty lie?</span>
</div>
```

## States

All variations above have error states available by the addition of `fsa-field--error`, and will likely be paired with an `fsa-field__message` to provide clarity to the field's requirements.

Additionally, each **core nested component** may have additional selectors to denote an error state, e.g. `fsa-textarea--error`.

### Error

<div class="ds-preview">
  <div class="fsa-field fsa-field--error">
    <label class="fsa-field__label" for="TheItem6">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item fsa-input--error" id="TheItem6" aria-describedby="lorem-1234-help-6 lorem-1234-message-6" aria-required="true" name="TheItem6" type="text" value="">
    <span class="fsa-field__help" id="lorem-1234-help-6">Instructional message here</span>
    <span class="fsa-field__message" id="lorem-1234-message-6" role="alert">Helpful error message here</span>
  </div>
</div>
```html
<div class="fsa-field fsa-field--error">
  <label class="fsa-field__label" for="TheItem6">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item fsa-input--error" id="TheItem6" aria-describedby="lorem-1234-help-6 lorem-1234-message-6" aria-required="true" name="TheItem6" type="text" value="">
  <span class="fsa-field__help" id="lorem-1234-help-6">Instructional message here</span>
  <span class="fsa-field__message" id="lorem-1234-message-6" role="alert">Helpful error message here</span>
</div>
```

### Error, specific field in row

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

## Column Structure

By using `fsa-field--columns` paired with use of the [Grid System]({{ site.baseurl }}layout/grid/), you can define a consistant column structure for larger screens, while stacking on smaller screens (e.g. mobile phones).

### Example

<div class="fsa-show@m">
  <div class="fsa-alert fsa-alert--info fsa-alert--no-icon" role="alert">
    <div class="fsa-alert__body">
      <p class="fsa-alert__text fsa-text-size--2">Resize browser or view on handheld devices to view responsive behavior.</p>
    </div>
  </div>
</div>

<div class="ds-preview">
  <div class="fsa-field fsa-field--block fsa-field--columns">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-555s">Label 1A</label>
          <input class="fsa-input fsa-field__item" id="lorem-555s" name="lorem-555s" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-3344">Label 2A</label>
          <input class="fsa-input fsa-field__item" id="lorem-3344" name="lorem-3344" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__6/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-9915">Label 3A</label>
          <select class="fsa-select fsa-field__item" id="lorem-9915" name="lorem-9915">
            <option value="" selected>- Select a lorem -</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Dolor">Dolor</option>
            <option value="Sit">Sit</option>
            <option value="Amet">Amet</option>
            <option value="Consecutar">Consecutar</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="fsa-field fsa-field--block fsa-field--columns">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-6459">Label 1B</label>
          <input class="fsa-input fsa-field__item" id="lorem-6459" name="lorem-6459" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-6543">Label 2B</label>
          <input class="fsa-input fsa-field__item" id="lorem-6543" name="lorem-6543" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__6/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-0892">Label 3B</label>
          <select class="fsa-select fsa-field__item" id="lorem-0892" name="lorem-0892">
            <option value="" selected>- Select a lorem -</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Dolor">Dolor</option>
            <option value="Sit">Sit</option>
            <option value="Amet">Amet</option>
            <option value="Consecutar">Consecutar</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-field fsa-field--block fsa-field--columns">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-555s">Label 1A</label>
        <input class="fsa-input fsa-field__item" id="lorem-555s" name="lorem-555s" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-3344">Label 2A</label>
        <input class="fsa-input fsa-field__item" id="lorem-3344" name="lorem-3344" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__6/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-9915">Label 3A</label>
        <select class="fsa-select fsa-field__item" id="lorem-9915" name="lorem-9915">
          <option value="" selected>- Select a lorem -</option>
          <option value="Ipsum">Ipsum</option>
          <option value="Dolor">Dolor</option>
          <option value="Sit">Sit</option>
          <option value="Amet">Amet</option>
          <option value="Consecutar">Consecutar</option>
        </select>
      </div>
    </div>
  </div>
</div>
<div class="fsa-field fsa-field--block fsa-field--columns">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-6459">Label 1B</label>
        <input class="fsa-input fsa-field__item" id="lorem-6459" name="lorem-6459" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-6543">Label 2B</label>
        <input class="fsa-input fsa-field__item" id="lorem-6543" name="lorem-6543" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__6/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-0892">Label 3B</label>
        <select class="fsa-select fsa-field__item" id="lorem-0892" name="lorem-0892">
          <option value="" selected>- Select a lorem -</option>
          <option value="Ipsum">Ipsum</option>
          <option value="Dolor">Dolor</option>
          <option value="Sit">Sit</option>
          <option value="Amet">Amet</option>
          <option value="Consecutar">Consecutar</option>
        </select>
      </div>
    </div>
  </div>
</div>
```

### Error, specific row and column

<div class="ds-preview">
  <div class="fsa-field fsa-field--block fsa-field--columns fsa-field--error">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-4705">Label 1A</label>
          <input class="fsa-input fsa-field__item" id="lorem-4705" name="lorem-4705" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-3294">Label 2A</label>
          <input class="fsa-input fsa-input--error fsa-field__item" aria-describedby="lorem-3294--error-message" id="lorem-3294" name="lorem-3294" type="text" value="">
          <span class="fsa-field__message" id="lorem-3294--error-message" role="alert">Helpful error message</span>
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__6/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-9235">Label 3A</label>
          <select class="fsa-select fsa-field__item" id="lorem-9235" name="lorem-9235">
            <option value="" selected>- Select a lorem -</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Dolor">Dolor</option>
            <option value="Sit">Sit</option>
            <option value="Amet">Amet</option>
            <option value="Consecutar">Consecutar</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="fsa-field fsa-field--block fsa-field--columns">
    <div class="fsa-grid">
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-6556">Label 1B</label>
          <input class="fsa-input fsa-field__item" id="lorem-6556" name="lorem-6556" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__3/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-3343">Label 2B</label>
          <input class="fsa-input fsa-field__item" id="lorem-3343" name="lorem-3343" type="text" value="">
        </div>
      </div>
      <div class="fsa-grid__1 fsa-grid__6/12@s">
        <div class="fsa-field__column">
          <label class="fsa-field__label" for="lorem-0222">Label 3B</label>
          <select class="fsa-select fsa-field__item" id="lorem-0222" name="lorem-0222">
            <option value="" selected>- Select a lorem -</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Dolor">Dolor</option>
            <option value="Sit">Sit</option>
            <option value="Amet">Amet</option>
            <option value="Consecutar">Consecutar</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-field fsa-field--block fsa-field--columns fsa-field--error">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-4705">Label 1A</label>
        <input class="fsa-input fsa-field__item" id="lorem-4705" name="lorem-4705" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-3294">Label 2A</label>
        <input class="fsa-input fsa-input--error fsa-field__item" aria-describedby="lorem-3294--error-message" id="lorem-3294" name="lorem-3294" type="text" value="">
        <span class="fsa-field__message" id="lorem-3294--error-message" role="alert">Helpful error message</span>
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__6/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-9235">Label 3A</label>
        <select class="fsa-select fsa-field__item" id="lorem-9235" name="lorem-9235">
          <option value="" selected>- Select a lorem -</option>
          <option value="Ipsum">Ipsum</option>
          <option value="Dolor">Dolor</option>
          <option value="Sit">Sit</option>
          <option value="Amet">Amet</option>
          <option value="Consecutar">Consecutar</option>
        </select>
      </div>
    </div>
  </div>
</div>
<div class="fsa-field fsa-field--block fsa-field--columns">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-6556">Label 1B</label>
        <input class="fsa-input fsa-field__item" id="lorem-6556" name="lorem-6556" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__3/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-3343">Label 2B</label>
        <input class="fsa-input fsa-field__item" id="lorem-3343" name="lorem-3343" type="text" value="">
      </div>
    </div>
    <div class="fsa-grid__1 fsa-grid__6/12@s">
      <div class="fsa-field__column">
        <label class="fsa-field__label" for="lorem-0222">Label 3B</label>
        <select class="fsa-select fsa-field__item" id="lorem-0222" name="lorem-0222">
          <option value="" selected>- Select a lorem -</option>
          <option value="Ipsum">Ipsum</option>
          <option value="Dolor">Dolor</option>
          <option value="Sit">Sit</option>
          <option value="Amet">Amet</option>
          <option value="Consecutar">Consecutar</option>
        </select>
      </div>
    </div>
  </div>
</div>
```

## CSS Class Overview

<table class="fsa-table fsa-table--responsive fsa-table--responsive-horizontal">
  <thead>
    <th scope="col">Selector</th>
    <th scope="col">Description</th>
    <th scope="col">Required</th>
  </thead>
  <tbody>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__label</code></th>
      <td aria-label="Description">Provide the standard style and position of the label of the form element</td>
      <td aria-label="Required">Yes</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__label-desc</code></th>
      <td aria-label="Description"><span>Paired with <code>fsa-field__label</code>, may be used to indicate Required or Optional fields, or omitted.</span></td>
      <td aria-label="Required">No</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__item</code></th>
      <td aria-label="Description">Provides standardized style and position for form elements</td>
      <td aria-label="Required">Yes</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__help</code></th>
      <td aria-label="Description">Provides instructional text in a standardized location</td>
      <td aria-label="Required">No, though advised</td>
    </tr>
    <tr>
      <th aria-label="Selector" scope="row"><code>fsa-field__message</code></th>
      <td aria-label="Description">Provides validation and error messaging in standardized location</td>
      <td aria-label="Required">No, though advised</td>
    </tr>
  </tbody>
</table>

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the text inputs, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Do not use the `placeholder` attribute as the sole label for accessibility reasons. Form components must have an associated `<label>` with matching `for` attribute. Additionally, most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio to sufficiently serve as the sole label.
* Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.
* Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a [textarea]({{ site.baseurl }}components/textarea/) instead.
* Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.
* Consider the type of content a user may enter to aid mobile device entry; mobile devices typically surface a keyboard UI attuned to the type. For example, `type="tel"` will surface a [phone keyboard](http://html5doctor.com/html5-forms-input-types/#input-tel).
* Only show error validation messages or styling after a user has interacted with a particular field; avoid significantly updating styles while a user is actively entering input.
* Do not use the `placeholder` attribute in place of a `<label>` element. Its purposes is different: the standard `<label>` describes the role of the form element; that is, it indicates what kind of information is expected. The `placeholder` attribute is typically a hint about the format the content should take. There are cases in which the placeholder attribute is not displayed to the user (e.g. when input field has a value), so the form must be understandable without it.

