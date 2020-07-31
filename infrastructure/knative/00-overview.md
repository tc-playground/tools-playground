# Knative

## Introduction

* `knative` attempts to build a `serverless platform` on top of the `Kubernetes toolbox`.

* `knative` uses `Custom Resource Definitions (CRD)` and CLI tools `kn` and `kubectl` to manage `serverless architectures`.

*  __Onsi Haiku__ - The goal of `serverless`.

    ```
    Here is my source code.
    Run it on the cloud for me.
    I do not care how.
    ```

* The __purpose__ of Knative is to provide consistent layer over Kubernetes that solves

    * `Deploying` software.

    * `Connecting` disparate systems together.

    * `Upgrading` software.

    * `Observing` software.

    * `Routing` traffic.

    * `Scaling` automatically.

* The major __subprojects__ of Knative are 

    * __Serving__ -  Encompasses the logic needed to 
        
        * Keep software running while it is required.
        
        * Stop it running when it is not required.

        * Manage request traffic.

    * __Eventing__

---

## Knative Features

1. __Progressive Delivery__ 

    1. `deploying` _multiple versions_ of a service at the same time.

    2. `upgrading` _only some version_ of a service.

    3. `routing` traffic between _various version_ of a service.

2. __Autoscaling__

    1. `monitoring traffic` and scaling the number of `services` up or down.

3. __Eventing__

    1. `synchronous` communication is handled by `HTTP endpoints` - Respond to `requests`.

    2. `asynchronous` communication is handled by `HTTP broker endpoints` - Respond to `events`.

        1. `events` allow small pieces of functionality (`functions`) to be composed into `pipelines`.

---

## Knative Brokers - Asynchronous Events

1. __Broker__ - Are endpoints for handling `events` in the system. They pass ne events to a set of `triggers` to `filter` and `forward` events.

    1. __Triggers__ - Handle a `defined set of events`. Triggers allow the `incremental composition of event flows`.

        1. __Filters__ - Define which `events` the `trigger` is interested in.

        2. __Subscribers__ - Defines were to send `events`.

---

## Knative Service - Managing Change

* `Knative services` manage change.

* `Service` - A Knative service is a combination of a `Configuration`, `Revision`, and `Route`.

---

## Knative Serving Resources

* `Configuration` - A statement of what your running system should look like.

* `Revision` - A `snapshot` of a configuration.

* `Route` - Divy up traffic over a set of divisions.

NB> Page 20 does not define a route inline.



