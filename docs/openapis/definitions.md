---
layout: docs
title: Docs - API Spots
excerpt: "APIs for Humans"
search_omit: true
categories: features
permalink: /docs/openapis/definitions/
---

# Introduction
{: .ui .dividing .header}

The Open API definitions tool allows the user to explore, visualize and interact
with Open API definitions.  The tool focuses on building a bridge that will
bring APIs closer even to users without any technical background, keeping
interactions to a [human-next-door](#){:data-tooltip="Users that do not necessarily have to be developers or rocket scientists"}{: .tag .value} level.

## Opening an Open API definition by URL

<div class="ui message">
  <div class="header">
    The Petstore API
  </div>
  <ul class="list">
    <li>The infamous Petstore API example will be used as a show case</li>
    <li>You can play around with the original <a href="http://petstore.swagger.io" target="_blank">Swagger console</a></li>
  </ul>
</div>

Clicking on the **API Spots** extension action button on the top right side of the Chrome
toolbar, will open a new tab with the Open APIs page.

![API Spots extension button]({{site.url}}/assets/images/docs/extension/extension-button.png){:class="ui image"}

On the Open APIs page you will find a section that prompts to enter the URL
of an Open API definition document.  The URL of the *Petstore API* is
pre-filled, so by clicking the <i class="search icon"></i> icon the tool will
load the definition from the given URL.

![Enter Open API URL]({{site.url}}/assets/images/docs/openapis/definitions/enter-openapi-url.png){:class="ui image"}

## Automatically detecting Open API definitions

One of the great features that browser extensions offer is that by nature they
can process directly any page visited by the user and work **in context** with
other browser processes.

The Open API definitions tool automatically scans the content of every page
opened by the browser in order to check whether the document is a valid
Open API definition.

If a valid Open API definition is detected, a notification will pop-up
announcing that the page you are currently viewing is an **API spot** and
by clicking on it will open the definition using the tool.

<div class="ui segments">
  <div class="ui segment">
  <p>Click on the link to open the raw Open API definition of the Petstore API in a new tab.</p>
    <a href="http://petstore.swagger.io/v2/swagger.json" target="_blank">Petstore API - Open API definition <i class="external icon"></i></a>
  </div>
  <div class="ui secondary segment">
    <img class="ui image fluid" src="{{site.url}}/assets/images/docs/openapis/definitions/openapi-detection-notification.png"></img>
  </div>
</div>

This way you can browser the web as usual and when you hit an *API spot*, the extension will let you
know.

## Exploring the API definition

Once an Open API definition has been successfully parsed by the tool a new page will be loaded
where you can explore the definition which is split into different sections for higher
readability.

### General information

Displays general information about the API including

- terms of service
- licensing information
- contacts
- tags
- etc

![General information]({{site.url}}/assets/images/docs/openapis/definitions/section-general.png){:class="ui image bordered"}


### Data definitions

Displays the list of defined data models associated with the supported API operations.  Data
definition cards are interactive and clicking on them will bring up the details view.

![Data definitions]({{site.url}}/assets/images/docs/openapis/definitions/section-data-definitions.png){:class="ui image bordered"}

### Security definitions

Displays the list of defined security definitions, including information about

- authentication protocol
- properties
- scopes

![Security definitions]({{site.url}}/assets/images/docs/openapis/definitions/section-security.png){:class="ui image bordered"}

### Operations

Displays the list of supported API operations in a number of ways.

#### Paths list

Displays a list of paths and supported operations as a table.  The list is interactive
and the colored dots represent a different HTTP operation (verb).   

![Paths list]({{site.url}}/assets/images/docs/openapis/definitions/paths.png){:class="ui image bordered"}

Clicking on a path link will bring up a detailed view segmented by operation type that includes

- summary
- description
- security
- parameters
- responses
- etc

![Paths list]({{site.url}}/assets/images/docs/openapis/definitions/path-details.png){:class="ui image bordered"}

#### Paths graph

Displays an interactive graph that visualizes the API's paths tree. Nodes represent resources / subresources
and edges glue them together into paths.  Double-clicking on a node will bring up the details view.

![Paths list]({{site.url}}/assets/images/docs/openapis/definitions/graph.png){:class="ui image bordered"}

<a class="ui large basic primary button fluid" href="/docs/openapis/catalogs/">
  Read next: Open API catalogs
  <i class="right chevron icon"></i>
</a>
