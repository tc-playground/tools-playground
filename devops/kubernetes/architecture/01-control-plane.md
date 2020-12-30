# Kubernetes Control Plane

## Introduction

1. The `control-plane` consists of:

    1. `kube-apiserver` - REST API server that exposes the Kubernetes API for a cluster.

        1. The `kube-apiserver` connects to, `etcd`, the `Kubernetes database`.
    
    2. `kube-scheduler` - A control loop that handles the scheduling of new pods.
    
    3. `kube-controller-manager` - Various control loops that execute controllers for IaaS resources.

3. In a `managed cluster` the `control-pane nodes` are not accessible.

4. A `single node` can run all the required binaries to run the `control plane`.

5. `multiple nodes` can run all the required binaries to run a `highly available control plan`.

    * A `quorum` is required. `3` nodes in the minimum number of nodes for HA quorum.

6. `control-plane nodes` are `tainted` to prevent `workload pods` being `scheduled` upon them.

---

## API server

1. `API server logs` - Debug RBAC issues.

---

## Scheduler

1. `Scheduler logs` - Debug pods not scheduling.

