# Objects

## Spread `...` Operator

* The `spread operator` is defined by the `...` syntax.

* The `spread operator` pulls out all the `properties` in the `target` object.

* The `spread operator` creates  new object is created containing all properties and values from the objects provided with the rest operator.  

* In the case of a key collisions, the right-most (last) object's value wins out:

Also note that you can provide any number of objects to merge:

* Example 

    ```ts
    const 2dPoint = { x: 1, y: 2 };
    const 3dPoint = { ...2dPoint,  z: 3 };
    const meta = { name: "origin" };
    const annotatedPoint = { ...meta, ..3dPoint };
    // Object {
    //   "name": "origin",
    //   "x": 1,
    //   "y": 2,
    //   "z": 3,
    // }
    ```