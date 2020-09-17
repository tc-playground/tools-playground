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

## Commands

* `sudo apt install pax-utils`
* `sudo apt install execstack`

* `hexdump -C -n 64 /bin/ps`

* `dumpelf /bin/ps | less`

* __Examine ELF File__

    * `readelf -h /bin/ps` - Headers
    * `readelf -l /bin/ps` - Segment (Program Headers)
    * `readelf -S /bin/ps` - Sections
    * `readelf -a /bin/ps` - All

* `scanelf -e /bin/ps` - Scan ELF binaries for stuff

* `execstack -q /bin/ps` - Manage `executable stack` flag.

---

## References

* [ELF 101](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/)

* [ELF Kicker Tools](http://www.muppetlabs.com/~breadbox/software/elfkickers.html)

* [ElF Format - pdf](http://www.skyfree.org/linux/references/ELF_Format.pdf)

* [ElF Format - txt](http://www.muppetlabs.com/~breadbox/software/ELF.txt)



