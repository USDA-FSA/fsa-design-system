---
layout: guide
parent: "Accessibility"
title: "Web Text Language"
intro: "Properly identifying the language of your website's content ensures Assistive Technology (AT) correctly interacts with your site. AT has great support for a wide variety of foreign languages, but they will need to know when the language differs from the page's default."
---

## Testing

1. Open the inspector panel
1. Locate the main ```html``` tag
  * __If the ```lang``` attribute isn't set to the correct language, this is a failure.__
1. Identify any content that differs from the default language, make sure the content has its own ```lang``` attribute set with that language
  * __Any alternate language content not set constitues a failure__

## Examples

### Failure

```html
<p>Sus ojos son verdes.</p>
```

> **Fails**: This text is Spanish and lacks a ```lang``` attribute to differentiate it from the page's default language.

### Passes

```html
<p lang="es">Sus ojos son verdes.</p>
```
> **Passes:** This text passes because the ```lang="es"``` attribute identifies its content as Spanish while the page's default is English.
