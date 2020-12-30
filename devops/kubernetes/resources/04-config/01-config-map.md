# Config Map

## Commands

1. Create a `Secret`.

    ```bash
    kubectl apply -f example-secret.yaml
    ```

    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: example-configmap
    data:
      foo: "bar"
    ```