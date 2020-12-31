# cgroups (Process Control Groups)

## Introduction

* `cgroups` are a facility built into the kernel to set `resource utilization limits` on any `process` on the `system`. 

* `cgroups` are mechanism to add `limits` to (Linux) `process`.

    * __Resource Limits__ - A group can be configured not to:

        * __Memory__ - Exceed a specified memory limit.
        
        * __CPU__ -  Use more than the desired amount of processors.
        
        * __Peripherals__ - Limited to specific peripheral devices.
    
    * __Prioritization__ - one or more groups may be configured to utilize fewer or more CPUs or disk I/O throughput.
    
    * __Accounting__ - A group's resource usage is `monitored` and `measured`.
    
    * __Control__ - groups of processes can be frozen or `stopped` and `restarted`.

* A `cgroup` can consist of `one or more processes` that are all bound to the same set of limits. 

* `cgroups` can be `hierarchical` - a `subgroup` inherits the limits administered to its `parent group`.

* `cgroups` can be managed via several technologies:

    * `cgroupfs`- Pseudo-filesystem (mounted at `/sys/fs/cgroup`).

        * See also: `/proc/[pid]/cgroup`

    * `libcgroups` library.

    * `lxc` - Low-level container API.

    * `libvirt` - Virtualisation API.

    * `docker` - Container API.

* `cgroups` can be made __persistent__ and configured at `systemd init` via `/etc/cgconfig.conf `.

---

## Hpw does it Work?

* The `Linux kernel` provides access to a series of `controllers` for the `cgroup` technology. 

* A `cgroup subsystem resource controller` is responsible for distributing a `specific type of system resources` to a set of `one or more processes`.

    * `memory` controller is what limits memory usage. 
    
    * `cpuacct` controller monitors CPU usage.

    * etc. See: `man cgroups`.

---

## Install

1. __apt__

    ```bash
    sudo apt-get install libcgroup1 cgroup-tools
    ```

2. __yum__

    ```bash
    sudo yum install libcgroup libcgroup-tools
    ```

---

## sysfs `/sys` pseudo filesystem usage

1. __Memory Example__ - Manage `cgroup` via `/sys` pseudo filesystem

    ```bash
    # Create a new cgroup
    sudo mkdir /sys/fs/cgroup/memory/$NAME
    # Set a memory limit - NB: Is truncated to the OS 'page size' e.g. 4096 bytes.
    echo $MEM_LIMIT | sudo tee /sys/fs/cgroup/memory/$NAME/memory.limit_in_bytes
    # Verify memory limit
    cat /sys/fs/cgroup/memory/foo/memory.limit_in_bytes
    # Add a process to the group
    echo $PID > /sys/fs/cgroup/memory/$NAME/cgroup.procs
    # Check the cgroups associated with a process.
    ps -o cgroup $PID
    # Monitor usage
    cat /sys/fs/cgroup/memory/$NAME/memory.usage_in_bytes
    # Delete cgroup
    sudo rm -R /sys/fs/cgroup/memory/$NAME
    ```

---

## libcgroup commands usage - cgcreate, cgexec

    ```bash
    # Create a new cgroup
    sudo cgcreate -g memory:$NAME
    # Set a memory limit - NB: Is truncated to the OS 'page size' e.g. 4096 bytes.
    echo $MEM_LIMIT | sudo tee /sys/fs/cgroup/memory/$NAME/memory.limit_in_bytes
    # Verify memory limit
    cat /sys/fs/cgroup/memory/foo/memory.limit_in_bytes
    # Add a process to the group
    sudo cgexec -g memory:$NAME $PID
    # Check the cgroups associated with a process.
    ps -o cgroup $PID
    # Delete cgroup
    sudo cgdelete memory:$NAME
    
    ```

---

## systemd persistent cgroups usage

* __Config__ - `/etc/cgconfig.conf`

    ```
    group my_cgroup {
        cpu {
            cpu.shares = 100;
        }
        cpuset {
            cpuset.cpus="0-5";
        }
        memory {
            memory.limit_in_bytes = 5000000;
        }
    }
    ```

* __systemctl commands__

    * `sudo systemctl enable cgconfig`

    * `sudo systemctl start cgconfig`

---

## References

* `man cgroups`

* `man cgconfig.conf`

* [Linux Control Groups and Process Isolation](https://www.linuxjournal.com/content/everything-you-need-know-about-linux-containers-part-i-linux-control-groups-and-process)

* __RedHat__

    * [Introduction to cgroups - Part 1](https://www.redhat.com/sysadmin/cgroups-part-one)

    * [How to manage cgroups with CPUShares](https://www.redhat.com/sysadmin/cgroups-part-two)

    * [Managing cgroups the hard way-manually - Part 3](https://www.redhat.com/sysadmin/cgroups-part-three)
