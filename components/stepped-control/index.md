---
layout: page
parent: "Components"
type: "UI Component"
title: "Stepped Control"
shortName: "component__stepped-control"
intro: "Navigate through a multi-step process with directional actions."
relatedItems:
  - "Buttons"
  - "Stepped Process"
  - "Stepped Tabs"
jump_menu: true
title_label: 'May Require JavaScript'
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message" role="status">
        <strong>Optional</strong> status message
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
          </button>
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

## Variants and Examples

### Default

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
          </button>
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
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ primary ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Default, with Status Message

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message" role="status">
        <strong>5</strong> of <strong>10</strong> Commodities are complete
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
          </button>
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
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__message" role="status">
      <strong>5</strong> of <strong>10</strong> Commodities are complete
    </div>
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ primary ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Default, with multiple secondary

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ secondary_1 ]</span>
          </button>
        </div>
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ secondary_2 ]</span>
          </button>
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
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ secondary_1 ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ secondary_2 ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ primary ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Directional

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
          </button>
        </div>
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Directional, with multiple actions

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
          </button>
        </div>
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ prog_secondary ]</span>
          </button>
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
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ prog_secondary ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Directional, with Status Message

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message fsa-stepped-control__message--fill" role="status">
        <strong>5</strong> of <strong>10</strong> Commodities are complete
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
          </button>
        </div>
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__message fsa-stepped-control__message--fill" role="status">
      <strong>5</strong> of <strong>10</strong> Commodities are complete
    </div>
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Directional, with Status Message <em>and</em> multiple actions

<div class="ds-preview">
  <div class="fsa-stepped-control">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message fsa-stepped-control__message--fill" role="status">
        <strong>5</strong> of <strong>10</strong> Commodities are complete
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ regressive_1 ]</span>
          </button>
        </div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">[ regressive_2 ]</span>
          </button>
        </div>
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```html
<div class="fsa-stepped-control">
  <div class="fsa-stepped-control__bd">
    <div class="fsa-stepped-control__message fsa-stepped-control__message--fill" role="status">
      <strong>5</strong> of <strong>10</strong> Commodities are complete
    </div>
    <div class="fsa-stepped-control__list">
      <div class="fsa-stepped-control__item">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ regressive_1 ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
        <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
          <span class="fsa-stepped-control__btn-label">[ regressive_2 ]</span>
        </button>
      </div>
      <div class="fsa-stepped-control__shim"></div>
      <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
        <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
          <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Sticky + Default

<div class="ds-preview">
  <div class="DEMO-STICKY-STEPPED-CONTROL">
    <p>This <code>&lt;div class="DEMO-STICKY-STEPPED-CONTROL"&gt;</code> container provides the <strong>boundary</strong> by which the <code>fsa-stepped-control<strong>--sticky</strong></code> variant determines when to stick.</p>
    <p>Consectetur sit dolorum iste doloribus laudantium eaque itaque unde ipsa. Tempora non accusamus nihil aut, perferendis nesciunt earum dolor laborum necessitatibus reprehenderit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
    <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
    <div class="fsa-stepped-control fsa-stepped-control--sticky">
      <div class="fsa-stepped-control__bd">
        <div class="fsa-stepped-control__list">
          <div class="fsa-stepped-control__shim"></div>
          <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
            <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
              <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
            </button>
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
</div>
```html
<div>
  <p>...</p>
  <div class="fsa-stepped-control fsa-stepped-control--sticky">
    ...
  </div>
  <p>...</p>
