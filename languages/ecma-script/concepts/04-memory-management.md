# Memory Management

# Introduction

* `JavaScript` programs are executed in a single `thread`.

* `JavaScript` programs have:

    * `Stack Memory` - For holding the `call-stack` of the current process.

    * `Heap Memory` - For holding global data.

* `JavaScript` uses `Mark and Sweep` `garbage collection`.

---

## Memory Leaks

* Abusing `global scope`.

    * Functions and variables may never get cleaned up and grow to big.

---

## References

* [Understanding Memory Leaks in NodeJS](https://blog.bitsrc.io/memory-leaks-in-nodejs-54ac7bbd4173)

* [Avoiding Memory Leaks in Node.js: Best Practices for Performance](https://blog.appsignal.com/2020/05/06/avoiding-memory-leaks-in-nodejs-best-practices-for-performance.html)

