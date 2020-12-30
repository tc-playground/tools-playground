# Nodes

## Introduction

1. `Nodes` are the base unit of compute in a `Kubernetes cluster`.

    * Bare metal nodes, VM, Kind Docker container, etc.

2. The maximum number of `nodes` is `5000`.

3. `Nodes` can be part of `control-plane` or `data-plane (workers)`.

4. `Nodes` comprise the following components:

    1. `systemd` - Linux system and service manager.

    2. `container runtime` - e.g. `Docker`.

    3. `kubelet` - A `node agent` for managing the __lifecycle__ of `Pods`, and, node level operations.

    4. `kube-proxy` - Handles the creation of `ClusterIp` and `NodePort` services on every Node.

    5. `Pods` - Processes and workloads running in the cluster.

5. `Node` = `Kubelet` + `CNI` + `CRI` + `CSI`.

6. Every `Node` in a Kubernetes cluster needs to `forward network traffic` into `containers`.