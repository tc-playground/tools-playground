# Scheduler

## Introduction

1. The `kube-scheduler` schedules `pods` on various `nodes`.

2. The `kube-scheduler` polls the `API Server` to determine if new pod(s) require scheduling onto `nodes`.

3. There can only be one `active scheduler` running on the control-plane of a Kubernetes cluster.

    1. In an `HA` setup - an initial `active scheduler` is decided by `leader election`.

    2. In an `HA` setup - an initial `active scheduler` periodically updates the `API Server` with its `health` via a `heartbeat`.
    
    3. In an `HA` setup - the `passive schedulers` monitor that the `active scheduler` is `healthy`.

4. __pod scheduling factors__

5. __pod scheduling control__

    1. `affinity` - Attract pods to a node that matches the rules.
    
    2. `anti-affinity` - Repel pods from a node that matches the rules.

    3. `taints` - Prevent pods being scheduled on a node.

    4. `tolerations` - Override a `taint`.

---

## Relationships

* `Kubelet` communicates with the `scheduler` to check `pods` can be created.

