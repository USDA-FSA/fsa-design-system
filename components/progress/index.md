---
layout: page
parent: "Components"
title: "Progress"
intro: "Displays an indicator showing the completion progress of a task."
shortName: "component__progress"
jump_menu: true
custom_js: "progress.js"
---

<div class="fsa-whiteout" id="fsa-whiteout" aria-hidden="true"></div>

<div class="ds-preview">
  <div class="fsa-progress" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Processing Commodities</div>
      <div class="fsa-progress__value">4 of 10</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary" style="transform: scaleX(.4)"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
<div class="fsa-progress" aria-live="polite">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Processing Commodities</div>
    <div class="fsa-progress__value">4 of 10</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary" style="transform: scaleX(.4)"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
```

A Progress indicator, or "Progress Bar" as it is often called, is an essential component for applications. Not only does a Progress indicator provide trust for the end User, but it also can provide valuable information as well. The general "rule of thumb" is that any process that requires the User to wait more than a second for something to load or finish, should provide a Progress indicator.

## Variations and Examples

Progress indicators are styled with `class="fsa-progress [fsa-progress--[variation]"`.

### Indeterminate, with label

<div class="ds-preview">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details">
      <div class="fsa-progress__label">Processing Claims</div>
      <div class="fsa-progress__value">About 10 min</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details">
      <div class="fsa-progress__label">Processing Claims</div>
      <div class="fsa-progress__value">About 10 min</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
```

### Indeterminate, hidden label
<div class="ds-preview">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Page loading</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
<div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Page loading</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
```

### Determinate, with label/value
<button type="button" class="fsa-btn fsa-btn--secondary fsa-btn--small" data-behavior="fakeSystemTrackLoop" data-target="showProgressWithLabel">Start Progress Bar</button>
<div class="ds-preview">
  <div class="fsa-progress" aria-live="polite" id="showProgressWithLabel">
    <div class="fsa-progress__details">
      <div class="fsa-progress__label">Soft Red Winter Wheat</div>
      <div class="fsa-progress__value">0%</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
<div class="fsa-progress" aria-live="polite" id="showProgressWithLabel">
  <div class="fsa-progress__details">
    <div class="fsa-progress__label">Soft Red Winter Wheat</div>
    <div class="fsa-progress__value">0%</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
```

### Determinate, hidden label
<button type="button" class="fsa-btn fsa-btn--secondary fsa-btn--small" data-behavior="fakeSystemTrackLoop" data-target="showProgress">Start Progress Bar</button>
<div class="ds-preview">
  <div class="fsa-progress" aria-live="polite" id="showProgress">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Downloading Terminal Adjustments</div>
      <div class="fsa-progress__value">0%</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
<div class="fsa-progress" aria-live="polite" id="showProgress">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Downloading Terminal Adjustments</div>
    <div class="fsa-progress__value">0%</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
```

### Determinate, manual demo
<button type="button" class="fsa-btn fsa-btn--secondary fsa-btn--small" data-behavior="fakeSystemTrackAddition" data-target="showProgressAddition">Increase by 10%</button>
<div class="ds-preview">
  <div class="fsa-progress" aria-live="polite">
    <div class="fsa-progress__details">
      <div class="fsa-progress__label">Uploading <abbr title="Daily Loan Deficiency Payment Rates">LDP</abbr></div>
      <div class="fsa-progress__value">10%</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary" id="showProgressAddition" style="transform: scaleX(0.1);"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
<div class="fsa-progress" aria-live="polite">
  <div class="fsa-progress__details">
    <div class="fsa-progress__label">Uploading <abbr title="Daily Loan Deficiency Payment Rates">LDP</abbr></div>
    <div class="fsa-progress__value">10%</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary" id="showProgressAddition" style="transform: scaleX(0.1);"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
```

### Determinate, example
<div class="ds-preview">
  <div class="fsa-progress" aria-live="polite">
    <div class="fsa-progress__details">
      <div class="fsa-progress__label">Processing Commodities</div>
      <div class="fsa-progress__value">4 of 10</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary" style="transform: scaleX(.4)"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
