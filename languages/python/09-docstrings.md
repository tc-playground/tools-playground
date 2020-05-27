# Doc Strings

## Introduction

* A `docstring` is a string literal that occurs as the first statement in a module, function, class, or method definition. Such a docstring becomes the `__doc__` special attribute of that object.

---

## Examples

2. __Single-line Doc String__

    ```python
    def square(a):
        '''Returned argument a is squared.'''
        return a**a
    ```

2. __Multi-line Doc String__

    ```python
    def square(value):
        """Returned argument a is squared.

        Parameters:
        value (int): The input value.

        Returns:
        int:Returning value
        """
        return a**a
    ```

---

## References

* [PEP Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)

* [Good Doc Strings](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html)

