---
layout: docs
title: Docs - API Spots
excerpt: "APIs for Humans"
search_omit: true
categories: features
permalink: /docs/openapis/security/
---

# API Security
{: .ui .dividing .header}

The Open API specification defines an optional set of authentication methods
that can be applied on operations in a granular manner.  If an API requires
authentication so that the consumer's identity can be verified, this chapter
chapter will give you a walk through on how to activate security features.

<div class="ui visible warning compact message">
  <h4 class="ui header">
    Heads up!
  </h4>
  <p>
    Only two authentication methods are currently supported:
    <strong>Basic</strong> and <strong>API key</strong>.
  </p>
</div>

## Activating an authentication method

In the API explorer and under the section **Security** of the
API definition, a list of cards are displayed based on the security
definitions.

![Security methods]({{site.url}}/assets/images/docs/openapis/definitions/security-methods.png){:class="ui image centered"}

You can activate the authentication method of choice directly from the card.  
A modal will be displayed prompting you to enter all required credentials,
depending on the authentication scheme.

![Security credentials]({{site.url}}/assets/images/docs/openapis/definitions/security-credentials.png){:class="ui image centered"}

Once the credentials have been entered they become available for interacting with the
API.  At any point in time you can alter or deactivate the security method directly
from this card.

![Security activated]({{site.url}}/assets/images/docs/openapis/definitions/security-activated.png){:class="ui image centered"}

## Supported security methods

<div class="ui visible compact message">
  <h4 class="ui header">
    Heads up!
  </h4>
  <p>
    All authentication credentials are stored locally on your Chrome
    browser by the extension.  You can find out more in the
    <a href="{{site.url}}/faq#where-do-my-data-live" target="_blank">F.A.Q.</a>.
  </p>
</div>

### Basic authentication

APIs using **basic HTTP** authentication method as a security scheme, will require you to
enter a set of credentials consisting of a *username* and *password* issued by the provider.

### API key authentication

APIs secured using an **API key** authentication method will require you to
enter a key issued by the provider.  The API key authentication requires no
password.

<a class="ui large basic primary button fluid" href="/docs/openapis/catalogs/">
  Read next: Open API catalogs
  <i class="right chevron icon"></i>
</a>
