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

<h2>{{entry.title}}</h2>
<blockquote>{{entry.description}}</blockquote>

<h3>{{entry.section}}</h3>

<div class="ui list">
  {% for page in entry.pages %}
    <a class="item" href="{{page.url}}">{{page.title}}</a>
  {% endfor %}
</div>


{% endfor %}


<a class="ui large basic primary button fluid" href="/">
  Back Home
  <i class="right home icon"></i>
</a>
