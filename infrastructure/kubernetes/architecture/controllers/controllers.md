# Controllers

## Introduction

1. `Controllers` implement one or more `control loops` that that let Kubernetes moved between an `actual` and `desired` state.

2. `Controllers` use `control loops` to `watch` the state of `resources` they are interested in.

    * `Kubernetes` performs all communication is done via a `watch` (as opposed to a `message queue` or other `multi-directional mechanism`).

3. `Control loops` 

    1. A `trigger` that starts a function. The trigger `watches` specific resources. e.g. Increase number of Pods by 1.

    2. One or more `control functions` that complete one or more `actions` based on the trigger. e.g. Create Pod.

    3. A final `control function` to update the `API server`. e.g. Send new Pod definition.

---

## Asynchronicity

* Kubernetes convergence to a new desired state that is asynchronously realised.

* `docker run -v /tmp:/ctmp -p 8080:8080 nginx`

    1. Create a PodSandbox, which sets up networking for a Pod and serves as a placeholder.

    2. Create a distinct hostPath volume.

    3. Mount a volume into a Pod.

    4. Set up Pod networking via a CNI provider.

    5. Start the container engine to create the pause container, for cgroup parents of the Nginx container.
    
    6. Start the container engine, which mounts the volume into the Pod and starts the image.

---

## References

* [Controllers - Kubernetes Docs](https://kubernetes.io/docs/concepts/architecture/controller/)
