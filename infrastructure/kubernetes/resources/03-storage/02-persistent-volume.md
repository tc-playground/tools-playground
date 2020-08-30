# PersistentVolume

## Introduction

* `PersistentVolumes (PV)` is a `piece of storage` in the cluster that has been provisioned.

* `PersistentVolumes` can be provisioned manually for a cluster.

* `PersistentVolumes` can be provisioned using a `StorageClass` for a cluster.

* `PersistentVolumes` are a `core cluster resource`, e.g. `Node`.

    * `PersistentVolumes` are to `storage` what a `Node` is to `compute`. 

* `PersistentVolumes` have a distinct `life-cycle` with respect to the `Pods` binding to them.

* `PersistentVolumeClaims (PVC)` are a request for `PersistentVolume` storage by a `Pod`. 


---

## References

* [PersistentVolume - Kubernetes Docs](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
