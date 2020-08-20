# Kind Design

## Overview

1. `kind` or kubernetes in docker is a suite of tooling for local Kubernetes “clusters” where each “node” is a Docker container. 

2. `kind` has two main components

    1. `kind CLI` for management
    
    2. A `node` based image for implementing a `kubernetes node`.

---

## Kind CLI


1. `cluster` implementation - [pkg/cluster](https://github.com/kubernetes-sigs/kind/tree/master/pkg/cluster)

2. `clusters` and `nodes` are identified by [docker object labels](https://docs.docker.com/config/labels-custom-metadata/)

---

## Images

1. The `base image` contains the basic tools required to run a node.

    * `systemd`, `certificates`, `mount`, etc.

2. The `node image` contains the `kubernetes` tools and components required to create `cluster node`.

    * `kubeadm`, `kubectl`, `kubelet`, etc

---

## Cluster Creation

> Each `node` runs as a docker container.

1. Boot `node container` into _pseudo paused_ state via [entrypoint](https://github.com/kubernetes-sigs/kind/blob/master/images/base/files/usr/local/bin/entrypoint).

    * Wait for a `SIGUSR1` signal.

2. Prepare and configure the `node container`.

    * Mounts, pre-load images, start systemd, etc.

3. Signal entrypoint to continue booting `node container`.

    * Wait for Docker service to be ready on node, then run `kubeadm`.

4. Export `KUBECONFIG`.

5. Install a `CNI` [overlay network](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#pod-network)

---

## Resources

* [Design](https://kind.sigs.k8s.io/docs/design/initial/)

* [kind - Github](https://github.com/kubernetes-sigs/kind)

* [Base Image](https://kind.sigs.k8s.io/docs/design/base-image/)

    * [Github](https://github.com/kubernetes-sigs/kind/tree/master/images/base)

* [Node Image](https://kind.sigs.k8s.io/docs/design/node-image/)

    * [Github](https://github.com/kubernetes-sigs/kind/tree/master/images/node)

* [SIGUSR1 / SIGUSR2](https://www.gnu.org/software/libc/manual/html_node/Miscellaneous-Signals.html)