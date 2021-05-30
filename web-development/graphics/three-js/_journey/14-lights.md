# Lights

## Overview

* __Light Types__ - There are various types of lighting that ranges in computational effort.

    * Lights have a high cost on performance. There is a limit to the number of lights.

* __Helpers__ - There are various `LightingHelper` classes ot help position lights.

* __Baking__ - Static lighting can be `baked` into `textures`. 

    * Done via `Blender`, etc.

    * Makes textures more complicated.

---

## Light Types

* __AmbientLight__

    * Applies omnidirectional lighting on all geometries of the scene.

    * Minimal cost.

    ```js
    const ambientLight = new THREE.AmbientLight()
    ambientLight.color = new THREE.Color(0xffffff)
    ambientLight.intensity = 0.5
    scene.add(ambientLight)
    ```

* __HemisphereLight__

    * Similar to `AmbientLight` but with two colours coming from `above` and `below`.
    
    * Minimal cost.

    ```js
    // color, groundColor, intensity
    const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)
    scene.add(hemisphereLight)
    ```

* __DirectionalLight__

    * Applies a sun-like effect as if the sun rays were traveling in parallel.

    * Moderate cost.

    ```js
    // color, intensity
    const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
    directionalLight.position.set(1, 0.25, 0)
    scene.add(directionalLight)
    ```

* __PointLight__

    * Like a `lighter` or `candle`.

    * Moderate cost.

    ```js
    // color, intensity, distance, decay 
    const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2)
    scene.add(pointLight)
    pointLight.position.set(1, - 0.5, 1)
    ```

* __RectAreaLight__

    * Large rectangular `floodlight`.

    * High cost.
    
    ```js
    // color, intensity, width, height
    const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1)
    scene.add(rectAreaLight)
    ```

* __SpotLight__

    * Like a `torch` or `beam`.

    * High cost.

    ```js
    // color: The color.
    // intensity: The strength.
    // distance: The distance at which the intensity drops to 0.
    // angle: How large is the beam.
    // penumbra: How diffused is the contour of the beam.
    // decay: How fast the light dims.
    const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1)
    spotLight.position.set(0, 2, 3)
    scene.add(spotLight)
    // Change target
    spotLight.target.position.x = - 0.75
    scene.add(spotLight.target)
    ```

---

## Lighting Helpers

* __Helpers__ - Display the `rays` created by `light sources`.

    * HemisphereLightHelper
    * DirectionalLightHelper
    * PointLightHelper
    * RectAreaLightHelper
    * SpotLightHelper

    ```js
    const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
    scene.add(hemisphereLightHelper)

    const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
    scene.add(directionalLightHelper)

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
    scene.add(pointLightHelper)

    window.requestAnimationFrame(() => {
        spotLightHelper.update()
    })
    ```

