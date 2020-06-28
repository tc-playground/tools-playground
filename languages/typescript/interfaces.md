# Interfaces

## Introduction

* `interfaces` in TypeScript are used to `define the structure of an object`.

* Defined `interfaces` allow TypeScript to perform `type checking` for typographic and other errors via `structural type checking`.

---

## Example

* __Basic Interface__

    ```ts
    interface IIdentity {
        id: string;
    }
    ```

* __Interface Casting__

    ```ts
    const obj = { id: 'some-unique-id' };
    const ident = obj as IIdentity;
    ```