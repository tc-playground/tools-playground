# Generics

## Introduction

* `generic` provide a templating mechanism to allow `abstract placeholder holder` types to be used.

* `genericized` types can be replaced with `concrete types` when extended or used.

---

## Examples

```ts
class Cache<DataType> {
    data: DataType;
}

const numberCache = new Cache<number>();
const stringCache = new Cache<String>();

```