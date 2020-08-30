# Deployments

## Introduction

* `Deployments` are used to manage `stateless applications` e.g. `Webservers`, `Load balancer proxies`.

* `Deployments` describe the `desired state` for the number of `Pod replicas`.

* The `Deployment Controller` changes the `actual state` to the `desired state` at a `controlled rate`. 

* `Deployments` create `ReplicaSets` under the hood.

    * `ReplicaSets` are a mechanism to control the number of pods `replica` of specific `type` in the cluster.

* `Deployments` are the basis for the `kubectl run` command. 

---

## References

* [Deployments - Kubernetes Docs](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
