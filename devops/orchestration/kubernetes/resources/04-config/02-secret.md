# Secret

## Commands

1. Create a `ConfigMap`.

    ```bash
    kubectl apply -f example-configmap.yaml
    ```

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: example-secret
      type: Opaque
    data:
     password: REDACTED
    ```