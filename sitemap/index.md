---
layout: category
title: "Sitemap"
intro: ""
---

<nav>
  <div class="ds-sitemap">
    <div class="ds-sitemap__list ds-sitemap__list--root">
      {% for link in site.data.navvy %}
      <div class="ds-sitemap__list-item ds-sitemap__list-item--root">
        <a class="ds-sitemap__link ds-sitemap__link--root" href="{{ site.baseurl }}{{ link.href }}">{{ link.title }}</a>
        {% if link.subcategories %}
        <ul class="ds-sitemap__list">
          {% for subpage in link.subcategories %}
            <li class="ds-sitemap__list-item">
              <a class="ds-sitemap__link" href="{{ site.baseurl }}{{ subpage.subhref }}">{{ subpage.subtitle }}</a>
              {% if subpage.subhref contains 'guides/' %}
                {% assign guide = subpage.subhref | replace:'guides/','guide_' %}
                <ul class="ds-sitemap__list">
                {% for article in site.data.[guide] %}
                  <li class="ds-sitemap__list-item">
                    <a class="ds-sitemap__link" href="{{ article.href | prepend: site.baseurl }}">
                      {{ article.title }}
                    </a>
                  </li>
                {% endfor %}
              </ul>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</nav>
