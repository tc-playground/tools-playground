# Callbacks

## Introduction

* `Callbacks` are a way of performing `generic programming`.

* `Callbacks` in `C` use a `function pointer` to pass in the `callbacks` to be executed. 

---

## Examples

```c
void populate_array(int *array, size_t arraySize, int (*getNextValue)(void))
{
    for (size_t i=0; i<arraySize; i++)
        array[i] = getNextValue();
}

int getNextRandomValue(void)
{
    return rand();
}

int main(void)
{
    int myarray[10];
    populate_array(myarray, 10, getNextRandomValue);
}
```

---

## References

* [Stack Overflow](https://stackoverflow.com/questions/142789/what-is-a-callback-in-c-and-how-are-they-implemented)