---
layout: page
parent: "Components"
title: "Switch"
shortName: "component__switch"
intro: "Toggle the state of a single setting, with its corresponding action immediately taking effect."
jump_menu: true
---

<div class="ds-preview">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox">
    <span class="fsa-switch__track"></span>
  </label>
  <label class="fsa-switch">
    <input checked type="checkbox" class="fsa-switch__checkbox">
    <span class="fsa-switch__track"></span>
  </label>
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="switch-indeterminate-example__00">
    <span class="fsa-switch__track"></span>
  </label>
  <script>
    document.getElementById("switch-indeterminate-example__00").indeterminate = true;
  </script>
</div>

The Switch component acts as a way to allow the User to toggle between two mutually exclusive options. A Switch behaves similarly to a [Checkbox]({{ site.baseurl }}components/checkbox/) component, but the affect on the system should happen immediately. One aspect of the Switch component that provides an additional state is the Inderterminate variation, which allows for an initial "unselected" state.

## Variations

Switch components are styled with `class="fsa-switch` on the `<label>` tag, and using the `class="fsa-switch__checkbox` on the `<input>` tag.

### Default

<div class="ds-preview">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="switch-example__123" name="switch-example__123">
    <span class="fsa-switch__track"></span>
  </label>
</div>
```html
<label class="fsa-switch">
  <input type="checkbox" class="fsa-switch__checkbox" id="switch-example__123" name="switch-example__123">
  <span class="fsa-switch__track"></span>
</label>
```

### Checked
<div class="ds-preview">
  <label class="fsa-switch">
    <input checked type="checkbox" class="fsa-switch__checkbox" id="switch-example__456" name="switch-example__456">
    <span class="fsa-switch__track"></span>
  </label>
</div>
```html
<label class="fsa-switch">
  <input checked type="checkbox" class="fsa-switch__checkbox" id="switch-example__456" name="switch-example__456">
  <span class="fsa-switch__track"></span>
</label>
```

### Indeterminate

The Indeterminate setting can be initiated by setting the `indeterminate` parameter to `true` on the element. For example, you can utilize JavaScript like: `document.getElementById("INPUT_ID_HERE").indeterminate = true;`

<div class="ds-preview">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="checkbox-indeterminate-example__01" name="checkbox-indeterminate-example__01">
    <span class="fsa-switch__track"></span>
  </label>
  <script>
    document.getElementById("checkbox-indeterminate-example__01").indeterminate = true;
  </script>
</div>
```html
<label class="fsa-switch">
  <input type="checkbox" class="fsa-switch__checkbox" id="checkbox-indeterminate-example__01" name="checkbox-indeterminate-example__01">
  <span class="fsa-switch__track"></span>
</label>
```

### Disabled
<div class="ds-preview">
  <label class="fsa-switch">
    <input disabled type="checkbox" class="fsa-switch__checkbox">
    <span class="fsa-switch__track"></span>
  </label>
  <label class="fsa-switch">
    <input checked disabled type="checkbox" class="fsa-switch__checkbox">
    <span class="fsa-switch__track"></span>
  </label>
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="checkbox-indeterminate-example__02" disabled>
    <span class="fsa-switch__track"></span>
  </label>
  <script>
    document.getElementById("checkbox-indeterminate-example__02").indeterminate = true;
  </script>
</div>
```html
<label class="fsa-switch">
  <input disabled type="checkbox" class="fsa-switch__checkbox">
  <span class="fsa-switch__track"></span>
</label>
<label class="fsa-switch">
  <input checked disabled type="checkbox" class="fsa-switch__checkbox">
  <span class="fsa-switch__track"></span>
</label>
<label class="fsa-switch">
  <input type="checkbox" class="fsa-switch__checkbox" id="checkbox-indeterminate-example__02" disabled>
  <span class="fsa-switch__track"></span>
</label>
```

### Default, label on the right
<div class="ds-preview">
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="switch-example__wy7" name="switch-example__wy7">
    <span class="fsa-switch__track"></span>
  </label>
  <label class="fsa-m-l--xs" for="switch-example__wy7">Label</label>
</div>
```html
<label class="fsa-switch">
  <input type="checkbox" class="fsa-switch__checkbox" id="switch-example__wy7" name="switch-example__wy7">
  <span class="fsa-switch__track"></span>
</label>
<label class="fsa-m-l--xs" for="switch-example__wy7">Label</label>
```

### Default, label on the left
<div class="ds-preview">
  <label class="fsa-m-r--xs" for="switch-example__hghg7s_1">Label on the left</label>
  <label class="fsa-switch">
    <input type="checkbox" class="fsa-switch__checkbox" id="switch-example__hghg7s_1" name="switch-example__hghg7s_1">
    <span class="fsa-switch__track"></span>
  </label>
</div>
```html
<label class="fsa-m-r--xs" for="switch-example__hghg7s_1">Label on the left</label>
<label class="fsa-switch">
  <input type="checkbox" class="fsa-switch__checkbox" id="switch-example__hghg7s_1" name="switch-example__hghg7s_1">
  <span class="fsa-switch__track"></span>
</label>
```

