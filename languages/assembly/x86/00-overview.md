# x86 Assembly

## Introduction

* `assembly programs` use `low level instructions` that match a specific `architecture`.

---

## Assemblers

* `as`, `as86`, `gas` - Default linux assemblers. `AT&T syntax`.

* `nasm (Netwide Assembler)` - Multi-platform assembler. `Intel syntax`

---

## Anatomy of Assembly File

1. `.data section` - __Constants__

    * This section is for declaring __constants__, e.g. filenames, buffer sizes, etc.
    
    * Define `constants`. These cannot changed at runtime.

    * Data can be defined using the `eq`, `db`, `dw`, `dd`, `dq` and `dt` instructions.

    ```bash
    section .data
        message:    db 'Hello world!'     ; Declare message to contain the bytes 'Hello world!' (without quotes).
        msglength:  equ 12                ; Declare msglength to have the constant value 12.
        buffersize: dw 1024               ; Declare buffersize to be a word containing 1024.
    ```

2. `.bss section` - __Variables__

    * This section is for declaring __variables__. 
    
    * Uninitialized space in memory for variables can be defined using `resb`, `resw`, `resd`, `resq` and `rest` instructions.
    
    ```asm
    section .bss
        filename:   resb    255           ; Reserve 255 bytes
        number:     resb    1             ; Reserve 1 byte
        bignum:     resw    1             ; Reserve 1 word (1 word = 2 bytes)
        realarray:  resq    10            ; Reserve an array of 10 reals
    ```

3. `.text section` - __Code__

    * This section is for declaring __code__.

    * The `.text` section must begin with the declaration global `_start`, which just tells the kernel where the program execution begins.

    ```bash
    section .text
	    global _start

    _start:
        pop    ebx        ; Here is the where the program actually begins
        ...
        ...
    ```

---

## References

* __Hello World Examples__

    * [Example 1](https://montcs.bloomu.edu/Information/LowLevel/Assembly/assembly-tutorial.html#helloworld)

    * [Example 2](https://jameshfisher.com/2018/03/10/linux-assembly-hello-world/)