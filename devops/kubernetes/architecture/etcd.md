# Ectd - The Kubernetes key-value store database

## Introduction

1. `etcd` is a `key-value data store` that stores all of the API values for a Kubernetes cluster.

    1. `etcd` is `high-performance`.

    2. `etcd` is `strictly consistent`.

    3. `etcd` supports `watch` operations. 

2. `Etcd` provides `distributed` and `HA` capable data storage.

3. `Etcd` back the state of the `API Server`.

4. `Etcd` can be replaced by other data stores provided they support the Kubernetes requirements

    * e.g. `Redis` and `ZooKeeper`. These also support `watch` operations.

5. `etcd` is the mechanism for `persistent locking` in Kubernetes.

