---
layout: page
parent: "Components"
type: "UI Component"
title: "Media Object"
shortName: "component__media-objects"
intro: "Pair an object (typically an image) with text-based content to one of the sides."
jump_menu: true
suppress_kitcken_sink: true
deprecated: true
---

<div class="fsa-alert fsa-alert--warning">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Deprecated</h3>
    <p class="fsa-text-size--4"><code>fsa-media</code> has been deprecated in favor of the <a href="{{ site.baseurl }}layout/level"><code>fsa-level</code> Layout component</a>. For example, below is an implementation of Media using Level:</p>
    <div class="fsa-level fsa-level--align-top fsa-level--gutter-m">
      <div>
        <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
      </div>
      <div>
        Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </div>
    </div>
  </div>
</div>

Media Objects are a very quick and easy way to pair visual references to text-based content that references the media or vice versa. A detailed write-up explains it well at [The media object saves hundreds of lines of code](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/.).

{% capture snippet %}
<div class="fsa-media">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Variations

### Default

{% capture snippet %}
<div class="fsa-media">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Right

{% capture snippet %}
<div class="fsa-media fsa-media--right">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Middle

{% capture snippet %}
<div class="fsa-media fsa-media--middle">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Bottom

{% capture snippet %}
<div class="fsa-media fsa-media--bottom">
  <div class="fsa-media__section">
    <img class="fsa-media__img" src="{{ site.baseurl }}img/100x100.jpg" alt="">
  </div>
  <div class="fsa-media__section">
    <p>Lorem ipsum sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Nesting Media Objects

Based on the layout and features of the application, it might be advantageous to utilized a nesting methodology to structure a page. Media Objects can easily be nested within the content or text-based area, represented within a DIV with `class="fsa-media__section"` applied to it.

{% capture snippet %}
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
{% endcapture %}

{% include preview-and-snippet.html %}