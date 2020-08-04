# Knative Serving


1. Create Simple Service

```bash
kn service create hello-example \
    --image gcr.io/knative-samples/helloworld-go \
    --env TARGET="First"
```

```bash
Creating service 'hello-example' in namespace 'default':

  0.032s The Configuration is still working to reflect the latest desired specification.
  0.081s The Route is still working to reflect the latest desired specification.
  0.129s Configuration "hello-example" is waiting for a Revision to become ready.
  8.668s ...
  8.730s Ingress has not yet been reconciled.
  8.825s Waiting for load balancer to be ready
  9.023s Ready to serve.

Service 'hello-example' created to latest revision 'hello-example-qdfjj-1' is available at URL:
http://hello-example.default.example.com
```

2. List Services

```bash
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
export TCP_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="tcp")].nodePort}')
export INGRESS_HOST="172.21.0.8"
```

## Setup Kind and kubernetes-dashboard

```bash
# https://istio.io/latest/docs/setup/platform-setup/kind/
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml
kubectl get pod -n kubernetes-dashboard
kubectl create clusterrolebinding default-admin --clusterrole cluster-admin --serviceaccount=default:default
token=$(kubectl get secrets -o jsonpath="{.items[?(@.metadata.annotations['kubernetes\.io/service-account\.name']=='default')].data.token}"|base64 --decode)
echo $token
kubectl proxy
```