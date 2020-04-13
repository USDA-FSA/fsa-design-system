---
layout: page
parent: "Components"
title: "Global Navigation"
shortName: "component__top-nav"
intro: "The Global Navigation Component shall be used to create a cohesive User Experience across all FPAC applications."
jump_menu: true
title_label: 'May Require JavaScript'
---

<div class="ds-preview">
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

## Variations

Global Navigation shall use `class="fsa-nav-global"`.

### Default

<div class="ds-preview">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Sub Menus

Expanding upon the menu, utilize the sub menus with `class="fsa-nav-global__sub-menu"`.

<div class="ds-preview">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-593945">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-6sfranc6">Admin</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-593945" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfranc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Customer</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-852145">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-65s5scase66y">Transaction</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-852145" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-65s5scase66y">

                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfrSSc6">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfrSSc6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfrQQc6">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfrQQc6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sEEanc6">Fiscal Unit Development</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sEEanc6">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfra55T">Lorem ipsum dolor</h3>
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfra55T">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-6s6s66">
              <span class="fsa-nav-global__text" id="UNIQUE-ID-A65945">Reports</span>
            </button>

            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-6s6s66" aria-hidden="true">

              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-A65945">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                </ul>
              </div>

            </div>

          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">Resources</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-593945">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-6sfranc6">Admin</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-593945" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfranc6">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Customer</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-852145">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-65s5scase66y">Transaction</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-852145" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-65s5scase66y">

              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfrSSc6">Cyclical Purchasing</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfrSSc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfrQQc6">Overage Charge Stream</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfrQQc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sEEanc6">Fiscal Unit Development</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sEEanc6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-6sfra55T">Lorem ipsum dolor</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-6sfra55T">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                </ul>
              </div>

            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-6s6s66">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-A65945">Reports</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-6s6s66" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-A65945">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Resources</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
### Sub Menus: expanded, single list

<div class="ds-preview">
  <div style="padding-bottom: 360px">
    <nav>
      <div class="fsa-nav-global">
        <div class="fsa-nav-global__bd">
          <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
                <span class="fsa-nav-global__text">Home</span>
              </a>
            </li>
            <li class="fsa-nav-global__list-item">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-1234098">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-455Zs5s5">Admin</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-1234098" aria-hidden="false">

                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-455Zs5s5">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link" href="link.html">
                <span class="fsa-nav-global__text">Customer</span>
              </a>
            </li>
            <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-4u8s5s5">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-566s75">Transaction</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-4u8s5s5" aria-hidden="true">

                <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-566s75">

                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg44">Cyclical Purchasing</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg44">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4a">Overage Charge Stream</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4a">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4n">Fiscal Unit Development</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4n">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4i">Lorem ipsum dolor</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4i">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                    </ul>
                  </div>

                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-shj389">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-SPOTS65945">Reports</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-shj389" aria-hidden="true">

                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-SPOTS65945">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  </ul>
                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link" href="link.html">
                <span class="fsa-nav-global__text">Resources</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-1234098">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-455Zs5s5">Admin</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-1234098" aria-hidden="false">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-455Zs5s5">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Customer</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-4u8s5s5">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-566s75">Transaction</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-4u8s5s5" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-566s75">

              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg44">Cyclical Purchasing</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg44">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4a">Overage Charge Stream</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4a">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4n">Fiscal Unit Development</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4n">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-hsyfg4i">Lorem ipsum dolor</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-hsyfg4i">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                </ul>
              </div>

            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-shj389">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-SPOTS65945">Reports</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-shj389" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-SPOTS65945">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Resources</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Sub Menus: expanded, single list, multi-column

<div class="ds-preview">
  <div style="padding-bottom: 250px;">
    <nav>
      <div class="fsa-nav-global">
        <div class="fsa-nav-global__bd">
          <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
                <span class="fsa-nav-global__text">Home</span>
              </a>
            </li>
            <li class="fsa-nav-global__list-item">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-ysh11app">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-5aapt75">Admin</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-ysh11app" aria-hidden="true">

                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5aapt75">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link" href="link.html">
                <span class="fsa-nav-global__text">Customer</span>
              </a>
            </li>
            <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-222vvnk">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-trans45">Transaction</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-222vvnk" aria-hidden="true">

                <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-trans45">

                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt45er">Cyclical Purchasing</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt45er">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4we5">Overage Charge Stream</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4we5">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4rt5">Fiscal Unit Development</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4rt5">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4op5">Lorem ipsum dolor</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4op5">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                    </ul>
                  </div>

                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-geiauaport">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-5rptspt75">Reports</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-geiauaport" aria-hidden="false">

                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5rptspt75">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  </ul>
                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link" href="link.html">
                <span class="fsa-nav-global__text">Resources</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-ysh11app">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-5aapt75">Admin</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-ysh11app" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5aapt75">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Customer</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-222vvnk">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-trans45">Transaction</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-222vvnk" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-trans45">

              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt45er">Cyclical Purchasing</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt45er">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4we5">Overage Charge Stream</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4we5">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4rt5">Fiscal Unit Development</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4rt5">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-5frt4op5">Lorem ipsum dolor</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5frt4op5">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                </ul>
              </div>

            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-geiauaport">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-5rptspt75">Reports</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-geiauaport" aria-hidden="false">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-5rptspt75">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Resources</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Sub Menus: expanded, grouped lists

