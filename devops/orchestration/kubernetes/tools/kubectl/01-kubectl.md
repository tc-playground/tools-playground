# kubectl

## Introduction

* `kubectl` is a command-line CLI for communicating with a `kubernetes cluster`.

* [kubectl overview](https://kubernetes.io/docs/reference/kubectl/overview/)

* [kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

---

## kubectl version

* `kubectl version`

* `kubectl cluster-info`

---

## namespace switches

* `kubectl get ns` - List namespaces.

* `kubectl create ns <name>` - Create namespace.

* `kubectl -n <name> <command>` - Perform command in namespace.

* `kubectl -n kube-system <command>` - Perform command in `kube-system` namespace.

* `kubectl <command> --all-namespaces` - Perform command in all namespaces.

---

## config commands

* `kubectl config <sub-command>` 

    * `current-context`, `get-contexts`, `use-context $NAME`, etc.

---

## get commands

* `kubectl get <resource>` - Get a list of the specified type of resources.

    * `pods`, `deployments`, `services`, `configmaps`, `secrets`, `ingress`, etc.

* `kubectl get <resource> -o wide` - Get a `wide view` list of the specified type of resources, with more info.

* `kubectl get <resource> -o json` - Get a list of the specified type of resources, as `json`.

* `kubectl get <resource>/<name> -o yaml` - Get the specific resource as `yaml`.

* `kubectl get <resource>/<name> -o jsonpath='{EXPR}'`

---

## describe commands

* `kubectl describe <resource>` - Show the full `details` of a specified resource, and, any associated `events`.

    * `pods`, `deployments`, `services`, `configmaps`, `secrets`, `ingress`, etc.

---

## log commands

* `kubectl log <pod>` - Get the logs from the pods default container.

* `kubectl log <pod> -f` - Follow (stream) the logs from the pods default container.

* `kubectl log <pod> -p` - Get the logs from the pods `previous` default container.

* `kubectl log <pod> -c <container>` - Get the logs from the pods specified container.

---

## Pod Run Commands

* `kubectl run --image=nginx --labels="app=core-k8s-demo" nginx` - Create an `nginx` pod.
