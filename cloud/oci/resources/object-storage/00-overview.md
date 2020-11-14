# Object Storage

## Introduction

* `object storage` is a store for general `assets`.

* `buckets` can contain `objects (assets)` or `folders (paths)`.

* `assets` are stored in `buckets`.

* `folders` can contain `assets` or `folders`.

* `assets` can be made `public` and served, or, remain private.

* Access to assets can be controlled using time limited `Pre-authenticated Requests (PARs)`.

* __URL Format__ - `https://objectstorage.${region}.${second-evel-domain}.com/n/${object-storage-namespace}/b/{bucket}/o/${filename}`

    * e.g. `https://objectstorage.us-ashburn-1.oraclecloud.com/n/odx-jafar/b/xmas/o/index.html`

---

## References

* [Object Storage - Docs](https://docs.cloud.oracle.com/en-us/iaas/Content/Object/Concepts/objectstorageoverview.htm)
