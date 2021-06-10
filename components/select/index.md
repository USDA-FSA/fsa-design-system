---
layout: page
parent: "Components"
type: "UI Component"
title: "Select"
shortName: "component__select"
intro: "Select a single option from a list."
relatedItems:
  - "Form Fields"
  - "Global Navigation"
  - "Search"
jump_menu: true
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

Often referred to as a "drop down" or "pull down" menu, its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <select class="fsa-select" name="Options">
    <option value="Option A" selected="selected">Option A</option>
    <option value="Option B">Option B</option>
    <option value="Option C">Option C</option>
    <option value="Option D">Option D</option>
    <option value="Option E">Option E</option>
  </select>
</div>

## Variations

The style for `<select>` components always start with `class="fsa-select"`, modifiable with one or multiple `fsa-select--[variation]`.

```html
<select class="fsa-select fsa-select--[variation]" name="Options">
  ...
</select>
```

### Default

{% capture snippet %}
<select class="fsa-select" name="Options lorem">
  <option value="Option A" selected="selected">Option A</option>
  <option value="Option B">Option B</option>
  <option value="Option C">Option C</option>
  <option value="Option D">Option D</option>
  <option value="Option E">Option E</option>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

### Full-width

{% capture snippet %}
<select class="fsa-select fsa-select--block" name="Options ipsum">
  <option value="Option A" selected="selected">Option A</option>
  <option value="Option B">Option B</option>
  <option value="Option C">Option C</option>
  <option value="Option D">Option D</option>
  <option value="Option E">Option E</option>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<select class="fsa-select fsa-select--small" name="Options dolor">
  <option value="Option A" selected="selected">Option A</option>
  <option value="Option B">Option B</option>
  <option value="Option C">Option C</option>
  <option value="Option D">Option D</option>
  <option value="Option E">Option E</option>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<select class="fsa-select fsa-select--large" name="Options sit">
  <option value="Option A" selected="selected">Option A</option>
  <option value="Option B">Option B</option>
  <option value="Option C">Option C</option>
  <option value="Option D">Option D</option>
  <option value="Option E">Option E</option>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

### Example: opt-group

`<optgroup>` allows for grouping of multiple `<option>` within a `<select>` element.

{% capture snippet %}
<select class="fsa-select" id="lealtad-de-beisbol" name="lealtad-de-beisbol">
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
    <option value="Los Angeles Dodgers" selected="selected">Los Angeles Dodgers</option>
    <option value="San Diego Padres">San Diego Padres</option>
    <option value="San Francisco Giants">San Francisco Giants</option>
  </optgroup>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

### Within a [Field]({{ site.baseurl }}components/form-fields/)

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}

## States

### Error

{% capture snippet %}
<select class="fsa-select fsa-select--error" name="Options amet">
  <option value="Option A" selected="selected">Option A</option>
  <option value="Option B">Option B</option>
  <option value="Option C">Option C</option>
  <option value="Option D">Option D</option>
  <option value="Option E">Option E</option>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

### Disabled

Disabled select components do not have a `class="fsa-select--[variation]"`, instead using the `disabled` attribute.

{% capture snippet %}
<select class="fsa-select" disabled="disabled" name="Options quis">
  <option value="Option A" selected="selected">Option A</option>
  <option value="Option B">Option B</option>
  <option value="Option C">Option C</option>
  <option value="Option D">Option D</option>
  <option value="Option E">Option E</option>
</select>
{% endcapture %}

{% include preview-and-snippet.html %}

## Responsive

Selectively override several style properties at each Media Query breakpoint.

<code>fsa-select--<strong>[property]@[breakpoint]</strong></code>, where
<code>property</code> is one of
<code>small</code>,
<code>medium</code>,
<code>large</code>,
<code>block</code>, or
<code>inline</code>, and <code>breakpoint</code> is one of
<code title="small">s</code>,
<code title="medium">m</code>,
<code title="large">l</code>, or
<code title="extra large">xl</code>

{% assign rwdSize = "phone" %}
{% assign rwdURL = "https://usda-fsa.github.io/fsa-style/demo/rwd__select.html" %}
{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.
{% endcapture %}

{% capture usage_dont %}
* The `multiple` attribute, use the [Select Multi component]({{ site.baseurl }}components/select-multi/) instead.
* If the list of options is very short. Use [radio buttons]({{ site.baseurl }}components/radio/) instead.
* If the list of options is very long. Let users type the same information into a [text input]({{ site.baseurl }}components/text-input/) that suggests possible options instead.
* If you need to allow users to select more than one option at once. Users often don’t understand how to select multiple items from the select element. Use [checkboxes]({{ site.baseurl }}components/checkbox/) instead.
* For site navigation.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the select element, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Make sure your dropdown has an accessible label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).
* Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

## General Guidance

* Test dropdowns thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.
* Avoid making options in one dropdown menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.
* When most users will (or should) pick a particular option, make it the default: `<option selected="selected">Default</option>`
* Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times, particularly if interacting with a form solely with keyboard. Auto-submission is also less accessible.

<!-- ## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet) -->
