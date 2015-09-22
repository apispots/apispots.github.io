---
layout: project.bdd
title: Given - Cookbook - BDD Testing
headline: Given
description: All the supported Given step definitions.
excerpt: "API Testing for Humans"
search_omit: true
categories: projects/bdd
tags: [apispots,bdd,testing]
---

# Given
{:class="page-header"}

This section is a reference for all the supported step definition templates that can be used within the **Given** context.  
{:class="lead"}

## Operations

### Declaring an operation using the endpoint path and HTTP method

<span class="label label-primary" title='Supported by all API types'>GENERIC</span>

This step is used within the *Given* context to specify the endpoint path and operation that the test action will execute, using the relative endpoint path and the HTTP method name. 

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		Given endpoint <em class='param'>"{path}"</em> and method <em class='param'>"{method}"</em>
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
          <td>path</td>
          <td>Any</td>
          <td>The path relative to the base URL of the target API</td>
        </tr>
        <tr class="">
          <td>method</td>
          <td>Any valid HTTP method name</td>
          <td>The HTTP method to be called on the target endpoint</td>
        </tr>
      </tbody>
    </table>
	
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    Given endpoint "/artist/browse" and method "get"
</code></pre></div>

### Declaring an operation using its unique ID 

<span class="label label-info" title='Supported by Swagger API type'>SWAGGER</span>

This step is used within the *Given* context to specify the endpoint path and operation that the test action will execute, using the relative endpoint path and the HTTP method name. 

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		Given an operation with Id <em class='param'>"{operationId}"</em>
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
          <td>operationId</td>
          <td>Any</td>
          <td>The unique Id of this operation within the Swagger definition</td>
        </tr>
      </tbody>
    </table>
	
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    Given an operation with Id "addPet"
</code></pre></div>


## Requests

### Query Parameters

<span class="label label-primary" title='Supported by all API types'>GENERIC</span>

#### Setting individual query parameters

This step definition can be used to set individual **query** level parameters that will be sent with the request when a test operation is executed.

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		And request query param <em class='{param}'>"letter"</em> equals <em class='param'>"{value}"</em>
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
          <td>param</td>
          <td>Any</td>
          <td>The name of the query parameter</td>
        </tr>
        <tr class="">
          <td>value</td>
          <td>Any</td>
          <td>The parameter value</td>
        </tr>
      </tbody>
    </table>
	
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  And request query param "petId" equals "1234"
</code></pre></div>

#### Setting multiple query parameters

This step definition can be used to set multiple **query** level parameters at once that will be sent with the request when a test operation is executed.

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		And request query params
			<em class='{param}'><br>
			<code>
				| param | value |<br>
				| one   | 1     |<br>
				| ...   | ...   |<br>	
			</code>			
			</em>
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
          <td>param</td>
          <td>Any</td>
          <td>The name of the query parameter</td>
        </tr>
        <tr class="">
          <td>value</td>
          <td>Any</td>
          <td>The parameter value</td>
        </tr>
      </tbody>
    </table>
	
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  And request query param "petId" equals "1234"
</code></pre></div>