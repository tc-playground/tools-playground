# StatefulSets

## Introduction

* `StatefulSet` is used to manage `stateful applications` e.g. `Databases`.

* `StatefulSets` provide:

    * Stable, unique network identifiers.

    * Stable, persistent storage.

    * Ordered, graceful deployment and scaling.

    * Ordered, automated rolling updates.

* `StatefulSets` create `Pods` with a unique `pod identity` to always bind a `Pod` to a specified `Node`.

    1. `ordinal` - Each `Pod` in the `StatefulSet` will be assigned an integer ordinal, from 0 up through N-1.
    
    2. `stable network identity` - `Pod` derives its `hostname` from the name of the `StatefulSet` and the ordinal of the `Pod`.

        1. `Headless Services` are used to control the `network domain`:

            * __Governing Service Domain__ - `$(service name).$(namespace).svc.cluster.local`

            * __Pod Domain__ - `$(podname).$(governing service domain)`
    
    3. `stable storage identity` - A default `PersistentVolume` is create if none is specified.

* `StatefulSets` Pods must be paired with a `Persistent Volume` responsible for the `data`.

* `StatefulSets` Pods must be paired with a `Headless Service` responsible for the `network identity of the Pod`

* `StatefulSets` often use a `Headless Services`.

---

## Use Cases

* Applications that expect `local resources` e.g. `storage`.

* Applications that expect `static resources` e.g. `assume static DNS endpoint`.

* `High Performance` applications that expect certain `local resources` e.g. `graphics accelerators`.

* `Legacy Applications` often require `local` and `static` resources.

    * e.g. `Kafka`, `Elastic`, `ZooKeeper`, and `Cassandra`.

---

## Usage

* `StatefulSets` provide:

    * A stable, predictable hostname available to clients via DNS.

    * An ordinal index of Pods. 0, 1, 2, 3, etc.

    * Stable storage linked to the ordinal and hostname of the Pod.

    * Peer discovery is available via DNS. 
    
        * For example, with Cassandra, the names of the peers are known before the Pod’s creation.

    * Startup and teardown ordering. 
    
        * This feature is useful for such admin tasks as draining data from a Pod when reducing the size of a cluster.

---

## References

* [StatefulSet - Kubernetes Docs](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

* [Headless Service - Kubernetes Docs](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services)
