---
layout: page
parent: "Components"
type: "UI Component"
title: "Select Multi"
shortName: "component__select-multi"
intro: "Make one or more selections from structured scrollable list of otpions."
jump_menu: true
relatedItems:
  - "Form Fields"
title_label: 'May require JavaScript'
---

The Select Multi component provides an easy way to have a scrollable list of options to select from, while also having the option to Select All.

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

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

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Select All

Use `data-behavior="select-multi select-multi-all"` to trigger the JavaScript to select or unselect all options. [*See JavaScript Guidance](#javascript-guidance).

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

## States

### Disabled, all

{% capture snippet %}
<div class="fsa-select-multi fsa-select-multi--disabled" id="UNIQUE-ID-hshsj55035d00">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_one" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_one" value="One" checked="">
      <label class="fsa-select-multi__label" for="sa-default_6az73_one">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_two" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_two" value="Two">
      <label class="fsa-select-multi__label" for="sa-default_6az73_two">Two</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_three" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_three" value="Three" checked="">
      <label class="fsa-select-multi__label" for="sa-default_6az73_three">Three</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_four" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_four" value="Four" checked="">
      <label class="fsa-select-multi__label" for="sa-default_6az73_four">Four</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_five" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_five" value="Five">
      <label class="fsa-select-multi__label" for="sa-default_6az73_five">Five</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_six" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_six" value="Six">
      <label class="fsa-select-multi__label" for="sa-default_6az73_six">Six</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_seven" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_seven" value="Seven">
      <label class="fsa-select-multi__label" for="sa-default_6az73_seven">Seven</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_eight" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_eight" value="Eight">
      <label class="fsa-select-multi__label" for="sa-default_6az73_eight">Eight</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="sa-default_6az73_nine" data-behavior="select-multi" type="checkbox" name="sa-default_6az73_nine" value="Nine">
      <label class="fsa-select-multi__label" for="sa-default_6az73_nine">Nine</label>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Disabled, some

Items "One" and "Four" below are disabled.

{% capture snippet %}
<div class="fsa-select-multi">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFone" type="checkbox" name="1default_ASDFone" value="One" checked="">
      <label class="fsa-select-multi__label" for="1default_ASDFone">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFtwo" type="checkbox" name="1default_ASDFtwo" value="Two">
      <label class="fsa-select-multi__label" for="1default_ASDFtwo">Two</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFthree" type="checkbox" name="1default_ASDFthree" value="Three" checked="">
      <label class="fsa-select-multi__label" for="1default_ASDFthree">Three</label>
    </li>
    <li class="fsa-select-multi__item">
      <input disabled class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFfour" type="checkbox" name="1default_ASDFfour" value="Four" checked="">
      <label class="fsa-select-multi__label" for="1default_ASDFfour">Four</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFfive" type="checkbox" name="1default_ASDFfive" value="Five">
      <label class="fsa-select-multi__label" for="1default_ASDFfive">Five</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFsix" type="checkbox" name="1default_ASDFsix" value="Six">
      <label class="fsa-select-multi__label" for="1default_ASDFsix">Six</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFseven" type="checkbox" name="1default_ASDFseven" value="Seven">
      <label class="fsa-select-multi__label" for="1default_ASDFseven">Seven</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFeight" type="checkbox" name="1default_ASDFeight" value="Eight">
      <label class="fsa-select-multi__label" for="1default_ASDFeight">Eight</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="1default_ASDFnine" type="checkbox" name="1default_ASDFnine" value="Nine">
      <label class="fsa-select-multi__label" for="1default_ASDFnine">Nine</label>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Within a [Field]({{ site.baseurl }}components/form-fields/)

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* In place of the `multiple` attribute of a `<select>` element.
* When multiple options need to be shown to the User at one time, while all options are selectable.
* If the application requires a mechanism to select all or none of the options.
{% endcapture %}

{% capture usage_dont %}
* If the options only allow for one selection, and instead use a list of [Radio Buttons]({{ site.baseurl }}components/radio).
* If the list of options is very long. Let users type the same information into a [text input]({{ site.baseurl }}components/text-input/) that suggests possible options instead.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* If you customize the select element, ensure they continue to meet the the accessibility requirements that apply to all form controls.
* Make sure your select elements have an accessible label.

## General Guidance

* Just like with other checkbox elements, all Select Multi options require their own unique ID and a corresponding `for` attribute within the LABEL tag.
* A Unique ID is also required for the top-level DIV tag which contains the `class="fsa-select-multi"` attribute.

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

Use of the "Select all" feature uses a series of conditional statements to determine which checkbox items need to be updated based on their current state, the state of their peers, and the state of their direct parent container. The indeterminate state of a checkbox item is an indication that shows all child checkbox items are of a mix of checked and not checked. The totality of the children grouping of checkbox items is considered in this script. The indeterminate state can only be set via JavaScript, as there is no equivalent HTML-based property.

### Select Checked State

* `.indeterminate` property of parent is true if all siblings are checked
* `.checked` property is true

### Select Unchecked State

* `.indeterminate` property of parent is false if all siblings are unchecked
* `.checked` property is false

### Select Indeterminate State

* `.indeterminate` property is true if at least one child is checked and at least one child is unchecked
* `.checked` property to false
