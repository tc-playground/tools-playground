# Magic Methods / Dunder Methods

## Introduciton

* `magic methods` in Python are special methods that can be used to perform special tasks:

    * __Initialisation__ - Constructor methods.

    * __Operator Override__ - Override the behaviour of `operators`. e.g. `+`, `-`, `*`, `/`, `==`, `>`, `<`, etc.

---

## Examples

1. __init__ - Object constructor

```python
class Gaussian():
    """ Gaussian distribution class"""
    def __init__(self, mu = 0, sigma = 1):
        
        self.mean = mu
        self.stdev = sigma
        self.data = []
```

2. __add__ - Override the `+` operator

```python
class Gaussian():

    def __add__(self, other):
        result = Gaussian()
        result.mean = self.mean + other.mean
        result.stdev = math.sqrt(self.stdev ** 2 + other.stdev ** 2)
        
        return result
```

```python
g1 = Gaussian(25, 3)
g2 = Gaussian(30, 4)
g3 = g1 + g2
```


* __repr__ - Override the `string representation`

```python
class Gaussian():

    def __repr__(self):
        return "mean {}, standard deviation {}".format(self.mean, self.stdev)
```
```python
g1 = Gaussian(25, 3)
rep = str(g1)
```

---

## References

* [Magic Methods](https://www.geeksforgeeks.org/dunder-magic-methods-python/)

* [Magic Method List](https://stackoverflow.com/questions/56238263/list-of-all-python-dunder-methods-which-ones-do-you-need-to-implement-to-corre)