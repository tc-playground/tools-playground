# Event Loop

## Introduction

* `Event Loops` form the basis of `scheduling` in `asynchronous systems`.

* `Event Loops` implement `concurrency` on a `single-thread`.

    * `asynchronous result handlers (callbacks)` are stored in a `queue`.

    * When the `result` is available, the event loop may execute the handler.

* `Event Loops` are like `schedulers`. They determine what run next.

* `Event Loops` take the next bit of work from one or more `Task Queues`. 

* The implementation of an `event loop` defines the determinism and order of operations.



