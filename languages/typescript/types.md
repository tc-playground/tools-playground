# TypeScript Types

## Introduction

## Type

* `Types` increase your agility when doing refactoring. 

    * It's better for the compiler to catch errors than to have things fail at runtime.

* `Types` are one of the best forms of documentation you can have. 

    * The function signature is a theorem and the function body is the proof.

* `Types` can be _implicit_ and `inferred`.

* `Types` can be _explicit_ to help document a variable, function, etc.

* `TypeScript` uses `postfix` type annotations.

* `TypeScript` types are `structural` - so, `duck typing` is a first class language construct.

    * Structures who have the same exact properties are okay.

    * Structures who have the same and _additional_ properties are okay.

    * Structures who have the _missing_ properties are are an error.

---

## Overview

* Types can be Implicit.

* Type can be Explicit.

* Types are structural.

* Types errors do not prevent transpilation.

* Types are optional.

* Types can be Implicit

* Types for JavaScript libraries can be defined in a `declaration` file.

---

## Strict mode

---

## Declaration Files

* [Definitely Type](https://github.com/DefinitelyTyped/DefinitelyTyped)

* [Declaration file - Docs](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

---

## Bottom Types

* `undefined` - Something hasn't been initialized .

* `null` - Something is currently unavailable.

* `==` - In general no distinction should be made between the two, and both handled - UNLESS a `root level` item.

* `typeof` - can be used to check for types.

    ```ts
    if (typeof someglobal !== 'undefined') {
        // someglobal is now safe to use
        console.log(someglobal);
    }
    ```

---