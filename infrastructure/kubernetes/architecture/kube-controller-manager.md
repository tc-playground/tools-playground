# Kubernetes / Cloud Controller Manager

## Introduction

1. The `KCM` communicate with the underlying `cloud system (IaaS)` to manage resources, e.g. `disk volumes`.

2. `CCM`s are platform based implementations of `KCM` functionality.

---

## KCM

1. `Node Controller`: Monitor when `Nodes` in the control-plane. Heartbeat.

2. `Replication Controller` : Maintains the required number of `Pods`.

3. `Service Account` & `Token Controllers` : Create default `Accounts` and `API access tokens` for new namespaces.

4. `Route Controller` : For setting up `routes` in the underlying cloud or bare-metal infrastructure.

5. `Service Controller` : For creating, updating, and deleting `load balancers`.

6. `Endpoints Controller` : Handle `Endpoints` API objects.

7. `Volume Controller` : For creating, attaching, and mounting `volumes`.

---

## CCM

1. `Node Controller`: Monitor when `Nodes` in the control-plane. Heartbeat.

2. `Route Controller` : For setting up `routes` in the underlying cloud or bare-metal infrastructure.

3. `Service Controller` : For creating, updating, and deleting `load balancers`.

4. `Volume Controller` : For creating, attaching, and mounting `volumes`.