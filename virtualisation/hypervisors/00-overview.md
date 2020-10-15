# Virtualisation 

* `Virtualisation` is the act of using a `bare metal machine` to run multiple `virtual machines` via `hypervisors`.

* `Hypervisors` - Manage and implement the underlying `virtual machines`.

    * __Type 1__ - Native or bare-metal Hypervisors

        * `Run directly on the system hardware` – A `bare metal` embedded hypervisor.

        * e.g. `Xen`, `Hyper-V`, `Oracle VM Server`, `VMware ESXi`, `XCP-ng`. 

    * __Type 2__ - Hosted Hypervisors

        * `Run on a host operating system that provides virtualization services`.

        * Provide `I/O device support`, and `memory management`.

        * e.g. `QEMU`, `Oracle Virtual Box`, `VMWare Workstation`.
    
    * __Hybrid__

        * `KVM` are `linux kernel modules` that can convert the operating system into a Type-1 hypervisor. 

* `Hypervisors` have strong security implications, as, a compromised hypervisor is impossible to detect by hosted operating systems.

---

## References

* [Hypervisors](https://en.wikipedia.org/wiki/Hypervisor)

* [Understanding the Virtualization Spectrum](https://wiki.xenproject.org/wiki/Understanding_the_Virtualization_Spectrum)