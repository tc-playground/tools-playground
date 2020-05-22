# Clean Code

## Introduction

> `clean code` is `readable`, `simple`, and `concise`.

* Crucial for `collaboration` and `maintainability`.

---

## Best Practices

1. __Meaningful Names__

    1. __Be descriptive and imply type__ - e.g. `is_dog(animal)` over `dog(x)`.

    2. __Be consistent but clearly differentiate__ - e.g. `age_list` over `ages`.

    3. __Avoid abbreviations and especially single letters__ - `age_list` over `a`.

    4. __Long names != descriptive names__ -  Do not include details of context, implementation or highly specific uses.

    5. __Abstract name__ - Should only be used for abstract functions.

2. __Consistent White Spacing__

    1. __Organize your code with consistent indentation__

    2. __Separate sections with blank lines to keep your code well organized and readable__

    3. __Use a `linter` for your chosen language - e.g. PEP 8 for Python.

---

## References

* [Python PEP 8 Linting](https://www.python.org/dev/peps/pep-0008/?#code-lay-out)
