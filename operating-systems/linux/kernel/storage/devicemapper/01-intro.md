# Device Mapper

## Introduction

* `device mapper` is a framework provided by the Linux kernel.

* `device mapper` allows mapping `physical block devices` onto higher-level `virtual block devices`. 

* `device mapper` functionality is used to implement:

    * `LVM` (Logical volume manager).

    * Software `RAID`
    
    * `dm-crypt` disk encryption.
    
    * Filesystem features: `file system snapshots`.

---

## Tools

* `dmsetup`

---

## References

* [Device Mapper](https://www.kernel.org/doc/html/latest/admin-guide/device-mapper/index.html)

* [Device Mapper - Wikipedia](https://en.wikipedia.org/wiki/Device_mapper)

* [Device Mapper - Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/logical_volume_manager_administration/device_mapper)

* [devicemapper Driver - Docker](https://docs.docker.com/storage/storagedriver/device-mapper-driver)