<div class="ds-preview">
  <div style="padding-bottom: 335px;">
    <nav>
      <div class="fsa-nav-global">
        <div class="fsa-nav-global__bd">
          <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
                <span class="fsa-nav-global__text">Home</span>
              </a>
            </li>
            <li class="fsa-nav-global__list-item">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-jsugh777">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-8minad145">Admin</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-jsugh777" aria-hidden="true">

                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-8minad145">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                  </ul>
                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link" href="link.html">
                <span class="fsa-nav-global__text">Customer</span>
              </a>
            </li>
            <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-uyysh3q00">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-sancs045">Transaction</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-uyysh3q00" aria-hidden="false">

                <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-sancs045">

                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERTSScSS6">Cyclical Purchasing</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERTSScSS6">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERWWSScOI6">Overage Charge Stream</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERWWSScOI6">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-WWTSScOI6">Fiscal Unit Development</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-WWTSScOI6">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    </ul>
                  </div>
                  <div class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERTSS30I6">Lorem ipsum dolor</h3>
                    <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERTSS30I6">
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                      <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                    </ul>
                  </div>

                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

              <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-7sh37ssk">
                <span class="fsa-nav-global__text" id="UNIQUE-ID-2sppzogvvnk">Reports</span>
              </button>

              <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-7sh37ssk" aria-hidden="true">

                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-2sppzogvvnk">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  </ul>
                </div>

              </div>

            </li>
            <li class="fsa-nav-global__list-item">
              <a class="fsa-nav-global__link" href="link.html">
                <span class="fsa-nav-global__text">Resources</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-jsugh777">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-8minad145">Admin</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-jsugh777" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-8minad145">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Customer</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-uyysh3q00">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-sancs045">Transaction</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-uyysh3q00" aria-hidden="false">

            <div class="fsa-nav-global__sub-menu-bd" aria-labelledby="UNIQUE-ID-sancs045">

              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERTSScSS6">Cyclical Purchasing</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERTSScSS6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERWWSScOI6">Overage Charge Stream</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERWWSScOI6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shifting</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-WWTSScOI6">Fiscal Unit Development</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-WWTSScOI6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title" id="UNIQUE-ID-ERTSS30I6">Lorem ipsum dolor</h3>
                <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-ERTSS30I6">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Consectetur adipisicing elit</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Tempora magni dolore</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Itaque dolorum</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Blanditiis architecto</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Culpa</a></li>
                </ul>
              </div>

            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">

          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-7sh37ssk">
            <span class="fsa-nav-global__text" id="UNIQUE-ID-2sppzogvvnk">Reports</span>
          </button>

          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-7sh37ssk" aria-hidden="true">

            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list" aria-labelledby="UNIQUE-ID-2sppzogvvnk">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Performance Management</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Drive Texture Mechanics</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Unilateral Placement Shift</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Investment Placement</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Burden Investment</a></li>
              </ul>
            </div>

          </div>

        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">Resources</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
### Example: with Search

<div class="ds-preview">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-99">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
        </ul>
        <div class="fsa-nav-global__search">
          <form action="dest.html">
            <div class="fsa-search fsa-search--small" role="search">
              <div class="fsa-search__bd">
                <div class="fsa-search__entry fsa-search__entry--grow">
                  <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-88w84d">Search [app-name]</label>
                  <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-88w84d" type="search" name="search">
                </div>
                <div class="fsa-search__submit">
                  <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
                    <span class="fsa-search__text">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </nav>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-99">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
      <div class="fsa-nav-global__search">
        <form action="dest.html">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-88w84d">Search [app-name]</label>
                <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-88w84d" type="search" name="search">
              </div>
              <div class="fsa-search__submit">
                <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</nav>
