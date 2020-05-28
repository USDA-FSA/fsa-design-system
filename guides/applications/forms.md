---
layout: guide
parent: "Applications"
title: "Forms"
intro: ""

---

## UI Pattern

In general, FPAC applications should use a single column layout. There are instances when a two or multi-column layout is appropriate as determined based on the complexity and groupings of the form fields and product requirements.

### Single Column Example

<div class="ds-preview">
  <fieldset>
    <h3 class="fsa-m-t--none">Customer Name</h3>
    <div class="fsa-field">
      <label class="fsa-field__label" id="lorem-radio-field-1">Name Match</label>
      <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-1">
        <li>
          <span>
            <input class="fsa-radio" id="pumpkin-radio" type="radio" name="fav-pie-zz99" checked>
            <label for="pumpkin-radio">Starts with</label>
          </span>
        </li>
        <li>
          <span>
            <input class="fsa-radio" id="none-radio" type="radio" name="fav-pie-zz99">
            <label for="none-radio">Exact Match</label>
          </span>
        </li>
      </ul>
    </div>
    <div class="fsa-field">
      <label class="fsa-field__label" for="TheItem2">Last name or Business Name <span class="fsa-field__label-desc">Required</span></label>
      <input class="fsa-input fsa-field__item" id="TheItem2" aria-describedby="lorem-1234-help-9" name="TheItem2" type="text" value="">
      <span class="fsa-field__help" id="lorem-1234-help-9">Example: Doe</span>
    </div>
    <div class="fsa-field">
      <label class="fsa-field__label" for="TheItem2q5">First Name</label>
      <input class="fsa-input fsa-field__item" id="TheItem2q5" aria-describedby="lorem-1234-help-24369" name="TheItem2q5" type="text" value="">
      <span class="fsa-field__help" id="lorem-1234-help-24369">Instructional message here</span>
    </div>
  </fieldset>
  <fieldset>
    <h3 class="fsa-m-t--none">Customer Tax ID</h3>
    <div class="fsa-field">
      <label class="fsa-field__label" for="TheItem8">Tax ID <span class="fsa-field__label-desc">Required</span></label>
      <input class="fsa-input fsa-field__item" id="TheItem8" aria-describedby="lorem-1234-help-8" aria-required="true" name="TheItem8" type="text" value="">
      <span class="fsa-field__help" id="lorem-1234-help-8">Tax IDs are 8 characters, alphanumeric</span>
    </div>
    <div class="fsa-field">
      <label class="fsa-field__label" id="lorem-radio-field-9852">Tax ID Search Length</label>
      <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-9852">
        <li>
          <span>
            <input class="fsa-radio" id="sdfa24tgg-radio" type="radio" name="fav-pie-333333gha" checked>
            <label for="sdfa24tgg-radio">Whole ID</label>
          </span>
        </li>
        <li>
          <span>
            <input class="fsa-radio" id="egh5a-radio" type="radio" name="fav-pie-333333gha">
            <label for="egh5a-radio">Last 4 digits</label>
          </span>
        </li>
      </ul>
    </div>
    <div class="fsa-field">
      <label class="fsa-field__label" for="UNIQUE-ID-h24rg8">Tax ID Type</label>
      <select class="fsa-select fsa-field__item" id="UNIQUE-ID-h24rg8" name="UNIQUE-ID-h24rg8" aria-describedby="lorem-hshhsjtext-help-4">
        <option value="SSN" selected>Social Security Number (SSN)</option>
        <option value="EIN">Employer Identification Number (EIN)</option>
        <option value="ITIN">Individual Taxpayer Identification Number (ITIN)</option>
        <option value="ATIN">Taxpayer Identification Number for Pending U.S. Adoptions (ATIN)</option>
        <option value="PTIN">Preparer Taxpayer Identification Number (PTIN)</option>
      </select>
      <span class="fsa-field__help" id="lorem-hshhsjtext-help-4">You may choose a type other than the default, Social Security Number (SSN)</span>
    </div>
  </fieldset>
  <div class="fsa-field">
    <button type="submit" class="fsa-btn fsa-btn--primary">Search Profiles</button>
    <button type="button" class="fsa-btn fsa-btn--flat">Cancel</button>
  </div>
</div>

___

### Two Column Example

Using the responsive [Grid System]({{ site.baseurl }}layout/grid/), the form below is two columns when the viewport is wider than `L` and single column when narrower.

