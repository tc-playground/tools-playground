# PriorityClass

## Introduction

* `PriorityClass` is a `cluster wide definition` for the importance of a `Pod`.

* `Pods` can have `priority`. 

* `Priority` indicates the `importance of a Pod relative to other Pods`. 

* If a `Pod` cannot be scheduled, the `scheduler` tries to preempt (`evict`) lower priority Pods.

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

* [PriorityClass - Kubernetes Docs](https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/)