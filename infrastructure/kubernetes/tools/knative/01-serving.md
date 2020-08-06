# Knative Serving

## Knative Serving Resources and Concepts

1. `Service` - Defines a service endpoint that can be invoked.

2. `Revision` - Defines a version of the service. 

  > Every time a service is deployed or changed a new revision is created, unless it is changing a `route`.

  1. `Conditions` - Define the `state` of a revision: `health`, `active`, etc.

3. `Routes` - Split traffic between `revisions`.

---

