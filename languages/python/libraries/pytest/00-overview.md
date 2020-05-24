# pytest - Python Data Analysis Library

## Introduction

* `pytest` is framework for writing unit tests in python.

    * `assert statements`

    * `auto-discovery` of test modules and functions.

    * `modular fixtures`

    * Integration with `unittest` and `nose`. 

---

## Example

1. __Installation__

    ```bash
    pip install -U pytest
    ```

2. __Crate a test__ - By convention test file names are pre-pended with `test_`. This can be changed in the `config`.

    1. Use `assert` to test the `input` / `output` behaviour of a function.

        ```python
        # test_inc.py

        def inc(x):
            return x + 1


        def test_answer():
            assert inc(3) == 5
        ```
3. __Run test suite__

    ```bash
    pytest
    ```

---

## References

* [pytest - Home](https://docs.pytest.org/en/latest/)

* [pytest - Docs](https://docs.pytest.org/en/latest/contents.html#toc)