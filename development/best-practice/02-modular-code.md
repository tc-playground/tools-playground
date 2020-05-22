# Clean Code

## Introduction

> `modular code` is logically broken up into `functions` and `modules`.

* Makes code more `organized`, `efficient`, and `reusable`.

---

## Best Practices

1. __DRY (Don't Repeat Your self)__

    1. Modularization allows you to reuse parts of your code. 

    2. Generalize and consolidate repeated code in functions or loops.

2. __Abstract out logic to improve readability__

    1. Make code less repetitive and more readable.

    > Exception: Be careful not to over-engineer by creating too many small functions.

3. __Minimize the number of entities (functions, classes, modules, etc.)__

    > Exception: Be careful not to over-engineer by creating too many small functions.

4. __Functions should do one thing__

    * Avoid having side-effects and doing more than one thing.

    * No `__and__` in function names.

5. __Arbitrary variable names can be more effective in certain functions__

    > Exception:  Generic variable names in generic functions actually make the code more readable.

6. __Try to use fewer than three arguments per function__

    1. Possibly a sign of a bad design.

    2. This also includes passing too much in too much information via a complex variable type.


