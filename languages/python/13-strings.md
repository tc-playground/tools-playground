# Strings

## Introduction

* `Python3` has various methods for performing `string interpolation`.

---

## String Interpolation

1. __Formatted Output__ - Produce formatted output on `stdout`.

    ```python
    print("Hello: ", person)
    print('Hello {}, this is {} speaking...'.format(person, machine))
    print(f'Hello {person}, this is {machine} speaking...')
    print('Hello {p}, this is {m} speaking...'.format(p=person, m=machine))
    print('Hello %s, this is %s speaking...'%(person, machine)) # Deprecated
    ```

---

## References

* [Python string formatting](https://realpython.com/python-formatted-output/)