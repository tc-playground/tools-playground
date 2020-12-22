# GDB Debugger

## Introduction

* `GNU Debugger` allow an executable to be run in a stepwise manner.

* `GNU Debugger` work best when the executable contains `debug labels and symbols`.

    * `Debug labels and symbols` can be added to executable when it is compiled.

    * `Debug labels and symbols` should be removed for productions builds as they are insecure.

---

## Compiling with DEBUG symbols

* __Debug Makefile__

    ```Makefile
    # Configure build flags
    OBJS = example.o
    ifdef DEBUG
    DEBUG_FLAGS = -g
    else
    DEBUG_FLAGS =
    endif

    # Build Rule 
    %.o : %.s
        as $(DEBUG_FLAGS) $< -o $@

    # Build Target
    example: $(OBJS)
        ld -o example $(OBJS)
    ```

    * __Debug Build__ - `make DEBUG=1`

    * __Production Build__ - `make DEBUG=0`

---

## Debugging

1. Build executable with debug options.

2. __Start GDB__ - `gdb <example>`

3. __GDB Operations__

    * __Disassemble__ - `disassemble _start`

    * __Break Points__

        * __Breakpoint Info__ - `info break`/`i b`.
        
        * __Create Breakpoint__ - `b _start`

    * __Execution__

        * __Run__ - `run`/`r`

        * __Step Forward__ - `step`/`s`
        
        * __Continue__ - `continue`/`c`        

    * __Display__

        * __Display Code__ - `list`/`l`

        * __Display Registers__ - `info registers`/`i r`

        * __Examine Memory/Variable__ - `x /Nfu addr`

            * __Number (N)__- Number of objects to display.

            * __Display Format (f)__ - `t` (binary), `x` (hex), `d` (decimal), `i` (instructions), `s` (string).

            * __Unit Size (u)__ - `b` (bytes), `h` (half-word), `w` (word), `g` (double-word).





