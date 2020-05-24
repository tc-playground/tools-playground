# Python Classes

## Introduction

* `class` - a blueprint consisting of `methods` and `attributes`.

* `object` - an instance of a class.

* `attribute` - a descriptor or characteristic. _Characteristics_. _Nouns_.

* `value` - of an `attribute`.

* `method` - an action that a class or object could take. _Actions_. _Verbs_.

---

## Example

```python
class Shirt:

    def __init__(self, shirt_color, shirt_size, shirt_style, shirt_price):
        self.color = shirt_color
        self.size = shirt_size
        self.style = shirt_style
        self.price = shirt_price
    
    def change_price(self, new_price):
    
        self.price = new_price
        
    def discount(self, discount):

        return self.price * (1 - discount)
```

---

## `class` Definition

* The `class` keyword is used to define a new python class.

    ```python
    class SomeClass:
        pass
    ```

* `CamelCase` names are best practice.

---

## Constructors - `__init__`

* The `def` keyword is used to define the `__init__ constructor`.

* `__init__` is the name of a special constructor function to instantiate an object from a class.

    ```python
    class SomeClass:

        def __init__(self, v1. v2):
            self.a1 = v1
            self.a1 = v2
    ```

* `__init__` defines the initial `attributes` on a class.

>  __NB__: The constructor MUST take the `self` reference as the first argument.

---

## Methods

* The `def` keyword is used to define `methods` on the `class`.

    ```python
    class SomeClass:

        def __init__(self):
            pass

        def some_method(self):
            pass
    ```

* `snake_case` names are best practice.

>  __NB__: The method MUST take the `self` reference as the first argument.

---

## Instantiation

* `instantiate` as new class by calling it as a function as defined by the `__init__` constructor.

    ```python
    class SomeClass:

    def __init__(self, v1. v2):
        self.a1 = v1
        self.a1 = v2

    some_class_01 = SomeClass(1, 2)
    ```

---

## `self` Reference

* All `objects` access `attributes` and `methods` via the `self` variable.

* `self` is a dictionary that hold all the `attributes` as `keys` and the associated values.

    * NB: The name `self` is a _convention_. Theoretically, any consistent name can be used.

* The `.` accessor provides access to elements in an `object` - `self.id`

    ```python
    class SomeClass:

        def __init__(self, v1. v2):
            self.a1 = v1
            self.a1 = v2
        
        def sum(self):
            return self.a1 + self.a2
    ```



