# Generics

## Introduction

* `generic` provide a templating mechanism to allow `abstract placeholder holder` types to be used.

* `genericized` types can be replaced with `concrete types` when extended or used.

---

## Class Examples

```ts
class Cache<DataType> {
    data: DataType;
}

const numberCache = new Cache<number>();
const stringCache = new Cache<string>();

```

```ts
class ArrayOfAnything<T> {
    constructor(public data: T[]);
    get(idx: number): T {
        return this.data[i];
        }
    }
}

const data = new ArrayOfAnything<string>();
```

---

## Function Examples

```ts
function printAnything<T>(data: T[]): void {
    for (int i; i < data.length; i++) {
        console.log(data[i]);
    }
}

printAnything<string>(['a','b', 'c']);
```

---

## Constraint Examples

```ts
interface Printable {
    print(): void;
}


function printAnything<T extends Printable>(data: T[]): void {
    for (int i; i < data.length; i++) {
        console.log(data[i].print());
    }
}
```