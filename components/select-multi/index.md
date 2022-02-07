---
layout: page
parent: "Components"
type: "UI Component"
title: "Select Multi"
shortName: "component__select-multi"
intro: "Make one or more selections from structured scrollable list of otpions."
jump_menu: true
relatedItems:
  - "Checkbox"
  - "Form Fields"
  - "Radio"
title_label: 'May require JavaScript'
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

The Select Multi component provides an easy way to have a scrollable list of options to select from, while also having the option to Select All. It can be viewed as an alternate to using the [Select component]({{ site.baseurl }}components/select/).

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <div class="fsa-select-multi">
    <ul class="fsa-select-multi__list">
      <li class="fsa-select-multi__item fsa-select-multi__item--group" role="heading" aria-level="4">
        First Group
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-base_one" type="checkbox" name="opt-group-example-base_one" value="One" checked="">
        <label class="fsa-select-multi__label" for="opt-group-example-base_one">One</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-base_two" type="checkbox" name="opt-group-example-base_two" value="Two">
        <label class="fsa-select-multi__label" for="opt-group-example-base_two">Two</label>
      </li>
      <li class="fsa-select-multi__item fsa-select-multi__item--group" role="heading" aria-level="4">
        Second Group
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basehree" type="checkbox" name="opt-group-example-basehree" value="Three" checked="">
        <label class="fsa-select-multi__label" for="opt-group-example-basehree">Three</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basefour" type="checkbox" name="opt-group-example-basefour" value="Four" checked="">
        <label class="fsa-select-multi__label" for="opt-group-example-basefour">Four</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basefive" type="checkbox" name="opt-group-example-basefive" value="Five">
        <label class="fsa-select-multi__label" for="opt-group-example-basefive">Five</label>
      </li>
      <li class="fsa-select-multi__item fsa-select-multi__item--group" role="heading" aria-level="4">
        Third Group
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-base_six" type="checkbox" name="opt-group-example-base_six" value="Six">
        <label class="fsa-select-multi__label" for="opt-group-example-base_six">Six</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-baseeven" type="checkbox" name="opt-group-example-baseeven" value="Seven">
        <label class="fsa-select-multi__label" for="opt-group-example-baseeven">Seven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-baseight" type="checkbox" name="opt-group-example-baseight" value="Eight">
        <label class="fsa-select-multi__label" for="opt-group-example-baseight">Eight</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basenine" type="checkbox" name="opt-group-example-basenine" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-basenine">Nine</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-baseten" type="checkbox" name="opt-group-example-baseten" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-baseten">Ten</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-baseeleven" type="checkbox" name="opt-group-example-baseeleven" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-baseeleven">Eleven</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basetwelve" type="checkbox" name="opt-group-example-basetwelve" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-basetwelve">Twelve</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basethirteen" type="checkbox" name="opt-group-example-basethirteen" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-basethirteen">Thirteen</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basefourteen" type="checkbox" name="opt-group-example-basefourteen" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-basefourteen">Fourteen</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basefifteen" type="checkbox" name="opt-group-example-basefifteen" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-basefifteen">Fifteen</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-basesixteen" type="checkbox" name="opt-group-example-basesixteen" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-basesixteen">Sixteen</label>
      </li>
      <li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example-baseseventeen" type="checkbox" name="opt-group-example-baseseventeen" value="Nine">
        <label class="fsa-select-multi__label" for="opt-group-example-baseseventeen">Seventeen</label>
      </li>
    </ul>
  </div>
</div>

## Variants

### Default

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

### Radio

{% capture snippet %}
<div class="fsa-select-multi">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_one" type="radio" name="select_radio_example" value="One">
      <label class="fsa-select-multi__label" for="radio_default_one">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_two" type="radio" name="select_radio_example" value="Two" checked="">
      <label class="fsa-select-multi__label" for="radio_default_two">Two</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_three" type="radio" name="select_radio_example" value="Three">
      <label class="fsa-select-multi__label" for="radio_default_three">Three</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_four" type="radio" name="select_radio_example" value="Four">
      <label class="fsa-select-multi__label" for="radio_default_four">Four</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_five" type="radio" name="select_radio_example" value="Five">
      <label class="fsa-select-multi__label" for="radio_default_five">Five</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_six" type="radio" name="select_radio_example" value="Six">
      <label class="fsa-select-multi__label" for="radio_default_six">Six</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_seven" type="radio" name="select_radio_example" value="Seven">
      <label class="fsa-select-multi__label" for="radio_default_seven">Seven</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_eight" type="radio" name="select_radio_example" value="Eight">
      <label class="fsa-select-multi__label" for="radio_default_eight">Eight</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-radio fsa-select-multi__check" id="radio_default_nine" type="radio" name="select_radio_example" value="Nine">
      <label class="fsa-select-multi__label" for="radio_default_nine">Nine</label>
    </li>
  </ul>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Grouped

