 # ThreeJS

## Introduction

---

 ## Configure CDN Scripts

 ```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
 ```

 ---

 ## Configure Window Management

* __Window Resize__

    ```js
    // Window Management - Recalculate rendering window and camera aspect on resize.
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })
    ```