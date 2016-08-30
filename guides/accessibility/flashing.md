---
layout: guide
parent: "Accessibility"
title: "Flashing"
intro: "As flashing can cause several issues, from seizures to motion sickness, it is strongly considered a very bad idea. If you absolutely must have a flashing element, there are a few critical things to consider."
custom_js: "flashing.js"
---

## Testing

Failure at any step constitutes a 508 compliance issue:

1. Check if you can determine the frequency of "flashing".
  * Note: Scrolling text is considered flashing for our purposes.
2. Check that the rate of flashing is less than 3hz (3 times per second), or scroll delay is set to >= 400.

## Examples

### Passes

```html
<marquee scrolldelay="400" style="border: 1px solid; padding: 8px">
  Here is a marquee, I bet you haven't seen this in a while, anyway, the scroll delay is set to 400.
</marquee>
```
<div class="pb-preview">
  <marquee scrolldelay="400" style="border: 1px solid; padding: 8px">
    Here is a marquee, I bet you haven't seen this in a while; anyway, the scroll delay is set to 400.
  </marquee>
</div>

> This is an example of marquee. The scrolldelay is set and it is equal to 400 meaning it is compliant.

### Fails

```html
<button class="fsa-btn fsa-btn--primary" type="button" id="blinkbutton">Click to see <strong>non-compliant</strong> flashing</button>:
<span class="blink" style="display:none;">This text is blinking.</span>
```
<div class="pb-preview">
  <button class="fsa-btn fsa-btn--primary" type="button" id="blinkbutton">Click to see <strong>non-compliant</strong> flashing:</button>
  <span class="blink" style="display:none;">This text is blinking.</span>
</div>

> ___Failure:___ This blinking text fails because the rate of flashing can't be determined and it's greater than 3hz.
