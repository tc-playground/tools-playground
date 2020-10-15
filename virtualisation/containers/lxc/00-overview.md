# LXC

## Introduction

* `LXC` is a set of tools, templates, library and language bindings. 

    * `LXC` us low-level,  flexible and covers every containment feature supported by the upstream kernel.

* `LXD` is high-level `LXC` experience. 

    * `LDX` offers a a single command line tool to manage your containers.

    * `LXD` containers can be managed over the network in a transparent way through a REST API.

    * `LXD` works with large scale deployments by integrates with cloud platforms.

* `LXCFS` is `userspace (FUSE) filesystem` offering two main things:

    * Overlay files for `cpuinfo`, `meminfo`, `stat` and `uptime`.

    * A `cgroupfs` compatible tree allowing unprivileged writes.

    * It's designed to workaround the shortcomings of `procfs`, `sysfs` and `cgroupfs` by exporting files which match what a system container user would expect.

* `distrobuilder` is an image building tool for `LXC`/`LXD`.

---

## References

* [Linux Containers - Home](https://linuxcontainers.org/)

* [LXC - Intro](https://blog.scottlowe.org/2013/11/25/a-brief-introduction-to-linux-containers-with-lxc/)

* [Linux Containers, Part I: Linux Control Groups and Process Isolation](https://www.linuxjournal.com/content/everything-you-need-know-about-linux-containers-part-i-linux-control-groups-and-process)

* [Linux Containers, Part II: Working with Linux Containers (LXC)](https://www.linuxjournal.com/content/everything-you-need-know-about-linux-containers-part-ii-working-linux-containers-lxc)

* [Linux Containers, Part III: Orchestration with Kubernetes](https://www.linuxjournal.com/content/everything-you-need-know-about-containers-part-iii-orchestration-kubernetes)