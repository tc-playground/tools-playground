# TypeScript Decorators

## Introduction

* `TypeScript decorators` are DIFFERENT than `JavaScript decorators`.

* `TypeScript decorators` are `functions` that `modify  properties and methods on classes`.

* `TypeScript decorators` are used in or on `classes only`.

* `TypeScript decorator` behaviour is based on the `order` they execute.

* `TypeScript decorators` are `applied once` when the `class is defined`. Not when an instance is created.

* `TypeScript decorators` can be applied to properties / methods via the `@` syntax marker. 

* `TypeScript decorators` accept upto 3 parameters:

    1. `prototype` of the object.

    2. `key` - The property / method `name` the decorator is applied too.

    3. `property descriptor`

---

## Enabling Decorators

* `TypeScript decorators` need to be enabled in the `tsconfig.json`:

    ```json
    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    ```