</div>
```html
<div class="fsa-progress" aria-live="polite">
  <div class="fsa-progress__details">
    <div class="fsa-progress__label">Processing Commodities</div>
    <div class="fsa-progress__value">4 of 10</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary" style="transform: scaleX(.4)"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
```

### Paired with Select, inline
<div class="ds-preview">
  <div class="fsa-progress-inline">
    <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
      <div class="fsa-progress__details fsa-sr-only">
        <div class="fsa-progress__label">Loading tracts</div>
      </div>
      <div class="fsa-progress__bar" aria-hidden="true">
        <div class="fsa-progress__primary"></div>
        <div class="fsa-progress__secondary"></div>
      </div>
    </div>
    <select name="UNIQUE-ID-WAGS" id="UNIQUE-ID-WAGS" class="fsa-select">
      <option>Farm 1234</option>
      <option>Farm 6789</option>
    </select>
  </div>
</div>
```html
<div class="fsa-progress-inline">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Loading tracts</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
  <select name="UNIQUE-ID-WAGS" id="UNIQUE-ID-WAGS" class="fsa-select">
    <option>Farm 1234</option>
    <option>Farm 6789</option>
  </select>
</div>
```

### Paired with Select, block
<div class="ds-preview">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Loading counties</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
  <select name="UNIQUE-ID-WAGSYS61" id="UNIQUE-ID-WAGSYS61" class="fsa-select fsa-select--block">
    <option>California</option>
    <option>Kansas</option>
  </select>
</div>
```html
<div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Loading counties</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
<select name="UNIQUE-ID-WAGSYS61" id="UNIQUE-ID-WAGSYS61" class="fsa-select fsa-select--block">
  <option>California</option>
  <option>Kansas</option>
</select>
```

### Paired with Input, inline
<div class="ds-preview">
  <div class="fsa-progress-inline">
    <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
      <div class="fsa-progress__details fsa-sr-only">
        <div class="fsa-progress__label">Calculating age</div>
      </div>
      <div class="fsa-progress__bar" aria-hidden="true">
        <div class="fsa-progress__primary"></div>
        <div class="fsa-progress__secondary"></div>
      </div>
    </div>
    <input type="text" class="fsa-input" value="05/14/1975">
  </div>
</div>
```html
<div class="fsa-progress-inline">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Calculating age</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
  <input type="text" class="fsa-input" value="05/14/1975">
</div>
```

### Paired with Input, block
<div class="ds-preview">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Loading counties</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
  <input class="fsa-input fsa-input--block" value="California">
</div>
```html
<div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Loading counties</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
<input class="fsa-input fsa-input--block" value="California">
```

### Paired with Table
<button type="button" class="fsa-btn fsa-btn--secondary fsa-btn--small" data-behavior="toggleTableProgress">Toggle progress</button>
<div class="ds-preview">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite" id="tableProgress">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Loading Commodities</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
  <table class="fsa-table fsa-table--borderless fsa-m-t--none">
    <thead>
      <tr>
        <th scope="col"><button class="fsa-table__sort" type="button">Commodity</button></th>
        <th scope="col" class="fsa-text-align--right" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Loan Rate</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Alternative PCP</button></th>
        <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Oats $/Bushel</td>
        <td class="fsa-text-align--right">1.43</td>
        <td class="fsa-text-align--right">2.97</td>
        <td class="fsa-text-align--right">1.92</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Barley $/Bushel</td>
        <td class="fsa-text-align--right">1.75</td>
        <td class="fsa-text-align--right">3.30</td>
        <td class="fsa-text-align--right">2.60</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Wheat - Soft Red Winter $/Bushel</td>
        <td class="fsa-text-align--right">2.42</td>
        <td class="fsa-text-align--right">4.49</td>
        <td class="fsa-text-align--right">4.19</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Canola $/Cwt.</td>
        <td class="fsa-text-align--right">8.94</td>
        <td class="fsa-text-align--right">15.99</td>
        <td class="fsa-text-align--right">15.89</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
      <tr>
        <td>Flaxseed $/Cwt.</td>
        <td class="fsa-text-align--right">10.13</td>
        <td class="fsa-text-align--right">15.90</td>
        <td class="fsa-text-align--right">14.62</td>
        <td class="fsa-text-align--right">0.00</td>
      </tr>
    </tbody>
  </table>
