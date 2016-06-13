---
layout: project.bdd
title: A first example - BDD Testing
headline: A First Example
description: Learn how to use the service following a step-by-step example.
excerpt: "API Testing for Humans"
search_omit: true
categories: projects/bdd
tags: [apispots,bdd,testing]
---

# Testing an API
{:class="page-header"}

In this section you will learn how to start using the **BDD API Testing** service for running tests against a RESTful API.  
{:class="lead"}

For this first example, we will be using the [**OpenWeatherMap** API](http://openweathermap.org/api){:target='_blank'} that is an open weather forecast service.

## Create the test story file

The first thing we need to do for starting off with our tests, is to create a file that will contain the basic test scenario that we will try out. So, let's create a new empty file and give it the name **first-one.feature**.  Notice the *.feature* suffix - this is a convention used by the *Cucumber* framework and it's good to stick with it for convenience.  If you recall in BDD, test stories usually refer to single features and are meant to be autonomous.

<div class="bs-callout bs-callout-info">
    <h4>Heads up!</h4>
    <p>For authoring your test files using the Gherkin language, you can use any type of editor you want.  The good news is that you can find a Gherkin syntax plugin for many of the popular IDEs and editors.  <a href='https://github.com/cucumber/gherkin/wiki/Tool-Support' target='_blank'>Have a look at this list</a>.</p>
</div>


## Add a test feature

For a full reference on the Gherkin syntax, please read the [reference manual](https://cucumber.io/docs/reference){:target='_blank'} on the web site of the Cucumber framework.
{:class="lead"}

In the new file we have just created, the first thing to do is add the title and description of the API feature we want to test.  Every RESTful API is supposed to provide at least an **endpoint** and an **operation** that maps to an HTTP method (GET, POST, DELETE, etc).

Let's suppose we are prospect clients of this API and we want to make sure that it does what it says it does.  In this scenario, we can split the API into virtual functional segments that we can map out to individual test features.  As the matter of fact the documentation from their web site has already done this for as as shown in the following picture:

![OpenWeatherMap API]({{site.url}}/assets/apispots/bdd/openweathermap-api.png "OpenWeatherMap API"){:class='img-thumbnail'}

The API structure is pretty much self explanatory, so let's give it a spin by testing the **Current weather data** feature.    

<div class="bs-callout bs-callout-info">
    <h4>Heads up!</h4>
    <p>Before accessing the OpenWeatherMap API you need to get
    your own API key.  Read the instructions <a href='http://openweathermap.org/price_subscribe' target='_blank'>here</a>.</p>
</div>

<div class="bs-example feature">
   Copy and paste the following Gherkin snippet into the feature file.  This section is the feature title and a short description on what this
   test is all about.
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: OpenWeatherMap API - Current weather data

  As a client of the OpenWeatherMap API
  I want to run tests
  In order to validate 'Current weather data' operations
</code></pre></div>

<div class="bs-callout bs-callout-warning">
    <h4>Heads up!</h4>
    <p><b>Feature:</b> is a reserved keyword, whereas everything else is just comments - pay attention to the spaces and tabs.  Make sure
   you read the Gherkin primer first or use a Gherkin editor just to be sure you're on the right track.</p>
</div>

## Let's add some background

Now that we know the target API and the feature we want to test, it's time to let the service know about the API too.  Since we do not have any other meta-data info on this API (e.g. *Swagger* definition) the only thing we know is its **base URL**.  From the API documentation this would be:

> http://api.openweathermap.org/data/2.5

Note that this is a versioned API and this reflects to the URL (the */2.5* part that is).  Our service needs to know about this, so let's add another section in our test file:

<div class="bs-example background">
The background section is an important part of the service - in Gherkin a <b>Background</b> section is executed prior to any of the test scenarios to follow and is a convenient way of re-using a number of steps that are required to be executed before hand prior to any other step within a test feature file.  
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Background:
    Given a "REST" API definition at "http://api.openweathermap.org/data/2.5"
    And security query param "appid" equals "[enter your API key here]"
</code></pre></div>

What we have done here is to tell the service that we will be testing a **generic REST** API with base definition at URL *http://api.openweathermap.org/data/2.5*.  As you will see next, all endpoint operations will reuse this base URL
information in a *relative path* mode.  We have also added a security query param called **appid** that will be included
in every executed request to the API.  This way, you don't have to explicitly include it every time in each scenario.

This **Given** statement is provided by the service as is and the only thing you need to do is to specify the API definition type and URL.

> Given a "REST | Swagger | ...]" API definition at "[base or definition URL]"


## Let's write a first scenario

Now that we have defined the API to be tested, it's time to write our first scenario.  According to the API's documentation, one thing that we can do with the API is to get weather data for a single location.  So this is what we will be testing.

From the documentation we can see that the current weather feature is provided through the **/weather** endpoint and to get the weather data for a specific city we have to call the **GET** method passing a query string with the city name and optionally the country code as the request params.

<div class="bs-example scenario">
<b>Scenario</b>: Get current weather data for one location and by city name      
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Call current weather data for one location and by city name

    Given endpoint "/weather" and method "get"
      And request query param "q" equals "London,UK"
      And request type "application/json"
    When the request is executed
    Then response status is "ok"
</code></pre></div>

Let's break down the snippet to see what we have stated.  Each line in this snippet is called a **test step** in BDD terminology and defines an action the system has to take in order to execute the test.  Test steps are executed in turn and in the sequence they are defined. All steps are templated and provided by our service - you can think of them as testing ingredients.  You can potentially mix-n-match these step templates in order to compose your tests.

### Given

The **Given** section provides the contextual information required in order for this test to be executed.  It is a set of steps that the service understands and are templated, i.e. there is a standard syntax for doing certain things and most of these templates have variable placeholders to be filled-in.

In this example the first statement tells the service we will be executing a request at the **/weather** endpoint of the API and we will be calling the **GET** method.  Since we have provided the **Background** info on the previous step there is no need to specify the rest of the API URL details.  

The second line defines an additional step within the *Given* context (**And**) and tells the system that the request should carry a **query parameter** which is called **q** and should have the value **London,UK**.

The third line tells the service that the request type should be **application/json**.  This will eventually set behind the scenes the **Content-Type** and **Accepts** headers of the request to the corresponding value.

### When

The **When** section defines the actual test action to be performed - in this service there is only one type of action to be performed and that is a request execution.

### Then

The **Then** section defines assertions for validating the results of the operation that was executed.  The most basic type of validation we can possibly do at this level is to check that the response status is **ok**.  

## Time to run the test

Now that we have created our very basic test scenario, it's time to run it through the service and see what happens.  Since the service provides it's own RESTful API there are two ways to do it.

<div class="bs-example recipe">
Your test file should look something like this.
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: OpenWeatherMap API - Current weather data

  As a client of the OpenWeatherMap API
  I want to run tests
  In order to validate 'Current weather data' operations

  Background:
    Given a "REST" API definition at "http://api.openweathermap.org/data/2.5"

  Scenario: Get current weather data for one location and by city name

    Given endpoint "/weather" and method "get"
    And request query param "q" equals "London,UK"
    And request type "application/json"
    When the request is executed
    Then response status is "ok"
</code></pre></div>


### Use Swagger Explorer

You can interact with the service directly through the Swagger Explorer application running at

> [http://localhost:3000/docs](http://localhost:3000/docs){:target='_blank'}

Click on the **/tests** endpoint and open the **POST** method.  There is only one required parameter you should fill in and that is the location of the test file we want to run.  Pick the location where your file has been created.

Now press the **Try it out** button and if all went well the service should return a **200OK** response and a body like the following:

<div class="highlight"><pre><code class="language-html" data-lang="html">
Feature: OpenWeatherMap API - Current weather data

  As a client of the OpenWeatherMap API
  I want to run tests
  In order to validate 'Current weather data' operations


  Scenario: Get current weather data for one location and by city name      
    Given a "REST" API definition at "http://api.openweathermap.org/data/2.5"
    Given endpoint "/weather" and method "get"
    And request query param "q" equals "London,UK"
    And request type "application/json"
    When the request is executed
    Then response status is "ok"

1 scenario (1 passed)
6 steps (6 passed)
</code></pre></div>  

<div class="bs-callout bs-callout-warning">
    <h4>Strange characters in the response</h4>
    <p>Don't freak out! The service is returning the console output from the Cucumber runtime and it contains ANSI colors in the stream.</p>
</div>

### Use any other REST client tool

You can use any other REST client tool you wish, e.g. [**curl**](http://curl.haxx.se/){:target='_blank'}.  Good thing about using *curl* is that you will get to see the test results in ANSI colors on the terminal, which is much simpler to read.  For example:

<div class="bs-callout bs-callout-info" id="jquery-required">
    <h4 id="jquery-required">Service logs</a></h4>
    <p>
    Since we launched the service as a background process, there will be no logs printed out in this terminal window.  In order to view any logging
    activity from the service, you should run the following command on either the same or a different terminal window:
    </p>

<div class="highlight"><pre><code class="language-bash" data-lang="bash">
<span class="gp">$ </span> docker logs -f apispots-bdd
</code></pre></div></div>

<div class="bs-example">
<span class="gp">$ </span> curl -i -F file=@/home/chris/tests/openweathermap.current.feature  http://localhost:3000/tests/run
</div>
<div class="highlight"><pre><code class="language-bash" data-lang="bash">
Feature: OpenWeatherMap API - Current weather data

  As a client of the OpenWeatherMap API
  I want to run tests
  In order to validate 'Current weather data' operations


  Scenario: Get current weather data for one location and by city name        # tmp/1432662589705-29129-2d1673fc61776d54:11
    Given a "REST" API definition at "http://api.openweathermap.org/data/2.5" # tmp/1432662589705-29129-2d1673fc61776d54:9
    Given endpoint "/weather" and method "get"                                # tmp/1432662589705-29129-2d1673fc61776d54:13
    And request query param "q" equals "London,UK"                            # tmp/1432662589705-29129-2d1673fc61776d54:14
    And request type "application/json"                                       # tmp/1432662589705-29129-2d1673fc61776d54:15
    When the request is executed                                              # tmp/1432662589705-29129-2d1673fc61776d54:16
    Then response status is "ok"                                              # tmp/1432662589705-29129-2d1673fc61776d54:17


1 scenario (1 passed)
6 steps (6 passed)
</code></pre></div>  

So what we have actually achieved so far is to create a very basic API feature test from scratch, execute a test scenario against the target API and verify that the server response was what we expected.  We got the green light from the service that all test steps have successfully passed.  

<div class="bs-callout bs-callout-info">
    <h4 id="jquery-required">Background steps</a></h4>
    <p>As you can see from the results, steps defined in the background section are executed <b>before</b> any scenario steps and this happens for every scenario.</p>
</div>


## Let's add another scenario

Now that the test file has been scaffolded, let's extend our test foundation.  This time we will try a different feature the **Current Weather** endpoint provides - get the current weather by geographic coordinates.  Remember we are following the [API documentation flow](http://openweathermap.org/current){:target='_blank'} and we validate that what the provider states is true ;)

According to the docs, this operation requires 2 request params [*lat* & *lon*] which is the *latitude* and *longitude* of the location respectively.  Also, this time we will be checking that the API response contains certain attributes within the returned JSON structure.

<div class="bs-example scenario">
<b>Scenario</b>: Get current weather data for one location and by city name      
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Get current weather data for one location and by geographic coordinates
    Given endpoint "/weather" and method "get"
    And request query params
      | param | value |
      | lat   | 35    |
      | lon   | 139   |
    And request type "application/json"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value      |
      | coord.lat | 35         |
      | coord.lon | 139        |
      | name      | 'Shuzenji' |
</code></pre></div>

Run the test again using your favorite method - it should pass.  As you see we have introduced some new ingredients in our test recipe:

### Request parameter map

<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    And request query params
      | param | value |
      | lat   | 35    |
      | lon   | 139   |
</code></pre></div>

This is a shortcut predefined step that allows us to pass a table of 1 or more [parameter / value] pairs that will be added to the request as query parameters.  The table format is standard Gherkin syntax and the column names are reserved by our service. Here we are passing the 2 required params with numeric values.

### Response data assertion map

<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    And response body has attributes
      | attribute | value      |
      | coord.lat | 35         |
      | coord.lon | 139        |
      | name      | 'Shuzenji' |
</code></pre></div>

This is an assertion step that validates against the API response body.  The response is returned in JSON format and the table above will check if each body attribute in turn matches the provided value.  Since we know what the service operation is expected to return (format and data wise) this step will run assertions on the predefined attributes, using the correct data types.  Notice how the *name* attribute value is enclosed in **''**.  This tells the service that the assertion should compare strings.

## Using tags (@) for running specific test sections

The underlying **Cucumber** framework supports [tagging test sections](https://cucumber.io/docs/reference#tags){:target='_blank'} using the '@' prefix.  This is very useful while writing tests, since many times you may want to execute one or more specific test features / scenarios without having to run the full test from the beginning.

In order to annotate a test section use a tag name with the '@' character as prefix, e.g. **@dev** in the test file.

<div class="bs-example recipe">
Tagging test sections     
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: OpenWeatherMap API - Current weather data

  As a client of the OpenWeatherMap API
  I want to run tests
  In order to validate 'Current weather data' operations

  Background:
    Given a "REST" API definition at "http://api.openweathermap.org/data/2.5"

  Scenario: Get current weather data for one location and by city name
    Given endpoint "/weather" and method "get"
    And request query param "q" equals "London,UK"
    And request type "application/json"
    When the request is executed
    Then response status is "ok"

  @dev
  Scenario: Get current weather data for one location and by geographic coordinates
    Given endpoint "/weather" and method "get"
    And request query params
      | param | value |
      | lat   | 35    |
      | lon   | 139   |
    And request type "application/json"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value      |
      | coord.lat | 35         |
      | coord.lon | 139        |
      | name      | 'Shuzenji' |
</code></pre></div>      

You can use as many tags as you want within a test file.  When you are about to run the test, speficy the tags you wish to be executed during the test run as shown in the following examples:

### Swagger Explorer

In Swagger Explorer fill in the **tags** form param value using a comma-separated list of tag names (including the @ prefix) as shown below:

![Tags in Swagger Explorer]({{site.url}}/assets/apispots/bdd/tagging.png "Tags in Swagger Explorer"){:class='img-thumbnail'}

### REST client tools

If using other REST client tools, pass the tags as a form parameter, e.g. using **curl**

<div class="highlight"><pre><code class="language-bash" data-lang="bash">
$ curl -i -F file=@/home/chris/tests/openweathermap.current.feature -F tags=%40dev  http://localhost:3000/tests/run
</code></pre></div>

Now let's move on to another example to see how we can test a [Swagger powered API]({{site.url}}/projects/bdd/swagger-petstore-api).
