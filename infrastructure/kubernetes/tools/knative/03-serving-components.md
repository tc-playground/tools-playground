# Serving Components

> `control loop` - A mechanism for `comparing` a `desired world` and an `actual world`, then taking an `action` to close the gap between them.

---

## Reconcilers

> Responsible for managing `custom resource definition (CRD)` - `Services`, `Revisions`, `Configurations`, `Routes`.

1. `knative` has one `controller`.

    * The controller is run as an OS `process` run as  a `pod`.

2. The `knative controller` consist of a `reconciler` for each CRD. These implement the control loop.

    * Each reconcilers is run a `goroutine`.

3. __Reconcilers__ 

    1. `configuration` - CRD reconciler.
    
    2. `revision` - CRD reconciler.
    
    3. `route` - CRD reconciler.
    
    4. `service` - CRD reconciler.

    5. `labeller` - Set and maintains labels on Kubernetes objects that networking systems can use to target them for traffic.

    6. `serverlessservice` - Used by the `Activator` to  manage `ServerlessService` records.

    7. `gc` - Garbage Collection.

---

## Webhook

> Responsible for `validating` and `enriching` CRDs.

1. `controller` process running as a `pod`.

    * The controller is run as an OS `process`, with sub `goroutines`.

2. Kubernetes `admissions webhook`.

3. Validates and augments submissions.

    1. Set default configurations - Timeouts, concurrency limits, container limits, gc parameters, etc.

    2. Injecting routing.

    3. Injecting networking.

    4. Validation -Ensure submission pass validation constraints.

    5. Image resolution - e.g. example/example:latest => example/example@sha256:1a4bccf2

---

## Networking Controllers

> Responsible for configuring `TLS certificates` and `HTTP Ingress routing`.

1. `Certificate`

    1. CRD providing information about the desired TLS certificates.

    2. A list of `DNSNames` is used to indicate what domains the Certificate should be valid. 

        * TLS certificates are scoped to particular domain names or IP addresses. 

2. `Ingress` - Entrance to the entire Knative installation. Convert Knative Ingress into that of networking provider.

    1. `istio` provides the default networking solution, but, this can be swapped out for `kourier`, `ambassador`, etc.

        * e.g. Convert a `Knative Ingress` into a `Istio Gateway`.

---

## Autoscaler / Activator / Queue-Proxy

> Responsible for `monitoring` and `reacting` to `changes in traffic`.

1. `Autoscaler` - Monitor and react to changes in demand.

    1. __Process__

        1. __Observe__ demand for a `Service`.

        2. __Calculate__ the number of instances needed to serve that demand.

        3. __Scale__ instance.
    
    2. `Knative Pod Autoscaler (KPA)` / Kubernetes `Horizontal Pod Autoscaler (HPA)`

2. `Activator`

    1. __Process__

        1. __Forward__ - `Ingress` forwards requests onto the `Activator`.

        2. __Buffering__ - `Activator` buffers the requests in a `Activator Buffer`.

        3. __Update Autoscaler__ - `Activator` updates the `Autoscaler` with information about requests in the `Activator Buffer`.

            1. __Rescale__ -  `Autoscaler` calculates and set a new scale target for `Serving`.

        4. __Polling__ - `Activator` polls `Serving` and when applicable dispatches request from the buffer to the `Activator Proxy`.

        5. __Invoke__ - `Activator Proxy` sends request to instance and response back to `Ingress`.

    2. The `Activator` is the path from `no instances` to `enough instances`.

    3. When the `Autoscaler` determines there are enough instance it reconfigures `Ingress` datapath to target traffic to the running instances. 

        * This removes the `Activator` from the datapath.
    
    4. The `Activator` throttles the `Activator Proxy` until enough capacity comes on-line. 

        * This prevents the first `Services` coming online being swamped with traffic.

3. `Queue-Proxy`

    1. A small proxy process that sits between the `Service` and arriving traffic. 
    
    2. Each `Service` will have its own `Queue-Proxy`, running as a sidecar, to provide:

        1. `Positive Hand-Off` - The request has been accepted.

        2. `Metrics` - Collect metrics.

