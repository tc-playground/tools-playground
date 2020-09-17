# ABI - Application Binary Interface

## Introduction

1. `Application Binary Interfaces (ABI)` define how `data structures` or `computational` routines are accessed in `machine code`.

2. `ABI` details include

    1. __Processor instruction set__ -  with details like `register file structure`, `stack organization`, `memory access types`, etc.

    2. __Data Type__ - with details like `sizes`, `layouts`, and `alignments` of basic `data types` that the processor can directly access.

    3. __Calling conventions__ - with details like how `functions arguments are passed` and `return values are retrieved`: e.g. 
    
        1. Whether all parameters are passed on the stack or some are passed in registers.
        2. Which registers are used for which function parameters.
        3. Whether the first function parameter passed on the stack is pushed first or last onto the stack.
        4. `stack frame` organisation.

    4. __System calls__ - with details like how an `application` should make `system calls` to the `operating system`
    
        1. Wether the ABI specifies direct system calls rather than procedure calls to system call stubs. 
        2. The system call numbers.

    5. __Binary Formats__ - For `Operating System ABIs`, the `binary format` of `object files`, `program libraries`, etc.


---

## Resources

* [ABI - Wikipedia](https://en.wikipedia.org/wiki/Application_binary_interface)