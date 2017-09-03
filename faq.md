---
layout: docs
title: API Spots
excerpt: "APIs for Humans"
search_omit: true
permalink: /faq/
---
{: .ui .dividing .header}
# API Spots FAQ

## What is it all about?

The API Spots is an open-source collection of tools for discovering,
exploring and interacting with APIs.  One of the main goals of the
project is to enable non-technical audiences to onboard, understand
and use APIs.  [Read the introduction]({{site.url}}/docs/intro) for more information.

## How do I use it?

The tools are bundled as a Chrome browse extension so all you need
is to have Chrome installed.  Click on the link below that
will take you to the Chrome Web store and add the extension.  

<a class="basic primary fluid ui button" href="{{site.extension.download-url}}" target="_blank"><i class="download icon"></i> Download the Chrome extension</a>

## Something is not working as it should... what do I do?

The project is hosted at <i class="github icon"></i> [Github](https://github.com/apispots/apispots-extension){: target="_blank"}
so click on the button below and file a ticket,
describing the issue you are facing.

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/apispots/apispots-extension/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue apispots/apispots-extension on GitHub">Issue</a>

## Where do my data live?
{: id="where-do-my-data-live"}

The API Spots Chrome extension is **not** using any **owned** servers for storing
and exchanging data.  This means that all data the extension is managing
are stored locally on your browser.  

In the case of 3rd party service integrations (e.g. with Github) you will be asked
for granting any required permissions.

All locally saved data will be removed once the extension itself is removed from
Chrome.

{: id="opensource"}
## Open Source

The API Spots is 100% open source software hosted over at [Github](https://github.com/apispots/apispots-extension){: target="_blank"}.

Some of the projects in use are:

<div class="ui bulleted list">

{% for entry in site.data.opensource %}

  <a class="item" href="{{entry.url}}" target="_blank">{{entry.title}}</a>

{% endfor %}

</div>

... and many more.

## Graphics

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
