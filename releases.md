---
layout: docs
title: API Spots
excerpt: "APIs for Humans"
search_omit: true
permalink: /releases/
---
{: .ui .dividing .header}
# API Spots Release History



{% for release in site.data.releases %}

  <h2 class="ui large basic blue label" id="v{{release.version}}">v{{release.version}}</h2>

  <ul>

    {% for item in release.items %}
      <li>

        {{item.title}}

        {% if item.type == 'bugfix' %}
          <span class="ui red basic mini label">bugfix</span>
        {% elsif item.type == 'feature' %}
          <span class="ui green basic mini label">new</span>
        {% elsif item.type == 'enhancement' %}
          <span class="ui orange basic mini label">enhancement</span>
        {% endif %}

      </li>
    {% endfor %}

  </ul>

{% endfor %}
