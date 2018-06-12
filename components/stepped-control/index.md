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

<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[secondary]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[primary]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Default, with Status Message
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__message" role="status">
      <strong>5</strong> of <strong>10</strong> Commodities are complete
    </div>
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[secondary]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[primary]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Default, with multiple secondary

<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[secondary_1]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[secondary_2]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[primary]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Directional

<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[progressive]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Directional, with multiple actions

<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[progessive_secondary]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[progressive]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Directional, with Status Message

<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__message fsa-stepped-control__message--block" role="status">
      <strong>5</strong> of <strong>10</strong> Commodities are complete
    </div>
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[progressive]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Directional, with Status Message <em>and</em> multiple actions

<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__message fsa-stepped-control__message--block" role="status">
      <strong>5</strong> of <strong>10</strong> Commodities are complete
    </div>
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive_1]</button>
      </div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive_2]</button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[progressive]</span>
        </button>
      </div>
    </div>
  </div>
</div>

### Sticky + Default

<div class="DEMO-STICKY-STEPPED-CONTROL">
  <p>This <code>&lt;div class="DEMO-STICKY-STEPPED-CONTROL"&gt;</code> container provides the <strong>boundary</strong> by which the <code>fsa-stepped-control<strong>--sticky</strong></code> variation determines when to stick.</p>
  <p>Consectetur sit dolorum iste doloribus laudantium eaque itaque unde ipsa. Tempora non accusamus nihil aut, perferendis nesciunt earum dolor laborum necessitatibus reprehenderit.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
  <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
  <div class="fsa-stepped-control fsa-stepped-control--sticky">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[secondary]</button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[primary]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

### Sticky + Default, with Status Message

<div class="DEMO-STICKY-STEPPED-CONTROL">
  <p>This <code>&lt;div class="DEMO-STICKY-STEPPED-CONTROL"&gt;</code> container provides the <strong>boundary</strong> by which the <code>fsa-stepped-control<strong>--sticky</strong></code> variation determines when to stick.</p>
  <p>Consectetur sit dolorum iste doloribus laudantium eaque itaque unde ipsa. Tempora non accusamus nihil aut, perferendis nesciunt earum dolor laborum necessitatibus reprehenderit.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
  <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
  <div class="fsa-stepped-control fsa-stepped-control--sticky">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message" role="status">
        <strong>5</strong> of <strong>10</strong> Commodities are complete
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[secondary]</button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[primary]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

### Sticky + Directional

<div class="DEMO-STICKY-STEPPED-CONTROL">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
  <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
  <p>Reprehenderit inv omnis saepe quam assumenda iste eum cum magnamentore eos explicabo fugiat excepturi dolorum, natus deleniti? Hic magni facilis.</p>
  <p>Quia quos cupiditate quae sed earum doloribus voluptatum praesentium! Quae sapiente ea quia veniam, cumque, beatae animi commodi, molestias, temporibus rerum harum.</p>
  <div class="fsa-stepped-control fsa-stepped-control--sticky">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive]</button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[progressive]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

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
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">[regressive]</button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[progressive]</span>
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
