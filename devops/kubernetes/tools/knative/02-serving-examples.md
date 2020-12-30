## Serving Examples

## Create Simple Service

```bash
kn service create hello-example \
    --image gcr.io/knative-samples/helloworld-go \
    --env TARGET="First"
```

## Invoke a Service

```bash
curl http://hello-example.default.127.0.0.1.nip.io
```

---

## List Services

```bash
kn service list
```

---

## List Revisions

```bash
kn revision list
```

---

## Change Service Image - `--image`

```bash
kn service update hello-example \
  --image gcr.io/knative-samples/helloworld-rust
```

---

## Split Traffic between Service Revisions - `--traffic`

```bash
kn service update hello-example \
  --traffic hello-example-xpnxq-1=50 \
  --traffic hello-example-tvpll-2=50
```

```bash
kn service update hello-example \
  --traffic @latest=100
```
