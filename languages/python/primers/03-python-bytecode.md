# Python Bytecode

## Introduction

* `python` can be `interpreted` or `compiled to bytecode`.

* When `python` programs are executed they are converted to `python bytecode`.

* The `Python Virtual Machine (PVM)` executes the `python bytecode`. The default executor is the `CPython` virtual machine.

* The `python bytecode` is `platform-independent`, but `PVM` is specific to the `target machine`.

---

## Generating bytecode files

* `python bytecode` is stored in a `.pyc` files, stored in a folder named `__pycache__`.

* __Command Line__: `python -m compileall [file_1.py ... file_n.py]`

* __Python script__: `compile(source, filename, mode, flag, dont_inherit, optimize)`

    * __exec__: Accepts Python source code in `any form`, compiles to bytecode, executes, returns `None`.

    * __eval__: Accepts a `single expression` compiles to bytecode, executes, returns the value of expression.

    * __single__: Accepts a `multiple statements` separated by `;` compiles to bytecode, executes, returns the value of last expression.

---

## References

* [Understanding Python Bytecode](https://towardsdatascience.com/understanding-python-bytecode-e7edaae8734d)