As this component can be an alternate to using the [Select component]({{ site.baseurl }}components/select/), this variant effectively emulates the `<optgroup>` element of a `<select>`.

{% capture snippet %}
<div class="fsa-select-multi">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item fsa-select-multi__item--group" role="heading" aria-level="4">
      First Group
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example_one" type="checkbox" name="opt-group-example_one" value="One" checked="">
      <label class="fsa-select-multi__label" for="opt-group-example_one">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example_two" type="checkbox" name="opt-group-example_two" value="Two">
      <label class="fsa-select-multi__label" for="opt-group-example_two">Two</label>
    </li>
    <li class="fsa-select-multi__item fsa-select-multi__item--group" role="heading" aria-level="4">
      Second Group
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplehree" type="checkbox" name="opt-group-examplehree" value="Three" checked="">
      <label class="fsa-select-multi__label" for="opt-group-examplehree">Three</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplefour" type="checkbox" name="opt-group-examplefour" value="Four" checked="">
      <label class="fsa-select-multi__label" for="opt-group-examplefour">Four</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplefive" type="checkbox" name="opt-group-examplefive" value="Five">
      <label class="fsa-select-multi__label" for="opt-group-examplefive">Five</label>
    </li>
    <li class="fsa-select-multi__item fsa-select-multi__item--group" role="heading" aria-level="4">
      Third Group
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-example_six" type="checkbox" name="opt-group-example_six" value="Six">
      <label class="fsa-select-multi__label" for="opt-group-example_six">Six</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-exampleeven" type="checkbox" name="opt-group-exampleeven" value="Seven">
      <label class="fsa-select-multi__label" for="opt-group-exampleeven">Seven</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-exampleight" type="checkbox" name="opt-group-exampleight" value="Eight">
      <label class="fsa-select-multi__label" for="opt-group-exampleight">Eight</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplenine" type="checkbox" name="opt-group-examplenine" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-examplenine">Nine</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-exampleten" type="checkbox" name="opt-group-exampleten" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-exampleten">Ten</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-exampleeleven" type="checkbox" name="opt-group-exampleeleven" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-exampleeleven">Eleven</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-exampletwelve" type="checkbox" name="opt-group-exampletwelve" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-exampletwelve">Twelve</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplethirteen" type="checkbox" name="opt-group-examplethirteen" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-examplethirteen">Thirteen</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplefourteen" type="checkbox" name="opt-group-examplefourteen" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-examplefourteen">Fourteen</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplefifteen" type="checkbox" name="opt-group-examplefifteen" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-examplefifteen">Fifteen</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-examplesixteen" type="checkbox" name="opt-group-examplesixteen" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-examplesixteen">Sixteen</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="opt-group-exampleseventeen" type="checkbox" name="opt-group-exampleseventeen" value="Nine">
      <label class="fsa-select-multi__label" for="opt-group-exampleseventeen">Seventeen</label>
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

### Error

{% capture snippet %}
<div class="fsa-select-multi fsa-select-multi--error">
  <ul class="fsa-select-multi__list">
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_one" type="checkbox" name="default_error_one" value="One" checked="">
      <label class="fsa-select-multi__label" for="default_error_one">One</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_two" type="checkbox" name="default_error_two" value="Two">
      <label class="fsa-select-multi__label" for="default_error_two">Two</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_three" type="checkbox" name="default_error_three" value="Three" checked="">
      <label class="fsa-select-multi__label" for="default_error_three">Three</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_four" type="checkbox" name="default_error_four" value="Four" checked="">
      <label class="fsa-select-multi__label" for="default_error_four">Four</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_five" type="checkbox" name="default_error_five" value="Five">
      <label class="fsa-select-multi__label" for="default_error_five">Five</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_six" type="checkbox" name="default_error_six" value="Six">
      <label class="fsa-select-multi__label" for="default_error_six">Six</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_seven" type="checkbox" name="default_error_seven" value="Seven">
      <label class="fsa-select-multi__label" for="default_error_seven">Seven</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_eight" type="checkbox" name="default_error_eight" value="Eight">
      <label class="fsa-select-multi__label" for="default_error_eight">Eight</label>
    </li>
    <li class="fsa-select-multi__item">
      <input class="fsa-checkbox fsa-select-multi__check" id="default_error_nine" type="checkbox" name="default_error_nine" value="Nine">
      <label class="fsa-select-multi__label" for="default_error_nine">Nine</label>
    </li>
  </ul>
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
