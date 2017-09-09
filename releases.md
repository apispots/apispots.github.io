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

  <div class="ui segment">

    {% if forloop.index == 1 %}
      {% assign classes = 'primary blue' %}
    {% else %}
      {% assign classes = 'basic blue' %}
    {% endif %}

    <h2 class="ui large {{classes}} label" id="v{{release.version}}">v{{release.version}}</h2>

    <div class="ui relaxed divided list">

      {% for item in release.items %}
        <li class="item">

          {% if item.url %}

            {% assign url = item.url %}

            {% if url != contains 'http' %}
                {% assign url = site.url | append: item.url %}
            {% endif %}

            <a href="{{url}}" target="_blank">
              {{item.title}}
            </a>
          {% else %}      
            {{item.title}}
          {% endif %}

          {% if item.type == 'bugfix' %}
            {% assign color = 'red' %}
          {% elsif item.type == 'feature' %}
            {% assign color = 'green' %}
          {% elsif item.type == 'enhancement' %}
            {% assign color = 'orange' %}
          {% endif %}


          <span class="ui right floated {{color}} basic mini label">{{item.type}}</span>

        </li>
      {% endfor %}

    </div>

  </div>  

{% endfor %}
