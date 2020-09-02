# Kube Proxy

## Introduction

* `kubernetes` allows `multiple pods of the same type` to be proxied by a `Service` `for load balancing`.

    * To have `services` proxied correctly, every `Node`, in a `cluster`, has to be aware of every `Service` and every `Pod`.

* `kube-proxy` handles the creation of `ClusterIp` and `NodePort` services on every Node.

* `kube-proxy` facilitates and manages each `Service` on each `Node` as defined for a specific cluster.

* `kube-proxy` supports `TCP`, `UDP`, and `STC` network protocols, as well as `forwarding` and `load balancing`.

* `kube-proxy` utilizes `iptables rules` on the hosts and performs `connection forwarding`.

* `kube-proxy` can instead replaced with a custom component to provide service management.

---

## Services

* `ClusterIP` is a Kubernetes service which automatically load-balances Kubernetes Pods. 

* `NodePort` is an open port on a Kubernetes Node that load-balances multiple Pods.

