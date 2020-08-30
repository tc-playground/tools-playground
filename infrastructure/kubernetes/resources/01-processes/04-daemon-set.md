# DaemonSet

## Introduction

* `DaemonSets` ensures that all (or some) `Nodes` run a copy of a `Pod`.

* `DaemonSets` are often used for managing cluster `storage`, `logging`, and, `monitoring`.

---

## Typical Usage

1. Running a `cluster storage daemon` on every `Node`.

2. Running a `logs collection daemon` on every `Node`.

3. Running a `node monitoring daemon` on every `Node`.

4. Running a `kube-proxy` on every `Node`.

---

## References

* [DaemonSet - Kubernetes Docs](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)