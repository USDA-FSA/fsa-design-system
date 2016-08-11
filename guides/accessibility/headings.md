---
layout: guide
parent: "Accessibility"
title: "Headings"
intro: "When laying out a page, headings provide a semantic way to layout sections of content. Heading elements are used by users of Assistive Technology (AT) to navigate a page quickly and to understand the structure of a page. "
---

When using headings, it is best practice to reserve `<h1>` for the most important header text on the page, with subsequent headings, `h1-h6`, identifying a clear hierarchy. For example:

```html
<h1>Page Title</h1>

<h2>Section 1</h2>
<h3>Section 1a</h3>
<h3>Section 1b</h3>

<h2>Section 2</h2>
<h3>Section 2a</h3>
<h3>Section 2b</h3>
```

## Testing

1. Identify visual 'heading' elements
2. Check that all visual 'heading' elements use an `<h1>` - `<h6>` tag
3. Verify that all sub heading elements have a higher number

## Examples

### Passes

```html
<h3>Category</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
<h4>Sub Category 1</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
<h4>Sub Category 2</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
```
<div class="pb-preview">
  <h3>Category</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h4>Sub Category 1</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h4>Sub Category 2</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
</div>

> **Passes:** This section has a main category and two sub categories. The sub categories are on the same level and as such use the the same heading element.

### Fails

```html
<h3>Category</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
<h2>Sub Category 1</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
<h5>Sub Category 2</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
```
<div class="pb-preview">
  <h3>Category</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h2>Sub Category 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h5>Sub Category 2</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
</div>

> **Fails:** This section has several issues. The first sub category has a lower value than the main category. The second sub category has skipped a heading level which while is better, this can cause confusion as its not clear if this category is the sub category of `Category` or `Sub category 1`
