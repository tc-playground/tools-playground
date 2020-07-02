# V8 - Runtime

# Introduction

* `V8` is a `JavaScript` engine designed to increase the performance of JavaScript execution.

* `V8 < v5.9 Compilation Pipeline`

    1. `Full Codegen`

    2. `Crankshaft`

        1. `Hydrogen`

        2. `Lithium`

* `V8 >= 5.9 Compilation Pipeline`

    1. `Ignition`

    2. `TurboFan`

---

## V8 JIT Compilation

* `V8` has an interpreter called `Ignition`.

* `V8` compiles `JavaScripts` into `byte code` using `JIT` (Just-In-Time) compilation. 

    * __Crankshaft__ - `V8` originally had a two _compiler strategy_:

        * `full-codegen` — Fast compilation generating `non-optimised byte code`.
        
        * `Crankshaft` — Optimizing compiler that produced `highly-optimized byte code`.
    
    * __TurboFan__ - `V8`s newest optimizing compiler.

---

## V8 Threading Model

* `V8` utilises several internal OS threads:

    * `main` -  Fetch code, compile, and, execute.

    * `compilation` - JIT compilation.

    * `profiler` - Collect runtime metrics to feed into JIT compilation.

    * `garbage collection` - Clean up thread.

---

## Crankshaft Optimisation and JIT Generation

1. `V8` uses a JIT compiler called `Crankshaft`.

2. `Crankshaft` translates the JavaScript AST to a high-level `static single-assignment (SSA)` representation called `Hydrogen`.

3. __Hydrogen Optimisation__ - The `hydrogen graph` is then optimised via several techniques.

    1. __Function Inlining__

        * `function inlining` is performed to reduce `function call overhead`. 

    2. __V8 Hidden Class Generation__

        * `JavaScript objects` are often implemented as `hashmaps`. This can make accessing properties less efficient compared to `structs`.

        * `V8 Hidden Classes` are similarly to the fixed object layouts (structs/classes) except they are created at `runtime`.

            * Each`object` points to it's `hidden classes`

        * `V8` create a `hidden class` each time a `new` object is created or a `property` is `dynamically` added or removed from a existing `object`.

            * `V8` also creates a `hidden claas transition` mapping the change form the origin to the hidden class.
        
        * `V8` classes have a known location in memory so they can be accessed efficiently via `offsets`.

        * NB: Hidden class transitions are dependent on the order in which properties are added to an object.

    3. __Inline Caching__

        1. `V8` maintains a cache of the type of objects that were passed as a parameter in recent method calls.

        2. `V8` can use this to make an assumption about the type of object that will be passed as a parameter in the future.

        3. If `V8` is able to make a good assumption about the type of object that will be passed to a method.

        4. `V8` can bypass the process of figuring out how to access the object’s properties, and instead.

        5. `V8` can use the stored information from previous lookups to the object’s hidden class.

4. __JIT compilation__

    1. Once the `hydrogen graph` is optimised, crankshaft lowers it to a lower-level representation called `Lithium`. 

    2. `Lithium` implementation is architecture-specific. Register allocation happens at this level.

5. __Crankshaft OSR: on-stack replacement__

    1. Once the new optimised `byte code` is generated it is loaded by performing `on-stack replacement`.

    2. Capture the currently executing `stack frame` and replace via `complex context switch`.

---

## Ignition and TurboFan Optimisation and JIT Generation

* To research!

---

## Garbage Collection

1. `V8` uses a traditional generational approach of `mark-and-sweep` to clean the old generation.

2. `V8` controls GC pauses by using `incremental mark-and-sweep`

    1. Pause execution.
    
    2. Do not do a full sweep, walk only part of the heap, then clean.

    3. Next GC pause continue from the last position.

---

## References

* [SessionStack Blog](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)

* [Optimising JavaScript with in-line caching](https://github.com/sq/JSIL/wiki/Optimizing-dynamic-JavaScript-with-inline-caches)

* [Ignition and TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan)
