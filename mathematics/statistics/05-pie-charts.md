## Pie Charts

1. Visualise `relative` and `comparative` data.

2. Denominator does not matter as relative.

---

## Matplotlib Pie Charts

```python
from matplotlib import pyplot

def piechart(labels, data):
    fig=pyplot.figure(figsize=(7,7))
    pyplot.pie(data,labels=labels,autopct='%1.2f%%')
    pyplot.show()
```
