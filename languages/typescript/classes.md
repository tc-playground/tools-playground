# Classes

## Introduction

* `Classes` provided a `template` of instantiating `types` of `object`.

* `Classes` use a `constructor` to instantiate and `instance object` of the class.

* `TypeScript Classes` support `single inheritance`.

* `Inheritance` allows one `class` to `extend` another and gain access to it's `properties`.

    * `methods` are `function properties`.

    * `attributes` are `data properties`.

* `properties` in a class can be accessed via the `this` keyword.

* `parent properties` in a class can be accessed via the `super` keyword.


---

## Example

```ts
class Point {
    constructor(public x: number, public y: number) {
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }
```