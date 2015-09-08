---
layout: project.bdd
title: Testing the Swagger Petstore API - BDD Testing
headline: Testing Swagger-ed APIs
description: Learn how to test Swagger-powered APIs using the infamous Petstore API example
excerpt: "API Testing for Humans"
search_omit: true
categories: projects/bdd
tags: [apispots,bdd,testing]
---

# Testing an API with a Swagger definition
{:class="page-header"}

In this section you will learn how to start using the **BDD API Testing** service for running tests against a Swagger-powered API.  
{:class="lead"}

In the [first example]({{site.url}}/projects/bdd/a-first-example){:target='_blank'} we tested a generic RESTful API provided by [**OpenWeatherMap**](http://openweathermap.org/api){:target='_blank'}.  This time we will see how things can get even simpler when the target API has a meta-data definition through a standard specification such as [Swagger](http://swagger.io){:target='_blank'}.

We will be testing the [**Swagger Petstore** API](http://petstore.swagger.io/){:target='_blank'} that is a demo service showcasing the Swagger framework.  

## Making use of the Swagger definition

Since we know our target API has a valid Swagger definition, we want to make use of that fact as - we will see shortly - it will introduce various shortcuts in our testing.  The **Petstore API** is split into 3 logical resource groups as we can see from the Swagger Explorer:

>* Users
>* Pets
>* Store

In our example we will consider these to be discreet features, therefore we will be creating separate feature test files for testing them autonomously.

<div class="bs-callout bs-callout-info">
    <h4>Heads Up!</a></h4>
    <p>
    	The service supports parsing of both <b>v1.2</b> and <b>v2.x</b> Swagger specifications.  When providing a definition URL, it first tries to parse it using the v2.x parser and if it fails then as a fallback tries parsing using the v1.2 parser. 
    </p>
</div>

## Testing the User endpoints

We will start off by creating a feature test file for testing operations on the User resource collection.  Let's call our test file **petstore.users.feature**. 

<div class="bs-example">
Users feature test file.    
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: Swagger Petstore - Pets
  
  As a client of the Petstore API
  I want to run tests
  In order to validate User related operations
</code></pre></div>

After we have given our test unit the appropriate description, let's add the **Background** section that will make use of the *Swagger* definition.

<div class="bs-example">
Defining a <b>Background</b> section for a Swagger powered API with a Swagger definition URL.    
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Background: 
    Given a "Swagger" API definition at "http://petstore.swagger.io/v2/swagger.json"
</code></pre></div>

If you recall from the previous example, the first step definition in the *Background* section should be a template provided by the service that has 2 required arguments:

* The type of target API - in this case **"Swagger"**
* The *base* or *definition* URL - in this case we set the URL that points to the JSON document describing the API in Swagger format **"[http://petstore.swagger.io/v2/swagger.json](http://petstore.swagger.io/v2/swagger.json)"** 

<div class="bs-callout bs-callout-info">
    <h4>Heads Up!</a></h4>
    <p>When navigating to the Swagger definition URL, you could try out the <b><a href='{{site.url}}/projects/swaggered/' target='_blank'>swagger.ed</a></b> browser extension - from the <a href='{{site.url}}/' target='_blank'>API Spots</a> collection - that will give you a visual and interactive representation of the API.  Check it out and let us know what you think!</p>
</div>

### Creating a new user

The first test we are going to create will validate the operation that creates a new Petstore user.  So, let's add the first scenario in our test file.

<div class="bs-example scenario">
Create a new user     
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
 Scenario: Create a new user
    Given an operation with Id "createUser"
    And request body
      """
      {
      "id": "12345",
      "username": "thechef",
      "firstName": "chris",
      "lastName": "spilio",
      "password": "thepass"
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"
</code></pre></div>

In this scenario the first **Given** step is slightly different to what we have seen so far.  Add it to your ingredients catalog. 

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		Given an operation with Id <em class='param'>"{operation ID}"</em>
	</blockquote>		   
	
	<p>
		In a Swagger definition, operations are assigned with a unique Id - in Swagger explorer you can find this Id as the hash bang part of the URL, e.g. <b>#createUser</b> when you click on a specific operation to expand it or by looking it up within the JSON definition directly.  Using this ingredient, we tell the system that we refer to the operation with ID 'createUser' - that's all we need.  The service will look up the operation details within the parsed Swagger definition and get its endpoint path and corresponding HTTP method.
	</p>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
   Given an operation with Id "createUser"
</code></pre></div>

<div class="bs-callout bs-callout-info">
    <h4>What about endpoint URLs? I don't see any references...</a></h4>
    <p>
    	That's the good part when describing an API using a specification like Swagger.  All information is contained in the meta-data of the definition, so there is no reason for doing any extra work - the service takes care of this.
    </p>
    <p>
    What happens behind the scenes is that when you set the Swagger definition URL in the <b>Background</b> section of the test file, the service will first try to parse the Swagger definition file from this URL and resolve internally all meta-data information required for interacting with the API, e.g. base URL, version, endpoint paths, security definitions, models, data formats, etc. 
    </p>
</div>

The second step element we encounter in this scenario is the following:

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		And request body <br> 
		<em class='param'>"""</em><br>
		<em class='param'>{ JSON data }</em><br>
		<em class='param'>"""</em>
	</blockquote>		   
	
	<p>
		This ingredient will set the request body to the string value that is enclosed between the <em>"""</em> characters.  This type of syntax is a standard way of passing long string arguments to step implementations in the Gherkin language.  The service will take whatever you place within the placeholders and set it as the request body prior to executing the request. 
	</p>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    And request body
      """
      {
      "id": "12345",
      "username": "thechef",
      "firstName": "chris",
      "lastName": "spilio",
      "password": "thepass"
      }
      """
</code></pre></div>

Next we see a stem familiar from the previous example.  

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		And request type <em class='param'>"{ MIME type }"</em>
	</blockquote>		   
	<p>
	  This tells the service that the request will be of the given MIME type.  The service will set the corresponding request headers to the given MIME type prior to executing the request. 
	</p>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    And request type "application/json"
</code></pre></div>

The rest of the steps were already explained in the previous example but let's remind ourselves:

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		When the request is executed
	</blockquote>		   
	<p>
	  Tells the service to execute the request.
	</p>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    When the request is executed
</code></pre></div>

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		    Then response status is <em class='param'>"{status}"</em>
	</blockquote>		   
	<p>
	  Tells the service to check the response status received from the server after the request has been executed.
	</p>
	<p>
		Valid status values are:
		<ul>
			<li>info</li>
			<li>ok</li>
			<li>clientError</li>
			<li>serverError</li>
			<li>accepted</li>
			<li>noContent</li>
			<li>badRequest</li>
			<li>unauthorized</li>
			<li>notAcceptable</li>
			<li>notFound</li>
			<li>forbidden</li>
			<li>error</li>
		</ul>
	</p>
	
	<p>
		Another variation offers support for checking the response code directly like this
	</p>
	
	<blockquote class='step-definition'>
		    Then response code is <em class='param'>"{code}"</em>
	</blockquote>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    Then response status is "ok"
    And response code is "200"
</code></pre></div>

Given that we told the service that the request type is of type **application/json** it will try to parse the body data as JSON and execute the request.

### Checking that the user has been created

After running the test to create a new user, it's a good time to run a test that will check whether the user has indeed been created in the Petstore system.  Add a new scenario in the test file.

<div class="bs-example scenario">
Check if user has been created    
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Getting the user by username
    Given the endpoint "/user/{username}" and method "get"
    And request path param "username" equals "thechef"
    When the request is executed
    Then response status is "ok"
</code></pre></div>

This time we make a slight twist and use some *generic API* style step definition that talks about *endpoints* rather than *operations*.  Now we need to do some more work - we have to specify both the correct enpoint relative URL and the HTTP method we want to execute.  

<div class="bs-callout bs-callout-info">
    <h4>Heads Up!</a></h4>
    <p>
    	Within a Swagger API test, you can freely mix-n-match endpoint step definitions using either endpoint paths or operation IDs as 
    	all resolve to the same things.  The service will understand both styles.
    </p>
</div>

A new step definition introduced in this scenario, will allow us to specify **path parameters** on the endpoint's path:

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		And request path param <em class='param'>"{parameter name}"</em> equals <em class='param'>"{value}"</em>
	</blockquote>		   
	<p>
	  Tells the service that the path variable with name <b>username</b> will be replaced with the value <b>thechef</b>.  The service will search for placeholders enclosed in <em>{}</em> with this name and replace them with the provided value.
	</p>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    And request path param "username" equals "thechef"
</code></pre></div> 

### Happy paths - sad paths

A complete feature test should not only test the so called *happy paths* - i.e. system behavior when things go according to plan - but also *sad paths*, i.e. system behavior when things go wrong. 

A complementary scenario for testing a *sad path* of the service is to try to find a user that does not exist.

<div class="bs-example scenario">
Sad path scenario - Find a user that does not exist.   
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Getting the user by username - bad username
    Given an operation with Id "getUserByName"
    And request path param "username" equals "koukouroukou123213121dsqsaddads"
    When the request is executed
    Then response status is "notFound"
</code></pre></div>

In this scenario we will execute an operation that retrieves a Petstore user's info but provide it with a username that we presume it does not exist.  Fingers crossed, no other client of the API would have had the great idea to create a user with the name **koukouroukou123213121dsqsaddads** so running the test should return a server response with code **404** which maps to a **resource not found** HTTP status.

### Testing for performance

Another area that is pretty important when writing test scenarios for a system - other than the functional behavior - is *performance* testing.  Especially when it comes to APIs this a very sensitive area that someone needs to pay a lot of attention to, since many times APIs come hand by hand with *SLAs*.  Simply put, a provider needs to ensure that the API will meet and honor all aspects of its contract with its consumers.

Let's write a simple complementary scenario that extends our previous test units and checks the performance of the operation.

<div class="bs-example scenario">
Checking if an operation returns a response within a certain time frame.   
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Getting the user by username - timed out
    Given the endpoint "/user/{username}" and method "get"
    And request path param "username" equals "thechef"
    And request timeout is "100"
    When the request is executed
    Then response has time out error
</code></pre></div>

<div class="bs-example ingredient">
	<blockquote class='step-definition'>
		And request timeout is <em class='param'>"{ timeout in millis }"</em>
	</blockquote>		   
	<p>
	  Tells the service to set the request time out to <em>n</em> milliseconds.
	</p>
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
    And request timeout is "100"
</code></pre></div>

### Updating the details of our user

Now let's try to change parts of the information of our newly created user.

<div class="bs-example scenario">
Checking if an operation returns a response within a certain time frame.   
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Update the user
    Given an operation with Id "updateUser"
    And request path param "username" equals "thechef"
    And request body
      """
      {
      "username": "thechef",
      "firstName": "chrysanthos",
      "lastName": "spiliotopoulos",
      "phone": "99999"
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"
</code></pre></div>

Once the scenario is executed, the details of our user instance should be changed.  In this example, I have used my real name **Chrysanthos Spiliotopoulos** and added my real phone number **99999**.  Eventually the service will execute a **PUT** operation on the corresponding endpoint and update the data object.

Now let's make sure that data is updated.

<div class="bs-example scenario">
Checking if user details have been updated.  
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
  Scenario: Getting the updated user details
    Given an operation with Id "getUserByName"
    And request path param "username" equals "thechef"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value            |
      | firstName | 'chrysanthos'    |
      | lastName  | 'spiliotopoulos' |
      | phone     | "99999"          |
</code></pre></div>

If everything worked as expected, all tests should pass with no errors.


## The Full Monty

<div class="bs-example recipe">
	<blockquote>
		petstore.users.feature
	</blockquote>		   
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: Swagger Petstore - Pets
  
  As a client of the Petstore API
  I want to run tests
  In order to validate User related operations

  Background: 
    Given a "Swagger" API definition at "http://petstore.swagger.io/v2/swagger.json"

  Scenario: Create a new user
    Given an operation with Id "createUser"
    And request body
      """
      {
      "id": "12345",
      "username": "thechef",
      "firstName": "chris",
      "lastName": "spilio",
      "password": "thepass"
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"

  Scenario: Getting the user by username
    Given the endpoint "/user/{username}" and method "get"
    And request path param "username" equals "thechef"
    When the request is executed
    Then response status is "ok"

  Scenario: Getting the user by username - bad username
    Given an operation with Id "getUserByName"
    And request path param "username" equals "koukouroukou123213121dsqsaddads"
    When the request is executed
    Then response status is "notFound"

  Scenario: Getting the user by username - timed out
    Given the endpoint "/user/{username}" and method "get"
    And request path param "username" equals "thechef"
    And request timeout is "100"
    When the request is executed
    Then response has time out error

  Scenario: Update the user
    Given an operation with Id "updateUser"
    And request path param "username" equals "thechef"
    And request body
      """
      {
      "username": "thechef",
      "firstName": "chrysanthos",
      "lastName": "spiliotopoulos",
      "phone": "99999"
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"

  Scenario: Getting the updated user details
    Given an operation with Id "getUserByName"
    And request path param "username" equals "thechef"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value            |
      | firstName | 'chrysanthos'    |
      | lastName  | 'spiliotopoulos' |
      | phone     | "99999"          |

  Scenario: Login the user
    Given an operation with Id "loginUser"
    And request query params
      | param    | value     |
      | username | 'thechef' |
      | password | 'thepass' |
    When the request is executed
    Then response status is "ok"

  Scenario: Logout the user
    Given an operation with Id "logoutUser"
    When the request is executed
    Then response status is "ok"

  Scenario: Delete the user
    Given an operation with Id "deleteUser"
    And request path param "username" equals "thechef"
    When the request is executed
    Then response status is "ok"

</code></pre></div>


<div class="bs-example recipe">
	<blockquote>
		petstore.pets.feature
	</blockquote>		   
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: Swagger Petstore - Users
  
  As a client of the Petstore API
  I want to run tests
  In order to validate the Pets operations

  Background: 
    Given a "Swagger" API definition at "http://petstore.swagger.io/v2/swagger.json"

  Scenario: Add a new pet to the store
    Given an operation with Id "addPet"
    And request body
      """
      {
      "id": "1234",
      "category": {
      "name": "test-category"
      },
      "name": "doggie",
      "photoUrls": [
      "http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg"
      ],
      "tags": [
      {
      "name": "puppy"
      }
      ]
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"

  Scenario: Update an existing pet
    Given an operation with Id "updatePet"
    And request body
      """
      {
      "id": "1234",
      "name": "woofie"
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value  |
      | name      | woofie |

  Scenario: Find pet by Id
    Given an operation with Id "getPetById"
    And request path param "petId" equals "1234"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value  |
      | name      | woofie |

  Scenario: Update a pet in the store with form data
    Given an operation with Id "updatePetWithForm"
    And request type "application/x-www-form-urlencoded"
    And request path param "petId" equals "1234"
    And request form params
      | param  | value   |
      | name   | max     |
    When a request is executed
    Then response status is "ok"
    
  Scenario: Find pet by Id
    Given an operation with Id "getPetById"
    And request path param "petId" equals "1234"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value |
      | name      | max   |

  Scenario: Delete a pet
    Given an operation with Id "deletePet"
    And request path param "petId" equals "1234"
    When the request is executed
    Then response status is "ok"
         
  Scenario: Check pet is deleted
    Given an operation with Id "getPetById"
    And request path param "petId" equals "1234"
    When the request is executed
    Then response code is "404"
    
</code></pre></div>


<div class="bs-example recipe">
	<blockquote>
		petstore.store.feature
	</blockquote>		   
</div>
<div class="highlight"><pre><code class="gherkin" data-lang="gherkin_en">
Feature: Swagger Petstore - Store
  
  As a client of the Petstore API
  I want to run tests
  In order to validate the Store operations

  Background: 
    Given a "Swagger" API definition at "http://petstore.swagger.io/v2/swagger.json"

  Scenario: Get the full store inventory
    Given an operation with Id "getInventory"
    When the request is executed
    Then response status is "ok"

  Scenario: Place an order for a pet
    Given an operation with Id "placeOrder"
    And request body
      """
      {
      "id": 1234,
      "petId": 1234,
      "quantity": 2
      }
      """
    And request type "application/json"
    When the request is executed
    Then response status is "ok"

  Scenario: Check if order is placed
    Given an operation with Id "getOrderById"
    And request path param "orderId" equals "1234"
    When the request is executed
    Then response status is "ok"
    And response body has attributes
      | attribute | value |
      | id        | 1234  |
      | petId     | 1234  |

      
  Scenario: Delete purchase order by ID
    Given an operation with Id "deleteOrder"
    And request path param "orderId" equals "1234"
    When the request is executed
    Then response status is "ok"

  Scenario: Check that order is deleted
    Given an operation with Id "getOrderById"
    And request path param "orderId" equals "1234"
    When the request is executed
    Then response code is "404"
  
</code></pre></div>
