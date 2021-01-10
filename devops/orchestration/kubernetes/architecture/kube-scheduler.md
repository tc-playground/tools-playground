# Scheduler

## Introduction

1. The `kube-scheduler` schedules `pods` on various `nodes`.

2. The `kube-scheduler` polls the `API Server` to determine if new pod(s) require scheduling onto `nodes`.

3. There can only be one `active scheduler` running on the control-plane of a Kubernetes cluster.

    1. In an `HA` setup - an initial `active scheduler` is decided by `leader election`.

    2. In an `HA` setup - an initial `active scheduler` periodically updates the `API Server` with its `health` via a `heartbeat`.
    
    3. In an `HA` setup - the `passive schedulers` monitor that the `active scheduler` is `healthy`.

4. __pod scheduling factors__

5. __labels and selectors__

    1. `labels` and `selectors` can be used to always `pin` a `pod` on a `specific node`.

6. __pod scheduling control__

    1. `affinity` - Attract pods to a node that matches the rules.
    
    2. `anti-affinity` - Repel pods from a node that matches the rules.

    3. `taints` - Prevent pods being scheduled on a node.

    4. `tolerations` - Override a `taint`.

7. __pod prioritisation control__ - Set `priority classes` and associate levels with `Pod specs`.

    1. Define a `PriorityClass` as the `global default` (normally 0).

      ```yaml
      apiVersion: scheduling.k8s.io/v1beta1
      kind: PriorityClass
      metadata:
        name: ultra
      value: 999999
      globalDefault: true
      ```

    ```yaml
    spec:
      containers:
      - name: important-app
        image: fedora:latest
      priorityClassName: ultra
    ```

---

## Relationships

* `Kubelet` communicates with the `scheduler` to check `pods` can be created.

