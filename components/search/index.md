---
layout: page
parent: "Components"
title: "Search"
intro: "Allow users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation"
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
<div class="ds-preview">
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
</div>

### Default, with Icon
<div class="ds-preview">
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
</div>

```html
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
```

### Default, with Select
<div class="ds-preview">
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
</div>

```html
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
```

### Small
<div class="ds-preview">
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
</div>

```html
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
```

### Small, with Icon
<div class="ds-preview">
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
</div>

```html
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
```

### Small, with Select
<div class="ds-preview">
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
</div>

```html
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
```

### Large
<div class="ds-preview">
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
</div>

```html
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
```

### Large, with Icon
<div class="ds-preview">
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
</div>

```html
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
```

### Large, with Select
<div class="ds-preview">
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
</div>

```html
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
```


## Usage

### When to use

* There's a strong case for supplementing the navigation system and users would benefit from being able to search your site or app.

### Don't use when

* On single-page or very small sites, you may be able to get away without a search bar.

## General Guidance

* Allow the search bar to be as wide as possible, but a minimum of 27 characters wide. This allows users to enter multiple search terms and still be able to see all of them. The more users can see their search terms, the easier it is to review, verify, and submit their search query.
* The magnifying glass has been shown to be almost universally recognized by users as an indicator of search, and doesn’t need to be visually paired with the word "Search" as long as it remains for screen readers.
* Maintain this search bar when displaying the search results with the original search terms.
* On a site's home page the search function should appear as a search box instead of a link so users can locate it easily.
* Don't offer advanced search as the default option. The majority of people will do a simple search with one or two search terms. If advanced search is offered, it increases the likelihood of a person making a mistake in their query.
* Even if the search bar isn't visually displaying a label, the form field should include a label for screen reader users.
* The search button itself should be a submit button for the form to reduce the number of keystrokes required to use the form.
* Don't automatically clear the search field. Allow the user complete control on whether or not it is cleared.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

* Inherits accessibility guidelines for [Text Inputs]({{ site.baseurl }}components/text-input/#accessibility) and [Buttons]({{ site.baseurl }}components/buttons/#accessibility).
* Ensure `role="search"` is part of overall container.
* Always include a `<label>`. If visually hiding it, ensure it is properly labeled and can be announced by screen readers, i.e. via `fsa-search__label--sr-only`.
* Always include the word "search" inside the <code>&lt;button&gt;</code> element for screen readers, particularly if using an [Icon variation](#default-with-icon).


