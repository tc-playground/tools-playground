# Overview

---

## Infrastructure

1. __Compute__ - One or more `computers`.

2. __Network__ - `switches`, `routers`, `IP address management (IPAM)`, `DNS servers`, etc.

3. __Storage__  - `disks`, `NAS`, `NFS`, etc.

4. __Image Registry__ - A place to host container images.

---

## Components

1. __Nodes__ — 3 to 5000 Nodes.

2. __API server__ — At least 1, or, odd number for HA clusters.

3. __Scheduler__ — At least 1 active, and, an even number of passive backups.

4. __Controller__ - At least 1 active, and, an even number of passive backups.

---

## Kubernetes Orchestration Platform Requirements

* __Cluster State Management__ - `APIServer` / `Kubectl` / `Custom Resource Definitions` / `Namespaces`

    * Provide mechanism to `declaratively` define the state of the system.

    * Provide a `cloud-neutral API` for all functionality, integrated with all major cloud and hypervisor platforms.

    * Provide `API extensions` and constructing native API-driven programs.

    * Provide inspection of failed processes cluster-wide, including remote execution into any container at any time.

* __Cluster State Store__ - `Etcd`

    * Provide a `fault-tolerant` framework for storing and defining the `cluster state` of all services, applications, and configurations.

* __Configuration__ - `ConfigMap` / `Secret`

    * Provide mechanism for providing configuration data to processes.

* __High Availability__ - `Deployments` / `Autoscaling` / `CRI`

    * Provide for `upgrades` of and the hosted applications `without downtime` host or application downtime.

    * Provide `automatic scaling` for Hosts and Hosted Applications, with rolling update awareness.

* __Batch Processing__ - `Jobs`

    * Provide batch processes that leverage storage and containers in the same way persistent applications do.

* __Dynamic Networking__ - `LoadBalancer` / `ClusterIP` / `CNI`

    * Provide `ingress` into a cluster.

    * Provide `managed internal networking` so every pod can communicate with every other pod.

    * Provide `managed external networking` integrations with `load balancing`.

* __Service Discovery__ - `KubeDNS` / `CoreDNS`

    * Provide for `service discovery` via `Domain Name Service`.

* __Efficient Stateless Resource Utilisation__ - `Scheduler` / `Node Labelling`

    * Provide the ability to `schedule` applications to run on specific hardware based on metadata.

* __Efficient Stateful Resource Utilisation__ - `StatefulSet` / `DaemonSet`

    * Provide a highly available platform that prioritizes microservices that run on all Nodes in your data center.

* __Manage Stateful Infrastructure__ - `StorageClass`/ `PersistentVolumes`

    * Provide for mounting local and or remote `storage` to a container and management of declarative storage volumes for containers.

* __Security__ - `ServiceAccounts` / `RoleBinding` / `RBAC` / `mTLS`

    * Provide secure access to the cluster.

    * Provide secure TLS communication across the cluster.

