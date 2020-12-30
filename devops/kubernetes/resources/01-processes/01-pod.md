# Pods

## Introduction

* `Pods` are the atomic unit of execution in `Kubernetes`.

* `Pods` are a co-located group of `containers` that share:

    1. __Host__
    
    2. __Network__

        1. Shared `IP address`.
        
        2. Allows `containers` to communicate over `127.0.0.1` (`localhost`).

        3. Allows `side-car containers` e.g. `service mesh proxies`.

        4. Allows network `cgroups` 
    
    3. __Filesystem__ 

        1. Shared `Filesystem`.

        2. Allows `emptyDir` / `hostPath` to share a non-persistent folder.

* `Pods` gets an `ephemeral IP address`.

    * NB: `Services` can be used to provided `persistent IP addresses`.

* `Pods` are normally instantiated via:

    * `Deployment` - Stateless applications, e.g. webservers. Controlled by desired number of `replicas`.

    * `StatefulSet` - Stateful applications, e.g. databases.

    * `DaemonSet` - Cluster wide applications that must run on every `node`.

    * `Job` - Create one or `Pods` that run to completion.

---

## Configuration

* __spec.initContainers__ - Define Pod `init operations` to be performed before the Pod `container processes start`.

* __nodeSelector__ - Define the Node a Pod should be provisioned on using `labels`.

* __spec.tolerations__ - Define `taints` and `tolerations` to be specified for the `scheduler`.

---

## Commands

1. Create `Pods` via a `Deployment`

    ```bash
    kubectl run --image=nginx --labels="app=core-k8s-demo" nginx
    kubectl get rs -l="app=core-k8s-demo"
    kubectl get pods -l="app=core-k8s-demo"
    ```

---

## References

* [Pods - Kubernetes Docs](https://kubernetes.io/docs/concepts/workloads/pods/)

