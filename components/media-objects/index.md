---
layout: page
parent: "Components"
title: "Media Objects"
intro: "Media Objects are a combination an image or video, paired with text-based content to one of the sides."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-media">
    <div class="fsa-media__section">
      <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
    </div>
    <div class="fsa-media__section">
      <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>
</div>

## Variations

Media Objects are styled with `class="fsa-media"`.

### Default

<div class="ds-preview">
  <div class="fsa-media">
    <div class="fsa-media__section">
      <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
    </div>
    <div class="fsa-media__section">
      <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-media">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="path/to/image.jpg" alt="image description">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum.</p>
  </div>
</div>
```

### Right

<div class="ds-preview">
  <div class="fsa-media fsa-media--right">
    <div class="fsa-media__section">
      <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
    </div>
    <div class="fsa-media__section">
      <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-media fsa-media--right">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="path/to/image.ext" alt="image description">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum.</p>
  </div>
</div>
```

### Middle

<div class="ds-preview">
  <div class="fsa-media fsa-media--middle">
    <div class="fsa-media__section">
      <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
    </div>
    <div class="fsa-media__section">
      <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-media fsa-media--middle">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="path/to/image.ext" alt="image description">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum.</p>
  </div>
</div>
```

### Bottom

<div class="ds-preview">
  <div class="fsa-media fsa-media--bottom">
    <div class="fsa-media__section">
      <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
    </div>
    <div class="fsa-media__section">
      <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-media fsa-media--bottom">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="path/to/image.ext" alt="image description">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum.</p>
  </div>
</div>
```

## Nesting Media Objects

Based on the layout and features of the application, it might be advantageous to utilized a nesting methodology to structure a page. Media Objects can easily be nested within the content or text-based area, represented within a DIV with `class="fsa-media__section"` applied to it.

<div class="ds-preview">
  <div class="fsa-media">
    <div class="fsa-media__section">
      <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
    </div>
    <div class="fsa-media__section">
      <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <div class="fsa-media">
        <div class="fsa-media__section">
          <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
        </div>
        <div class="fsa-media__section">
          <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <div class="fsa-media">
            <div class="fsa-media__section">
              <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
            </div>
            <div class="fsa-media__section">
              <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-media">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="path/to/image.ext" alt="image description">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum...</p>
    <div class="fsa-media">
      <div class="fsa-media__section">
        <img class="fsa-media__img" src="path/to/image.ext" alt="image description">
      </div>
      <div class="fsa-media__section">
        <p>Lorem ipsum...</p>
        <div class="fsa-media">
          <div class="fsa-media__section">
            <img class="fsa-media__img" src="path/to/image.ext" alt="image description">
          </div>
          <div class="fsa-media__section">
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Usage

### Use When

* The application requires pairing media such as an image or video with text-based content.
* You need an easy solution to update content structure using CSS classes.

### Don't Use

* As an alternative for structuring page content with the [Grid System]({{ site.baseurl }}grid-and-layout/).

## General Guidance

* Media Objects are a very quick and easy way to pair visual references to text-based content that references the media or vice versa.
