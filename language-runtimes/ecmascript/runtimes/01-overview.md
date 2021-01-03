# JavaScript Runtimes

## Overview

* `JavaScript Engines` implement a pipeline when executing code.

    ```
    [JS Source] -> [Parser] -> [AST] -> [Interpreter] +--> [ByeCode] -----------------> +---------+
                                                       \                                |Processor|
                                                        +-> [Profiler] -> [Compiler] -> +---------+
    ```

    * `[High-Level code] ---> [Intermediate Bytecode] ---> [Machine code] ---> [Processor Microcode]`

    * Can be: `interpreted` and/or `compiled`.

---

## JavaScrip Memory

* `Heap Memory` - Globals, complex variables.
    * `Garbage Collection` - Free Memory on the heap. - `Mark and Sweep`. Trace object references from root.
    * `Memory Leak` - Loop through and array with an operation that extends the array.
        * `Global Variables` - Adding lots of these can cause a memory leak.
        * `Event Listeners` - Adding event listeners to DOM and not removing them when unneeded.
        * `setInterval` - Reference global variables. These then cant be garbage collected.

* `Stack Memory` - Simple variables. Where we are in the code.
    * `Call Stack`/`Stack Frames`
    * `Stack Overflow`.
    * `Global Execution Context` / __(anonymous)__

---

## JavaScript Threading

* `Single Threaded`
    * `JavaScript` has `one call stack`.
    * `JavaScript` is `synchronous` one thing at a time.
    * `JavaScript` uses an `event loop`.

---

## JavaScript Runtime

* `JavaScript Engine` + `Event Loop` + `Web APIs`.

    * `JavaScript Engine`
        * `Call Stack`. x1.
        * `Memory Heap`. x1.

    * `Event Loop` - Is the call-stack empty? Have we run through the entire file at least once?
        * `Callback Queue` - List of callbacks.
        
    * `Web API` - (Provided by Browser)
        * `DOM`
        * `fetch()`
        * `setTimeout()`
        * `setInterval()`

        * The browser `window` object gives access to all the `Web API` hooks the browser supports.
            * NodeJS has `global` object instead.
        * These functions are implemented in other languages by the browser... etc. C++.
        * Web API are Asynchronous functions.
            1. Call the Web API function.
            2. Store the current `Call Stack 'stack frame'` in the `Event Loop 'Callback Queue'.`
            3. Pop the current 'stack frame' from the Call stack.
            4. When the event loop is empty it will add the new completed async result.