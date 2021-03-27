# Rust Web Server Programming

## Overview

* Rust is suitable for server-side web development:

    * __Fast Runtime__ - Typed, compiled, memory-safety, no garbage-collection.

    * __Networking__ - TCP, HTTP. HTTP/2 support. JSON transport.

    * __Asynchronous__ - Async programming model, Futures, Async libraries.  NB: Must chose an sync runtime.

---

## Rust Networking

* __TCP__ - Is supported by the `standard library`.

* __HTTP__ - Rust requires support from an external package, e.g. `hyper`, `tiny_http` crates.

* __TLS__ - Rust requires support from an external packages.

* __Web Frameworks__ - `warp`, `actix`, `rocket`, `tide` crates.

---

## Rust Async Programming

* __Async Programming__ - Provides `primitives` to execute programs with `side-effects` in a `non-blocking` way. 

    * e.g. `callbacks`, `promises`, `futures`, etc.

    * Long running processes can `yield` back control to the main process.

* __Async Programming Environment__

    * An `asynchronous programming environment` needs four ingredients for it to function:

        * __Syntax__ - Within the programming language to mark `asynchronous blocks` of code.

            * e.g. `async`, `await`, etc..
        
        * __Type__ - In the standard library to represent long running operations and their state.

            * e.g. `Promise`, `Future`, etc.
        
        * __Runtime__ - Offload long running tasks into `userspace`. Creating and managing `green threads`.

            * e.g. `Event Loop`, `NodeJS V8 Engine`, `Golang 'go routines'`, `Erlang VM`, etc.
        
        * __Kernel Abstractions__ - Make use of the kernels asynchronous read and write API 

            * e.g. Linux `AIO (Asynchronous disk IO)`.

* __Green Threads__

    * Normal `OS Threads` are maintained by the kernel, live in `kernel space` and expensive to manage from `user space` due to interrupts.

    * `Green Threads` live in `user space` and are managed by some `runtime`. e.g. `Greenlet`(Python), `Erlang processes`, etc.

* __Rust Async Primitives__ - Rust requires support from an external package for `async` (unlike `NodeJS`, `Go`) and requires a library.

    * Rust defines async `syntax` and `types`, but, not the `runtime` or specific `kernel abstractions`.

        * __Syntax__ - `async/await` (Rust std).

            > In the background this syntax is turned into a `state machine`.

            > When code is marked code as async, the compiler will hand over the code to the runtime.

        * __Type__ - `Future` (Rust std)
        
            > `Future` trait (containing a `poll` function which is executing the process and yields back `Pending` or `Ready`.)

            > `Future` is a `trait` and can be _implemented on any type_.

            > In Rust no Future is actively started in the language. Instead it is managed by the `runtime`.

        * __Async Runtimes__ - `tokio`, `async-std`.

            >  `reactor --notify--> executor`, `thread pool`.

            > The runtime is responsible for `creating threads`, `polling our Futures` and driving them to completion.

            > The responsible for passing on work to the `kernel` and using the `asynchronous kernel API`.

        * __Async Kernel Abstraction__ - `mio`

            > __async kernel methods__ - `epoll`, `kqueue`, etc.

            > If applicable passes on to OS networking stack.









