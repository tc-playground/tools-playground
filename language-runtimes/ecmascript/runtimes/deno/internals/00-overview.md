# Deno Runtime Internals

## Introduction

* `Deno` is distributed as stand alone executable.

* `Deno` runs as a `single process` on the target `operating system`.

* `Deno Runtime` = (`V8` + `rusty_v8`) + `deno` + `tokio`.

---

## Overview

* `Deno` uses __rusty_v8__ as the `JavaScript Engine`. FrontEnd/JavaScript.

    * `rusty_v8` is a `Rust` wrapper around `V8`.

* `Deno` has a __deno__ Rust isolate to perform `system operations (OS)`. BackEnd/Rust.

* `Deno` uses a _binding layer__ to allow the `rusty_v8` to communicate with `deno` Rust isolate .

    * When the `rusty_v8` needs to perform a system level action it calls out to `deno`.

    * When `deno` has finished completing a non JavaScript operation it messages back to `rusty_v8`.

    * [Deno core.js](https://github.com/denoland/deno/blob/master/core/core.js) implement the main communication API:
        * `Deno.core.send()` - Send a message to `rust world`.
        * `Deno.core.recv()` - Receive a message from `rust world`.
    
    * These are used to perform tasks called `ops`. (like `sys-calls`).
        * Access a file.
        * Start a webserver on a socket.

* `Deno` requires `Asynchronous IO` (as it is running on a single-thread).

    * `Deno` uses an `EventLoop` to wait for blocking tasks to complete.

    * `Deno` uses the Rust `tokio` library for the `Event Loop`.

        * `Tokio` has a `thread-pool`.

        * `Tokio` has `worker threads`.

> Anything from `Deno` namespace or `WebAPI` is invoked it is sent to the `deno` rust backend.


---

## Deno Land Sources

* [Deno Land - GitHub](https://github.com/denoland)

---

## `deno` Sources

* [deno - GitHub](https://github.com/denoland/deno) - Rust Isolate

* [Binding Layer](https://github.com/denoland/deno/blob/master/core/core.js#L30)

---

## `rusty_v8` Sources

* [rusty_v8 - GitHub](https://github.com/denoland/rusty_v8)

* [V8 C++ Header File Interface](https://source.chromium.org/chromium/chromium/src/+/master:v8/include/v8.h)

---

## Tokio

* [Tokio - GitHub](https://github.com/tokio-rs/tokio)


