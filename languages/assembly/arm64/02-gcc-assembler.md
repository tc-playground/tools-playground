# GCC Assembler

## Introduction

* Programming actual in ARM 64 processor `instructions` is hard.

* `GCC Assembler` provides `mnemonics`, `aliases`, `labels` to make things easier.

* `GCC Assembler` uses `assembly instructions` to produce optimized `processor instructions`.

* `GCC Assembler` can help deal with `memory addressing and layout`.

* `as` can be used to generate machine code `object file` from `assembler source`.

* `ld` can be used to generate an `executable` from  one or more `object files`. One must contain a `_main` entrypoint.

---

## File Structure

* `Assembly source files` are usually normal text files with a `.s` extension.

* `Assembly source files` consist of several `sections`

    * __Assembly Instructions__ - The assembly instructions themselves.

    * __.data__ - Global static data.

    * __.global _start__ - Optional entrypoint. Only one permitted.


---

## Assembly Instructions Structure

* `label: opcode operands ;comment`

    * An optional `label:` to act as a target for `branch instructions`.

    * An `opcode` or `alias` fo the `instruction` to execute.

    * 1 or 2 `operands` to the instruction.

    * An optional `comment`. Comments can be a `;`, `//`. `/*  */`.

    * `immediate operands` can include `expressions (())` and `strings (')`

* __Statements__

    * `.ascii` - Put a string in the `.data` section of the object file.

---

## Compilation Tools

* __Assembler__ 

    * __Create Object File__ - `as`
    
    ```bash
     as -o HelloWorld.o HelloWorld.s
    ```

* __Linker__

    * __Create Executable File__ - `ld`
    
        ```bash
        ld -o HelloWorld HelloWorld.o
        ```

    * __Entrypoint__ - At least one object file must have a `__start` __global symbol__.

* __Disassembler__

    * __Disassemble Binary__ - `objdump`

        ```bash
        objdump -s -d HelloWorld.o
        ```
        * `-M no-alias` - Display actual instructions.
