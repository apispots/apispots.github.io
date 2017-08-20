---
layout: docs
title: Docs - API Spots
excerpt: "APIs for Humans"
search_omit: true
categories: features
permalink: /docs/openapis/catalogs/
---

# API discovery through open catalogs
{: .ui .dividing .header}

One of the areas the **API Spots** project aims in leveraging is APIs discovery.  There is
a number of 3rd party API catalogs that the project currently supports from experts
with great impact within the space.


<div class="ui stripe community vertical segment">
  <div class="ui two column center aligned divided very relaxed stackable grid container">
    <div class="row">
      <div class="column">
        <h2 class="ui icon header">
          <img class="ui icon image" src="http://apievangelist.com/images/kin-lane-api-evangelist-cartoon.png">
          The API Stack by the API Evangelist
        </h2>
        <p>
          These are the APIs I am tracking on that I have been profiling deeper,
          which includes the crafting of OpenAPI Specs that describe the surface area of the API.
        </p>
        <a class="ui button" href="http://theapistack.com/" target="_blank">
          <i class="home icon"></i> Website
        </a>
        <a class="ui button" href="https://github.com/api-stack/api-stack" target="_blank">
          <i class="github icon"></i> Github
        </a>
      </div>
      <div class="column">
        <h2 class="ui icon header">
          <img class="ui icon image" src="https://apis.guru/branding/logo_vertical.svg">
          APIs.guru
        </h2>
        <p>
        Semantic has integrations with <b>React, Angular, Meteor, Ember</b> and many other frameworks to help organize your UI layer alongside your application logic.
        </p>
        <a class="ui button" href="http://theapistack.com/" target="_blank">
          <i class="home icon"></i> Website
        </a>
        <a class="ui button" href="https://github.com/api-stack/api-stack" target="_blank">
          <i class="github icon"></i> Github
        </a>
      </div>
    </div>
  </div>
</div>

## APIs.json catalogs support

> The format is designed for public deployment and for consumption by automated software agents (robots).

<address>
    Find out more about the format at the official <a href="http://apisjson.org">website</a>
</address>

APIs.json catalogs are a great way of organizing API spots - either public or private - together
so that others can discover.  The following example shows the structure of a basic catalog.

<div class="ui existing segment">
<pre>
<code class="code json">
{
  "name": "API Evangelist",
  "description": "This is an inventory of APIs available as part of the API Evangelist network.",
  "image": "https://s3.amazonaws.com/kinlane-productions/api-evangelist/t-shirts/KL_InApiWeTrust-1000.png",
  "tags": [
    "application programming interface",
    "API",
    "News",
    "Analysis"
  ],
  "created": "2014-04-07",
  "modified": "2014-07-09",
  "url": "http://apievangelist.com/apis.json",
  "specificationVersion": "0.15",
  "apis": [
    {
      "name": "Analysis",
      "description": "Provides access to blog posts and analysis across the API Evangelist network.",
      "image": "https://s3.amazonaws.com/kinlane-productions/api-evangelist/t-shirts/KL_InApiWeTrust-1000.png",
      "humanURL": "http://developer.apievangelist.com",
      "baseURL": "http://api.apievangelist.com/definitions/Analysis",
      "tags": [
        "blog",
        "industry",
        "analysis",
        "new",
        "API",
        "Application Programming Interface"
      ],
      "properties": [
        {
          "type": "X-signup",
          "url": "https://apievangelist.3scale.net/"
        },
        {
          "type": "Swagger",
          "url": "http://api.apievangelist.com/definitions/Analysis"
        },
        {
          "type": "X-blog",
          "url": "http://developer.apievangelist.com/blog/"
        },
        {
          "type": "X-apicommonsmanifest",
          "url": "https://raw.githubusercontent.com/kinlane/analysis-api/master/api-commons-manifest.json"
        }
      ],
      "contact": [
        {
          "FN": "API Evangliest",
          "email": "info@apievangelist.com",
          "X-twitter": "apievangelist"
        }
      ]
    },
    {
      "name": "Tools",
      "description": "Provides access to tools that are being tracked on as part of the API Evangelist network.",
      "image": "https://s3.amazonaws.com/kinlane-productions/api-evangelist/t-shirts/KL_InApiWeTrust-1000.png",
      "humanURL": "http://developer.apievangelist.com",
      "baseURL": "http://api.apievangelist.com/definitions/Tools",
      "tags": [
        "API",
        "Application Programming Interface",
        "Tools"
      ],
      "properties": [
        {
          "type": "X-signup",
          "url": "https://apievangelist.3scale.net/"
        },
        {
          "type": "Swagger",
          "url": "http://api.apievangelist.com/definitions/Tools"
        },
        {
          "type": "X-blog",
          "url": "http://developer.apievangelist.com/blog/"
        },
        {
          "type": "X-apicommonsmanifest",
          "url": "https://raw.githubusercontent.com/kinlane/tools-api/master/api-commons-manifest.json"
        }
      ],
      "contact": [
        {
          "FN": "API Evangliest",
          "email": "info@apievangelist.com",
          "X-twitter": "apievangelist"
        }
      ]
    }
  ],
  "include": [
    {
      "name": "API Evangelist - Products",
      "url": "http://products.apievangelist.com/apis.json"
    }
  ],
  "maintainers": [
    {
      "FN": "Kin",
      "X-twitter": "apievangelist",
      "email": "kin@email.com"
    }
  ]
}
</code>
</pre>

</div>

### Catalog spots detection

The **API Spots** catalogs tool supports in-context detection of APIs.json
catalog spots.

<div class="ui message">
  <div class="header">
    The API Evangelist sample catalog
  </div>
  <ul class="list">
    <li><a href="https://gist.githubusercontent.com/kinlane/10094618/raw/4dbb7254635417b2daa071aa1ca139a7d7f225bc/api.json" target="_blank">Click</a> to open the catalog</li>
    <li>A notification should pop up</li>
    <li>Click on it to view open the catalogs tool and browse the contents</li>
  </ul>
</div>
