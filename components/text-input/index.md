---
layout: page
parent: "Components"
type: "UI Component"
title: "Text Input"
shortName: "component__text-input"
intro: "Enter any combination of letters, numbers, or symbols for form entry."
relatedItems:
  - "Action Bar with Table"
  - "Form Fields"
  - "Search"
  - "Spinbox"
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-combinator">
  <div class="ds-combinator__props">
    <h3 class="fsa-sr-only">Props</h3>
    <div class="fsa-field ds-combinator__item">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSize">Size</label>
      <select class="fsa-select fsa-select--small fsa-field__item" id="combinatorSize" name="combinatorSize" data-behavior="combinator-select" data-remove="fsa-input--small fsa-input--large">
        <option value="fsa-input--small">Small</option>
        <option value="" selected="selected">Medium</option>
        <option value="fsa-input--large">Large</option>
      </select>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorFill">Fill</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorFill" name="combinatorFill" data-behavior="combinator-toggle-class" value="fsa-input--fill">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorError">Error</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorError" name="combinatorError" data-behavior="combinator-toggle-class" value="fsa-input--error">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorDisabled">Disabled</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorDisabled" name="combinatorDisabled" data-behavior="combinator-toggle-disabled">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorPrefixText">Prefix Text</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorPrefixText" name="combinatorPrefixText" data-behavior="combinator-toggle-affix combinator-uncheck" data-affix-direction="prefix" data-affix-type="text" data-uncheck-target="#combinatorPrefixIcon">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorPrefixIcon">Prefix Icon</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorPrefixIcon" name="combinatorPrefixIcon" data-behavior="combinator-toggle-affix combinator-uncheck" data-affix-direction="prefix" data-affix-type="icon" data-uncheck-target="#combinatorPrefixText">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSuffixText">Suffix Text</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorSuffixText" name="combinatorSuffixText" data-behavior="combinator-toggle-affix combinator-uncheck" data-affix-direction="suffix" data-affix-type="text" data-uncheck-target="#combinatorSuffixIcon">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
    <div class="fsa-field ds-combinator__item ds-combinator__item--inline">
      <label class="fsa-field__label fsa-text--h6 ds-combinator__label" for="combinatorSuffixIcon">Suffix Icon</label>
      <label class="fsa-switch ds-combinator__switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="combinatorSuffixIcon" name="combinatorSuffixIcon" data-behavior="combinator-toggle-affix combinator-uncheck" data-affix-direction="suffix" data-affix-type="icon" data-uncheck-target="#combinatorSuffixText">
        <span class="fsa-switch__track"></span>
      </label>
    </div>
  </div>
  <div class="ds-combinator__preview">
    <h3 class="fsa-sr-only">Props Demo</h3>
    <input class="fsa-input" type="text" name="some_name2" placeholder="Placeholder" value="Text" id="combinatorTarget">
  </div>
</div>
<div class="language-html highlighter-rouge"><div class="highlight"><pre class="highlight"><code id="combinatorCodeSnippet"></code></pre></div></div>
<div id="combinatorHolder" aria-hidden="true" hidden></div>

## Variants

The style for `<input>` text components always start with `class="fsa-input"`, modifiable with one or multiple `fsa-input--[VARIANT]`.

```html
<input class="fsa-input fsa-input--[VARIANT]" type="text" name="some_name" value="">
```

### Default

{% capture snippet %}
<input class="fsa-input" type="text" name="1iuoytytesgdf" value="Text" placeholder="Placeholder">
{% endcapture %}

{% include preview-and-snippet.html %}

### Fill

{% capture snippet %}
<input class="fsa-input fsa-input--fill" type="text" name="155tj" value="Text" placeholder="Placeholder">
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<input class="fsa-input fsa-input--small" type="text" name="qwerty" value="Text" placeholder="Placeholder">
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<input class="fsa-input fsa-input--large" type="text" name="ytrewq" value="Text" placeholder="Placeholder">
{% endcapture %}

{% include preview-and-snippet.html %}

### Prefix: Text

{% capture snippet %}
<span class="fsa-affix">
  <label for="affix-example__00" class="fsa-affix__prefix" aria-hidden="true" title="Dollars">$</label>
  <input id="affix-example__00" class="fsa-input fsa-affix__item" type="text" name="some_name" value="">
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Prefix: Icon

