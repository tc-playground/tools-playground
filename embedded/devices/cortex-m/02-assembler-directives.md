# Common Directives (Pseduo Instructions)

* `THUMB` - Placed at the top to specify the code is generate with `thumb instruction set`.

* `CODE` - Denotes the `section` for `machine instructions` (`ROM`).

* `DATA` - Denotes the `section` for `global variables` (`RAM`).

* `AREA` - Instructs the assembler to create a new `code` or `data` section.

* `SPACE` - Reserves a block of `memory` and initialises it with 0s.

* `ALIGN` - Is used to ensure the next `object` aligns correctly.

* `EXPORT`/ `GLOBAL` - Make an `object` accessible from another file.

* `IMPORT` - Access an `object` exported from another file.

* `END` - Placed at the end of each file.

* `DCB` - Create a `byte (8-bit)` sized constant in `memory`.

* `DCW` - Create a `half-word (16-bit)` sized constant in `memory`.

* `DCD` - Create a `word (16-bit)` sized constant in `memory`.

* `EQU` - Give a `symbolic name` to a `numeric constant`.

* `[.text]` - Make `assembly code` callable by `C code`.