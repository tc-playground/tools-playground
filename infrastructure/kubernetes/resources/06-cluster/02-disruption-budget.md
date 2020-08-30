# DisruptionBudget

## Introduction

* `DisruptionBudgets (DB)` influence which `Pods` are `evicted` when new Pods cannot be `scheduled`.

* `DisruptionBudgets` influence the Kubernetes `Scheduler` eviction algorithm.

---

## Usage

1. Define a `PriorityClass` as the `global default`. The normal default is 0.

    ```yaml
    apiVersion: scheduling.k8s.io/v1beta1
    kind: PriorityClass
    metadata:
    name: ultra
    value: 999999
    globalDefault: true
    ```

2. Assign a `PriorityClass` to a `Pod`.

    ```yaml
    spec:
        containers:
        - name: important-app
        image: important-app:latest
        priorityClassName: ultra
    ```

3. Assign a `DisruptionBudget` for the `Pod`.

    ```yaml
    apiVersion: policy/v1beta1
    kind: PodDisruptionBudget
    metadata:
      name: ultra
    spec:
      maxUnavailable: 1
      selector:
        matchLabels:
          app: important-app
    ```

---

## References

* [DisruptionBudget - Kubernetes Docs](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/)
