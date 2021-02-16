# Mesh

## Overview

* A `mesh` is an object that takes a `geometry`, and applies a `material` to it.

* A `mesh` can be added to `scene`, and moved freely around.

    ```js
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    ```

* A mesh can be `moved`, `rotated`, and `scaled`.

    ```js
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    cube.scale.x -= 0.01;
    cube.position.x = 1;
    ```

---

## Animations - Timeline Library

* __TweenJS__

    * [TweenJS - Home](https://createjs.com/tweenjs)

* __GSAP Animation Library - TimelineMax__

    * [GSAP - Home](https://greensock.com/gsap/)

    * CDN: `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>`





