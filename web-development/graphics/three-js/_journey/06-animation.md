# Animation

## Animation Loop

* `window.requestAnimationFrame` will execute the `function` you provide on the next `frame`.

* The `function` can also contain a call to `requestAnimationFrame` to `reschedule` itself.

    * This can be used to set up an __animation render loop__.

    ```js
    const loop = () => {
        // Update objects
        mesh.rotation.y += 0.01
        // Render
        renderer.render(scene, camera)
        // Call loop again on the next frame
        window.requestAnimationFrame(loop)
    }
    loop()
    ```

---

## Frame Rate

* `requestAnimation` will be called based on the `frame rate` of the `screen`

    * `60MHz` - `1/60 second`

* This need top be `normalised` to prevent different behaviours at different frame rates.

---

## Frame Rate - Delta Time

* __Delta Time__ - A `time delta` can be calculated to scale `transformations`: 

    ```js
    let time = Date.now()
    const tick = () => {
        // Delta Time
        const currentTime = Date.now()
        const deltaTime = currentTime - time
        time = currentTime
        // Update objects
        mesh.rotation.y += 0.01 * deltaTime
        // Render
        renderer.render(scene, camera)
        // Call loop again on the next frame
        window.requestAnimationFrame(loop)
    }
    loop()
    ```

---

## Frame Rate - ThreeJS Clock

* __Clock__ - Returns the time since the clock was started.

    ```js
    const clock = new THREE.Clock()
    const loop = () => {
        const elapsedTime = clock.getElapsedTime()
        // Update objects
        mesh.rotation.y = elapsedTime
        // ...
    }
    loop()
    ```

---

## Animate an object on a circular path

* [Parametric Equation of a Circle](https://www.mathopenref.com/coordparamcircle.html)

```js
const clock = new THREE.Clock()
const loop = () => {
    const elapsedTime = clock.getElapsedTime()
    // Update objects
    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.y = Math.sin(elapsedTime)
    camera.lookAt(mesh.position)
    // ...
}
loop()
```

---

## Tweens - Animation Libraries

* Apply `tweens` to an object describing an `animation behaviour`.

    ```js
    import gsap from 'gsap'
    gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
    const loop = () => {
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop()
    ```

---

## References

* [requestAnimationFrame - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

* [GSAP](https://greensock.com/gsap/)