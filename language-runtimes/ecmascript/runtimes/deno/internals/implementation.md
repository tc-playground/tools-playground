# Deno Implementation

## Deno Architecture 101

1. __JavaScript Engine__

    * `V8` / `rusty_v8`

        * Tightly integrated to `V8`.
    
    * `deno_core`

        > No TypeScript

        * Uses `rusty_v8`.

        * `JSRuntime` structure encapsulating `V8 isolate`.

        * `ES6 Module` implementation.

        * Foundation for `op crates` - JavaScript API building blocks:

            * Every call from JavaScript to Rust is an `Op` - e.g. `Deno.listen()`.

            * JavaScript can interact with Rust objects using `Resources` - e.g. `setTimeout()`.
        
            > No need to interact with `V8 isolate` directly. Clean abstraction.

2. __Event Loop__ - `Tokio`

3. __TypeScript Compiler__

    * `dependency analysis`, `bundling`, `transpiling`.

    * `TSC compiler` - (JavaScript)

        * Run in `V8`.

        * `TSC` is large and executes __synchronously__. Use `V8 snapshots` to speed up.

    * `SWC (Speedy Web Compiler)` - (Rust)

        * Use TSC for `type-checking` only.
    

4. __Module Graph__ - Code cache and analysis,

    * Fetch source code, parse, dependency analysis, etc.

    * Fetches and caches remote resources indefinitely.

    * `DENO_DIR` - Global cache for a machine.

        * `DENO_DIR/dep` - Remote source storage.

        * `DENO_DIR/gen` - Compiled source storage.

5. __Tools__

    * __deno fmt__ - `dprint` code formatter. [dprint](https://dprint.dev/) - `prettier` replacement.

    * __deno lint__

    * __deno_doc__

> Future - Compile a custom runtime using individual crates.
    

---

## Deno Abstractions

1. __ops__

    * `Native (Rust) functions` called from `JavaScript`.

    * __Single point of interaction__ - Security. Back-pressure.

    * __Binary Data__

        * Parameters/Returns defined as fixed length `ArrayBuffers` of `rae binary data`.

    * __Zero Copy__

        * Pointers are use to pass parameters between JS and Rust.
    
    * __Event Loop__

        * `Ops` return synchronously or return a `Promise` + `Rust Future`.

2. __resources__

    * Manage resources like `files`, `sockets`, etc.

    * Like a POSIX `file descriptor`.

---


## Deno Source

1. __Deno Project__

    1. [deno/cli](https://github.com/denoland/deno/tree/master/cli)

        * `deno` executable. __Rust__

        * Provides the actual deno executable and the user-facing APIs.

        * The deno crate uses the `deno_core` to provide the executable.

        * `compiler`, `language server`.

    2. [deno/core](https://github.com/denoland/deno/tree/master/core)

        * Main dependency is `rusty_v8`, which provides the `V8-Rust bindings`.

        * `JsRuntime` abstraction - `JsRuntime::run_event_loop`
        
        * `Deno.core.dispatch()` function to trigger the "dispatch" callback in Rust.

        * Deno `ops` and `resources` abstractions.
    
    3. [deno/runtime](https://github.com/denoland/deno/tree/master/runtime)

        * Slim version of the Deno - no typescript, lint, doc. 
        
        * Only JavaScript execution with Deno's operating system bindings (`ops`).

        * `MainWorker` abstraction.

        * `Worker Web API abstraction`.

    4. [deno/op_crates](https://github.com/denoland/deno/tree/master/op_crates)

    5. [deno/std](https://github.com/denoland/deno/tree/master/std)

        * TypeScript standard library.

2. __rusty_v8 Project__

    * [rusty_v8 GitHub](https://github.com/denoland/rusty_v8)

    * `V8` Rust interface.

    * Zero cost bindings to V8 C++.

    * Recompile with different compilation settings (`GitHub Actions`).




