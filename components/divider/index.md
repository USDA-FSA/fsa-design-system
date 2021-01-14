---
layout: page
parent: "Components"
type: "UI Component"
title: "Divider"
shortName: "component__divider"
intro: "Dividers display visual breaks between content, elements, or components."
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-divider"></div>
</div>

## Variations

### Default

{% capture snippet %}
<div class="fsa-divider"></div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Strong
{% capture snippet %}
<div class="fsa-divider fsa-divider--strong"></div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Stronger

{% capture snippet %}
<div class="fsa-divider fsa-divider--stronger"></div>
{% endcapture %}

{% include preview-and-snippet.html %}

## Examples

### Segment a raw list of elements

{% capture snippet %}
<div class="fsa-divider fsa-divider--strong"></div>
Lorem ipsum dolor sit amet
<div class="fsa-divider fsa-divider--strong"></div>
ElitLabore alias optio nisi
<div class="fsa-divider fsa-divider--strong"></div>
Voluptate iure officiis ill
<div class="fsa-divider fsa-divider--strong"></div>
Accusantium quam aspernatur
<div class="fsa-divider fsa-divider--strong"></div>
Minima alias ratione fugit
<div class="fsa-divider fsa-divider--strong"></div>
{% endcapture %}

{% include preview-and-snippet.html %}


### Segment a list

Combines with [Box]({{ site.baseurl }}layout/box/), [Level]({{ site.baseurl }}layout/level/), and [Padding Utilities]({{ site.baseurl }}utilities/#padding).

{% capture snippet %}
<div class="fsa-box fsa-p--none">
  <a href="link.html" class="fsa-level fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Organizations
    <span class="fsa-badge">1</span>
  </a>
  <div class="fsa-divider"></div>
  <a href="link.html" class="fsa-level fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Repositories
    <span class="fsa-badge">30</span>
  </a>
  <div class="fsa-divider"></div>
  <a href="link.html" class="fsa-level fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Issues
    <span class="fsa-badge">270</span>
  </a>
  <div class="fsa-divider"></div>
  <a href="link.html" class="fsa-level fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Milestones
    <span class="fsa-badge">9</span>
  </a>
  <div class="fsa-divider"></div>
  <a href="link.html" class="fsa-level fsa-level--justify-between fsa-p--xs fsa-p-l--s fsa-p-r--s">
    Projects
    <span class="fsa-badge">11</span>
  </a>
</div>
{% endcapture %}

{% include preview-and-snippet.html %}

### Add Utility Margins

Selectively combine with [Margin Utilities]({{ site.baseurl }}utilities/#margins).

{% capture snippet %}
<div class="fsa-divider fsa-m-b--xs"></div>
<div class="fsa-divider fsa-m-b--s"></div>
<div class="fsa-divider fsa-m-b--m"></div>
<div class="fsa-divider fsa-m-b--l"></div>
<div class="fsa-divider fsa-m-b--xl"></div>
<div class="fsa-divider"></div>
{% endcapture %}

{% include preview-and-snippet.html %}

