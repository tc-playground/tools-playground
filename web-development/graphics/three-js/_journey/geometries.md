# Geometries

## Built-in Geometries

* There are many `built-in geometries` in the `ThreeJS` library.

* [Docs](https://threejs.org/docs/?q=Geometry#api/en/core/BufferGeometry)

---

## Custom Geometries - (BufferGeometry)

* It is possible to create `custom geometries` and render directly to the `canvas`.

* A [Buffer Geometry](https://threejs.org/docs/?q=Geometry#api/en/core/BufferGeometry) is used.

* A `raw array` of data can be stored in a [Float32Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

    * The `co-ordinates` of each `vertex` are stored in-order.

* A [BufferAttribute](https://threejs.org/docs/#api/en/core/BufferAttribute) is used to define how many values in the underlying array define a `vertex`.

* __Triangle Example__

    ```js
    const geometry = new THREE.BufferGeometry()
    const positionsArray = new Float32Array([
        0, 0, 0, // First vertex
        0, 1, 0, // Second vertex
        1, 0, 0  // Third vertex
    ])
    const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
    // 'position' must be used as this is the name in the ThreeJS default shader.
    geometry.setAttribute('position', positionsAttribute)
    ```

> `BufferGeometry` has an `index` property to define `vertices` in a `face` more efficiently.