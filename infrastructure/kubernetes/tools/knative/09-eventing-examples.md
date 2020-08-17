# Eventing Examples

## Cloud Events Example

1. Create `Service`

    ```bash
    kn service create cloudevents-player \
        --image ruromero/cloudevents-player:latest \
        --env BROKER_URL=http://default-broker
    ```

2. Create `Trigger`

    ```bash
    kn trigger create cloudevents-player --sink cloudevents-player
    ```

3. List `Source`.

    ```bash
    kn source list
    ```

4. List `Source types`.

    ```bash
    kn source list-types
    ```

5. Create `Source`.

    1. Via `URI`:

        ```bash
        kn source ping create ping-player --sink http://cloudevents-player.default.example.com
        ```

    2. Via `Kubernetes Ref` (to a `knative service`):

        ```bash
        kn source ping update ping-player --sink svc:cloudevents-player
        ```



