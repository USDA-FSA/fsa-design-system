---
layout: page
parent: "Components"
type: "UI Component"
title: "Textarea"
shortName: "component__textarea"
intro: "Free-form text entry any combination of letters, numbers, or symbols."
jump_menu: true
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <textarea class="fsa-textarea" name="Name" placeholder="Placeholder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
</div>

## Variations

The style for `<textarea>` components always start with `class="fsa-textarea"`, modifiable with one or multiple `fsa-textarea--[variation]`.

```html
<textarea class="fsa-textarea fsa-textarea--[variation]" name="Name" placeholder="Placeholder"></textarea>
```

### Default

{% capture snippet %}
<textarea class="fsa-textarea" name="1324hgxi" placeholder="Placeholder"></textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<textarea class="fsa-textarea fsa-textarea--small" name="hj8h23gxi" placeholder="Placeholder"></textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<textarea class="fsa-textarea fsa-textarea--large" name="hj8h2hjkjxi" placeholder="Placeholder"></textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

### Within a [Field]({{ site.baseurl }}components/form-fields/)

{% capture snippet %}
<div class="fsa-field">
  <label class="fsa-field__label" for="UNIQUE-ID-88s8SUGg">Label <span class="fsa-field__label-desc">Required</span></label>
  <textarea class="fsa-textarea fsa-field__item" placeholder="Placeholder" id="UNIQUE-ID-88s8SUGg" aria-describedby="lorem-88s8SUGg-help-4" aria-required="true" name="UNIQUE-ID-88s8SUGg"></textarea>
  <span class="fsa-field__help" id="lorem-88s8SUGg-help-4">Instructional message here</span>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Custom height

`.fsa-textarea` has a default minimum height, modifiable via the `rows` attribute. Each row is approximately the `line-height` of its text. Overall default height may vary between browsers, though it is generally equivalent to `rows="6"`.

{% capture snippet %}
<textarea class="fsa-textarea" name="Name" placeholder="Placeholder" rows="13"></textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

## States

### Response: Error

{% capture snippet %}
<textarea class="fsa-textarea fsa-textarea--error" name="hloremjkjxi" placeholder="Placeholder"></textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

### Response: Positive

{% capture snippet %}
<textarea class="fsa-textarea fsa-textarea--positive" name="hloremipsxi" placeholder="Placeholder"></textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

### Disabled

Disabled fields do not have a `class="fsa-textarea--[variation]"`, instead using the `disabled` attribute.

{% capture snippet %}
<textarea class="fsa-textarea" disabled="disabled" name="iephg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

### Readonly

Readonly fields do not have a `class="fsa-textarea--[variation]"`, instead using the `readonly` attribute.

{% capture snippet %}
<textarea class="fsa-textarea" readonly="readonly" name="ilozuphg" placeholder="Placeholder">Lorem ipsum dolor sit amet</textarea>
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

Selectively override several style properties at each Media Query breakpoint.

<code>fsa-textarea--<strong>[property]@[breakpoint]</strong></code>, where
<code>property</code> is one of
<code>small</code>,
<code>medium</code>, or
<code>large</code>, and <code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_textarea" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait"><span class="sr-only">Portrait</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_textarea" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape"><span class="sr-only">Landscape</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_textarea" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_textarea" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__textarea.html" target="_blank" title="View in its own browser window">New window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_textarea">
      <iframe title="Responsive Demo: Textarea" src="https://usda-fsa.github.io/fsa-style/demo/rwd__textarea.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Usage

{% capture usage_do %}
* If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
* When using another type of input will make answering more difficult.
* When users want to be able to paste in a response, particularly longform text.
* When a [text input]({{ site.baseurl }}components/text-input/) field may not satisfy the amount of text a user could enter; for example, long prose values that may amount to a sentence.
{% endcapture %}

{% capture usage_dont %}
* When users need only enter short form content. Consider the [textarea]({{ site.baseurl }}components/text-input/) element.
* When users are choosing from a specific set of options. Consider [select]({{ site.baseurl }}components/select/), [radio]({{ site.baseurl }}components/radio/), or [checkbox]({{ site.baseurl }}components/checkbox/).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the textarea, ensure they continue to meet the the accessibility requirements that apply to all form controls.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.
* Only show error validation messages or stylings after a user has interacted with a particular field.
* Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)

<!-- ## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet) -->
