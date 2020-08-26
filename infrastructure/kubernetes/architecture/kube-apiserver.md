# Kube API Server

## Introduction

1. `kube-apiserver` is an HTTP based `REST server` that exposes the various `API objects` for a Kubernetes cluster.

2. `kubectl` can be used to interact with the `kube-apiserver`.

3. Most `clusters` have the `API server` running on every `node` that comprises the `control plane`.

4. The `API server` stores the resource state in `etcd`.

5. `controllers` normally access `etcd` via the `API server`..

6. `controllers` can poll the `API server` to `watch` the state of `resources`.

7. `API server` is primarily `stateless` and can run `HA` on multiple Nodes at the same time.

    8. An `HTTP load balancer` fronts the `API servers` in am `HA` control plane consisting of three or more nodes.

