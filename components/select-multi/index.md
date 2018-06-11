---
layout: page
parent: "Components"
title: "Select Multi"
intro: "The Select Multi component provides an easy way to have a scrollable list of options to select from, while also having the option to Select All."
jump_menu: true
title_label: 'Requires JavaScript'
---

<div class="ds-preview">
  <div class="fsa-select-multi">
    <ul class="fsa-select-multi__list">
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_one" type="checkbox" name="1default_one" value="One" checked="">
        <label class="fsa-select-multi__label" for="1default_one">One</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_two" type="checkbox" name="1default_two" value="Two">
        <label class="fsa-select-multi__label" for="1default_two">Two</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_three" type="checkbox" name="1default_three" value="Three" checked="">
        <label class="fsa-select-multi__label" for="1default_three">Three</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_four" type="checkbox" name="1default_four" value="Four" checked="">
        <label class="fsa-select-multi__label" for="1default_four">Four</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_five" type="checkbox" name="1default_five" value="Five">
        <label class="fsa-select-multi__label" for="1default_five">Five</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_six" type="checkbox" name="1default_six" value="Six">
        <label class="fsa-select-multi__label" for="1default_six">Six</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_seven" type="checkbox" name="1default_seven" value="Seven">
        <label class="fsa-select-multi__label" for="1default_seven">Seven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_eight" type="checkbox" name="1default_eight" value="Eight">
        <label class="fsa-select-multi__label" for="1default_eight">Eight</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="1default_nine" type="checkbox" name="1default_nine" value="Nine">
        <label class="fsa-select-multi__label" for="1default_nine">Nine</label>
      </li>
    </ul>
  </div>
</div>


## Variations

### Default

The style for Select Multi components always start with `class="fsa-select-multi"`.

```html
<div class="fsa-select-multi">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_one" type="checkbox" name="default_one" value="One" checked="">
      <label class="fsa-select-multi__label" for="default_one">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_two" type="checkbox" name="default_two" value="Two">
      <label class="fsa-select-multi__label" for="default_two">Two</label>
    </li>

    ...

  </ul>
</div>
```
<div class="ds-preview">
  <div class="fsa-select-multi">
    <ul class="fsa-select-multi__list">
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_one" type="checkbox" name="default_one" value="One" checked="">
        <label class="fsa-select-multi__label" for="default_one">One</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_two" type="checkbox" name="default_two" value="Two">
        <label class="fsa-select-multi__label" for="default_two">Two</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_three" type="checkbox" name="default_three" value="Three" checked="">
        <label class="fsa-select-multi__label" for="default_three">Three</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_four" type="checkbox" name="default_four" value="Four" checked="">
        <label class="fsa-select-multi__label" for="default_four">Four</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_five" type="checkbox" name="default_five" value="Five">
        <label class="fsa-select-multi__label" for="default_five">Five</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_six" type="checkbox" name="default_six" value="Six">
        <label class="fsa-select-multi__label" for="default_six">Six</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_seven" type="checkbox" name="default_seven" value="Seven">
        <label class="fsa-select-multi__label" for="default_seven">Seven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_eight" type="checkbox" name="default_eight" value="Eight">
        <label class="fsa-select-multi__label" for="default_eight">Eight</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="default_nine" type="checkbox" name="default_nine" value="Nine">
        <label class="fsa-select-multi__label" for="default_nine">Nine</label>
      </li>
    </ul>
  </div>
</div>

### Select All

Use `data-behavior="select-multi select-multi-all"` to trigger the JavaScript to select or unselect all options.

```html
<div class="fsa-select-multi" id="UNIQUE-ID-A04AE3BF636B6CBC">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="sa-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="selectall" value="ALL">
      <label class="fsa-select-multi__label" for="sa-selectall">Select all</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_one" data-behavior="select-multi" type="checkbox" name="sa-default_one" value="One" checked="">
      <label class="fsa-select-multi__label" for="sa-default_one">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_two" data-behavior="select-multi" type="checkbox" name="sa-default_two" value="Two">
      <label class="fsa-select-multi__label" for="sa-default_two">Two</label>
    </li>

    ...

    </ul>
  </div>
```

<div class="ds-preview">
  <div class="fsa-select-multi" id="UNIQUE-ID-A04AE3BF636B6CBC">
    <ul class="fsa-select-multi__list">
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="selectall" value="ALL">
        <label class="fsa-select-multi__label" for="sa-selectall">Select all</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_one" data-behavior="select-multi" type="checkbox" name="sa-default_one" value="One" checked="">
        <label class="fsa-select-multi__label" for="sa-default_one">One</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_two" data-behavior="select-multi" type="checkbox" name="sa-default_two" value="Two">
        <label class="fsa-select-multi__label" for="sa-default_two">Two</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_three" data-behavior="select-multi" type="checkbox" name="sa-default_three" value="Three" checked="">
        <label class="fsa-select-multi__label" for="sa-default_three">Three</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_four" data-behavior="select-multi" type="checkbox" name="sa-default_four" value="Four" checked="">
        <label class="fsa-select-multi__label" for="sa-default_four">Four</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_five" data-behavior="select-multi" type="checkbox" name="sa-default_five" value="Five">
        <label class="fsa-select-multi__label" for="sa-default_five">Five</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_six" data-behavior="select-multi" type="checkbox" name="sa-default_six" value="Six">
        <label class="fsa-select-multi__label" for="sa-default_six">Six</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_seven" data-behavior="select-multi" type="checkbox" name="sa-default_seven" value="Seven">
        <label class="fsa-select-multi__label" for="sa-default_seven">Seven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_eight" data-behavior="select-multi" type="checkbox" name="sa-default_eight" value="Eight">
        <label class="fsa-select-multi__label" for="sa-default_eight">Eight</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-default_nine" data-behavior="select-multi" type="checkbox" name="sa-default_nine" value="Nine">
        <label class="fsa-select-multi__label" for="sa-default_nine">Nine</label>
      </li>
    </ul>
  </div>
</div>


## Usage

### Use When

* Muliple options need to be shown to the User at one time, while all options are selectable.
* The application requires a mechanism to select all or none of the options.

### Don't Use

* If the options only allow for one selection, and instead use a list of [Radio Buttons]({{ site.baseurl }}components/radio).
* If the list of options is very long. Let users type the same information into a [text input]({{ site.baseurl }}components/text-input/) that suggests possible options instead.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* If you customize the select element, ensure they continue to meet the the accessibility requirements that apply to all form controls.
* Make sure your select elements have an accessible label.

## General Guidance

* Just like with other checkbox elements, all Select Multi options require their own unique ID and a corresponding `for` attribute within the LABEL tag.
* A Unique ID is also required for the top-level DIV tag which contains the `class="fsa-select-multi"` attribute.

## JavaScript Guidance

### Summary

<div class="OUTLINE" style="background-color:pink;padding: 12px">
  <strong>TODO</strong>: summarize in a "docs-like" manner what occurs.
</div>

{% include scripts.about.html %}
