---
layout: guide
parent: "Accessibility"
title: "CSS Dependence"
intro: "CSS Dependence just means site shouldn't rely on CSS to be functional or understandable."
custom_js: "css-dependence.js"
---

Often sites will use CSS to load important images for example. This is bad for several reasons. Background images can't be tagged for accessiblity and with CSS turned off they aren't shown.

The other issue that pops up with CSS dependence is content order. Sometimes, content will be arranged on screen with CSS instead of the natural code flow.

## Testing

1. Disable CSS
2. Check for missing information (images, text, etc.)
3. Check for code or other items the developer doesn't want you to see
  * Confusing elements shouldn't be present such as CSS, JavaScript, or other code, etc.
4. Check for overlapping text

## Demo

Click the button below to remove styles from this page. Note how all content is accessible by being clearly structured and understandable without styles.

<button class="fsa-btn fsa-btn--primary" type="button" data-behavior="strip-styles">Remove this page's CSS</button>
