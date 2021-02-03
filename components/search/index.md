---
layout: page
parent: "Components"
type: "UI Component"
title: "Search"
shortName: "component__search"
intro: "Find specific content via user input."
relatedItems:
  - "Buttons"
  - "Text Input"
  - "Form Fields"
jump_menu: true
---

<div class="ds-preview">
  <div class="fsa-search" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-uuwusuusus7">Label</label>
        <input class="fsa-input fsa-search__input" id="UNIQUE-ID-uuwusuusus7" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-search__btn" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</div>

## Variations

### Default

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-yughsjj6j">Label</label>
        <input class="fsa-input fsa-search__input" id="UNIQUE-ID-yughsjj6j" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-search__btn" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Default, with label

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label" for="UNIQUE-ID-yu3h55_">Label</label>
        <input class="fsa-input fsa-search__input" id="UNIQUE-ID-yu3h55_" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-search__btn" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Default, with Icon

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-hghhwshd3">Label</label>
        <input class="fsa-input fsa-search__input" id="UNIQUE-ID-hghhwshd3" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-search__btn fsa-search__btn--icon" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Default, with Select

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-hghhwdd7803">Label</label>
        <input class="fsa-input fsa-search__input" id="UNIQUE-ID-hghhwdd7803" type="search" name="search">
      </div>
      <div class="fsa-search__entry">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-dfyu65ppj">Label</label>
        <select class="fsa-select fsa-search__select" name="UNIQUE-NAME-dfyu65ppj" id="UNIQUE-ID-dfyu65ppj">
          <option value="none" selected="selected">All</option>
          <option value="asdf">Farms</option>
          <option value="qwer">States</option>
          <option value="qwer">Markets</option>
        </select>
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-search__btn fsa-search__btn--icon" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Default, with Select and Labels

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label" for="UNIQUE-ID-hg__553">Label</label>
        <input class="fsa-input fsa-search__input" id="UNIQUE-ID-hg__553" type="search" name="search">
      </div>
      <div class="fsa-search__entry">
        <label class="fsa-search__label" for="UNIQUE-ID-d___999s">Label</label>
        <select class="fsa-select fsa-search__select" name="UNIQUE-NAME-dfyu65ppj" id="UNIQUE-ID-d___999s">
          <option value="none" selected="selected">All</option>
          <option value="asdf">Farms</option>
          <option value="qwer">States</option>
          <option value="qwer">Markets</option>
        </select>
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-search__btn fsa-search__btn--icon" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search fsa-search--small" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-uusuHSUGJS7">Label</label>
        <input class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-uusuHSUGJS7" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-btn--small fsa-search__btn" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small, with Icon

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search fsa-search--small" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-5555F555F5t">Label</label>
        <input class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-5555F555F5t" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Small, with Select

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search fsa-search--small" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-5555F35ggq5t">Label</label>
        <input class="fsa-input fsa-input--small fsa-search__input" id="UNIQUE-ID-5555F35ggq5t" type="search" name="search">
      </div>
      <div class="fsa-search__entry">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-aug1234asdfj">Label</label>
        <select class="fsa-select fsa-select--small fsa-search__select" name="UNIQUE-NAME-aug1234asdfj" id="UNIQUE-ID-aug1234asdfj">
          <option value="none" selected="selected">All</option>
          <option value="asdf">Farms</option>
          <option value="qwer">States</option>
          <option value="qwer">Markets</option>
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
{% endcapture %}

{% include preview-and-snippet.html %}

### Large

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search fsa-search--large" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-3338hIISH8">Label</label>
        <input class="fsa-input fsa-input--large fsa-search__input" id="UNIQUE-ID-3338hIISH8" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-btn--large fsa-search__btn" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large, with Icon

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search fsa-search--large" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-ttg5555jjJ">Label</label>
        <input class="fsa-input fsa-input--large fsa-search__input" id="UNIQUE-ID-ttg5555jjJ" type="search" name="search">
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-btn--large fsa-search__btn fsa-search__btn--icon" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

### Large, with Select

{% capture snippet %}
<form action="dest.html">
  <div class="fsa-search fsa-search--large" role="search">
    <div class="fsa-search__bd">
      <div class="fsa-search__entry fsa-search__entry--grow">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-tabczzpJ">Label</label>
        <input class="fsa-input fsa-input--large fsa-search__input" id="UNIQUE-ID-tabczzpJ" type="search" name="search">
      </div>
      <div class="fsa-search__entry">
        <label class="fsa-search__label fsa-search__label--sr-only" for="UNIQUE-ID-a78q8jt">Label</label>
        <select class="fsa-select fsa-select--large fsa-search__select" name="UNIQUE-NAME-a78q8jt" id="UNIQUE-ID-a78q8jt">
          <option value="none" selected="selected">All</option>
          <option value="asdf">Farms</option>
          <option value="qwer">States</option>
          <option value="qwer">Markets</option>
        </select>
      </div>
      <div class="fsa-search__submit">
        <button class="fsa-btn fsa-btn--large fsa-search__btn fsa-search__btn--icon" type="submit">
          <span class="fsa-search__text">Search</span>
        </button>
      </div>
    </div>
  </div>
</form>
{% endcapture %}

{% include preview-and-snippet.html %}

## Usage

{% capture usage_do %}
* If a strong case exists for supplementing the navigation system and users would benefit from being able to search your site or app.
{% endcapture %}

{% capture usage_dont %}
* On single-page or very small sites, you may be able to get away without a search bar.
{% endcapture %}

{% include do-dont.html %}

{% include related-cards.html %}

## General Guidance

* Allow the search bar to be as wide as possible, ideally allowing approximately 27 characters to be visible without horizontal scrolling. This allows users to enter multiple search terms, decreasing the chances of obscuring some text. The more users can see their search terms, the easier it is to review, verify, and submit their search query.
* The magnifying glass has been shown to be almost universally recognized by users as an indicator of search, and may not always need be visually paired with the word "Search" as long as it remains for screen readers.
* When displaying search results retain this component with its original search terms intact.
* Do not allow the system to automatically clear the search field. Allow the user complete control on whether or not it is cleared.
* Even if the search component doesn't visually display a label, the form field should include a label for screen reader users.
* The search button itself must be a submit button (i.e. `<input type="submit...`) to reduce the number of keystrokes required to use the form.
* Avoid offering advanced search as the default option. The majority of people will do a simple search with one or two search terms. If advanced search is offered, it increases the likelihood of a person making a mistake in their query.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Inherits accessibility guidelines for [Text Inputs]({{ site.baseurl }}components/text-input/#accessibility) and [Buttons]({{ site.baseurl }}components/buttons/#accessibility).
* Ensure `role="search"` is part of overall container.
* Always include a `<label>`. If visually hiding it, ensure it is properly labeled and can be announced by screen readers, i.e. via `fsa-search__label--sr-only`.
* Always include the word "search" inside the <code>&lt;button&gt;</code> element for screen readers, particularly if using an [Icon variation](#default-with-icon).



## Related Resources

* The [Global Navigation]({{ site.baseurl }}components/top-nav/#example-with-search) component contains examples with this component nested.
