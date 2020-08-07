# Configuration and Revision

## Configuration

1. `configurations` are used as a template to create `revisions`.

2. `configurations` can be created via the `kn` tool `service` command:

    ```bash
    kn service create hello-example \
        --image gcr.io/knative-samples/helloworld-go \
        --env TARGET="First"
    ```

3. `configurations` can be created via the `kubectl` tool and `crd`:

    ```bash
    kubectl apply -f example.yaml
    ```

    ```bash
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

4. Changing a `configuration template` causes a new `revision` to be created.

5. Updating a `service` causes a new `revision` to be created:

    ```bash
    kn service update hello-example --env TARGET=Second
    ```

6. A `configuration` can be examined via `kubectl`:

    ```bash
    kubectl describe configuration helloworld-example
    ```

4. `configurations` consist of:

    1. `image` - A valid `image` with a well defined `ENTRYPOINT` and implementing the `Knative contract`.

    2. `routes` - The associated routes and underlying network infrastructure.

---

## Revision

1. `revisions` are created when a `configuration` is _created_ or _changed_.

2. `revisions` have no independent existence from a `configuration`.

3. A `revision` can be examined with the `fn` tool:

    ```bash
    kn revision describe helloworld-example-8sw7z -o json
    ```

4. `revisions` consist of:

    1. `container` - The running image. The image needs to conform to the Knative standard.

    2. `environment` - Injected environment variables for the

    2. `routes` - The associated routes and underlying network infrastructure.



---

## Deployments

* `blue/green deployments`

* `canary deployments`

* `progressive deployments`

