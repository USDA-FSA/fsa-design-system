---
layout: home
title: Home
---

<div class="ds-article">

  <p class="fsa-text--lead">Open Source design resource and guidelines defining the next generation of FSA digital products, setting a new bar for simplicity and consistency across the USDA Farm Service Agency.</p>

  {% if jekyll.environment == "development" %}
    <div class="ds-preview">
      <nav>
        <ul>
          {% for link in site.data.navvy %}
            <li>
              <a href="{{ site.baseurl }}{{ link.href }}">{{ link.title }}</a>
              {% if link.subcategories %}
                <ul>
                  {% for subpage in link.subcategories %}
                    <li><a  href="{{ site.baseurl }}{{ subpage.subhref }}">{{ subpage.subtitle }}</a></li>
                  {% endfor %}
                </ul>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
      </nav>
    </div>
  {% endif %}

  <div class="fsa-grid ds-home-features">
    <div class="fsa-grid__1 fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}visual-style/">
        <h3 class="ds-home-features__title">Visual Style</h3>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_visual_style_guide_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">508-compliant colors and typography designed to establish a cohesive experience.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}elements/">
        <h3 class="ds-home-features__title">Elements</h3>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_components_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Common web interactions with reusable and downloadable HTML/CSS.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}guides/">
        <h3 class="ds-home-features__title">Guides</h3>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_designer_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Guidelines covering Accessibility and Content for FSA digital products.</p>
    </div>
  </div>

</div>
