# Lights

## Overview

* A `light` is an object that adds lighting effects to a `scene`.

* `ThreeJS` has many types of `light`.

* __PointLight__

    ```js
    var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
    light.position.set(0,0,0);
    scene.add(light);
    var light2 = new THREE.PointLight(0xFFFFFF, 2, 1000)
    light.position.set(0,0,25);
    scene.add(light2); 
    ```
