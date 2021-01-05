# Functions

## Multi-Arity Functions - Ellipses '...' Operator

```ts
function sum(...numbers: number[]) {
    var aggregateNumber = 0;
    for (var i = 0; i < numbers.length; i++)
        aggregateNumber += numbers[i];
    return aggregateNumber;
}
```