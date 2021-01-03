# JavaScript Engines

## Introduction

* A `JavaScript engine` is the tool that interprets or compiles byte-code from JavaScript.

* `JavaScript` source files are executed by a `JavaScript (ECMAScript) Engine`.

    e.g. `V8`, `SpiderMonkey`, `WebKit`, etc.

* `JavaScript Engines` are embedded in a `JavaScript Runtime`.

    * e.g. `Chrome`, `FireFox`, `Safari`, `Electron`, `NodeJS`, `DenoJS`.

* `JavaScript Engines` implement a pipeline when executing code.

    ```
    [JS Source] -> [Parser] -> [AST] -> [Interpreter] +--> [ByeCode] -----------------> +---------+
                                                       \                                |Processor|
                                                        +-> [Profiler] -> [Compiler] -> +---------+
    ```

    * `[High-Level code] ---> [Intermediate Bytecode] ---> [Machine code] ---> [Processor Microcode]`

    * Can be: `interpreted` and/or `compiled`.

    * __Interpreters__

        * _quicker_ to get started, but, _slower_ to execute code - especially when code is called __repeatedly__.

    * __Compilers__

        * _slower_ to get started, but, _faster_ to execute code - especially when called __repeatedly__.

        * Compilers can add `optimisation` to the code when generating it.

    * `JIT (Just in Time) compilers` use a mixture of `interpreter` and `compiler` strategies.

---

## JavaScript Engines

1. __SpiderMonkey__ — Firefox.

2. __V8__ — Google, C++, Chrome, Node.js open source.

3. __Nitro (JavaScriptCore)__ — Apple, Safari, open source.

4. __Chakra__— Microsoft, Edge.

5. __Rhino__ — Mozilla Foundation, open source, Java.

7. __Nashorn__ -  Oracle, OpenJDK, Java.

8. __KJS__ — KDE, Konqueror.

8. __JerryScript__ — C. open source, light-weight, IoT.

    * [Home](https://jerryscript.net/)

    * [GitHub](https://github.com/jerryscript-project/jerryscript)

---

## References

* [JavaScript Engines](http://dolszewski.com/javascript/javascript-runtime-environment/)