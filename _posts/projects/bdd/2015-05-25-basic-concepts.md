---
layout: project.bdd
title: Basic concepts - BDD Testing
headline: Basic concepts
description: Learn the basic concepts behind the service and its architecture.
excerpt: "API Testing for Humans"
search_omit: true
categories: projects/bdd
tags: [apispots,bdd,testing]
---


# Philosophy
{:class="page-header"}

* Testing should be a core process in any software product
* Testing is imposed by a culture shared among team members
* Testing processes should be easy enough to be used by non-technical people too
* Testing should be performed on an automatic / manual basis  
{:class="lead"}

## Behavioral Driven Development (BDD)

[Behavior-driven development (BDD)](http://en.wikipedia.org/wiki/Behavior-driven_development){:target='_blank'} is based on the principles of test-driven development (TDD) and leverages the concept to a higher level of abstraction so that non-technical stakeholders can collaborate and take part in the process too.

>In software engineering, behavior-driven development (abbreviated BDD) is a software development process based on test-driven development (TDD).  Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.
>
>Although BDD is principally an idea about how software development should be managed by both business interests and technical insight, the practice of BDD does assume the use of specialized software tools to support the development process. Although these tools are often developed specifically for use in BDD projects, they can be seen as specialized forms of the tooling that supports test-driven development. The tools serve to add automation to the ubiquitous language that is a central theme of BDD.

## User Stories

The foundation element behind BDD, is the **user story**.

>In software development and product management, a user story is one or more sentences in the everyday or business language of the end user or user of a system that captures what a user does or needs to do as part of his or her job function. User stories are used with agile software development methodologies as the basis for defining the functions a business system must provide, and to facilitate requirements management. It captures the 'who', 'what' and 'why' of a requirement in a simple, concise way, often limited in detail by what can be hand-written on a small paper note card.

A user story fully describes what a user can do with an application / service / system within the context of a specific functional feature.

<div class="highlight"><pre><code class="gherkin_en" data-lang="gherkin">
Story: Returns go to stock
 
In order to keep track of stock
As a store owner
I want to add items back to stock when they're returned
</code></pre></div>

### Test scenarios

Since a user story describes a specific functionality provided by a system, it would be meaningful without describing the paths or flows of actions a user can take within the context of the provided functionality, i.e. the use cases.  Use cases are described in terms of usability **scenarios** as shown in the following example.

<div class="highlight"><pre><code class="gherkin_en" data-lang="gherkin">
Scenario 1: Refunded items should be returned to stock

Given a customer previously bought a black sweater from me
  And I currently have three black sweaters left in stock
When he returns the sweater for a refund
Then I should have four black sweaters in stock
 
Scenario 2: Replaced items should be returned to stock

Given that a customer buys a blue garment
  And I have two blue garments in stock
  And three black garments in stock.
When he returns the garment for a replacement in black,
Then I should have three blue garments in stock
  And two black garments in stock
</code></pre></div>

A test scenario describes a sequence of steps that mimic user actions that contain both conditions and assertions.  Simply put, a scenario is a test unit that should be executed autonomously within the context of a broader user story which describes how a system should behave within the close boundaries of specific feature / functionality.

### Behavior Driven Development cycle

In a traditional TDD (Test Drive Development) work flow, tests are either described by a non-technical user who is aware of the business aspect of a product / service and provisioned to the developers for implementation or directly implemented by the developers as client code that will interact with the actual module to be built.  Within the context of the TDD methodology, developers have full ownership of the test code as it is considered as a black box for non-technical members of a team, since they directly map to code developed and maintained by the technical people.

Developers start developing a software module by first writing the tests.  All tests should initially fail as no functionality is implemented.  Then code is being written in iterations, so that individual tests start to pass.  The module is considered to be functional when all pre-defined tests pass with no points of failure.

![The TDD cycle]({{site.url}}/assets/apispots/bdd/tdd-cycle.jpg "The TDD cycle"){:class='img-thumbnail'}

BDD is an extension of the TDD methodology.  It borrows the same principles but adds an extra layer that acts as a communication bridge between technical and non people.

![The BDD cycle]({{site.url}}/assets/apispots/bdd/bdd-cycle.png "The BDD cycle"){:class='img-thumbnail'}

All tests are defined and provisioned as a combination of user stories and test scenarios in a natural spoken language that can be easily comprehended and can be written and maintained by non-technical people as well.  Which makes perfect sense since the behavior of a system is usually described by business stakeholders and then communicated to technical teams for implementation in a way similar to writing business specs.

Another key differentiator between the two methodologies is that in the BDD case, each described step within a test scenario will directly map to a specific test code block - a developer will provision - that will be executed in runtime.  This requires an extra mediation layer within the testing environment that will act as the processor, translator and executor of the high level test definition.  This is usually the job of a BDD framework such as the popular [Cucumber](http://cukes.info){:target='_blank'} framework.

A BDD framework usually offers ports for different operating systems and programming languages so that test implementation is kept transparent with regard to the test definition.  This means that a test is always described separately in a human-readable standard format and developers can write the implementations in any language supported by the framework.  During test execution, the framework is responsible for mapping test steps to code implementation.  This way the **separation of concerns** principle is leveraged among the members of a software product team.

Another great benefit that is being offered in BDD, is **re-usability**.  Since test definitions are human friendly, it is extremely easy for someone to spot steps that can be re-used so that they can be implemented once and run everywhere.  And this simple axiom is the driving force behind the creation of this service.

# Testing APIs using BDD semantics
{:class="page-header"}

APIs are a perfect example when it comes to testing, since they are software components meant to be used by 3rd parties with regard to their creators.  As such, they should be easy to comprehend and integrate and testing strategies should be no different.
{:class="lead"}

## A simple, human friendly approach

Since the dawn of the API Economy era, APIs are everywhere.  Until not so long ago an API would be something only a tech-guy would be able to understand and use, but nowadays non-technical people too are expected to understand and interact with them at many different levels.  

Moreover, almost everyone in the software industry will have to interact with APIs provided by 3rd parties and not only from internal systems.  Therefore API testing is taken to a whole new level, since APIs are contracts and contracts should be stable at all times.

The **BDD API Testing** service was designed in order to solve a specific problem:

> Allow every type of user to be able to test RESTful APIs using a reusable set of "test recipes" that can be applied to virtually any API - being internal or external - using a human-readable language.

## Service Architecture

A high-level architectural diagram of the service that depicts its building blocks and basic user interactions is shown below:

<div class="mxgraph" style="position:relative;overflow:hidden;width:100%;"><div style="width:1px;height:1px;overflow:hidden;">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</div></div>

<script type="text/javascript" src="https://www.draw.io/embed.js"></script>

## Building blocks

The following section describes the basic building blocks as shown in the diagram.
{:class="lead"}

### NodeJS Application

The service is running as a NodeJS application and consists of two main parts:

* the RESTful API used for interacting with the service clients
* the custom BDD runtime components used for adding the integration layer between test steps and API operations  

For greater ease of use, the service provides its own [Swagger](http://swagger.io){:target='_blank'} definition and also exposes the Swagger Explorer app for interacting with the service through a standard UI. 

### BDD Runtime

The BDD runtime is built on top of the popular [Cucumber](http://cukes.info){:target='_blank'} framework that is one of the standard industry tools for BDD testing.  As the main target is to deliver an **MVS** (minimum viable service) to the end user, the focus has always been in re-using existing and proven technologies rather than re-inventing the wheel or making pointless extensions.

#### Gherkin Syntax

*Cucumber* uses the [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin){:target='_blank'} language syntax for writing tests.  Gherkin has become an industry favorite for many years and is very simple in its usage.

>Gherkin is the language that Cucumber understands. It is a Business Readable, Domain Specific Language that lets you describe software’s behaviour without detailing how that behaviour is implemented.


#### Custom Step Definitions

These are custom step definitions used for mapping / translating test scenario steps into API specific operations.  When processing a Gherkin scenario, these modules are responsible for mapping it out to appropriate API definitions and operations as well as managing the requests and responses from the API under test.

These components are provided as an extra library to the Cucumber runtime when a test is executed - there is no framework customization in any way.  These provide the out-of-the-box re-usable ingredients you will be using while writing your tests.

#### API Definitions

Components that know how to interact with generic API endpoints as well as APIs that are described through a standard specification meta-model like Swagger.  These provide a transparency layer to the test writer and great convenience at the same time. 


Ok, so enough with the theory - time to [do some testing ;)]({{site.url}}/projects/bdd/a-first-example)
