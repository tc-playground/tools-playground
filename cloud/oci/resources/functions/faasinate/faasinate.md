# Faasinate

1. Clone `Fassinate` project:

  ```
  git clone https://github.com/templecloud/faasinate
  ```

2. Ensure the `docker`, `oci`, and `fn` tools are installed and available on the `$PATH`.

3. Open in `VS Code` via the terminal.

  > NB: We want to keep out `$PATH` as they reference the `docker`, `oci`, and `fn` tools.

4. Ensure the `oci` tool has a `~/.oci/config` properties file configured and `oci` is working:

  ```bash
  $> oci iam -h
  ...
  oci iam availability-domain list
  ...
  ```

5. Ensure that the `fn` context is configured for `localhost`:

  ```bash
  $> fn set context default
  $> fn list context
  CURRENT NAME                            PROVIDER        API URL                 REGISTRY
  *       default                         default         http://localhost:8080
          personal-dev-odx-jafar-iad      oracle          https://127.0.0.1:19001 iad.ocir.io/odx-jafar/trjl-test-fn
          personal-dev-odx-jafar-phx      oracle          https://127.0.0.1:19001 phx.ocir.io/odx-jafar/trjl-test-fn
          personal-dev-ofd-phx            oracle          https://127.0.0.1:19001 iad.ocir.io/oraclefunctionsdevelopm/fn-test-trjl
  ```

6. Start the `TypeScript` compiler running in `watch` mode. Prest `<F5>` to run the plugin in debug mode.

  ```bash
  $> npm run watch
  ```

