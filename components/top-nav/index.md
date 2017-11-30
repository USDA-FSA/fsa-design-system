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

Top Navigation shall use `class="fsa-nav-global"`.

```html
<div class="fsa-nav-global">
  <div class="fsa-nav-global__bd">
    <ul class="fsa-nav-global__list">
      <li class="fsa-nav-global__list-item">
        <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
          <span class="fsa-nav-global__text">Home</span>
        </a>
      </li>

      ...

    </ul>
  </div>
</div>
```
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

### Sub Menus

Expanding upon the menu, utilize the sub menus with `class="fsa-nav-global__sub-menu"`.

```html
<div class="fsa-nav-global">
  <div class="fsa-nav-global__bd">
    <ul class="fsa-nav-global__list">
      <li class="fsa-nav-global__list-item">
        <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
          <span class="fsa-nav-global__text">Home</span>
        </a>
      </li>
      <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">
        <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-852145">
          <span class="fsa-nav-global__text">Transaction</span>
        </button>
        <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-852145" aria-hidden="true">
          <div class="fsa-nav-global__sub-menu-bd">
            <div class="fsa-nav-global__sub-menu-group">
              <h3 class="fsa-nav-global__sub-menu-title">Cyclical Purchasing</h3>
              <ul class="fsa-nav-global__sub-menu-list">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
              </ul>
            </div>
            <div class="fsa-nav-global__sub-menu-group">
              <h3 class="fsa-nav-global__sub-menu-title">Overage Charge Stream</h3>
              <ul class="fsa-nav-global__sub-menu-list">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Reporting Configuration</a></li>

                ...

              </ul>
            </div>
          </div>
        </div>
      </li>

      ...

    </ul>
  </div>
</div>
```
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
          <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-593945">
            <span class="fsa-nav-global__text">Admin</span>
          </button>
          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-593945" aria-hidden="true">
            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list">
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
            <span class="fsa-nav-global__text">Transaction</span>
          </button>
          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-852145" aria-hidden="true">
            <div class="fsa-nav-global__sub-menu-bd">
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title">Cyclical Purchasing</h3>
                <ul class="fsa-nav-global__sub-menu-list">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title">Overage Charge Stream</h3>
                <ul class="fsa-nav-global__sub-menu-list">
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
                <h3 class="fsa-nav-global__sub-menu-title">Fiscal Unit Development</h3>
                <ul class="fsa-nav-global__sub-menu-list">
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                </ul>
              </div>
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title">Lorem ipsum dolor</h3>
                <ul class="fsa-nav-global__sub-menu-list">
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
            <span class="fsa-nav-global__text">Reports</span>
          </button>
          <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-6s6s66" aria-hidden="true">
            <div class="fsa-nav-global__sub-menu-bd">
              <ul class="fsa-nav-global__sub-menu-list">
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

### State: expanded, single list

<div class="ds-preview">
  <div style="margin: 0 -12px; padding-bottom: 380px">
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="true" aria-controls="UNIQUE-ID-1234098">
              <span class="fsa-nav-global__text">Admin</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-1234098" aria-hidden="false">
              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list">
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
              <span class="fsa-nav-global__text">Transaction</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-4u8s5s5" aria-hidden="true">
            <div class="fsa-nav-global__sub-menu-bd">
              <div class="fsa-nav-global__sub-menu-group">
                <h3 class="fsa-nav-global__sub-menu-title">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
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
                      <h3 class="fsa-nav-global__sub-menu-title">Fiscal Unit Development</h3>
                      <ul class="fsa-nav-global__sub-menu-list">
                        <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                        <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                        <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                        <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                      </ul>
                    </div>
                    <div class="fsa-nav-global__sub-menu-group">
                      <h3 class="fsa-nav-global__sub-menu-title">Lorem ipsum dolor</h3>
                      <ul class="fsa-nav-global__sub-menu-list">
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
              <span class="fsa-nav-global__text">Reports</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-shj389" aria-hidden="true">
              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list">
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

### State: expanded, single list, multi-column

