# Configuration and Revision

## Configuration

1. `configurations` are used as a template to create `revisions`.

2. Changing a `Configuration.spec.template` causes a new `revision` to be created.

3. `configurations` consist of:

    1. `container` - A valid `image` with a well defined `ENTRYPOINT` and implementing the `Knative contract`.

        1. There can only be one container in the underlying `Pod`.

    2. `routes` - The associated routes and underlying network infrastructure.

---

## Configuration Operations

1. `configurations` can be created via the `kn` tool `service` command:

    ```bash
    kn service create hello-example \
        --image gcr.io/knative-samples/helloworld-go \
        --env TARGET="First"
    ```

2. `configurations` can be created via the `kubectl` tool and `Configuration` CRD:

    ```bash
    kubectl apply -f example.yaml
    ```

    ```yaml
    apiVersion: serving.knative.dev/v1
    kind: Configuration
    metadata:
        name: helloworld-example
    spec:
        template:
            spec:
            containers:
                - image: gcr.io/knative-samples/helloworld-go
                env:
                - name: TARGET
                value: "First"
    ```

3. Updating a `service` causes a new `revision` to be created:

    ```bash
    kn service update hello-example --env TARGET=Second
    ```

4. A `configuration` can be examined via `kubectl`:

    ```bash
    kubectl describe configuration helloworld-example
    ```



---

## Deployments

* Deployments

    * `blue/green deployments`

    * `canary deployments`

    * `progressive deployments`

* Configuration

    * Decouple configuration deployment form code deployment.