</div>
```html
<div class="fsa-progress fsa-progress--indeterminate" aria-live="polite" id="tableProgress">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Loading Commodities</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
<table class="fsa-table fsa-table--borderless fsa-m-t--none">
  <thead>
    <tr>
      <th scope="col"><button class="fsa-table__sort" type="button">Commodity</button></th>
      <th scope="col" class="fsa-text-align--right" aria-sort="ascending"><button class="fsa-table__sort fsa-table__sort--ascending" type="button">Loan Rate</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">30-Day Period PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Alternative PCP</button></th>
      <th scope="col" class="fsa-text-align--right"><button class="fsa-table__sort" type="button">Effective LDP Rate</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oats $/Bushel</td>
      <td class="fsa-text-align--right">1.43</td>
      <td class="fsa-text-align--right">2.97</td>
      <td class="fsa-text-align--right">1.92</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Barley $/Bushel</td>
      <td class="fsa-text-align--right">1.75</td>
      <td class="fsa-text-align--right">3.30</td>
      <td class="fsa-text-align--right">2.60</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Wheat - Soft Red Winter $/Bushel</td>
      <td class="fsa-text-align--right">2.42</td>
      <td class="fsa-text-align--right">4.49</td>
      <td class="fsa-text-align--right">4.19</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Canola $/Cwt.</td>
      <td class="fsa-text-align--right">8.94</td>
      <td class="fsa-text-align--right">15.99</td>
      <td class="fsa-text-align--right">15.89</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
    <tr>
      <td>Flaxseed $/Cwt.</td>
      <td class="fsa-text-align--right">10.13</td>
      <td class="fsa-text-align--right">15.90</td>
      <td class="fsa-text-align--right">14.62</td>
      <td class="fsa-text-align--right">0.00</td>
    </tr>
  </tbody>
</table>
```

### Paired with Box
<div class="ds-preview">
  <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
    <div class="fsa-progress__details fsa-sr-only">
      <div class="fsa-progress__label">Processing claims</div>
    </div>
    <div class="fsa-progress__bar" aria-hidden="true">
      <div class="fsa-progress__primary"></div>
      <div class="fsa-progress__secondary"></div>
    </div>
  </div>
  <div class="fsa-box">
    Ipsum magni blanditiis inve labore hic atque expedita voluptate fuga!
  </div>
</div>
```html
<div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
  <div class="fsa-progress__details fsa-sr-only">
    <div class="fsa-progress__label">Processing claims</div>
  </div>
  <div class="fsa-progress__bar" aria-hidden="true">
    <div class="fsa-progress__primary"></div>
    <div class="fsa-progress__secondary"></div>
  </div>
</div>
<div class="fsa-box">
  Ipsum magni blanditiis inve labore hic atque expedita voluptate fuga!
</div>
```

### Paired with Header

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_progress" data-size="phone" class="fsa-btn-group__item" aria-selected="true" type="button" title="Portrait"><span class="sr-only">Portrait</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_progress" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape"><span class="sr-only">Landscape</span> Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_progress" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_progress" data-size="desktop" class="fsa-btn-group__item fsa-btn-group__item--active" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__progress.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--desktop" id="rwd-demo_progress">
      <iframe title="Responsive Demo: progress" src="http://usda-fsa.github.io/fsa-style/demo/rwd__progress.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

### Paired with Modal
<button class="fsa-btn fsa-btn--small fsa-btn--secondary" data-behavior="open-modal" aria-controls="UNIQUE-ID-yshtgj77" aria-expanded="false" type="button">Open a Modal</button>
<div tabindex="0" id="UNIQUE-ID-yshtgj77" class="fsa-modal" role="dialog" aria-hidden="true">
  <div class="fsa-modal__dialog">
    <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
      <div class="fsa-progress__details fsa-sr-only">
        <div class="fsa-progress__label">Loading stuff</div>
      </div>
      <div class="fsa-progress__bar" aria-hidden="true">
        <div class="fsa-progress__primary"></div>
        <div class="fsa-progress__secondary"></div>
      </div>
    </div>
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

