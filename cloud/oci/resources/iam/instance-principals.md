# Instance Principals

> Prevents the need of having to copy required credentials onto instance and rotating them.

## Introduction

* Instances themselves are a new principal type in IAM.

* Each compute instance has its own identity

* Each compute instance authenticates by using certificates that are added to the instance.

* Certificates are added by the new instance principal’s capability.

---

## References

* [OCI CLI Instance Principals](https://www.ateam-oracle.com/calling-oci-cli-using-instance-principal)

* [Calling Services from an Instance](https://docs.cloud.oracle.com/en-us/iaas/Content/Identity/Tasks/callingservicesfrominstances.htm)

* [Announcing Instance Principals for Identity and Access Management](https://blogs.oracle.com/cloud-infrastructure/announcing-instance-principals-for-identity-and-access-management)

* [IAM Level 200 - Part 1 - Overview, Instance Principals and Dynamic Groups](https://www.youtube.com/watch?v=49LMk4E1NnY)