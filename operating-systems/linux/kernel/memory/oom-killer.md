# Out of Memory Killer

## Introduction

* `OOM Killer` is a process that the Linux kernel employs when the system is `critically low on memory`.

* ``OOM Killer` tries to finding misbehaving processes that are using soo much memory and kill them.

* `out_of_memory()` - is invoked when a `memory failure` occurs.

    * `select_bad_process()` - attempts to find a process to send a `SIGKILL` signal too.

        * `badness()` - this produces an `oom_score` based on some `rules`.
 
---

## Commands

* `sudo -s sysctl -w vm.oom-kill = 1` - Enable OOM killer.

* `sudo -s sysctl -w vm.oom-kill = 0` - Disable OOM killer.

* `echo vm.oom-kill = 1 >> /etc/sysctl.conf` - Enable OOM killer. Persistent.

* `echo vm.oom-kill = 1 >> /etc/sysctl.conf` - Disable OOM killer. Persistent.

---

## References

* [Linux Out-Of-Memory Killer](https://medium.com/@rakeshjain_17559/linux-out-of-memory-killer-31e477a45759)