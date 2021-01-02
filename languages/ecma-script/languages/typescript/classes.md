# Classes

## Introduction

* `Classes` provided a `template` of instantiating `types` of `object`.

* `properties / instance variables` can be defined. 

    * They can be `primitive types`, `object literals`, or `functions` (methods).

* `Classes` use a `constructor` to instantiate and `instance object` of the class.

    * `properties` can also be defaulted when declared.

    * `public` constructor properties do not need be declared as instance variables and are automatically initialised.

* `TypeScript Classes` support `single inheritance`.

* `Inheritance` allows one `class` to `extend` another and gain access to it's `properties`.

    * `methods` are `function properties`.

    * `attributes` are `data properties`.

    * If the parent class has a constructor it is automatically used. It can be overridden using the `super()` call.


* `Overriding methods` in subclasses can be performed by redefining them.

* `properties` in a class can be accessed via the `this` keyword.

* `parent properties` in a class can be accessed via the `super` keyword.

* `instance modifier` can be applied to `properties` and `functions`.

    * `public` - Properties and methods can be accessed from `everywhere`.

    * `private` - Properties and methods can be accessed from `inside the same class`.

    * `protected` - Properties and methods can be accessed from `inside the same class or child classes`.

    * `default` - The default modifier is `public`.

    > NB: Modifiers cannot be `overridden` in child classes.

---

## Conventions

* Source files containing export classes are normally capitalised.

    e.g. `Point.ts` contains the `Point` class.


---

## Basic Class Example

```ts
class 2DPoint {
    constructor(public x: number, public y: number) {
    }
    add(point: 2DPoint) {
        return new 2DPoint(this.x + point.x, this.y + point.y);
    }
}

var p1 = new 2DPoint(0, 10);
var p2 = new 2DPoint(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }
```

---

## Basic Class Inheritance Example

* The `extends` inheritance operations is like `copying` all the `properties` from the parent class into the child class.

```ts
class 3DPoint extends 2DPoint {
    constructor(public x: number, public y: number, public z: number)) {
        super(x, y);
        this.z = z;
    }
    add(point: 3DPoint) {
        return new 3DPoint(this.x + point.x, this.y + point.y, this.z + point.z);
    }
}
```

---

## Abstract Classes

* `abstract classes` cannot be instantiated directly.

* `abstract classes` can define properties and method `stubs` that must be implemented by extending classes.

* `abstract classes` can be used to defined a `strategy` or `default algorithm` whose `specific details` are implement in extending classes.

* * `abstract classes` promote `strong coupling` compared to `interfaces`.

```ts
interface Sortable {
    length(): number,
    compare(leftIdx: number, rightIdx: number): number, 
    swap(leftIdx: number, rightIdx: number): void 
}

export abstract class Sorter {
    abstract length(): number,
    abstract compare(leftIdx: number, rightIdx: number): number, 
    abstract swap(leftIdx: number, rightIdx: number): void 
}
```

---

## Class Modifiers

* The `visibility` of the properties can be `public`, `protected`, or `private`. 

* The `default` is `public`.

```ts
class 3DPoint extends 2DPoint {
    constructor(public x: number, public y: number, public z: number)) {
        super(x, y);
        this.z = z;
    }
    public add(point: 3DPoint) {
        return new 3DPoint(this.x + point.x, this.y + point.y, this.z + point.z);
    }
}
```

---

## Static Methods

* `classes` support the concept of `static methods`.

    ```ts
    class Point() {
        constructor(public x: number, public y: number);

        static build(x: number, y: number) {
            return new Point(x, y);
        }
    }

    const p = Point.build(1, 2);
    ```
