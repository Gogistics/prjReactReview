# React App

1. Create React App
2. Understand app folder structure
After creation, your project should look like this:
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, these files must exist with exact filenames:
* `public/index.html` is the page template;

* `src/index.js` is the JavaScript entry point.

* You may create subdirectories inside `src`. For faster rebuilds, only files inside src are processed by Webpack. You need to **put any JS and CSS files inside src**, otherwise Webpack won’t see them.

* Only files inside `public` can be used from `public/index.html`. Read instructions below for using assets from JavaScript and HTML.

https://facebook.github.io/create-react-app/docs/available-scripts

5. Advanced topics
https://reactjs.org/docs/accessibility.html

---
DBs
MongoDB:
  Basic Comparison-
  Tabular (Relational DB):  Table      ; Row      ; Index ; Join    ; Foreign key
  Mongo:                    Collection ; Document ; Index ; $loppup ; Reference

  NoSQL: Emphasizes on CAP theorem (Consistency, Availability and Partition tolerance)
  SQL: Emphasizes on ACID properties (Atomicity, Consistency, Isolation and Durability)
  Note: Mongo starts supporting ACID in 4+ version

https://www.studytonight.com/mongodb/mongodb-vs-rdbms
https://www.mongodb.com/transactions

Redis:
Redis is often referred as a data structures server. What this means is that Redis provides access to mutable data structures via a set of commands, which are sent using a server-client model with TCP sockets and a simple protocol. So different processes can query and modify the same data structures in a shared way.

Data structures implemented into Redis have a few special properties:

* Redis cares to store them on disk, even if they are always served and modified into the server memory. This means that Redis is fast, but that is also non-volatile.
* Implementation of data structures stress on memory efficiency, so data structures inside Redis will likely use less memory compared to the same data structure modeled using an high level programming language.
* Redis offers a number of features that are natural to find in a database, like replication, tunable levels of durability, cluster, high availability.

---

Google Cloud Platforms
https://cloud.google.com/nodejs/

App Engine Standard

Pros

Very economical for low traffic apps in terms of direct costs and also the cost of maintaining the app.
Auto scaling is fast. Autoscaling in App Engine is based on lightweight instance classes F1-F4.
Version management and traffic splitting are fast and convenient. These features are built into App Engine (both Standard and Flex) natively.
Minimal management, developers need focus only on their app. Developers do not need to worry about managing VMs in a reliable, as in GCE, or learning about clusters, as with GKE.
Access to Datastore is fast. When App Engine was first released, the runtime was co-located with Datastore. Later Datastore was split out as the standalone product Cloud Datastore but the co-location of App Engine Standard serving with Datastore remains.
Access to Memcache is supported.
The App Engine sandbox is very secure. Compared with development on GCE or other virtual machines, where you need to do your own diligence to prevent the virtual machine from being taken over at the operating system level, the App Engine Standard sandbox is relatively secure by default.
Cons

Generally more constrained than other environments Instances are smaller. Although this is good for rapid autoscaling, many apps can benefit from larger instances, such as GCE instance sizes up to 96 cores.
Networking is not integrated with GCE
Cannot put App Engine behind a Google Cloud Load Balancer. Limited to supported runtimes: Python 2.7, Java 7 and 8, Go 1.6-1.9, and PHP 5.5. In Java, there is some support for Servlets but not the full J2EE standard.
App Engine Flex

Pros

Can use a custom runtime
Native integration with GCE networking
Version and traffic management is convenient, same as Standard
The larger instance sizes may be more suitable to to large complex applications, especially Java applications that can use a lot of memory
Cons

Network integration is not perfect - no integration with internal load balancers or Shared Virtual Private Clouds
Access to managed Memcache not generally available
Google Kubernetes Engine

Pros

Native integration with containers allows custom runtimes and greater control over cluster configuration.
Embodies many best practices working with virtual machines, such as immutable runtime environments and easy ability to roll back to previous versions
Provides a consistent and repeatable deployment framework
Based on open standards, notably Kubernetes, for portability between clouds and on-premises.
Version management can accomplished with Docker containers and the Google Container Registry
Cons

Traffic splitting and management is do-it-yourself, possibly leveraging Istio and Envoy
Some management overhead
Some time to ramp up on Kubernetes concepts, such as pods, deployments, services, ingress, and namespaces
Need to expose some public IPs unless using Private Clusters, now in beta, eliminate that need but you still need to provide access to locations where kubectl commands will be run from.
Monitoring integration not perfect
While L3 internal load balancing is supported natively on Kubernetes Engine, L7 internal load balancing is do-it-yourself, possibly leveraging Envoy
Compute Engine

Pros

Easy to ramp up - no need to ramp up on Kubernetes or App Engine, just reuse whatever you know from previous experience. This is probably the main reason for using Compute Engine directly.
Complete control - you can leverage many Compute Engine features directly and install the latest of all your favorite stuff to stay on the bleeding edge.
No need for public IPs. Some legacy software may be too hard to lock down if anything is exposed on public IPs.
You can leverage the Container-Optimized OS for running Docker containers
Cons

Mostly do-it-yourself, which can be challenging to do adequately for reliability and security, although you can reuse solutions from various places, including the Cloud Launcher.
More management overhead. There are many management tools for Compute Engine but they will not necessarily understand how you have deployed your application, like the App Engine and Kubernetes Engine monitoring tools do
Autoscaling is based on GCE instances, which can be slower than App Engine
Tendency is to install software on snowflake GCE instances, which can be some effort to maintain



App engine (similar to AWS ELB)
https://cloud.google.com/nodejs/getting-started/hello-world
Kube engine
https://cloud.google.com/nodejs/docs/tutorials/bookshelf-on-kubernetes-engine
Cloud function
https://cloud.google.com/functions/docs/quickstart
Compute engine
https://cloud.google.com/nodejs/docs/tutorials/bookshelf-on-compute-engine

Google Datastorage (like AWS S3)
https://cloud.google.com/storage/pricing
Google Datastore (like AWS dynamodb, NoSQL)
https://cloud.google.com/datastore/pricing

