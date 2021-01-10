# Labels and Selectors

## Introduction

* `Labels` are `key/value pairs` that are attached to Kubernetes `objects`.

* `Label Selectors` can be used to organize and to `select subsets of objects`.

* `Label Selectors` are used to link some resources, e.g. `Services -> Pods`.

    ```yaml
    selector:
        component: redis
    ```

    ```yaml
    selector:
        matchLabels:
            component: redis
        matchExpressions:
            - {key: tier, operator: In, values: [cache]}
            - {key: environment, operator: NotIn, values: [dev]}
    ```

---

## Usage

* __JSON Label Config Example__

    ```json
    "metadata": {
        "labels": {
            "key1" : "value1",
            "key2" : "value2"
        }
    }
    ```

* __kubectl Selector Examples__

    ```bash
    # Standard
    kubectl get pods -l 'environment in (production),tier in (frontend)'
    ## Set-based
    kubectl get pods -l 'environment in (production, qa)'
    kubectl get pods -l 'environment,environment notin (frontend)'
    ```

---

## References

* [Labels and Selectors - Kubernetes Docs](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)