---
layout: guide
parent: "Accessibility"
title: "Links and Repetitive Content"
intro: "Links are commonly used to quickly navigate a site when someone is using Assistive Technology (AT). Often, screen reader users won't read through an entire page to find what they are looking for, they simply move from link to link."
---

Things become problematic when links only make sense with context. Common link call-to-action language such as 'Click here' or 'Read more' doesn't make sense without visual context. It's important that we inspect FSA sites for links that lack visual context. While these links can be made more accessible by adding ```title``` or ```ARIA``` attributes, this is not ideal. The ideal method for making such links accessible, is simply by writing contextually descriptive link text from the start.

The other issue that screen reader and keyboard users frequently encounter is lengthy nav bars. A list of links and with compound menus,  nav bars can be quite lengthy to tab through. To alleviate these pains, a skip navigation link should be provided as the first link on the page which then jumps to an anchor with a ```tabindex='-1'```.

## Testing

### Unique Links

1. Identify all links on the page.
2. Identify links with the same text.
  * If they point at the different location, check for ```title``` or ```ARIA``` attributes to distinguish them.
3. Identify links with generic text ('Click here', 'Read more', etc.).
  * Check for the ```title``` or ```ARIA``` attributes to provide context or additional off-screen text.

### Links that Open a New Window
1. Identify links that open in new windows.
2. Check that ```target='_blank'```.
3. Verify that some indication is given programmatically, for example:
  *  ```<a href='link/to/page.html' target='_blank' aria-label='Opens in new window.'>```
  *  ```<a href='link/to/page.html' target='_blank' title='Opens in new window.'>```
  *  ```<a href='link/to/page.html' target='_blank'>Link <span class='sr-only'>Opens in new window.</span></a>```

### Skip Navigation

1. First compare the pages on the site for links that are repeated at the beginning of the tab order.
  * `Skip Navigation` is not needed if repetitive nav links are not used.
2. If the `Skip Navigation` link is not visible, ensure it becomes visible when it has focus.
3. Find the target of the skip navigation link:
  * Verify the target is a valid id.
  * Verify the target is after the repetive content and before meaningful content.
  * Verify the target has a ```tabindex='-1'``` or is included in the tab order (such as a link or a button).
   * This ensures the element will receive focus in Chrome and Safari.
4. Select the `Skip Navigation` .
5. If visual focus is after the repetitive content, the test is complete.
6. If there is no visual focus, tab again to verify focus is after the repetitive content.

## Examples

### Fails

```html
<a href='/fsa-design-system'>Link</a>,
<a href='keyboard'>Link</a>
```
<div class="ds-preview">
  <a href='/fsa-design-system'>Link</a>,
  <a href='keyboard'>Link</a>
</div>

> **Fails:** Each link's content, "Link," is not unique and doesn't provide sufficient information about the destination, nor are does it provide context or an alternate labeling method.

### Passes

```html
<a href='/fsa-design-system'>Home</a>,
<a href='keyboard'>Keyboard Access</a>
```
<div class="ds-preview">
  <a href='/fsa-design-system'>Home</a>,
  <a href='keyboard'>Keyboard Access</a>
</div>

> **Passes:** Each item clearly declares its destination.

```html
<a href='/fsa-design-system' title='home'>Link</a>,
<a href='keyboard' aria-label="Keyboard Access">Link</a>
```
<div class="ds-preview">
  <a href='/fsa-design-system' title='home'>Link</a>,
  <a href='keyboard' aria-label="Keyboard Access">Link</a>
</div>

> **Passes:** While each link's content is not unique, the ```title``` and ```aria-label``` attributes provide context.

### Skip Navigation

```html
<!-- HTML ---------------------------------------------
  This is the HTML for this very site. The skipnav link
  is first focusable item on each page.
-->
<body>
  <a class="skipnav" href="#main-content">Skip to main content.</a>
  <header>...</header>
  <main id="main-content" tabindex="-1">...</main>
  <footer>...</footer>
</body>
```
```scss
//// CSS //////////////////////////////////////////////
// This is the actual CSS this site uses.

.skipnav {
  position: absolute;
  top: -4.2rem;
  z-index: 100;
  background: transparent;
  color: #2f2c2a;
  left: 0;
  padding: 1rem 1.5rem;
}

.skipnav:focus {
  left: 0;
  top: 0;
  background: #fff;
  outline: 0;
}

```

> This is how the 'Skip Navigation' was achieved for this site, feel free to use its format for your own site.
