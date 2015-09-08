---
layout: project.bdd
title: Getting started - BDD Testing
headline: Getting started
description: Install and run the BDD API Testing service - you are just a few commands away from starting to test like a pro.
excerpt: "API Testing for Humans"
search_omit: true
categories: projects/bdd
tags: [apispots,bdd,testing]
---


# Introduction
{:class="page-header"}

The *BDD Testing micro-service* is a tool included in the [API Spots]({{ site.url }}/) collection that was designed
in order to make API testing a process that can be executed by any type of user - not just devs.  
{:class="lead"}

## Prerequisites

The service is very small and self-sufficient. There are no requirements for technical skills and / or coding in order to download
and run it.  As such, its core philosophy dictates that it should be distributed in a way that non-technical users will find it extremely easy
to download, install and start using on the fly.

The only requirement for running the service locally or on any type of server, is to download and install [Docker](http://docker.io){:target="_blank"}.

> Docker is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.

### Download and install the Docker runtime

Download and install the Docker runtime for your type of OS by following the [instructions on the web site](https://docs.docker.com/installation/){:target="_blank"}.   

## Install the service

### Download and install the service container image

After you have successfully installed the Docker Engine on the target machine, now it's time to download and run the container image that will be hosting the service.  Copy and paste the following command on a terminal:


<div class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span> docker pull apispots/bdd-api-testing</code></pre></div>

The command will download and install the latest image of the service on the target machine.  When it completes, running the following command

<div class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span> docker images</code></pre></div>

will display a list of all the installed docker images and the registry should include the BDD Testing service image as shown in the following example

<div class="highlight"><pre><code class="language-bash" data-lang="bash">
REPOSITORY                 TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
apispots/bdd-api-testing   latest              50b746214791        4 days ago          535.6 MB
</code></pre></div>

<div class="bs-callout bs-callout-info" id="jquery-required">
    <h4 id="jquery-required">Heads up</a></h4>
    <p>Depending on your OS / environment, you might be required to have <b>administrative</b> rights in order to execute the above commands.</p>
    <p>Also the initial installation of Docker Engine and other images will take some time - depending also on your internet connection - 
    so be patient.
    </p>
</div>

### Start the service container

After the service has been successfully downloaded and installed, it's time to run it.  Copy the following command in the terminal to get it started.

<div class="highlight"><pre><code class="language-bash" data-lang="bash">
<span class="gp">$ </span> docker run -d -p 3000:3000 --name="apispots-bdd" apispots/bdd-api-testing
</code></pre></div>  

The command will start a new instance of the service image - i.e. a *container* - with the following properties based on the entered parameters:

Argument  	 | Value | Description
-------------| ----- | ---------------
**-d**		 | 		 | The **-d** flag will start the container in *daemon* mode, i.e. as a background running process
**-p**       | 3000:3000 | The **-p** argument is used to map ports exposed in the container running the service with ports on the machine.  Here we tell Docker to map container port 3000 to machine port 3000.  If you want the service to listen to a different port, change the first part of the value, e.g. **8080**:3000
**--name**   | apispots-bdd | The **--name** argument will assign a name to the running instance of the container - change this to any value you want
*image ID* | apispots/bdd-api-testing | The last argument is the ID of the image from which the container instance will be created 
{:class="table table-striped"}  

If the command executes successfully, you should see the ID of the container instance that was just launched by the Docker Engine on the terminal. 

<div class="bs-callout bs-callout-info" id="jquery-required">
    <h4 id="jquery-required">Service logs</a></h4>
    <p>
    Since we launched the service as a background process, there will be no logs printed out in this terminal window.  In order to view any logging
    activity from the service, you should run the following command on either the same or a different terminal window:
    </p>
    
<div class="highlight"><pre><code class="language-bash" data-lang="bash">
<span class="gp">$ </span> docker logs -f apispots-bdd
</code></pre></div>

<p>
	The <b>-f</b> argument tells Docker to leave the log output stream running forever, i.e. as you will be using the service you will be able to 
	see results in real time printed out in the console.
</p>

</div>

### Managing the service container

Once the service container has been started, you can easily manage its state by executing the following Docker command in a terminal window:

<div class="highlight"><pre><code class="language-bash" data-lang="bash">
<span class="gp">$ </span> docker <b>start</b> | <b>stop</b> | <b>restart</b> apispots-bdd
</code></pre></div>

Using the appropriate Docker command, you can now start, stop or restart the service.

### Checking everything is in place

If everything went according to plan, it's time for a final check to see whether our service is up and running.  Open a browser window and point to the following URL

> [http://localhost:3000/docs](http://localhost:3000/docs){:target='_blank'}

The browser should display the RESTful API endpoints of the service on the [Swagger](http://swagger.io/){:target='_blank'} explorer similar to the following image

![Testing API endpoints in Swagger explorer]({{site.url}}/assets/apispots/bdd/swagger-ui.png "Testing API endpoints in Swagger explorer"){:class='img-thumbnail'}

<div class="bs-callout bs-callout-warning" id="jquery-required">
    <h4 id="jquery-required">Note</a></h4>
    <p>
	If you have declared a different port mapping other than <b>3000</b> when launching the service instance, use that port instead in the above URL.
    </p>
</div>

If what you see on your browser looks like what is shown in the image above, then you're all set! Time to [learn the basic concepts]({{site.url}}/projects/bdd/basic-concepts).


