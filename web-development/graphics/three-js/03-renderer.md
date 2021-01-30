# Renderer

## Overview

* `ThreeJS` has many types of `renderer`.

* __WebGLRenderer__

    ```js
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#000000");  // Background Colour
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    ```

---

## Rendering

* `Rendering` and `animation`

    ```js
    function animate() {
        // Will queue this for animation in the render path of the event loop (1/60 s).
        requestAnimationFrame( animate );

        // DO animations and updates.

        // Execute render the scene wrt to the camera.
        renderer.render( scene, camera );
    }
    animate();
    ```