<div class="ds-preview">
  <div class="fsa-grid">
    <div class="fsa-grid__1 fsa-grid__1/2@l">
      <fieldset>
        <h3 class="fsa-m-t--none">Customer Name</h3>
        <div class="fsa-field">
          <label class="fsa-field__label" id="2-column-example__lorem-radio-field-1">Name Match</label>
          <ul class="fsa-form-list" aria-labelledby="2-column-example__lorem-radio-field-1">
            <li>
              <span>
                <input class="fsa-radio" id="2-column-example__pumpkin-radio" type="radio" name="2-column-example__fav-pie-zz99" checked>
                <label for="2-column-example__pumpkin-radio">Starts with</label>
              </span>
            </li>
            <li>
              <span>
                <input class="fsa-radio" id="2-column-example__none-radio" type="radio" name="2-column-example__fav-pie-zz99">
                <label for="2-column-example__none-radio">Exact Match</label>
              </span>
            </li>
          </ul>
        </div>
        <div class="fsa-field">
          <label class="fsa-field__label" for="2-column-example__TheItem2">Last name or Business Name <span class="fsa-field__label-desc">Required</span></label>
          <input class="fsa-input fsa-field__item" id="2-column-example__TheItem2" aria-describedby="2-column-example__lorem-1234-help-9" name="2-column-example__TheItem2" type="text" value="">
          <span class="fsa-field__help" id="2-column-example__lorem-1234-help-9">Example: Doe</span>
        </div>
        <div class="fsa-field">
          <label class="fsa-field__label" for="2-column-example__TheItem2q5">First Name</label>
          <input class="fsa-input fsa-field__item" id="2-column-example__TheItem2q5" aria-describedby="2-column-example__lorem-1234-help-24369" name="2-column-example__TheItem2q5" type="text" value="">
          <span class="fsa-field__help" id="2-column-example__lorem-1234-help-24369">Instructional message here</span>
        </div>
      </fieldset>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@l">
      <fieldset>
        <h3 class="fsa-m-t--none">Customer Tax ID</h3>
        <div class="fsa-field">
          <label class="fsa-field__label" for="2-column-example__TheItem8">Tax ID <span class="fsa-field__label-desc">Required</span></label>
          <input class="fsa-input fsa-field__item" id="2-column-example__TheItem8" aria-describedby="2-column-example__lorem-1234-help-8" aria-required="true" name="2-column-example__TheItem8" type="text" value="">
          <span class="fsa-field__help" id="2-column-example__lorem-1234-help-8">Tax IDs are 8 characters, alphanumeric</span>
        </div>
        <div class="fsa-field">
          <label class="fsa-field__label" id="2-column-example__lorem-radio-field-9852">Tax ID Search Length</label>
          <ul class="fsa-form-list" aria-labelledby="2-column-example__lorem-radio-field-9852">
            <li>
              <span>
                <input class="fsa-radio" id="2-column-example__sdfa24tgg-radio" type="radio" name="2-column-example__fav-pie-333333gha" checked>
                <label for="2-column-example__sdfa24tgg-radio">Whole ID</label>
              </span>
            </li>
            <li>
              <span>
                <input class="fsa-radio" id="2-column-example__egh5a-radio" type="radio" name="2-column-example__fav-pie-333333gha">
                <label for="2-column-example__egh5a-radio">Last 4 digits</label>
              </span>
            </li>
          </ul>
        </div>
        <div class="fsa-field">
          <label class="fsa-field__label" for="2-column-example__UNIQUE-ID-h24rg8">Tax ID Type</label>
          <select class="fsa-select fsa-field__item" id="2-column-example__UNIQUE-ID-h24rg8" name="2-column-example__UNIQUE-ID-h24rg8" aria-describedby="2-column-example__lorem-hshhsjtext-help-4">
            <option value="SSN" selected>Social Security Number (SSN)</option>
            <option value="EIN">Employer Identification Number (EIN)</option>
            <option value="ITIN">Individual Taxpayer Identification Number (ITIN)</option>
            <option value="ATIN">Taxpayer Identification Number for Pending U.S. Adoptions (ATIN)</option>
            <option value="PTIN">Preparer Taxpayer Identification Number (PTIN)</option>
          </select>
          <span class="fsa-field__help" id="2-column-example__lorem-hshhsjtext-help-4">You may choose a type other than the default, Social Security Number (SSN)</span>
        </div>
      </fieldset>
    </div>
  </div>
  <div class="fsa-field">
    <button type="submit" class="fsa-btn fsa-btn--primary">Search Profiles</button>
    <button type="button" class="fsa-btn fsa-btn--flat">Cancel</button>
  </div>
</div>

## Related Resources

 * [Form Fields]({{ site.baseurl }}components/form-fields/)
 * [Accessibility]({{ site.baseurl }}guides/accessibility/forms)
