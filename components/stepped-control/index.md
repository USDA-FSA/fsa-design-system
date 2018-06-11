---
layout: page
parent: "Components"
title: "Stepped Control"
intro: ""
jump_menu: true
title_label: 'Requires JavaScript'
---

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message" role="status">
        <strong>Optional</strong> status message
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[ secondary ]</button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[ primary ]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

## Variations and Examples

### Default

### Default, with Status Message

### Default, with multiple secondary

### Directional

### Directional, with multiple actions

### Directional, with Status Message

### Directional, with Status Message and multiple actions

### Sticky + Default

### Sticky + Default, with Status Message

### Sticky + Directional

### Sticky + Directional, with Status Message

<div class="DEMO-STICKY-STEPPED-CONTROL">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
  <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
  <div class="fsa-stepped-control fsa-stepped-control--sticky">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message fsa-stepped-control__message--block" role="status">
        <strong>5</strong> of <strong>10</strong> Commodities are complete
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[ regressive ]</button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

### Within Modal

<p>
  <span class="fsa-m-r--s">Examples:</span>
  <button class="fsa-btn fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-stepped-control-demo-1" aria-expanded="false" type="button">Default</button>
  <button class="fsa-btn fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-stepped-control-demo-2" aria-expanded="false" type="button">Directional</button>
</p>

## Usage

### Use When

* A
* B
* C

### Don't Use

* A
* B
* C

## General Guidance

* A
* B
* C

## JavaScript Guidance

### Summary

<div class="OUTLINE" style="background-color:pink;padding: 12px">
  <strong>TODO</strong>: summarize in a "docs-like" manner what occurs.
</div>

{% include scripts.about.html %}
