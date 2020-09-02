# Kind (Kubernetes in Docker)

## Introduction

* `kind` or `kubernetes in docker` is a suite of tooling for local Kubernetes “clusters” where each “node” is a Docker container. 

* `Kind` allow you to create a `local Kubernetes cluster` based on `Docker containers`.

* `Kind` can create `single`, `multi-node`, and `HA multi-node` clusters via `templates`.

---

## Create Local HA Cluster

```bash
# k8s-3cp-3dp-ha-cluster.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
    - role: control-plane
    - role: control-plane
    - role: control-plane
    - role: worker
    - role: worker
    - role: worker
```

```bash
$> kind create cluster --config k8s-3cp-3dp-ha-cluster.yaml --name occam-cluster
Creating cluster "occam-cluster" ...
 ✓ Ensuring node image (kindest/node:v1.18.2) 🖼
 ✓ Preparing nodes 📦 📦 📦 📦 📦 📦  
 ✓ Configuring the external load balancer ⚖️ 
 ✓ Writing configuration 📜 
 ✓ Starting control-plane 🕹️ 
 ✓ Installing CNI 🔌 
 ✓ Installing StorageClass 💾 
 ✓ Joining more control-plane nodes 🎮 
 ✓ Joining worker nodes 🚜 
Set kubectl context to "kind-occam-cluster"
You can now use your cluster with:

kubectl cluster-info --context kind-occam-cluster
```

---

## References

* [Home](https://kind.sigs.k8s.io/)

* [Quick Start](https://kind.sigs.k8s.io/docs/user/quick-start/)

* [Knative - Kind](https://github.com/csantanapr/knative-kind)

---

## Alternatives

* [kube-spawn](https://kinvolk.io/blog/2017/08/introducing-kube-spawn-a-tool-to-create-local-multi-node-kubernetes-clusters/) - local cluster alternative.