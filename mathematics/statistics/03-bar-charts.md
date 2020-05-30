# Bar Charts

## Introduction

1. Visualise `2-dimensional` data.

2. Pick a set of `bucket` ranges.

3. Calculate the `average value of the points` in each `bucket`.

4. For each `bucket` plot a `bar` that is the `average value of the bucket`.

> A good way to averaging out out noise.

---

## Matplotlib Bar Charts

```python
from matplotlib import pyplot
from numpy import arange
import bisect

def barplot(labels,data):
    pos=arange(len(data))
    pyplot.xticks(pos+0.4,labels)
    pyplot.bar(pos,data)
    pyplot.show()

def barchart(x,y,numbins=5):
    datarange=max(x)-min(x)
    bin_width=float(datarange)/numbins
    pos=min(x)
    bins=[0 for i in range(numbins+1)]

    for i in range(numbins):
        bins[i]=pos
        pos+=bin_width
    bins[numbins]=max(x)+1
    binsum=[0 for i in range(numbins)]
    bincount=[0 for i in range(numbins)]
    binaverage=[0 for i in range(numbins)]

    for i in range(numbins):
        for j in range(len(x)):
            if x[j]>=bins[i] and x[j]<bins[i+1]:
                bincount[i]+=1
                binsum[i]+=y[j]

    for i in range(numbins):
        binaverage[i]=float(binsum[i])/bincount[i]
    barplot(range(numbins),binaverage)
```