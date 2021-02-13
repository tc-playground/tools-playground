# Materials

## Overview

* `materials` are `textures` that are applied to `geometries` via a `mesh`.

* All `materials` take an object of `properties` which will be applied to them.

* `ThreeJS` has many types of `material`.

* __MeshBasicMaterial__

    ```js
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    ```

* __MeshLambertMaterial__

    ```js
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
    light.position.set(0,0,0);
    scene.add(light);
    var light2 = new THREE.PointLight(0xFFFFFF, 2, 1000)
    light.position.set(0,0,25);
    scene.add(light2);  
    ```
