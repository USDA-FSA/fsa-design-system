---
layout: page
parent: "Components"
title: "Top Hat"
intro: "The FSA Header should include the Top Hat component as an indication of an official government website."
jump_menu: true
---

<div class="fsa-tophat">
  <div class="fsa-tophat__bd">
    <div class="fsa-tophat__primary">
      <span class="fsa-tophat__agency">
        <a class="fsa-tophat__link" href="//usda.gov" title="Link to USDA homepage">
          <img role="presentation" class="fsa-tophat__agency-logo" src="{{ site.baseurl }}img/usda-logo--white.svg" alt="">
          <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
          <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
        </a>
      </span>
    </div>
    <div class="fsa-tophat__secondary">
      <span class="fsa-tophat__subagency">
        <a class="fsa-tophat__link" href="//fsa.usda.gov" title="Link to FSA homepage">Farm Service Agency</a>
      </span>
    </div>
  </div>
</div>

## Variations

The Top Hat of the FSA Header shall use `class="fsa-tophat"`.

```html
<div class="fsa-tophat">
  <div class="fsa-tophat__bd">
    <div class="fsa-tophat__primary">
      <span class="fsa-tophat__agency">
        <a class="fsa-tophat__link" href="//usda.gov" title="Link to USDA homepage">
          <img role="presentation" class="fsa-tophat__agency-logo" src="img/usda-logo--white.svg" alt="">
          <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
          <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
        </a>
      </span>
    </div>
    <div class="fsa-tophat__secondary">
      <span class="fsa-tophat__subagency">
        <a class="fsa-tophat__link" href="//fsa.usda.gov" title="Link to FSA homepage">Farm Service Agency</a>
      </span>
    </div>
  </div>
</div>
```

## Usage

### Use When

* An FSA Application is viewable to a internal or public audience.
* An FSA Application needs to have a clear indication of an offical government website.

### Don't Use

* The Top Hat component on any area of the page except for the first item.

## General Guidance

* The Top Hat should be positioned above the [Application Header Component]({{ site.baseurl }}components/header-app/) when paired together in an FSA Application.