</div>
```

### Sticky + Default, with Status Message

<div class="ds-preview">
  <div class="DEMO-STICKY-STEPPED-CONTROL">
    <p>This <code>&lt;div class="DEMO-STICKY-STEPPED-CONTROL"&gt;</code> container provides the <strong>boundary</strong> by which the <code>fsa-stepped-control<strong>--sticky</strong></code> variant determines when to stick.</p>
    <p>Consectetur sit dolorum iste doloribus laudantium eaque itaque unde ipsa. Tempora non accusamus nihil aut, perferendis nesciunt earum dolor laborum necessitatibus reprehenderit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
    <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
    <div class="fsa-stepped-control fsa-stepped-control--sticky">
      <div class="fsa-stepped-control__bd">
        <div class="fsa-stepped-control__message" role="status">
          <strong>5</strong> of <strong>10</strong> Commodities are complete
        </div>
        <div class="fsa-stepped-control__list">
          <div class="fsa-stepped-control__shim"></div>
          <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
            <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
              <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
            </button>
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
</div>

### Sticky + Directional

<div class="ds-preview">
  <div class="DEMO-STICKY-STEPPED-CONTROL">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
    <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
    <p>Reprehenderit inv omnis saepe quam assumenda iste eum cum magnamentore eos explicabo fugiat excepturi dolorum, natus deleniti? Hic magni facilis.</p>
    <p>Quia quos cupiditate quae sed earum doloribus voluptatum praesentium! Quae sapiente ea quia veniam, cumque, beatae animi commodi, molestias, temporibus rerum harum.</p>
    <div class="fsa-stepped-control fsa-stepped-control--sticky">
      <div class="fsa-stepped-control__bd">
        <div class="fsa-stepped-control__list">
          <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
            <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
              <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
            </button>
          </div>
          <div class="fsa-stepped-control__shim"></div>
          <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
            <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
              <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Sticky + Directional, with Status Message

<div class="ds-preview">
  <div class="DEMO-STICKY-STEPPED-CONTROL">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolores, unde aperiam, nemo harum sed repellendus veniam voluptas cupiditate porro facilis voluptates ipsam, sapiente illum odit possimus debitis est. Necessitatibus.</p>
    <p>Ducimus architecto ipsa iusto aliquid deserunt commodi dolore, magnam cumque dolorum modi placeat nulla ea veniam suscipit, dolorem voluptas consequuntur repellendus non.</p>
    <div class="fsa-stepped-control fsa-stepped-control--sticky">
      <div class="fsa-stepped-control__bd">
        <div class="fsa-stepped-control__message fsa-stepped-control__message--fill" role="status">
          <strong>5</strong> of <strong>10</strong> Commodities are complete
        </div>
        <div class="fsa-stepped-control__list">
          <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
            <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
              <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
            </button>
          </div>
          <div class="fsa-stepped-control__shim"></div>
          <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
            <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
              <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
            </button>
          </div>
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

## Responsive

At narrower breakpoints the Stepped Control is docked to the bottom of the viewport.

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__stepped-control.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* For process flows requiring multiple steps to perform actions
* While paired with the [Stepped Tabs]({{ site.baseurl }}components/stepped-tabs/) component
* When a process flow would be enriched by a sticky control at the bottom of the screen
* When a Status Message would help to gain context for the User during a stepped process
{% endcapture %}

{% capture usage_dont %}
* As the component to control a singular form or action
* At the top of a screen as a means for navigation
* As a substitute for pagination
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* The Stepped Control is used as the standard Component to advance from screen to screen within an application
* In most cases, the Stepped Control with sticky variant should be used, as it keeps the navigation controls on the screen for the User
* Variants of the Stepped Control should be used to enhance the User Experience by providing additional context that might be missing for the User.

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

The JavaScript for the Sticky Stepped Control performs a number of calculations based on the position of the component in relation to the top of the screen. JavaScript is not required for the non-sticky variants of the Stepped Control component. The Component Update Events list below should trigger the change of the Sticky variant of the component.

### Component Update

* Calculate Component position, relative to bottom of screen
* Apply `fsa-stepped-control--unstuck` class to pin component

### Component Update Events

* Window scrolling
* `DOMContentLoaded`
* Window resize
* All Modals scrolling, if using Modal variant

<div tabindex="0" id="UNIQUE-ID-stepped-control-demo-1" class="fsa-modal" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">Modal Title</h1>
      <p>Voluptas vel, excepturi! Quo, veritatis. Aliquam voluptate, aut voluptates neque, repellat, dolore autem provident, deserunt ducimus quibusdam similique dolorum facilis. Quis, ducimus.</p>
      <p>Cupiditate, nemo illo. Rerum dolor suscipit, doloribus nam unde, nostrum quod voluptatum, amet nulla molestias debitis, officia asperiores temporibus aliquid! Ipsum, at.</p>
      <p>Maxime repellat expedita, rem, sapiente, debitis consectetur placeat dolorum deleniti delectus tenetur commodi? Optio, sequi. Fugiat, hic incidunt, vitae aspernatur voluptates molestiae?</p>
      <p>Voluptas vel, excepturi! Quo, veritatis. Aliquam voluptate, aut voluptates neque, repellat, dolore autem provident, deserunt ducimus quibusdam similique dolorum facilis. Quis, ducimus.</p>
      <p>Cupiditate, nemo illo. Rerum dolor suscipit, doloribus nam unde, nostrum quod voluptatum, amet nulla molestias debitis, officia asperiores temporibus aliquid! Ipsum, at.</p>
      <p>Maxime repellat expedita, rem, sapiente, debitis consectetur placeat dolorum deleniti delectus tenetur commodi? Optio, sequi. Fugiat, hic incidunt, vitae aspernatur voluptates molestiae?</p>
      <div class="fsa-stepped-control fsa-stepped-control--modal fsa-stepped-control--sticky">
        <div class="fsa-stepped-control__bd">
          <div class="fsa-stepped-control__message" role="status">
            {{ status-message }}
          </div>
          <div class="fsa-stepped-control__list">
            <div class="fsa-stepped-control__shim"></div>
            <div class="fsa-stepped-control__item">
              <button class="fsa-btn fsa-btn--alt fsa-stepped-control__btn" type="button">
                <span class="fsa-stepped-control__btn-label">[ secondary ]</span>
              </button>
            </div>
            <div class="fsa-stepped-control__item">
              <button class="fsa-btn fsa-btn--primary fsa-stepped-control__btn" type="submit">
                <span class="fsa-stepped-control__btn-label">[ primary ]</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div tabindex="0" id="UNIQUE-ID-stepped-control-demo-2" class="fsa-modal" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">Modal Title</h1>
      <p>Voluptas vel, excepturi! Quo, veritatis. Aliquam voluptate, aut voluptates neque, repellat, dolore autem provident, deserunt ducimus quibusdam similique dolorum facilis. Quis, ducimus.</p>
      <p>Cupiditate, nemo illo. Rerum dolor suscipit, doloribus nam unde, nostrum quod voluptatum, amet nulla molestias debitis, officia asperiores temporibus aliquid! Ipsum, at.</p>
      <p>Maxime repellat expedita, rem, sapiente, debitis consectetur placeat dolorum deleniti delectus tenetur commodi? Optio, sequi. Fugiat, hic incidunt, vitae aspernatur voluptates molestiae?</p>
      <p>Voluptas vel, excepturi! Quo, veritatis. Aliquam voluptate, aut voluptates neque, repellat, dolore autem provident, deserunt ducimus quibusdam similique dolorum facilis. Quis, ducimus.</p>
      <p>Cupiditate, nemo illo. Rerum dolor suscipit, doloribus nam unde, nostrum quod voluptatum, amet nulla molestias debitis, officia asperiores temporibus aliquid! Ipsum, at.</p>
      <p>Maxime repellat expedita, rem, sapiente, debitis consectetur placeat dolorum deleniti delectus tenetur commodi? Optio, sequi. Fugiat, hic incidunt, vitae aspernatur voluptates molestiae?</p>
      <div class="fsa-stepped-control fsa-stepped-control--modal fsa-stepped-control--sticky">
        <div class="fsa-stepped-control__bd">
          <div class="fsa-stepped-control__list">
            <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
              <button class="fsa-btn fsa-btn--alt fsa-stepped-control__btn" type="button">
                <span class="fsa-stepped-control__btn-label">[ regressive ]</span>
              </button>
            </div>
            <div class="fsa-stepped-control__shim"></div>
            <div class="fsa-stepped-control__item">
              <button class="fsa-btn fsa-btn--primary fsa-stepped-control__btn" type="submit">
                <span class="fsa-stepped-control__btn-label">[ progressive ]</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