### Example
Using several [CSS Utilities]({{ site.baseurl }}utilities), arrange content in a vertical list and associate a `<label`> with a `.fsa-switch`.
<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__1/3@m">
      <div class="fsa-box fsa-p--s">
        <div class="fsa-clearfix">
          <div class="fsa-float--left">
            <label class="fsa-m-r--xs" for="switch-thing__01">Thing 1</label>
          </div>
          <div class="fsa-float--right">
            <label class="fsa-switch">
              <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__01" name="switch-thing__01" checked>
              <span class="fsa-switch__track"></span>
            </label>
          </div>
        </div>
        <hr class="fsa-m-t--xs fsa-m-b--xs">
        <div class="fsa-clearfix">
          <div class="fsa-float--left">
            <label class="fsa-m-r--xs" for="switch-thing__02">Thing 2</label>
          </div>
          <div class="fsa-float--right">
            <label class="fsa-switch">
              <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__02" name="switch-thing__02">
              <span class="fsa-switch__track"></span>
            </label>
          </div>
        </div>
        <hr class="fsa-m-t--xs fsa-m-b--xs">
        <div class="fsa-clearfix">
          <div class="fsa-float--left">
            <label class="fsa-m-r--xs" for="switch-thing__03">Thing 3</label>
          </div>
          <div class="fsa-float--right">
            <label class="fsa-switch">
              <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__03" name="switch-thing__03" disabled>
              <span class="fsa-switch__track"></span>
            </label>
          </div>
        </div>
        <hr class="fsa-m-t--xs fsa-m-b--xs">
        <div class="fsa-clearfix">
          <div class="fsa-float--left">
            <label class="fsa-m-r--xs" for="switch-thing__04">Thing 4</label>
          </div>
          <div class="fsa-float--right">
            <label class="fsa-switch">
              <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__04" name="switch-thing__04">
              <span class="fsa-switch__track"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/3@m">
    <div class="fsa-box fsa-p--s">
      <div class="fsa-clearfix">
        <div class="fsa-float--left">
          <label class="fsa-m-r--xs" for="switch-thing__01">Thing 1</label>
        </div>
        <div class="fsa-float--right">
          <label class="fsa-switch">
            <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__01" name="switch-thing__01" checked>
            <span class="fsa-switch__track"></span>
          </label>
        </div>
      </div>
      <hr class="fsa-m-t--xs fsa-m-b--xs">
      <div class="fsa-clearfix">
        <div class="fsa-float--left">
          <label class="fsa-m-r--xs" for="switch-thing__02">Thing 2</label>
        </div>
        <div class="fsa-float--right">
          <label class="fsa-switch">
            <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__02" name="switch-thing__02">
            <span class="fsa-switch__track"></span>
          </label>
        </div>
      </div>
      <hr class="fsa-m-t--xs fsa-m-b--xs">
      <div class="fsa-clearfix">
        <div class="fsa-float--left">
          <label class="fsa-m-r--xs" for="switch-thing__03">Thing 3</label>
        </div>
        <div class="fsa-float--right">
          <label class="fsa-switch">
            <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__03" name="switch-thing__03" disabled>
            <span class="fsa-switch__track"></span>
          </label>
        </div>
      </div>
      <hr class="fsa-m-t--xs fsa-m-b--xs">
      <div class="fsa-clearfix">
        <div class="fsa-float--left">
          <label class="fsa-m-r--xs" for="switch-thing__04">Thing 4</label>
        </div>
        <div class="fsa-float--right">
          <label class="fsa-switch">
            <input type="checkbox" class="fsa-switch__checkbox" id="switch-thing__04" name="switch-thing__04">
            <span class="fsa-switch__track"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Usage

{% capture usage_do %}
* When an Application requires the User to perform a toggle action, and affect the application immediately.
* When a setting within an application needs to be toggled between two different states.
{% endcapture %}

{% capture usage_dont %}
* Within an application form as a way to select a between 2 Options. Instead utilize a [Checkbox]({{ site.baseurl }}components/checkbox/).
* As an alternative for a [Checkbox]({{ site.baseurl }}components/checkbox/) or [Radio]({{ site.baseurl }}components/radio/) within a Form.
{% endcapture %}

{% include do-dont.html %}

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Ensure that you utilize an `<input>` with the appropriate [Checkbox]({{ site.baseurl }}components/checkbox/) setting so that Assistive Technologies can interpret the control.

## General Guidance

* A Switch Component should be used as a control within an application and provide a way to toggle between two states like a household light switch.
* The Switch Component is in use on this page above in the `Show Code` and `X-Ray` toggles, and provides a great example of how it should be used.
* The Indeterminate states is only available before a User has interacted with the Switch Component, and cannot be set to Indeterminate again.

## Related Resources

* [Checkbox]({{ site.baseurl }}components/checkbox/)
