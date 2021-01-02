# ECMAScript Engine

* `JavaScript Engines` implement a pipeline when executing code.

    ```
    [JS Source] -> [Parser] -> [AST] -> [Interpreter] +--> [ByeCode] -----------------> +---------+
                                                       \                                |Processor|
                                                        +-> [Profiler] -> [Compiler] -> +---------+
    ```

    * `[High-Level code] ---> [Intermediate Bytecode] ---> [Machine code] ---> [Processor Microcode]`

    * Can be: `interpreted` and/or `compiled`.