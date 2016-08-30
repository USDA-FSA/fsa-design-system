---
layout: guide
parent: "Accessibility"
title: "Page Titles"
intro: "Page titles are important as they help users navigate the browser. "
---

This refers to the HTML document's `<title>` element that resides within the `<head>`, and not the page's content heading (i.e., `<h1>`).

As most users have multiple tabs open at once, it's easier to jump between pages if each page title is unique. It's also helpful to have the unique portion first, usually the name of the page.


## Testing

Check that the title shown in the tab for the page is unique and describes the page accurately:

* The title should be in plain English.
* The title should describe the website as well as the specific page being displayed by the site.

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Page Titles - FSA Design System</title>
  </head>
  <body>
    ...
  </body>
</html>

```

> The title for this page is 'Page Titles - FSA Design System'. The first half is the name of this page and the second is the name of the site.
