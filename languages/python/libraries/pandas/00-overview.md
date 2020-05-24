# Pandas - Python Data Analysis Library

## Overview

* `pandas` is a `data analysis` and `manipulation tool` for Python.

    * Input/Output.

    * `Selections` - indexing, slicing, ...

    * `Series` - Selections can be performed to produce a series.

    * Visualisation.

* `pandas` integrates with `numpy`

    > `NumPy arrays` have one dtype for the entire array, while `Pandas DataFrames` have one dtype per column.

    > `pandas` primarily uses the value `np.nan` to represent missing data.

---

## DataFrames

```python
import pandas as pd
df = pd.read_csv('data.csv', sep=';')
df.head()
```

---

## References

* [Pandas - Home](https://pandas.pydata.org)

* [Pandas - Quick Start](https://pandas.pydata.org/docs/getting_started/10min.html#min)

* [Pandas - Getting Started](https://pandas.pydata.org/docs/getting_started/index.html)

* [Pandas - User Guide](https://pandas.pydata.org/docs/user_guide/index.html)

* [Pandas - API](https://pandas.pydata.org/docs/reference/index.html)

