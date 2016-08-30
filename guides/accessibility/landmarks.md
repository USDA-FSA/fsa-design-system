---
layout: guide
parent: "Accessibility"
title: "Landmarks"
intro: "Proper page layout using landmark elements."
---

All elements on a page should be contained in a <a href="https://www.w3.org/TR/wai-aria/roles#landmark_roles">landmark element</a>. This helps users of Assistive Technology (<abbr title="Assistive Technology">AT</abbr>) quickly navigate a page.

HTML5 provides built in landmark elements such as `main`, `nav`, `aside`, `header`, and `footer`. When using HTML5 elements, do not define role.

When using HTML4, assign a role via the `role` attribute on elements such as a `<div>` to define landmark elements, such as `role="banner"`.

## Testing

1. Identify content in the source code.
2. Check that all rendered content is contained by a landmark element.

## Examples

### HTML5

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sample page</title>
  </head>
  <body>
    <header>
      <h1>Site Name</h1>
    </header>
    <nav>
      <ul>
        <li>Home</li>
        <li><a href="./otherpage/">Other Page</a></li>
      </ul>
    </nav>
    <main>
      <article>
        <h2>Article Title</h2>
        <p>Here's an article</p>
      </article>
    </main>
    <footer>Footer</footer>
  </body>
</html>
```

> This page has clearly structured out key regions using the HTML5 elements `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`.

### HTML4

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sample page</title>
  </head>
  <body>
    <div role='banner' id='header'>
      <h1>Site Name</h1>
    </div>
    <div role='navigation' id='main-nav'>
      <ul>
        <li>Home</li>
        <li><a href="./otherpage/">Other Page</a></li>
      </ul>
    </div>
    <div role="main">
      <h2>Article Title</h2>
      <p>Here's an article</p>
    </div>
    <div role='contentinfo'>Footer</div>
  </body>
</html>
```

> This page has clearly structured out key regions using the `role` attribute, `role='banner'`, `role='navigation'`, and `role='contentinfo'`.
