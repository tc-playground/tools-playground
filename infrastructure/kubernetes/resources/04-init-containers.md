# Init Containers

## Introduction

* `Init Containers` help manage `serial relationships (dependencies`) between `processes`.

    * e.g. Change `permissions` on `/var/lib/postgres/data` on a volume before the `postgres` pod starts. 

---

## References

* [Init Containers - Kubernetes Docs](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)