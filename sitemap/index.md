---
layout: category
title: "Sitemap"
intro: ""
---

<nav>
  <div class="ds-sitemap">
    <ul class="ds-sitemap__list ds-sitemap__list--root">
      {% for link in site.data.navvy %}
        {% unless link.exclude_from_sitemap %}
        <li class="ds-sitemap__list-item ds-sitemap__list-item--root">
          <a class="ds-sitemap__link ds-sitemap__link--root js-quick-find--tier1" href="{{ site.baseurl }}{{ link.href }}" data-keywords="{{ link.keyword }}">
            <span class="ds-sitemap__text">{{ link.title }}</span>
          </a>
          {% if link.componentgroup %}
            <ul class="ds-sitemap__list">
              {% for group in link.componentgroup %}
                <li class="ds-sitemap__list-item">
                  <a class="ds-sitemap__link js-quick-find--tier2" href="{{ site.baseurl }}{{ link.href }}/#{{ group.title | downcase | replace: ' ', '-' }}" data-keywords="{{ group.keyword }}">
                    <span class="ds-sitemap__text">{{ group.title }}</span>
                  </a>
                  <ul class="ds-sitemap__list">
                    {% for subgroup in group.subcategories %}
                    <li class="ds-sitemap__list-item">
                      <a class="ds-sitemap__link js-quick-find--tier3" href="{{ subgroup.subhref | prepend: site.baseurl }}" data-keywords="{{ subgroup.keyword }}">
                        <span class="ds-sitemap__text">{{ subgroup.subtitle }}</span>
                      </a>
                    </li>
                    {% endfor %}
                  </ul>
                </li>
              {% endfor %}
            </ul>
          {% else %}
            <ul class="ds-sitemap__list">
              {% for subpage in link.subcategories %}
                <li class="ds-sitemap__list-item">
                  <a class="ds-sitemap__link js-quick-find--tier2" href="{{ site.baseurl }}{{ subpage.subhref }}" data-keywords="{{ subpage.keyword }}">
                    <span class="ds-sitemap__text">{{ subpage.subtitle }}</span>
                  </a>
                  {% if subpage.subhref contains 'guides/' %}
                    {% assign guide = subpage.subhref | replace:'guides/','guide_' %}
                    <ul class="ds-sitemap__list">
                    {% for article in site.data.[guide] %}
                      <li class="ds-sitemap__list-item">
                        <a class="ds-sitemap__link js-quick-find--tier3" href="{{ article.href | prepend: site.baseurl }}" data-keywords="{{ article.keyword }}">
                          <span class="ds-sitemap__text">{{ article.title }}</span>
                        </a>
                      </li>
                    {% endfor %}
                  </ul>
                  {% endif %}
                </li>
              {% endfor %}
            </ul>
          {% endif %}
        </li>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
</nav>