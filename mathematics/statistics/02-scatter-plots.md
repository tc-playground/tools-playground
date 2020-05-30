# Scatter Plots

## Introduction

1. Visualise `2-dimensional` data.

2. For each `bucket` plot a point at the `point` coordinates.

> A good way to look for behaviour: `linear`, `exponential`, `positive`, `negative`, etc.

---

## Matplotlib Scatter Plots

```python
from matplotlib import pyplot

def scatterplot(x,y):
    pyplot.plot(x,y,'b.')
    pyplot.xlim(min(x)-1,max(x)+1)
    pyplot.ylim(min(y)-1,max(y)+1)
    pyplot.show()
```

