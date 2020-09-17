# ELF Tools

## elfutils

* `addr2line`.

* `ar` – Alternative to ar, to create, manipulate archive files.

* `elfcmp`

* `elflint` – Compliance check against gABI and psABI specifications.

* `findtextrel` – Find text relocations.

* `ld` – Combining object and archive files.

* `make-debug-archive`

* `nm` – Display symbols from object/executable files.

* `objdump` – Show information of object files.

* `ranlib` – Create index for archives for performance.

* `readelf` – Human-readable display of ELF files.

* `size` – Display size of each section (text, data, bss, etc).

* `stack` – Show the stack of a running process, or coredump.

* `strings` – Display textual strings (similar to strings utility).

* `strip` – Strip ELF file from symbol tables.

* `unstrip` – Add symbols and debug information to stripped binary.

---

## elfkickers

* `elfls`  – Shows program headers and section headers with flags.

* `elftoc` – Converts a binary into a C program.

* `infect` – Tool to inject a dropper, which creates setuid file in /tmp.

* `objres` – Creates an object from ordinary or binary data.

* `rebind` – Changes bindings/visibility of symbols in ELF file.

* `sstrip` – Strips unneeded components from ELF file.

---

## pax-utils

* `dumpelf` – Dump internal ELF structure.

* `lddtree` – Like ldd, with levels to show dependencies.

* `pspax` – List ELF/PaX information about running processes.

* `scanelf` – Wide range of information, including PaX details.

* `scanmacho` – Shows details for Mach-O binaries (Mac OS X).

* `symtree` – Displays a leveled output for symbols.

---

## prelink

* `execstack` – Display or change if stack is executable
* `prelink` – Remaps/relocates calls in ELF files, to speed up the proc
