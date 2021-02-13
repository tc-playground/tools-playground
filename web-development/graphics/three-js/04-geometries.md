# Geometries

## Overview

* `Geometries` are `renderable object` in the `scene graph`.

    ```js
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    ```

* `ThreeJS` has many types of `geometry`.

* __BoxGeometry__

    * [BoxGeometry - Docs](https://threejs.org/docs/#api/en/geometries/BoxGeometry)

* __SphereGeometry__

    * [SphereGeometry - Docs](https://threejs.org/docs/#api/en/geometries/SphereGeometry)

