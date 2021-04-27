# Cameras

## Introduction

* `Camera Types`

* `Camera Controls`

---

## Camera Types

* [Camera](https://threejs.org/docs/#api/en/cameras/Camera)

    * Abstract base class.

* [Array Camera](https://threejs.org/docs/?q=Camera#api/en/cameras/ArrayCamera)

    * Render a scene multiple times to different area of the canvas using multiple cameras.

    * e.g. `top-down view`, `minimap`, etc.

* [StereoCamera](https://threejs.org/docs/#api/en/cameras/StereoCamera)

    * e.g. `VR`.

* [CubeCamera](https://threejs.org/docs/#api/en/cameras/CubeCamera)

    * Render each direction (forward, backward, leftward, rightward, upward, and downward).

    * Create an environment map for reflection or a shadow map.

* [OrthographicCamera](https://threejs.org/docs/#api/en/cameras/OrthographicCamera)

    * Create a view with no perspective (orthographic).

    * e.g. `top-down view`

* [PerspectiveCamera](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)

    * Normal camera. `Field of View`. `Aspect Ratio`.

---

## Perspective Camera

```js
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
```

* __Field of View__

    * Camera view's `vertical amplitude angle` in degrees.

    * Normally set around `45` to `75`. Otherwise causes peripheral distortion.

* __Aspect Ratio__

    * `width / height` of `viewport`. Tie to `canvas` dimensions. Tie to `resize events`.

* __Clipping__

    * `min - max` range in which to perform the render.

    * Low min values can cause `z-fighting` in the render engine.

---

## Orthographic Camera

```js
const camera = new THREE.OrthographicCamera(- 1, 1, 1, - 1, 0.1, 100)
```

* Define how far the camera can see in each direction (left, right, top and bottom). 

---

## Camera Controls

* [DeviceOrientationControls](https://threejs.org/docs/#examples/en/controls/DeviceOrientationControls)

    * Retrieve the device orientation if your device.

* [FlyControls](https://threejs.org/docs/#examples/en/controls/FlyControls)

    * Move the camera like if you were on a spaceship

* [FirstPersonControls](https://threejs.org/docs/#examples/en/controls/FirstPersonControls)

    * Move the camera like if you were on a spaceship but with a fixed 'up' axis.

* [PointerLockControls](https://threejs.org/docs/#examples/en/controls/PointerLockControls)

    * Hide cursor. FPS like control.

    * [Pointer Lock API](https://developer.mozilla.org/docs/Web/API/Pointer_Lock_API)

* [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)

    * Rotate around a point. Zoom in and out.

* [TrackballControls](https://threejs.org/docs/#examples/en/controls/TrackballControls)

    * Rotate around a point. Zoom in and out. No limits in terms of vertical angle

* [TransformControls](https://threejs.org/docs/#examples/en/controls/TransformControls)

    * Non-camera. Add a gizmo to an object to move that object.

* [DragControls](https://threejs.org/docs/#examples/en/controls/DragControls)

    * Non-camera. Move object on the plane facing the camera.

---

## Orbit Controls

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// ...
const controls = new OrbitControls(camera, canvas)
// ...
```

* __Target__ - The `target` property can be used to focus on an object in the scene.

    * `controls.target.y = 2`

* __Damping__

* `Damping` will smooth the animation by adding acceleration and friction formulas.

```js
// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// ...
const tick = () => {
    // ...
    // Update controls
    controls.update()
    // ...
}
```
    
---

## API

* __Move__ - `camera.position.z = 2`

* __Look At__ - `camera.lookAt(mesh.position)`

* __Mouse Control__ - Manual or use control.

```js
// Add event listener for mouse events.
window.addEventListener('mousemove', (event) => {
    // Normalise to the range of [-0.5. 0.5] 
    // y is inverted as canvas y axis goes top to bottom.
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height - 0.5)
})

// Update camera in 'render loop'.
const loop = () => {
    // ...
    sensitivity = 5
    camera.position.x = cursor.x * sensitivity
    camera.position.y = cursor.y * sensitivity
    // ...
}
```

---

## Resources

* [Camera - API Docs](https://threejs.org/docs/#api/en/cameras/Camera)