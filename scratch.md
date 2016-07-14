---
layout: page
title: Jekyll data samples
---

## /_data/navvy.yml

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


## /_data/terms.yml

### As <code>dl</code> list

{% for term in site.data.terms %}

  <dl>
    <dt>{{ term.name }}</dt>
    {% if term.definition %}
    <dd>
      {{ term.definition }}
    </dd>
    {% endif %}
  </dl>

{% endfor %}

### As <code>abbr</code> list

<ul>
  {% for term in site.data.terms %}
    <li>
      <abbr title="{{ term.definition }}">{{ term.name }}</abbr>
    </li>
  {% endfor %}
</ul>
