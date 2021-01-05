# Closures

## Introduction

* `Closures` capture the state of set of local variables.

* `Closures` can be used for function composition.

---

## Example

```ts
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function() {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction("hello closure!");

// Note the outerFunction has returned
innerFunction(); // logs hello closure!
```