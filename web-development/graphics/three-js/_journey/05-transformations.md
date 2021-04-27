# Transformations

## Introduction

* All classes that inherit from the `Object3D` class possess those properties:

    * `position` (to move the object)

    * `scale` (to resize the object)

    * `rotation` (to rotate the object)

    * `quaternion` (to rotate the object; handle axes re-orientation)

* `PerspectiveCamera`, `Mesh`, etc.

---

## Default Coordinate System

> Coordinate system is `arbitrary` and `relative`, but, these are three-js defaults.

* __x__ - `mesh.position.x` - (neg) `left`, (pos) `right`

* __y__ - `mesh.position.y` - (neg) `down`, (pos) `up`

* __z__ - `mesh.position.z` - (neg) `forward`, (pos) `back`

> The units are also arbitrary `1` can be `1 meter`, `1 centimeter`, `1 km`, etc.

---

## Moving Objects

* `Mesh objects` have a `position` property.

* __position__ property is a `Vector3` type with:

    * `mesh.position.x = 0.7`
    * `mesh.position.y = -0.6`
    * `mesh.position.z = 1`
    * `mesh.position.set(x, y, z)` - Set all co-ordinates.

---

## Scaling Objects

* `Mesh objects` have a `scale` property.

* __scale__ property is a `Vector3` type with:

    * `mesh.scale.x = 0.7`
    * `mesh.scale.y = -0.6`
    * `mesh.scale.z = 1`

---

## Rotating Objects

* `Mesh objects` have a `rotation` property.

* __rotation__ property is an `Euler` type with:

    * `x, y, z` in radians. e.g. one full rotation - `Math.Pi * 2`

    * Rotate on the y axis, carousel you are looking at.

    * Rotate on the x axis, wheels of a car you'd be in.

    * Rotate on the z axis, propeller of a plane you'd be in.

    * Rotating one axis changes the other axes `orientation`.

    * The order of the rotations matters. It can change the coordinate system.

        * `mesh.rotation.reorder('XYZ')` - Do before changing rotation.

    * `gimbal lock` - Lock the rotation mechanism.

* `Mesh objects` have a `quaternion` property.

* __quaternion__ 

    * Get around the rotation order problem.

> Updating `rotation` or `quaternion` will update the other.

