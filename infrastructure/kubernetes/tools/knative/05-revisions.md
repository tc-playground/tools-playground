# Revision

## Introduction

1. `revisions` are created when a `configuration` is _created_ or _changed_.

2. `revisions` have no independent existence from a `configuration`.

3. `revisions` consist of:

    1. `container` - The running image. The image needs to conform to the Knative standard.

    2. `environment` - Injected environment variables, including `knative` defined:

        1. PORT

        2. K_REVISION

        3. K_CONFIGURATION

        4. K_SERVICE
    
    3. `filesystem` - Filesystems containing `ConfigMap` and `Secret`.

    4. `probes` - `Liveness` and `Readiness` probes.

    5. `routes` - The associated routes and underlying network infrastructure.


---

## Revision Operations

1. `revisions` are created when a services `configuration` (spec.template) is _created_ or _changed_.

2. A `revision` can be examined with the `fn` tool:

    ```bash
    kn revision describe helloworld-example-8sw7z -o json
    ```

---

## Revision - Environment Variables

1. A new `revision` with a new __environment__ can be created __indirectly__ with the `kn` tool and `--env`.

    ```bash
    kn service update hello-example --env AGAINPLS="OK"
    ```

2.  A new `revision` with a new __environment__ can be created __indirectly__ with the `kn` tool and `--env-from`.

    ```bash
    kn service update hello-example \
        --env-from config-map:example-configmap \
        --env-from secret:example-secret
    ```

    * `--env-from` allows environment variable to be configured from `ConfigMap` or a `Secret` resource.

    * `ConfigMaps` and `Secrets` are not updated dynamically. The `Revision` will need to be relaunched.


3. A new `revision` with a new __environment__ can be created __indirectly__ with the `kubectl` tool.

    ```bash
    kubectl apply -f example.yaml
    ```

    ```yaml
    apiVersion: serving.knative.dev/v1
    kind: Configuration
    metadata:
        name: values-from-example
    spec:
        template:
            spec:
                containers:
                - image: example.com/an/image
                env:
                - name: FIRST_VARIABLE
                  valueFrom:
                    configMapKeyRef:
                        name: example-configmap
                        key: firstvalue
                - name: PASSWORD
                  valueFrom:
                    secretKeyRef:
                        name: example-secret
                        key: password
    ```
    * `valueFrom` allows environment variable to be configured from `ConfigMap` or a `Secret` resource.

    * `ConfigMaps` and `Secrets` are not updated dynamically. The `Revision` will need to be relaunched.

---

## Revision - Filesystem Mounts

1. A new `revision` with a new __mount__ can be created __directly__ with the `kn` tool and `--mount`.

    ```bash
    kn service update hello-example --mount /somedir=secret:example-secret
    ```

    * `secret` - Targets a `Secret`.

    * `configmap` - Targets a `ConfigMap`.

    * This will mount in the `tmpfs` filesystem available to the container.

    * Mounts will material as `volumes` and `volumeMounts` in the underlying `Pod.spec`.

    > Creating a directory, putting ConfigMaps and Secrets onto a volume and then mounting it for you.

    > The `--volume` switch performs a similar role.

---

## Revision - Probes

1. __Liveness Probes__ - Check the service container is `alive` and traffic can reach it.

2. __Readiness Probes__ - Check the service is `ready` to accept requests.

3. __Configuration__

    ```yaml
    apiVersion: service.knative.dev/v1
    kind: Configuration
    # ...
    spec:
    template:
        spec:
        containers:
        - name: first-and-only-container
            image: example.com/first-and-only-container-image
            livenessProbe:
                httpGet:
                path: /deadoralive
            readinessProbe:
                tcpSocket:
    ```

4. __Probe Types__

    1. `httpGet` probes - Poll an HTTP endpoint.

    2. `tcpSocket` probes - Poll a TCP endpoint.

5. __Probe Configuration__

    1. `initialDelayInSeconds`

    2. `successThreshold`

---

## Revision - Resource and Concurrency Limits

1. A new `revision` with new __resource limits__ can be created __directly__ with the `kn` tool.

    ```bash
    kn service update hello-example \
        --requests-cpu 500m \
        --requests-memory 256Mi
    ```

    * `requests-cpu`

    * `requests-memory`

    * `limits-cpu`

    * `limits-memory`

2. A new `revision` with new __concurrency limits__ can be created __directly__ with the `kn` tool.

    ```bash
    kn service update hello-example --concurrency-limit 1
    ```

    * `concurrency-limit` - set a maximum level of concurrency.

        * The concurrency limit is a hard threshold for scaling.
        
        * If the average number of requests exceeds this limit, the `Autoscaler` wil provision more service instances.
    
    * `concurrency-target` -  set a desired level of concurrency.

    ```yaml
    apiVersion: service.knative.dev/v1
    kind: Configuration
        # ...
        spec:
            template:
                spec:
                    containerConcurrency: 1
    ```

---

## Revision - Timeout Configuration

* `timeoutSeconds` defines how long to wait until an invocation responds to a request.

    ```bash
    kubectl -f example.yaml
    ```

    ```bash
    apiVersion: service.knative.dev/v1
    kind: Configuration
    # ...
    spec:
        template:
            spec:
                timeoutSeconds: 300
    ```

    > Bugs in a function with a high timeout  can cause results to pile up...




