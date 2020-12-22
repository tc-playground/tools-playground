# GNU Make

## Introduction

* `GNU Make` can be used to build projects.

    * `object files`

    * `executables`

* `GNU Make` supports:

    1. __Dependencies__ - Specifies the `rules` on how to build one thing from another.

    2. __Targets__ - Lists the `targets` you want built and `the files they depend on`.

    3. __Variables__ - Variable expressions.

    4. __Incremental Builds__ - Examines the file date/times to `determine what needs to be built`.

    5. __Commands__ - Issues the `commands` to build the component.

---

## Example Makefile

```Makefile
# Variable
OBJ = HelloWorld.o

# Rule - Compile to '.s' source files to '.o' object files.
%.o : %.s
    as $< -o $@

# Target - Build HelloWorld executable.
HelloWorld: $(OBJ)
    ld -o HelloWorld $(OBJ)
```

* __Notes__

    * __File Matching__ - `%`
    * __Source File__ - `$<`
    * __Output File__ - `$@`

---

## Make Commands

* __Force Rebuild__ - `make -B`
