---
layout: guide
parent: "Applications"
title: "Header"
intro: "Header Introduction text"

---

## Header

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
<div class="ds-preview">
  <marquee scrolldelay="400" style="border: 1px solid; padding: 8px">
    Here is a marquee, I bet you haven't seen this in a while; anyway, the scroll delay is set to 400.
  </marquee>
</div>

> This is an example of marquee. The scrolldelay is set and it is equal to 400 meaning it is compliant.

