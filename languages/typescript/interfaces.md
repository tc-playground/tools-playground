# Interfaces

## Introduction

* `interfaces` in TypeScript are used to `define the structure of an object`.

* `interfaces` can be used in function parameters to act as `gate keepers`

    * This allows allow the TypeScript type-checker to check an `object` is an applicable parameter for a function.  

* `interfaces` create a new custom type.

* Defined `interfaces` allow TypeScript to perform `type checking` for typographic and other errors via `structural (duck) type checking`.

* `interfaces` can use `primitive`, `object`, `functions`, and, any other complex type.

---

## Example

* __Basic Interface__

    ```ts
    interface IPoint {
        label: string;
        x: number;
        y: number;
    }

    interface IAddablePoint extends {
        add(): (p: IPoint) => number;
    }

    const p1 = { label: 'p1', x: 1, y: 2 };

    const printPoint = (point: { label: string, x: number, y: number}): void => {
        console.log('label: ', point.label);
        console.log('x: ', point.x);
        console.log('y: ', point).y;
    };

    const printPoint2 = (point: IPoint): void => {
        console.log('label: ', point.label);
        console.log('x: ', point.x);
        console.log('y: ', point).y;
    };


    ```  

* __Interface Casting__

    ```ts
    const p1 = { label: 'p1', x: 1, y: 2 };
    const point = p1 as IPoint;
    ```