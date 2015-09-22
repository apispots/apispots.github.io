---
layout: project.bdd
title: Background - Cookbook - BDD Testing
headline: Background
description: All the supported Background step definitions.
excerpt: "API Testing for Humans"
search_omit: true
categories: projects/bdd
tags: [apispots,bdd,testing]
---

# Background
{:class="page-header"}

This section is a reference for all the supported step definition templates that can be used within the **Background** context.  
{:class="lead"}

<div class="bs-callout bs-callout-warning">
    <h4>Important!</a></h4>
    <p>
		The service expects a valid <b>Background</b> section to be provided at the beginning of every feature test file that 
		will point to a valid API specification.    	
    </p>
</div>

<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: OpenWeatherMap API - Current weather data
  
  As a client of the OpenWeatherMap API
  I want to run tests
  In order to validate 'Current weather data' operations

  Background: 
</code></pre></div>

## API Definitions

<span class="label label-primary" title='Supported by all API types'>GENERIC</span>

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		Given a <em class='param'>"{API type}"</em> API definition at <em class='param'>"{URL}"</em>
	</blockquote>	   
		
	<table class="table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Values</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td>API type</td>
          <td>
          	<ul>
          		<li>REST</li>
          		<li>Swagger</li>
          	</ul>
          </td>
          <td>The type of the target API under test</td>
        </tr>
        <tr class="">
          <td>URL</td>
          <td>A valid URL</td>
          <td>If the target API is generic REST, then the base URL - else the specification URL.</td>
        </tr>
      </tbody>
    </table>
	
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Given a "REST" API definition at "http://api.openweathermap.org/data/2.5"
</code></pre></div>

## Security Definitions

### Global security request parameters

<span class="label label-primary" title='Supported by all API types'>GENERIC</span>

You can define request parameters relative to the security context of an API - e.g. API keys - that are meant to be included in every request to the target API within the **Background** section.

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
    	And security query param <em class='param'>"{query param}"</em> oauth_consumer_key" equals <em class='param'>"{value}"</em>	
	</blockquote>	   
	
	<table class="table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Values</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td>query param</td>
          <td>Any</td>
          <td>The name of a parameter to be appended to the query params of a request prior to every API call</td>
        </tr>
        <tr class="">
          <td>value</td>
          <td>Any</td>
          <td>The value of the query param</td>
        </tr>
      </tbody>
    </table>
	
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
	And security query param <em class='param'>"</em> oauth_consumer_key" equals <em class='param'>"7d9wh7e3jzaf"</em>	
</code></pre></div>
