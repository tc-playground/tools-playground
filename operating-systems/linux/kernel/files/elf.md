# ELF (Executable Linkable Format)

## Introduction

* `ELF` is the abbreviation for `Executable and Linkable Format` and defines the structure for `binaries`, `libraries`, and `core` files.

* `ELF` allows the operating system to interpret its underlying machine instructions correctly.

---

## Anatomy

1. `Elf Header`

2. `Program Headers` or `Segments` (9)

3. `Section Headers` or `Sections` (28)

4. `Data`

---

## ELF Header Anatomy
    
* Ensures that the `data` is correctly interpreted during `linking` or `execution`.

* `readelf -h <target>`

    1. `Magic` - 7f (45=E,4c=L,46=F)
    2. `Class` - 32-bit (=01) or 64-bit (=02) architecture. 
    3. `Data` - Layout: `LSB`, Least Significant Bit, `little-endian` / `MSB`, Most Significant Bit, `big-endian`.
    5. `OS/ABI` - Define the `Application Binary interface`,  e.g. `System V`
    6. `Machine`- Expected machine type e.g. `AMD-64`
    7. `Type` - Binary type.
        1. `CORE` (value 4).
        2. `DYN (Shared object file)`, for libraries.
        3. `EXEC (Executable file)`, for binaries.
        4. `REL (Relocatable file)`, before linked into an executable file.

---

## ELF Program Header (Segment) Anatomy

* `ELF` file consists of zero or more `segments`, and describe how to `create a process/memory image` for runtime execution.

* The `kernel` maps these `segments` into `virtual address space`, using the `mmap(2)` system call.

    * Converts `predefined instructions` into a `memory image`.

* The `kernel` uses these headers, with the underlying data structure, to form a `process`. 

* These are required to execute normal `binaries`.

* `readelf -l <target>`

    1. `GNU_EH_FRAME` - A sorted queue used by the GNU C compiler (gcc). 

        1. Stores `exception handlers`.

    2. `GNU_STACK` - Header is used to store stack information.

        1. Should not be executable. Stack overflow.
    
    3. etc.

---

## ELF Section Header (Sections) Anatomy

* A `segment` can have 0 or more `sections`. 

* The `section headers` define all the `sections` in the `file`.

* `sections` are used for `linking` and `relocation`.

* `sections` are created by the (GNU) `assembler`, after compilation with the (GCC) `compiler`.

* `readelf -S /bin/ps`

    1. `.text` - Contains executable code.

        * packed into a segment with read and execute access rights.

        * loaded once, as the contents will not change. 

        * Output with the `objdump` utility.

    2. `.data` - Initialized data, with read/write access rights.

    3. `.rodata` - Initialized data, with read access rights.

    4. `.bss` - Uninitialized data, with read/write access rights (=WA)

* Modern linkers have `section groups` to link various sections together.

---

elfutils

    /usr/bin/eu-addr2line
    /usr/bin/eu-ar – alternative to ar, to create, manipulate archive files
    /usr/bin/eu-elfcmp
    /usr/bin/eu-elflint – compliance check against gABI and psABI specifications
    /usr/bin/eu-findtextrel – find text relocations
    /usr/bin/eu-ld – combining object and archive files
    /usr/bin/eu-make-debug-archive
    /usr/bin/eu-nm – display symbols from object/executable files
    /usr/bin/eu-objdump – show information of object files
    /usr/bin/eu-ranlib – create index for archives for performance
    /usr/bin/eu-readelf – human-readable display of ELF files
    /usr/bin/eu-size – display size of each section (text, data, bss, etc)
    /usr/bin/eu-stack – show the stack of a running process, or coredump
    /usr/bin/eu-strings – display textual strings (similar to strings utility)
    /usr/bin/eu-strip – strip ELF file from symbol tables
    /usr/bin/eu-unstrip – add symbols and debug information to stripped binary






---

## Commands

* `sudo apt install pax-utils`
* `sudo apt install execstack`

* `hexdump -C -n 64 /bin/ps`

* `dumpelf /bin/ps | less`

* `readelf -h /bin/ls`
* `readelf -l /bin/ls`
* `readelf -S /bin/ls`
* `readelf -a /bin/ls`

* `scanelf -e /bin/ps`

* `execstack -q /bin/ps`


---

## References

* [ELF 101](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/)