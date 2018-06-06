---
layout: page
parent: "Components"
title: "Top Navigation"
intro: "The Top Navigation Component shall be used to create a cohesive User Experience across all FSA applications."
jump_menu: true
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

        ...

      </ul>
    </div>
  </div>
</nav>
```
<div class="ds-preview">
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
</div>

### Sub Menus

Expanding upon the menu, utilize the sub menus with `class="fsa-nav-global__sub-menu"`.

<div class="ds-preview">
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
</div>

### Sub Menus: expanded, single list

<div class="ds-preview">
  <div style="padding-bottom: 360px">
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
  </div>
</div>

### Sub Menus: expanded, single list, multi-column

<div class="ds-preview">
  <div style="padding-bottom: 250px;">
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
  </div>
</div>

### Sub Menus: expanded, grouped lists

<div class="ds-preview">
  <div style="padding-bottom: 335px;">
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
  </div>
</div>

## Usage

### Use When

* An FSA Application requires navigation to other areas within the application.

### Don't Use

* As any other navigation system that is not located directly below the [FSA Application Header]({{ site.baseurl }}guides/applications/header).
* As a jump menu that directs Users to content on the same page.

## Accessibility

Always refer to the [Accessibility Guide]({{ site.baseurl }}guides/accessibility/) for overall guidance.

* Maintain the Unordered List and Anchor Link structure of the HTML to allow a User to Tab thru each element of the navigation.
