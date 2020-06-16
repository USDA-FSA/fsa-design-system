---
layout: page
parent: "Visual Style"
title: "Size and Space"
intro: "In FPAC Applications, it is important to understand the value of size and spacing of elements themselves along with the space around the element as well."
jump_menu: true
suppress_code_toggle: true
---

<ul class="docs__attr-list docs__attr-list--open">
  <li class="docs__attr-list__item">
    <h4 class="docs__sub_style">Base</h4>
    <div class="docs__attr-list__swatch size-swatch"><span class="size-swatch__blotch size-swatch__blotch--base"></span></div>
    <ul class="docs__attr-list__attr">
      <li class="docs__attr-list__attr-item"><code>.4rem</code> (4px)</li>
      <li class="docs__attr-list__attr-item"><code>$size-base</code></li>
    </ul>
  </li>
  <li class="docs__attr-list__item">
    <h4 class="docs__sub_style">Small</h4>
    <div class="docs__attr-list__swatch size-swatch"><span class="size-swatch__blotch size-swatch__blotch--small"></span></div>
    <ul class="docs__attr-list__attr">
      <li class="docs__attr-list__attr-item"><code>.8rem</code> (8px)</li>
      <li class="docs__attr-list__attr-item"><code>$size-small</code></li>
    </ul>
  </li>
  <li class="docs__attr-list__item">
    <h4 class="docs__sub_style">Default</h4>
    <div class="docs__attr-list__swatch size-swatch"><span class="size-swatch__blotch size-swatch__blotch--default"></span></div>
    <ul class="docs__attr-list__attr">
      <li class="docs__attr-list__attr-item"><code>1.2rem</code> (12px)</li>
      <li class="docs__attr-list__attr-item"><code>$size-default</code></li>
    </ul>
  </li>
  <li class="docs__attr-list__item">
    <h4 class="docs__sub_style">Medium</h4>
    <div class="docs__attr-list__swatch size-swatch"><span class="size-swatch__blotch size-swatch__blotch--medium"></span></div>
    <ul class="docs__attr-list__attr">
      <li class="docs__attr-list__attr-item"><code>2.4rem</code> (24px)</li>
      <li class="docs__attr-list__attr-item"><code>$size-medium</code></li>
    </ul>
  </li>
  <li class="docs__attr-list__item">
    <h4 class="docs__sub_style">Large</h4>
    <div class="docs__attr-list__swatch size-swatch"><span class="size-swatch__blotch size-swatch__blotch--large"></span></div>
    <ul class="docs__attr-list__attr">
      <li class="docs__attr-list__attr-item"><code>3.6rem</code> (36px)</li>
      <li class="docs__attr-list__attr-item"><code>$size-large</code></li>
    </ul>
  </li>
  <li class="docs__attr-list__item">
    <h4 class="docs__sub_style">Extra-large</h4>
    <div class="docs__attr-list__swatch size-swatch"><span class="size-swatch__blotch size-swatch__blotch--extra-large"></span></div>
    <ul class="docs__attr-list__attr">
      <li class="docs__attr-list__attr-item"><code>4.8rem</code> (48px)</li>
      <li class="docs__attr-list__attr-item"><code>$size-extra-large</code></li>
    </ul>
  </li>
</ul>

## Spacing Variables

Spacing within the Design System is related to setting default values for CSS properties such as padding, margin, and an elements positioning on all four sides. The Design System uses a very specific size and spacing value, whose base number is 4 pixel units (`$size-base`). The number 4 is very flexible, and the Design System deliberately uses this value based on its divisibility. By using such a flexible base number for size and spacing, the Design System offers more opportunities for future growth of page layouts and components that better meet the needs of Developers.

### Spacing Example

The screenshot below demonstrates various sizing variables in an example application.


<figure>
  <style>
    .ds-sizing-swatch { display: inline-block; width: 24px; height: 24px; vertical-align: middle; background-color: white; border: 1px solid rgba(73,68,64,0.15); }
  </style>
  <figcaption class="fsa-m-b--s">
    <ul class="fsa-list--inline">
      <li><span class="ds-sizing-swatch" title="Pink" style="background-color: #f010d5;"></span> <code>$size-small</code></li>
      <li><span class="ds-sizing-swatch" title="Yellow" style="background-color: #ffc000;"></span> <code>$size-default</code></li>
      <li><span class="ds-sizing-swatch" title="Purple" style="background-color: #7030a0;"></span> <code>$size-medium</code></li>
    </ul>
  </figcaption>
  <a href="{{ site.baseurl }}img/subcategories/applications/spacing-example.png" target="_blank"><img style="border: 1px solid rgba(73,68,64,0.15)" src="{{ site.baseurl }}img/subcategories/applications/spacing-example.png" alt="Spacing example"></a>
</figure>

## White Space

The importance of "White Space" is generally understated when it comes to applications and allowing for better usability. The role of White Space can be compaired to the supporting cast whose role to to make the lead actor look good and become the focal point of the show. White Space gives the other elements of the application support by providing a decreased level of cognitive disonance and noise. In short, White Space helps make the application easier to use. While the name implies the color white, the term actually means the space not being used by the primary element or the surrounding space.

One of the best example websites that has always used white space to support the design and objectives of the site is Apple.com. They have developed an appropriate design system that includes various levels of spacing between elements to avoid any noise on the page, which typically makes that website harder to use. The size and spacing classes listed above take into account Best Practices for White Space for areas between various elements within the Design System Components.

## Related Resources

* [Utilities > Margins]({{ site.baseurl }}utilities/#margins)
* [Utilities > Padding]({{ site.baseurl }}utilities/#padding)
