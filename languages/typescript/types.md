# TypeScript Types

## Introduction

## Types

* `Types` are a way of __defining__ what `properties` and `methods` a `value` has.

    * NB: A `value` is anything that can be assigned to a `variable`.

* `Types` can be _categorised_:

    * __Primitive Types__ - `number`, `string`, `boolean`, `symbol`, `void`, `undefined`, `null`.

    * __Complex Types__ - `array`, `object`,`class`, `function`.

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

* Types are optional - Although not using `types` negates the utility of TypesScript.

* Type can be explicit - `type annotations`.

* Types can be implicit - `type inference`.

* Types are structural `duck typing`.

* Types errors do not prevent transpilation.

* Types for JavaScript libraries can be defined in a `declaration` file.

---

## Types

* __Primitive Types__ - `number`, `string`, `boolean`, `symbol`, `void`, `undefined`, `null`.

* __Complex Types__ - `array`, `object`,`class`, `function`.

---

## Structural 'duck' Typing

* `TypeScript` types are `structural` - so, `duck typing` is a first class language construct.

    * Objects who have the same exact properties match type.

    * Objects who have the same and _additional_ properties match type.

    * Objects who have the _missing_ properties do not match type.

---

## Type Inference

1. If `declaration` and `initialisation` are _in the same statement_ then TypeScript will __infer__ the type.

    * __Type Inference__ - `colour: string`
    
        ```ts
        const colour: = "red";
        ```

    * __No Type Inference__ - `colour: any`.
        
        ```ts
        const colour;
        colour = "red";
        ```

2. Type `annotations` should be used when:

    1. Variables are `declared` and `initialised` in different `statements`.

    2. When a `function` returns an `any` type.

    3. Where the inferred type is ambiguous and we want to clarify it.

3. The `any` type is the top-level type everything.

    * The `any` type should be avoided where-ever possible as it reduces the effectiveness of the type checker.

---

## Type Annotations - Primitive Variables

* Examples:

    ```ts
    const age: number = 5;
    const name: string = 'Tim';
    const valid: boolean = true;
    const notPresent: null = null;
    const nothing: undefined = undefined;
    ```

---

## Type Annotations - Array Variables

* Examples:

    ```ts
    const ages: string[] = [43, 41];
    const names: string[] = ['Tim', 'Nu'];
    const valids: boolean[] = [true, false];
    const validNames: (string | boolean)[] = ["Tim", false];
    ```

---

## Type Annotations - Tuple Variables

* Examples:

    ```ts
    const point: [string, number, number] = [ 'p1', 1, 2];
    ```

---

## Type Annotations - Object Literals

* Examples:

    ```ts
    // User defined.
    class Car {};
    const car: Car;

    // Object Literal.
    const point: {x: number, y: number} = {x: 10, y: 20}

    // Built in.
    const now: Date = new Date();
    ```

* Destructuring: Replace the  `type declaration` with the `destructed type declaration`.

    ```ts
    const { age }: { age: number } = profile;
    ```

    ```ts
    const { coords: { lat, long } }: { coords: { lat: number, long: number } } = profile;
    ```

---

## Type Annotations - Functions


1. Annotate `parameters of a function`:

    ```ts
    const add = (x: number, y: number): number) => {
        return x + y ; 
    };
    ```

2. Annotate a `function` type :

    ```ts
    const logNumber: (i: number) => void = (i: number) => { 
        console.log(n); 
    };
    ```

3. Annotate a function that returns nothing (`null`, `undefined`) with `void`:

    ```ts
    const logger = (msg: string): void => {
        console.log(msg);
    }
    ```

4. Annotate a function that may never return with `never`:

    ```ts
    const trhowError = (msg: string): void => {
        throw new Error(msg);
    }
    ```

5. `Destructuring statements` can be used in place of `type annotation`.

    ```ts
    const logWeather = (forecast: {date: Date, weather: string}): void => {
        console.log(forecast.date);
        console.log(forecast.weather);
    }
    ```

    ```ts
    const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
        console.log(date);
        console.log(weather);
    }
    ```

---

## Type Annotations - Either Types

* The `|` operator can define situations where `multiple types` may be returned.

    ```ts
    const result: Response | Error;
    if (Result instanceof Error) {
        // Handle error.
    }
    ```

---

## Type Alias

```ts
type PointTuple = [string, number, number]
const p1: PointTuple = ["p1", 1, 2];
```


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

## Union Types - Type Union '|' Operator

* `|` type union operator can be used as an an `or` when defining the type of variables.

* The `|` operator creates a new type that only has the properties shared by all variables.

* __Example__

    ```ts
    // 'p' will have no properties available until resolved.
    const p: 2DPoint | undefined;
    if (p) {
        console.log(`${p.x}, ${p.y}`);
    }
    ```

> NB: `interfaces` are a better method for allowing multiple types into generic functions.

---

## Type Guards

* `Type Guards` allow the TypeScript type checker to regain access to properties on a type.

    ```ts
    function sort(col: number[] | string) {
        if (col instanceof Array) {
            //...
        } else if (col typeof String) {
            //...
        }
    }

* `typeof` - USed for `primitive values` (number, string, boolean, symbol).

* `instanceof` - Used for `classes`.

---

## Type Assertions ans Casting

* `Type assertions` can be used to `cast` data.

```ts
const someVar: any;
someVar = 123;
const someNumber = someVar as number;
```