{% capture snippet %}
<span class="fsa-affix">
  <label for="affix-example__06" class="fsa-affix__prefix" aria-hidden="true"><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg></label>
  <input id="affix-example__06" class="fsa-input fsa-affix__item" type="text" name="some_name" value="">
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Suffix: Text

{% capture snippet %}
<span class="fsa-affix">
  <input id="affix-example__12" class="fsa-input fsa-affix__item" type="text" name="some_name" value="25">
  <label for="affix-example__12" class="fsa-affix__suffix" aria-hidden="true" title="Percent">%</label>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Prefix/Suffix: Disabled

{% capture snippet %}
<span class="fsa-affix fsa-affix--disabled">
  <input id="affix-example__13" class="fsa-input fsa-affix__item" disabled="" type="text" name="some_name" value="120">
  <label for="affix-example__13" class="fsa-affix__suffix" aria-hidden="true" title="Pounds">lbs</label>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Prefix/Suffix: Readonly

{% capture snippet %}
<span class="fsa-affix fsa-affix--readonly">
  <input id="affix-example__14" class="fsa-input fsa-affix__item" readonly="" type="text" name="some_name" value="10028">
  <label for="affix-example__14" class="fsa-affix__suffix" aria-hidden="true">acres</label>
</span>
{% endcapture %}

{% include preview-and-snippet.html %}

### Within a [Field]({{ site.baseurl }}components/form-fields/)

{% capture snippet %}
<div class="fsa-field">
  <label class="fsa-field__label" for="TheItem2">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
  <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Customizing Width

Though it should be **rarely** necessary, the width of `.fsa-input` can be overridden by using the `size` attribute, which specifies the width of the `input` in number of characters. From a display perspective, one character is equivalent to `1em` (approximately `17px` wide at default font size).

{% capture snippet %}
<div class="fsa-level@l">
  <div>
    <div class="docs__code-sample"><code>size="<strong>2</strong>"</code></div>
    <input class="fsa-input" size="2" type="text" name="some_name" value="">
  </div>
  <div>
    <div class="docs__code-sample"><code>size="<strong>14</strong>"</code></div>
    <input class="fsa-input" size="14" type="text" name="some_name" value="">
  </div>
  <div>
    <div class="docs__code-sample"><code>size="<strong>55</strong>"</code></div>
    <input class="fsa-input" size="55" type="text" name="some_name" value="">
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

*The default width of an `<input class="fsa-input">` is generally `22` characters, though it can vary from browser to browser. Within a [Field]({{ site.baseurl }}components/form-fields/) it defaults to `100%` of its parent container and rarely should be overridden.

## States

### Error

{% capture snippet %}
<input class="fsa-input fsa-input--error" type="text" name="7id" value="Text">
{% endcapture %}

{% include preview-and-snippet.html %}

### Positive

{% capture snippet %}
<input class="fsa-input fsa-input--positive" type="text" name="lorem" value="Text">
{% endcapture %}

{% include preview-and-snippet.html %}

### Disabled

Disabled fields do not have a `class="fsa-input--[VARIANT]"`, instead using the `disabled` attribute.

{% capture snippet %}
<input class="fsa-input" disabled="disabled" type="text" name="1224hd9f" value="Text">
{% endcapture %}

{% include preview-and-snippet.html %}

### Readonly

Readonly fields do not have a `class="fsa-input--[VARIANT]"`, instead using the `readonly` attribute.

{% capture snippet %}
<input class="fsa-input" readonly="readonly" type="text" name="4f" value="Text">
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

Selectively override several style properties at each Media Query breakpoint

<code>fsa-select--<strong>[VARIANTS]@[BREAKPOINT]</strong></code>, where
<code>VARIANTS</code> is one or more of
<code>small</code>,
<code>medium</code>,
<code>large</code>,
<code>fill</code>, or
<code>inline</code>; and <code>BREAKPOINT</code> is one or more of of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__input.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
* When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
* When users want to be able to paste in a response.
* When users need only a single line of entry.
{% endcapture %}

{% capture usage_dont %}
* When the value user enter are limited in amount
* When users are choosing from a specific set of options. Consider [select]({{ site.baseurl }}components/select/), [radio]({{ site.baseurl }}components/radio/), or [checkbox]({{ site.baseurl }}components/checkbox/).
* When users need to enter multiple lines of content, consider the [textarea]({{ site.baseurl }}components/textarea/) element.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

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