```

### Example: with Search, scoped

<div class="ds-preview">
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-77">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
        </ul>
        <div class="fsa-nav-global__search">
          <form action="dest.html">
            <div class="fsa-search fsa-search--small" role="search">
              <div class="fsa-search__bd">
                <div class="fsa-search__entry fsa-search__entry--grow">
                  <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-huahfroa8">Search [app-name]</label>
                  <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-huahfroa8" type="search" name="search">
                </div>
                <div class="fsa-search__entry">
                  <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-PkkH6PooI6">Search Category</label>
                  <select class="fsa-select fsa-select--small fsa-search__select" name="Statez" id="UNIQUE-ID-PkkH6PooI6">
                    <option value="none" selected="selected">All</option>
                    <option value="asdf">Cat 1</option>
                    <option value="asdf">Cat 2</option>
                    <option value="asdf">Cat 3</option>
                  </select>
                </div>
                <div class="fsa-search__submit">
                  <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
                    <span class="fsa-search__text">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </nav>
</div>
```html
<nav>
  <div class="fsa-nav-global">
    <div class="fsa-nav-global__bd">
      <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation-77">
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
            <span class="fsa-nav-global__text">Home</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
        <li class="fsa-nav-global__list-item">
          <a class="fsa-nav-global__link" href="link.html">
            <span class="fsa-nav-global__text">[item]</span>
          </a>
        </li>
      </ul>
      <div class="fsa-nav-global__search">
        <form action="dest.html">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-huahfroa8">Search [app-name]</label>
                <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-huahfroa8" type="search" name="search">
              </div>
              <div class="fsa-search__entry">
                <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-PkkH6PooI6">Search Category</label>
                <select class="fsa-select fsa-select--small fsa-search__select" name="Statez" id="UNIQUE-ID-PkkH6PooI6">
                  <option value="none" selected="selected">All</option>
                  <option value="asdf">Cat 1</option>
                  <option value="asdf">Cat 2</option>
                  <option value="asdf">Cat 3</option>
                </select>
              </div>
              <div class="fsa-search__submit">
                <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</nav>
```

## Responsive

{% include alert.rwd-rendering.html %}

<div class="docs__rwd-demo-block">
  <div class="docs__rwd-embed-container">
    <span class="fsa-btn-group fsa-btn-group--small" role="group" data-component="">
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-nav-global" data-size="phone" class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button" title="Portrait">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--portrait"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-nav-global" data-size="phone-big" class="fsa-btn-group__item" type="button" title="Landscape">Phone <span class="docs__rwd-demo-icon docs__rwd-demo-icon--landscape"></span></button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-nav-global" data-size="tablet" class="fsa-btn-group__item" type="button">Tablet</button>
      <button data-behavior="toggle-rwd-size" data-target="rwd-demo_header-nav-global" data-size="desktop" class="fsa-btn-group__item" type="button">Desktop</button>
      <a class="fsa-btn-group__item" href="http://usda-fsa.github.io/fsa-style/demo/rwd__header-nav-global.html" target="_blank" title="View in a New Window">New Window</a>
    </span>
    <div class="docs__rwd-embed docs__rwd-embed--phone" id="rwd-demo_header-nav-global">
      <iframe src="http://usda-fsa.github.io/fsa-style/demo/rwd__header-nav-global.html" class="docs__rwd-iframe" allowtransparency="true" frameborder="0" scrolling="yes" allowfullscreen="true"> </iframe>
    </div>
  </div>
</div>

## Usage

<div class="fsa-alert fsa-alert--info fsa-alert--no-icon">
  <div class="fsa-alert__body">
    <p class="fsa-alert__text"><strong>DEMO:</strong> View <a href="http://usda-fsa.github.io/fsa-style/demo/rwd__header-nav-global.html" class="usa-external_link" target="_blank">demo</a> for an example of behavior. Note the <a href="#javascript-guidance">JavaScript guidance</a> of this component.</p>
  </div>
</div>

### Use When

* An FPAC Application requires navigation to other areas within the application.

### Don't Use

* As any other navigation system that is not located directly below the [Application Header]({{ site.baseurl }}guides/applications/header).
* As a jump menu that directs Users to content on the same page.

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Maintain the Unordered List and Anchor Link structure of the HTML to allow a User to Tab thru each element of the navigation.

## JavaScript Guidance

{% include scripts.about.html %}

### Summary

The JavaScript for the Top Navigation is used to set a couple of `aria-` attributes to increase usability and accessibility. The attribute changes listed below also affect visual state of the menu and menu items.

### Main Level Open

* Set `aria-expanded` attribute to false
* Set `aria-hidden` attribute to true

### Main Level Close

* Set `aria-expanded` attribute to true
* Set `aria-hidden` attribute to false

### Menu Items

* Toggle `aria-expanded` attribute to true or false based on active state
* Toggle `aria-hidden` attribute to true or false based on active state
* On `focus` of menu item set `aria-expanded` to true and `aria-hidden` to false