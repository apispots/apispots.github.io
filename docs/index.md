---
layout: docs
title: API Spots
excerpt: "APIs for Humans"
search_omit: true
permalink: /docs/
---
{: .ui .dividing .header}
# Table of contents

{% for entry in site.data.toc %}

<h3>{{entry.title}}</h3>
<p>{{entry.description}}</p>

<div class="ui styled accordion">
  <div class="title active">
    <i class="dropdown icon"></i>
    {{entry.section}}
  </div>
  <div class="content active">
    <div class="ui list">
      {% for page in entry.pages %}
        <a class="item" href="{{page.url}}">{{page.title}}</a>
      {% endfor %}
    </div>
  </div>
</div>

{% endfor %}


<a class="ui large basic primary button fluid" href="/">
  Back Home
  <i class="right home icon"></i>
</a>
