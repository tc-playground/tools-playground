# Memory Overview

## Introduction

* `Physical Memory` is the physical memory in the machine.

    * `Memory` is accessed over `instruction` and `data` busses.

    * `Memory` is present as `processor registers`, `caches (L1, L", L3)`, `RAM` and `persistent storage`.

* `Memory` is shared by `processes` running on the machine.

    * `Stack Memory` holds the `execution state` of a running `process/program`.

    * `Heap Memory` holds the `structured state` of a running `process/program`.

* `Virtual Memory` is implemented for `processes` by the Linux kernel.

* `Virtual Memory` is supported in `software` and `hardware` with `page tables`.

* `Linux System calls` provide a mechanism to `allocate` and `deallocate` memory.

    * __Stack Memory__

    * __Heap Memory__

