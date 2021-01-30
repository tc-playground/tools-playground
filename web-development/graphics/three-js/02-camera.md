# Camera

## Overview

* The `camera` defines a rectangular lane onto which the `scene` is projected to `render` an `image`.

* `ThreeJS` has many types of `camera`.

* __PerspectiveCamera__

    ```js
    // Param:
    var camera = new THREE.PerspectiveCamera(
        75,                                     // Field of View
        window.innerWidth/window.innerHeight,   // Aspect Ratio
        0.1,                                    // Near Plane (Clipping)
        1000                                    // Far Plane (Clipping)
    )

    camera.position.z = 5;  // Move the camera 5 units.
    ```