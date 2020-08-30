# PersistentVolumeClaim

## Introduction

* `PersistentVolumeClaims (PVC)` are a request for storage by a `Pod`. 

* `PersistentVolumeClaims` when resolved are bound to a specific `PersistentVolume`.

    * `PersistentVolumeClaims` are to `storage` what a `Pod` is to `compute`. 

* `Pods` define `PersistentVolumeClaims` which get fulfilled by `PersistentVolumes`.

* `StatefulSet.VolumeClaimTemplate` defines the type of `PVC` that a `StatefulSet` uses for all of its `PV`s.


---

## References

* [PersistentVolumeClaims - Kubernetes Docs](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
