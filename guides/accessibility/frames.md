---
layout: guide
parent: "Accessibility"
title: "Frames"
intro: "When using frames, its important that all content contained in them is accessible."
---

## Testing

1. Identify all `frame`s / `iframe`s on a page
2. Using the keyboard, navigate to each frame to ensure content is accessible
3. Check the `title` or `name` attribute of each frame for a description of the content

## Examples

### Failure

```html
<iframe src="iframeform"></iframe>
```
<div class="ds-preview">
  <iframe src="iframeform" width="280" height="130"></iframe>
</div>

> **Fails:** This `iframe` doesn't have a title or name.

```html
<iframe src="iframeform" name='Provide an address form'></iframe>
```
<div class="ds-preview">
  <iframe src="iframeform" name='Provide an address form' width="280" height="130"></iframe>
</div>

> This `name` isn't correct

### Passes

```html
<iframe src="iframeform" title='Provide Name Form'></iframe>
```
<div class="ds-preview">
  <iframe src="iframeform" title='Provide Name Form' width="280" height="130"></iframe>
</div>

> **Passes:** Correct `title` is provided. This would also pass if this information was in a `name` attribute.
