# Installing Knative

---

## Install Istio (Optional)

### 1. Install `istioctl` CLI

```bash
# Install `istioctl` CLI tool.
curl -L https://istio.io/downloadIstio | sh -
# NB: Add bin to $PATH
```

### 2. Create `Istio Operator` CRDs.

```bash
cat << EOF > ./istio-minimal-operator.yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
  values:
    global:
      proxy:
        autoInject: disabled
      useMCP: false
      # The third-party-jwt is not enabled on all k8s.
      # See: https://istio.io/docs/ops/best-practices/security/#configure-third-party-service-account-tokens
      jwtPolicy: first-party-jwt

  addonComponents:
    pilot:
      enabled: true
    prometheus:
      enabled: false

  components:
    ingressGateways:
      - name: istio-ingressgateway
        enabled: true
      - name: cluster-local-gateway
        enabled: true
        label:
          istio: cluster-local-gateway
          app: cluster-local-gateway
        k8s:
          service:
            type: ClusterIP
            ports:
            - port: 15020
              name: status-port
            - port: 80
              name: http2
            - port: 443
              name: https
EOF
```

### 3. Install `Istio Operator`.

```bash
istioctl manifest apply -f istio-minimal-operator.yaml
```

---

## Instal Knative Serving

### 1. Install Knative Serving Core

```bash
# Install 'Serving Custom Resource Definitions'.
kubectl apply --filename https://github.com/knative/serving/releases/download/v0.16.0/serving-crds.yaml

# Install 'Serving Core'.
kubectl apply --filename https://github.com/knative/serving/releases/download/v0.16.0/serving-core.yaml
```


### 2. Install Knative Network Layer (Istio)

> There is a choice of 'Network Layer' implementations.

> There is a choice of 'DNS' implementations.

```bash
# Install 'Networking Layer' (Ambassador, Contour, Gloo, Istio, Kong, Kourier)
kubectl apply --filename https://github.com/knative/net-istio/releases/download/v0.16.0/release.yaml
kubectl --namespace istio-system get service istio-ingressgateway
# Use 'Magic DNS'
kubectl apply --filename https://github.com/knative/serving/releases/download/v0.16.0/serving-default-domain.yaml
```

### 3. Test Knative Serving

```bash
# Test Knative Serving
kubectl get pods --namespace knative-serving

# Knative Serving Version
kubectl get namespace knative-serving -o 'go-template={{index .metadata.labels "serving.knative.dev/release"}}'; echo
```

---

## Knative Eventing

### 1. Install Knative Eventing Core

```bash
# Install 'Eventing Custom Resource Definitions'.
kubectl apply --filename https://github.com/knative/eventing/releases/download/v0.16.0/eventing-crds.yaml

# Install 'Eventing Core'.
kubectl apply --filename https://github.com/knative/eventing/releases/download/v0.16.0/eventing-core.yaml
```

### 2. Install Knative Event Broker Layer (Istio)

> There is a choice of 'Network Layer' implementations.

```bash
# Install in-memory event broker.
kubectl apply --filename https://github.com/knative/eventing/releases/download/v0.16.0/in-memory-channel.yaml
```

### 3. Test Knative Eventing

```bash
# Test Knative Eventing
kubectl get pods --namespace knative-eventing

# Knative Eventing Version
kubectl get namespace knative-eventing -o 'go-template={{index .metadata.labels "eventing.knative.dev/release"}}'; echo
```

---

## References

* [Install Istio](https://knative.dev/docs/install/installing-istio)

* [Install Kn](https://knative.dev/docs/install/install-kn/o)

* [Install Knative](https://knative.dev/docs/install/any-kubernetes-cluster)

* [Install Knative Serving](https://knative.dev/docs/install/any-kubernetes-cluster/#installing-the-serving-component)

* [Install Knative Eventing](https://knative.dev/docs/install/any-kubernetes-cluster/#installing-the-eventing-component)

* [Knative Kind](https://github.com/csantanapr/knative-kind)