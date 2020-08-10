# Routes

## Introduction

1. `Routes` map from an `incoming HTTP request` to a specific `Revision`.

    1. Where will traffic arrive from?

    2. What target can traffic be sent too?

    3. What percentage of traffic goes to each target?

2. `Routes` are create via `Services`.

3. `Revision` can be `tagged` to create a new `route endpoint`.

---

## Anatomy

1. `Route.spec.traffic` is a list of routes.

    1. `latestRevision` - If `true`, use the latest `Revision`.

    2. `revisionName` - If `latestRevision` is `false` defines the `pinned` revision.

    3. `tag` - Directly target a particular `Revision`.

---

## Operations

> `Kn route [update|create]` do not exist. Use `service` or `kubectl` with `Configuration`. 

1. __List Routes__

    ```bash
    kn route list
    ```

2. __Describe Routes__

    ```bash
    kn route describe hello-example
    ```

3. __Create Route__

    ```yaml
    kubectl apply -f example.yaml
    ```

    ```yaml
    apiVersion: serving.knative.dev/v1
    kind: Route
    metadata:
    name: route-example
    spec:
        traffic:
        - configurationName: hello-example
            latestRevision: true
            percent: 100
    ```

    * `traffic` is a list of routes.

4. __Tag a Revision__

    ```bash
    kn service update hello-example \
    --tag hello-example-brvhy-1=t1 \
    --tag hello-example-snznt-2=t2
    ```

    ```bash
    curl http://t1-hello-example.default.example.com
    curl http://t2-hello-example.default.example.com
    ```

    * `tagging` does not create a new revision.

    * `tagging` creates a new endpoint pointing directly to a specific revision.

    * Traffic can be split between the `tagged revisions`:

        ```bash
        kn service update hello-example \
            --traffic t1=50 \
            --traffic t2=50
        ```
    
    * `latest` points to the `latest Revision`.

5. __Untag a Revision__

    ```bash
    kn service update t1-hello-example --untag t1
    ```

