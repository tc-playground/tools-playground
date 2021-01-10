# Kubelet

## Introduction

1. `Kubelet` is a binary, an `agent` with multiple control loops.

2. `Kubelet` MUST run on every `node`.

3. `Kubelet` interfaces with `CRI` (containers), `CNI` (networking) and `CSI` (storage).

3. `Kubelet` manages __node initialisation__.

    1. On initialisation `Kubelet` checks `container primitives` e.g. a `CRI` is available. `cgroups` are created, etc.

    2. On initialisation `Kubelet` checks `network primitives` e.g. a `CNI` is available. `network bridge` are created, etc.

    3. On initialisation `Kubelet` checks `storage primitives` e.g. a `CSI` is available.

4. `Kubelet` manges __node lifecycle__.

    1. `Kubelet` ensures the `node` is registered with `API server`. 

    2. `Kubelet` maintains `node heartbeat` operations.

5. `Kubelet` manages __pod sandboxes__ and __pod lifecycle__.

    1. `Kubelet` maintains a `pods life-cycle` when it is on a `Node`.

    2. `Kubelet` maintains the `health checks` on all `pods` on the `node`.

    3. `Pod definitions` are defined via a `local directory`, `URL`, or `Kubernetes API server`.

    4. `Kubelet` manages `pod evictions` in times of `stress`.

        * __Cluster Stress__ - Critical `Pods` auto-scale to the point of competing with one another on their dedicated `Nodes`.

6. `Kubelet` performs __validation__.

    1. `Kubelet` communicates with the `scheduler` to check `pods` can be created. 

    2. `Kubelet` communicates with the `admission controller` to check `pods` can be created.

    3. `Kubelet` validates `pod specs`.

7. `Kubelet` performs __resource monitoring__.

    1. Evict pods that have run out of `memory`, `disk space`, etc.

8. `Kubelet` manages __Quality of Service (QoS)__.

    1. Manage `cgroups` on the node.

    2. Kernel management, huge pages, logging, etc.

9. `Kubelet` ships with `cAdvisor` for `aggregated node metrics`.

---

## Usage

* `Kubelet` can be used to `bootstrap a cluster`.

    * `kubelet` watches `/var/lib/kubelet/manifests` for `Pod` definitions.

---

## References

* [Kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)
