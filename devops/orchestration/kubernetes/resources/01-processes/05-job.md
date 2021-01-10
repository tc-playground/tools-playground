# Jobs

## Introduction

* `Jobs` creates one or more `Pods` and `ensures` that a specified number of them `successfully terminate`.

---

## Use Case

1. Reliably run one `Pod` to completion.

2. Run multiple `Pods` in parallel.

---

## Configuration

* `spec.activeDeadlineSeconds` - Specify a `timeout` for job completion.

---

## References

* [Job - Kubernetes Docs](https://kubernetes.io/docs/concepts/workloads/controllers/job/)
