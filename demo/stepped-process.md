---
layout: demo
---

<div>
  <nav aria-label="Breadcrumbs">
    <div class="fsa-stepped-tabs">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="link.html">
              <span class="fsa-stepped-tabs__text">Discovery</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="link.html" aria-current="step">
              <span class="fsa-stepped-tabs__text">Adjustments</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Review</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Publish</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
  <div class="DEMO-STICKY-STEPPED-CONTROL">
    <div class="fsa-text-align--center" style="padding: 20vh 24px;">
      (Content)
    </div>
  </div>
  <div class="fsa-stepped-control fsa-stepped-control--sticky">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message fsa-stepped-control__message--block" role="status">
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
