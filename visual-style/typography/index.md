---
layout: page
parent: "Visual Style"
title: "Typography"
intro: "Clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. "
jump_menu: true

---


## Typefaces

We use two open-source font families: **Source Sans Pro** and **Merriweather**, both of which are designed for legibility and can beautifully adapt to a variety of visual styles.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@l">
    <h3>Source Sans Pro</h3>
    <div class="docs__font docs__font--source-sans-pro">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
    <p>Source Sans Pro is an open-source sans serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.</p>
    <p>Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.</p>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@l">
    <h3>Merriweather</h3>
    <div class="docs__font docs__font--merriweather">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
    <p>Merriweather is an open-source serif typeface designed for on-screen reading. This font is ideal for text-dense design: the letterforms have a tall x-height but remain relatively small, making for excellent readability across screen sizes while not occupying extra horizontal space.</p>
    <p>The combination of slim and thick weights gives the font family stylistic range, while conveying a desirable mix of classic, yet modern simplicity. Merriweather communicates warmth and credibility at both large and smaller font sizes.</p>
  </div>
</div>

### Fallbacks

Should the Web Fonts, Source Sans Pro or Merriweather, fail to load for any reason these are the fallback typefaces.

<div class="fsa-grid">
  <div class="fsa-grid__1 fsa-grid__1/2@ml">
    <h4>Helvetica Neue</h4>
    <div class="docs__font docs__font--helvetica">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
  <div class="fsa-grid__1 fsa-grid__1/2@ml">
    <h4>Georgia</h4>
    <div class="docs__font docs__font--georgia">
      <p class="docs__font__preview">Aa</p>
      <div class="docs__font__details">
        <p class="docs__font__item">abcdefghijklmnopqrstuvwxyz</p>
        <p class="docs__font__item">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p class="docs__font__item">1234567890</p>
        <p class="docs__font__item">!@#$%^&amp;*()-_=+[]{}|;:'&gt;&lt;,./?</p>
      </div>
    </div>
  </div>
</div>

## Headings

```html
<h1>h1 header</h1>
<h2>h2 header</h2>
<h3>h3 header</h3>
<h4>h4 header</h4>
<h5>h5 header</h5>
<h6>h6 header</h6>
```

<div class="pb-preview">
  <h1>h1 header</h1>
  <h2>h2 header</h2>
  <h3>h3 header</h3>
  <h4>h4 header</h4>
  <h5>h5 header</h5>
  <h6>h6 header</h6>
</div>

## Typographical Scale

Font size can be implemented one of two ways

1. via the `fsa-text-size--*` selector - where `*` is one `1-9`
1. via a SASS mixing via `@include font-size(*);` - where `*` is one `1-9`

<div class="pb-preview">
  <div class="fsa-ellipsis fsa-text-size--0">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--1">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--2">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--3">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--4">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--5">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--6">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--7">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--8">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
  <div class="fsa-ellipsis fsa-text-size--9">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</div>
</div>

```html
<!-- HTML -->
<element class="fsa-text-size--0">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(0); }
```
<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--0">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--0">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(1); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--1">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--1">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(2); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--2">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--2">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(3); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--3">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--3">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(4); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--4">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--4">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(5); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--5">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--5">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(6); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--6">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--6">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(7); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--7">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--7">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(8); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--8">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

```html
<!-- HTML -->
<element class="fsa-text-size--8">Yosemite National Park is set...</element>
```
```scss
// SCSS
.your-custom-selector { @include font-size(9); }
```

<div class="pb-preview"><p class="fsa-ellipsis fsa-text-size--9">Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.</p></div>

## HTML Guidance

(Content TBD)

## Accessibility

(Content TBD)

## Related

(Content TBD)
