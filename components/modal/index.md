---
layout: page
parent: "Components"
type: "UI Component"
title: "Modal"
shortName: "component__modal"
intro: "Display layered view above the surface of entire page."
jump_menu: true
title_label: 'Requires JavaScript'
custom_js: ["ga/ga-tracker.js", "ga/generic.js"]
---

Gain focus on a specific feature, such as completing a subtask or providing complementary information without losing the context of the page's initial state.

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--default.png" alt="Modal screen: Default variant">
        <figcaption>Default</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--small.png" alt="Modal screen: Small variant">
        <figcaption>Small</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--large.png" alt="Modal screen: Large variant">
        <figcaption>Large</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m fsa-m-b--none@l">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--fullscreen.png" alt="Modal screen: Fullscreen variant">
        <figcaption>Fullscreen</figcaption>
      </figure>
    </div>
    <div class="fsa-grid__1/2 fsa-grid__1/3@m">
      <figure class="fsa-m-b--s fsa-m-b--m@m fsa-m-b--none@l">
        <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--top.png" alt="Modal screen: Top variant">
        <figcaption>Top</figcaption>
      </figure>
    </div>
  </div>
</div>

## Behavior

A Modal will take over focus, restricting access to other areas of the application until a user completes a task or dismisses the modal.

Refer to [JavaScript Guidance](#javascript-guidance) for additional behaviorial.

**Trigger sample Modals:**

<p class="fsa-level@l fsa-level--grow-even">
  <span><button class="fsa-btn fsa-btn--fill fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-GGFD36765SSSGH" aria-expanded="false" type="button">Default</button></span>
  <span><button class="fsa-btn fsa-btn--fill fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-23458CF9J99DIS" aria-expanded="false" type="button">Small</button></span>
  <span><button class="fsa-btn fsa-btn--fill fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-23458CF77S77S7" aria-expanded="false" type="button">Large</button></span>
  <span><button class="fsa-btn fsa-btn--fill fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-23451CF80S77S9" aria-expanded="false" type="button">Fullscreen</button></span>
  <span><button class="fsa-btn fsa-btn--fill fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-2345SFGER99786" aria-expanded="false" type="button">Top</button></span>
</p>

## Variants

Modals are styled with `class="fsa-modal [fsa-modal--[variant]]"`.

### Default

<div class="ds-preview">
  <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--default.png" alt="Modal screen: Default variant">
</div>
```html
<div tabindex="0" id="UNIQUE-ID-GGFD36765SSSGH" class="fsa-modal" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[default title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
    </div>
  </div>
</div>
```

### Small

<div class="ds-preview">
  <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--small.png" alt="Modal screen: Small variant">
</div>
```html
<div tabindex="0" id="UNIQUE-ID-23458CF9J99DIS" class="fsa-modal fsa-modal--small" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[small title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
      <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur consequatur minus aspernatur necessitatibus ipsum dignissimos quis pariatur ea ex, numquam! Sapiente, maiores quas esse nemo similique facere fugit vitae vero.</p>
    </div>
  </div>
</div>
```

### Large

<div class="ds-preview">
  <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--large.png" alt="Modal screen: Large variant">
</div>
```html
<div tabindex="0" id="UNIQUE-ID-23458CF77S77S7" class="fsa-modal fsa-modal--large" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[large title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla? Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis! Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi.</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!</p>
    </div>
  </div>
</div>
```

### Fullscreen

<div class="ds-preview">
  <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--fullscreen.png" alt="Modal screen: Fullscreen variant">
</div>
```html
<div tabindex="0" id="UNIQUE-ID-23451CF80S77S9" class="fsa-modal fsa-modal--fullscreen" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[fullscreen title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla? Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis! Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi. Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Ad, mollitia reiciendis maiores saepe vero repellat unde esse, tempora illo deserunt necessitatibus dignissimos perspiciatis et reprehenderit expedita eos eaque sint ab. Velit harum consequatur quam ratione voluptatem officia, necessitatibus quasi facere nulla sint, eius nihil id accusantium minus pariatur corporis. Perferendis, non, consectetur. </p>
    </div>
  </div>
</div>
```

### Top

Can be appended to Default, Small, and Large variants; e.g. `class="fsa-modal fsa-modal--small fsa-modal--top"`.

<div class="ds-preview">
  <img class="ds-screen" src="{{ site.baseurl }}img/screen-modal--top.png" alt="Modal screen: Top variant">
</div>
```html
<div tabindex="0" id="UNIQUE-ID-2345SFGER99786" class="fsa-modal fsa-modal--top" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[top title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
      <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi.</p>
      <p>Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!</p>
      <p>Amet deserunt commodi velit officia suscipit magnam praesentium explicabo delectus animi. Sapiente beatae adipisci saepe perferendis, iste quaerat aperiam vero architecto provident.</p>
    </div>
  </div>
</div>
```

## Responsive

{% assign rwdSize = "phone" %}
{% capture rwdURL %}
https://usda-fsa.github.io/fsa-style/demo/rwd__modal.html
{% endcapture %}

{% include rwd-viewer.html %}

## Usage

{% capture usage_do %}
* When completing a subtask required by underlying page.
* When you need to isolate a feature or action to gain sole focus of that feature or action.
* When providing non-essential information related to the underlying page.
{% endcapture %}

{% capture usage_dont %}
* When its content or features can be part of the page without complicating the page's intent.
* When the content or message requires interaction with other parts of the application or screen.
* When requiring a user to confirm an action, use [Growl Notification's "Modal-based" variant]({{ site.baseurl }}components/growl/).
* To communicate brief responses or status changes, use a [Growl Notification]({{ site.baseurl }}components/growl/).
* As a system timeout message, use [Growl Notification's "Modal-based" variant]({{ site.baseurl }}components/growl/).
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## Accessibility

* [Accessibility Timeouts Guide]({{ site.baseurl }}guides/accessibility/timeouts) for system timeout guidance.
* Note `aria` and `role` attributes in use by component variants and examples.
* Managing focus:
  * Trap focus inside to the Modal using JavaScript when displayed.
  * Dismissing Modal returns focus to originating element, e.g. the button or link that initially spawned the Modal's display.
  * Refer to this page's [JavaScript Guidance](#javascript-guidance) for details.


## General Guidance

* The control element that triggers the Modal requires an aria-controls parameter that matches the ID of the Modal.

## Related Resources

* [Growl Notification Component]({{ site.baseurl }}components/growl/)
* [Alert Component]({{ site.baseurl }}components/alerts/)

<div tabindex="0" id="UNIQUE-ID-GGFD36765SSSGH" class="fsa-modal" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[default title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
    </div>
  </div>
</div>
<div tabindex="0" id="UNIQUE-ID-2345SFGER99786" class="fsa-modal fsa-modal--top" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[top title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
      <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi.</p>
      <p>Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!</p>
      <p>Amet deserunt commodi velit officia suscipit magnam praesentium explicabo delectus animi. Sapiente beatae adipisci saepe perferendis, iste quaerat aperiam vero architecto provident.</p>
    </div>
  </div>
</div>
<div tabindex="0" id="UNIQUE-ID-23458CF9J99DIS" class="fsa-modal fsa-modal--small" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[small title]</h1>
       <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
      <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
      <ul>
        <li><a href="">Fake Link</a></li>
         <li><a href="">Fake Link</a></li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur consequatur minus aspernatur necessitatibus ipsum dignissimos quis pariatur ea ex, numquam! Sapiente, maiores quas esse nemo similique facere fugit vitae vero.</p>
    </div>
  </div>
</div>
<div tabindex="0" id="UNIQUE-ID-23458CF77S77S7" class="fsa-modal fsa-modal--large" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[large title]</h1>
      <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla? Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis! Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi.</p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!</p>
    </div>
  </div>
</div>
<div tabindex="0" id="UNIQUE-ID-23451CF80S77S9" class="fsa-modal fsa-modal--fullscreen" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-modal__content">
      <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
      <h1 class="fsa-modal__title">[fullscreen title]</h1>
      <p>
        Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla? Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis! Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi.
        Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!
        Atque voluptatem nostrum adipisci voluptates. Odit consequatur architecto, obcaecati, temporibus quia itaque id ipsa consectetur delectus nisi natus placeat ad veniam quidem.
        Reiciendis dolor aspernatur ipsa natus ducimus quae atque velit, assumenda quo. Esse deserunt obcaecati blanditiis perferendis, reiciendis saepe fugiat praesentium a ipsam!
        Exercitationem unde, animi quaerat, ut eligendi natus maxime tempora quas obcaecati, asperiores architecto dolorem velit nisi autem est! Ab, minus, doloremque? Ex?
      </p>
      <ul>
        <li><a href="">Fake Link</a></li>
        <li><a href="">Fake Link</a></li>
      </ul>
      <p>
        Ad, mollitia reiciendis maiores saepe vero repellat unde esse, tempora illo deserunt necessitatibus dignissimos perspiciatis et reprehenderit expedita eos eaque sint ab.
        Velit harum consequatur quam ratione voluptatem officia, necessitatibus quasi facere nulla sint, eius nihil id accusantium minus pariatur corporis. Perferendis, non, consectetur.
        Rem, eius. Impedit autem, ad est, corporis error iste voluptates quidem dignissimos. Delectus similique accusamus laboriosam dolorem in omnis provident, harum voluptatem.
        Soluta architecto, dignissimos eos. Illo voluptatum, dolor atque consectetur, animi nam sequi possimus. Omnis alias fugit, laborum corporis ipsa quae deleniti debitis!
        Quis vel non voluptate aliquid iusto nam ea illum fugiat laboriosam, tenetur quae, quod atque corporis sapiente ipsa dolorum saepe asperiores deserunt.
        Ullam iste, aut. Asperiores soluta dolores beatae sint ipsum rerum tempore sit, minus iste explicabo autem placeat debitis aspernatur eaque earum laboriosam.
        Hic voluptate tenetur commodi, veritatis nulla, ducimus perspiciatis reprehenderit et architecto accusantium voluptatibus, impedit modi nemo rem eaque. Nam accusamus, tempora quia.
        Voluptates aut fugiat ut labore maiores minus suscipit ab possimus hic, et sequi sed magni rerum tenetur recusandae numquam animi eos consequuntur.
        Libero praesentium doloribus, blanditiis tenetur dolore illum ut unde voluptatumducimus ipsum, obcaecati provident expedita quisquam quasi corrupti. Fuga ut, voluptas deleniti.
        Nemo dicta expedita blanditiis, odio ad labore. Id magnam necessitatibus, minima quasi, placeat repellendus assumenda molestias hic, inventore amet perspiciatis. Nam, iusto.
        Eos dignissimos nihil architecto, omnissed soluta rerum perf, assumenda facilis, erendis culpa optio harum sapiente ipsum doloribus. Laboriosam, quod explicabo cupiditate accusantium.
        Aspernatur delectus, ducimus natus et doloremque seligendi dolores dolor quaerat uscipit tenetur beatae odio provident unde distinctio deserunt modi, animi eveniet consequatur.
        Nesciunt velit, fuga, alias impedit delectus fugiat inventperspiciatis nobis, id ore excepturi voluptatibus distinctio, labore quo vitae incidunt accusantium atque molestias consectetur!
        Sit illo velit reiciendis, consectetur, maiores, asalias quasi numquam explicaboperiores nihil libero vitae facilis ipsa, similique. Iure eveniet necessitatibus ullam! Culpa.
        Laudantium corporis reprehenderit facilis, dolores quas a doloremque dolorum dignissimos commodi fugiat aspernatur accusamus reiciendis officiis necessitatibus sint quos quaerat, ea dolorem.
        Nisi aperiam error similique quae veritatis ad, dolores. Itaque inventore culpa perferendis animi quos fugiat, aliquid sapiente mollitia quaerat quo. Omnis, tenetur?
        Error aliquam adipisci maiores dolorem repellat sit eum accusamus voluptates facere, in fuga iste, quis blanditiis, excepturi rerum perspiciatis qui. Explicabo, eligendi.
        Saepe veniam sint cupiditate assumenda dolores consequatur sequi dicta at reprehenderit sed quod hic illum animi itaque voluptatem ipsum eum, aut ducimus.
        Asperiores eos, corporis natus perferendis. Sed, blanditiis voluptatem autem voluptas, sequi laudantium animi porro, dolor deleniti reiciendis commodi dicta quisquam minus tempora.
      </p>
    </div>
  </div>
</div>

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

Modal popups' HTML and its content are typically injected into a page when an app requires its use. For the purposes of this demonstration, they already exist (hidden) in the HTML idle until an action calls for its state to change (show).

### Open Modal

* Set `aria-hidden` attribute to false
* Trap keydown event to set Tab Order
* Add `fsa-modal-scroll-fix` class to fix double scrollbar issue
* Set focus of cursor to Modal

### Close Modal

* Set `aria-hidden` attribute to true
* Remove `fsa-modal-scroll-fix` class from element
* Set `aria-expanded` attribute to false
* Set focus to the element that triggered Modal
