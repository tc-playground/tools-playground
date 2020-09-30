# Linux Executable Memory Layout

## Introduction

1. When an `executable file` is invoked:

    1. A new `process` is created.

    2. The `executable` is loaded into the `virtual memory` space of the process.

    3. Shared libraries are loaded into the `virtual memory` space of the process.

2. `Executable files` are usually in the `ELF` format.

---

## References

* [Understanding the Memory Layout of Linux Executables](https://gist.github.com/CMCDragonkai/10ab53654b2aa6ce55c11cfc5b2432a4)

* [Understanding glibc malloc](https://sploitfun.wordpress.com/2015/02/10/understanding-glibc-malloc/)

* [Anatomy of a Program in Memory](https://manybutfinite.com/post/anatomy-of-a-program-in-memory/)

