# Event Filters and Flows

## Brokers

1. A `broker` is a `sink` that implements `Addressable`.

2. A `broker` can be the target for handling `CloudEvents`.

3. A `broker` contains `filters` to filters to forward incoming `CloudEvents` and to `Subscribers` when filters match.


---

## Broker Filters

1. The `--filter trigger.type` defined which `CloudEvents` are forwarded by a `Broker`.

    ```bash
    kn trigger create trigger-1 \
        --filter type=com.example.type \
        --sink example-sink

    kn trigger create trigger-2 \
        --filter type=com.example.type \
        --filter source=/example/source/123 \
        --sink example-sink

    kn trigger create trigger-3 \
        --filter type=com.example.type \
        --filter source=/example/source/456 \
        --sink example-sink
    ```

2. Only `CloudEvent attributes` can be used in `Filters`.

---

## SockEye

```bash
kubectl port-forward service/broker-ingress 8888:80 --namespace knative-eventing
```

```
http post http://localhost:8888/default/default \
    Ce-Id:$(uuidgen) \
    Ce-Specversion:1.0 \
    Ce-Type:com.example.type \
    Ce-Source:/example/source \
    message="This is an example." \
    --verbose
```

```
kn service create sockeye --image docker.io/n3wscott/sockeye:v0.5.0
```

---

## Sequences

1. `sources` and `sinks` can be used to wire together a simple application.

2. `brokers` and `triggers`  can be used to wire together a simple application. NB: `broker` can become a `single point of failure`.

    * NB: Find the `desired paths`.

3. `sequences` satisfy the `addressable` type, so don't need a separate `source`.

4. `sequences` can be mixed with `broker filters` / `triggers`. `broker` as a switchboard to a set of `sequences`.

5. __Sequence Anatomy__

    1. `Steps` - Defines a set of `services` the `CloudEvent` should pass through.
    
    2. `Reply` - Define the final location `service` to reply too.

    3. `ChannelTemplate` - Configure the underlying `channel` implementation, e.g. `InMemory`, `Kafka`, etc.

6. `sequences` move traffic from place to place without passing through a central hub.

    * NB: Implement the `desired paths`.

    ```yaml
    apiVersion: flows.knative.dev/v1beta1
    kind: Sequence
    metadata:
        name: example-sequence 2
    spec:
        steps:
            - ref:
                apiVersion: serving.knative.dev/v1
                kind: Service
                name: first-sequence-service
            - ref:
                apiVersion: serving.knative.dev/v1
                kind: Service
                name: second-sequence-service
        reply:
            ref:
                kind: Service
                apiVersion: serving.knative.dev/v1
                name: sockeye 6
    ```

    ```bash
    kubectl get sequence example-sequence
    ```

    ```bash
    kn service create first-sequence-service \
        --image gcr.io/knative-releases/knative.dev/eventing-contrib/cmd/appender \
        --env MESSAGE='Passed through FIRST'
    
    kn service create second-sequence-service \
        --image gcr.io/knative-releases/knative.dev/eventing-contrib/cmd/appender \
        --env MESSAGE='Passed through SECOND'
    ```

    ```bash
    kubectl get sequence example-sequence
    ```

    ```bash
    kn source ping create ping-sequence \
        --data '{"message": "Where have I been?"}' \
        --sink http://example-sequence-kn-sequence-0-kn-
        channel.default.svc.cluster.local
    ```


---

## Parallels

    ```yaml
    apiVersion: flows.knative.dev/v1beta1
    kind: Parallel
    metadata:
    name: example-parallel
    spec:
        branches:
            - subscriber:
            uri: https://subscriber.example.com
    ```

    ```yaml
    apiVersion: flows.knative.dev/v1beta1
    kind: Parallel
    metadata:
        name: example-parallel
    spec:
    branches:
        - subscriber:
            ref:
                apiVersion: serving.knative.dev/v1
                kind: Service
                name: first-branch-service
          reply:
            ref:
                kind: Service
                apiVersion: serving.knative.dev/v1
                name: sockeye
        - subscriber:
            ref:
                apiVersion: serving.knative.dev/v1
                kind: Service
                name: second-branch-service
          reply:
        ref:
            kind: Service
            apiVersion: serving.knative.dev/v1
            name: sockeye
    ```

    ```bash
    kn service create first-branch-service \
        --image gcr.io/knative-releases/knative.dev/eventing-contrib/cmd/appender \
        --env MESSAGE='FIRST BRANCH'

    kn trigger create parallel-example \
        --filter type=com.example.parallel \
        --sink http://example-parallel-kn-parallel-0-kn-channel.default.svc.cluster.local

    kubectl apply -f example.yaml
    ```

    ```bash
    http post http://localhost:8888/default/default \
        Ce-Id:(uuidgen) \
        Ce-Specversion:1.0 \
        Ce-Type:com.example.parallel \
        Ce-Source:/example/parallel \
        message="Here is the Parallel: "
    ```

---