<div class="ds-preview">
  <div style="padding-bottom: 240px; margin: 0 -12px;">
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-ysh11app">
              <span class="fsa-nav-global__text">Admin</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-ysh11app" aria-hidden="true">
              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list">
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
              <span class="fsa-nav-global__text">Transaction</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-222vvnk" aria-hidden="true">
              <div class="fsa-nav-global__sub-menu-bd">
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
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
                  <h3 class="fsa-nav-global__sub-menu-title">Fiscal Unit Development</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Lorem ipsum dolor</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
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
              <span class="fsa-nav-global__text">Reports</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-geiauaport" aria-hidden="false">
              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list">
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

### State: expanded, grouped lists

```html
<div class="fsa-nav-global">
  <div class="fsa-nav-global__bd">
    <ul class="fsa-nav-global__list">
      <li class="fsa-nav-global__list-item">
        <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
          <span class="fsa-nav-global__text">Home</span>
        </a>
      </li>
      <li class="fsa-nav-global__list-item">
        <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-jsugh777">
          <span class="fsa-nav-global__text">Admin</span>
        </button>
        <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-jsugh777" aria-hidden="true">
          <div class="fsa-nav-global__sub-menu-bd">
            <ul class="fsa-nav-global__sub-menu-list">
              <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
              ...
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
          <span class="fsa-nav-global__text">Transaction</span>
        </button>
        <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-uyysh3q00" aria-hidden="false">
          <div class="fsa-nav-global__sub-menu-bd">
            <div class="fsa-nav-global__sub-menu-group">
              <h3 class="fsa-nav-global__sub-menu-title">Cyclical Purchasing</h3>
              <ul class="fsa-nav-global__sub-menu-list">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
              </ul>
            </div>
            <div class="fsa-nav-global__sub-menu-group">
              <h3 class="fsa-nav-global__sub-menu-title">Overage Charge Stream</h3>
              <ul class="fsa-nav-global__sub-menu-list">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                ...
              </ul>
            </div>
            <div class="fsa-nav-global__sub-menu-group">
              <h3 class="fsa-nav-global__sub-menu-title">Fiscal Unit Development</h3>
              <ul class="fsa-nav-global__sub-menu-list">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                ...
              </ul>
            </div>
            <div class="fsa-nav-global__sub-menu-group">
              <h3 class="fsa-nav-global__sub-menu-title">Lorem ipsum dolor</h3>
              <ul class="fsa-nav-global__sub-menu-list">
                <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                ...
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="fsa-nav-global__list-item fsa-nav-global__list-item--multi-column">
        <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-7sh37ssk">
          <span class="fsa-nav-global__text">Reports</span>
        </button>
        <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-7sh37ssk" aria-hidden="true">
          <div class="fsa-nav-global__sub-menu-bd">
            <ul class="fsa-nav-global__sub-menu-list">
              <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
              ...
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
```

<div class="ds-preview">
  <div style="padding-bottom: 290px; margin: 0 -12px;">
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <button class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" aria-controls="UNIQUE-ID-jsugh777">
              <span class="fsa-nav-global__text">Admin</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-jsugh777" aria-hidden="true">
              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list">
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
              <span class="fsa-nav-global__text">Transaction</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-uyysh3q00" aria-hidden="false">
              <div class="fsa-nav-global__sub-menu-bd">
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Cyclical Purchasing</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Overage Charge Stream</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
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
                  <h3 class="fsa-nav-global__sub-menu-title">Fiscal Unit Development</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Overview</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Budgetery Max Funding</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Premium Exposure Drive</a></li>
                    <li class="fsa-nav-global__sub-menu-item"><a class="fsa-nav-global__sub-menu-link" href="link.html">Technology Plans</a></li>
                  </ul>
                </div>
                <div class="fsa-nav-global__sub-menu-group">
                  <h3 class="fsa-nav-global__sub-menu-title">Lorem ipsum dolor</h3>
                  <ul class="fsa-nav-global__sub-menu-list">
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
              <span class="fsa-nav-global__text">Reports</span>
            </button>
            <div class="fsa-nav-global__sub-menu" id="UNIQUE-ID-7sh37ssk" aria-hidden="true">
              <div class="fsa-nav-global__sub-menu-bd">
                <ul class="fsa-nav-global__sub-menu-list">
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

Always refer to the [Accessibility Tables Guide]({{ site.baseurl }}guides/accessibility/tables) for overall guidance.

* Maintain the Unordered List and Anchor Link structure of the HTML to allow a User to Tab thru each element of the navigation.