### Paired with Growl Notification, modal-based
<button class="fsa-btn fsa-btn--small fsa-btn--secondary" data-behavior="growl-show whiteout-show" aria-controls="UNIQUE-ID-hsyys88UUUhn" aria-expanded="false" type="button">Show a Notification (Modal-based)</button>
<div class="fsa-growl-container fsa-growl-container--centered">
  <div class="fsa-growl fsa-growl--warning fsa-growl--centered" id="UNIQUE-ID-hsyys88UUUhn" aria-hidden="true" tabindex="0" role="alertdialog">
    <div class="fsa-growl__hd">
      <h2 class="fsa-growl__title">Go get a frappacino</h2>
    </div>
    <div class="fsa-growl__bd">
      <p>This might take a while. Sorry not sorry.</p>
      <p>
        <div class="fsa-progress fsa-progress--indeterminate" aria-live="polite">
          <div class="fsa-progress__details">
            <div class="fsa-progress__label">Encrpyting...</div>
            <div class="fsa-progress__value">About 20 min</div>
          </div>
          <div class="fsa-progress__bar" aria-hidden="true">
            <div class="fsa-progress__primary"></div>
            <div class="fsa-progress__secondary"></div>
          </div>
        </div>
      </p>
      <p>
        <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Cancel Encryption</button>
      </p>
    </div>
  </div>
</div>

### Paired with Growl Notification, default
<button class="fsa-btn fsa-btn--small fsa-btn--secondary" data-behavior="growl-show FAKE-GROWL-PROGRESS" aria-controls="UNIQUE-ID-gentle-notification_981" aria-expanded="false" type="button">Show a Notification</button>
<div class="fsa-growl-container">
  <div class="fsa-growl fsa-growl--warning" id="UNIQUE-ID-gentle-notification_981" aria-hidden="true" tabindex="0" role="dialog">
    <div class="fsa-growl__hd">
    </div>
    <div class="fsa-growl__bd fsa-p-r--none">
      <div class="fsa-m-t--xs">
        <div class="fsa-progress" aria-live="polite">
          <div class="fsa-progress__details fsa-m-b--none">
            <div class="fsa-progress__label">Finding all the PII...</div>
            <div class="fsa-progress__value">21%</div>
          </div>
          <div class="fsa-progress__bar" aria-hidden="true">
            <div class="fsa-progress__primary" style="transform:scaleX(.21);"></div>
            <div class="fsa-progress__secondary"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Usage

### Use When

* The system has started an asynchronous process within a feature or section of the application that is not currently available for interaction.
* A User should be shown that data or files are in the process of being retrieved, updated, uploading, or deleted from the system.

### Don't Use

* When the application is initially loading and the interface isn't available.
* When an asychronous process is occuring and the entire application should be unavailable to the User. Instead, use [Splash Component]({{ site.baseurl }}components/splash/).
* As an animation on individual page controls that are not retrieving, updating, uploading, or deleting data of files from the system
* On individual page controls if the loading process takes less than one second.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Note the use of the `aria-live="polite"` attribute, which will alert the User with assistive technologies when they are not performing actions.
* In general, the Progress component is a visual indicator, so alternative means should be used to communicate application status.

## General Guidance

* There are numerous instances when a Progress component should be shown, and based on the needs of the User and application, the choice of variations is important.

* Utilize an Indeterminate Progress variation when the about of time is unknown or cannot be accurately approximated.

* Utilize a Determinate variation when the application can provide an accurate representation of the progress of a specific process.

* Applying a Progress component to an individual page control, such as a Text Input, should only be used when the asynchronous process occurs after interacting with that specific page control.


## JavaScript Guidance

{% include scripts.about.html %}

### Summary

Some of the JavaScript being used to control the above examples is to mimick the behavior of an asychronous system delay, and the functionality would not been to be used in a real application.

### Start Progress Animation

* A conditional is being used to scale the the X property of the target.
* Using `.css('transform','scaleX(.' + newValue + ')')` will scale the Target to the new percentage value (`newValue`) passed in.
* When the asychronous process ends, `$target.css('transform','scaleX(1)')` is used to set the value to 100%.
* Additional text-based numerical values can be shown in the labels to correspond with percent complete.


## Related Resources

* [Splash]({{ site.baseurl }}components/splash/)
