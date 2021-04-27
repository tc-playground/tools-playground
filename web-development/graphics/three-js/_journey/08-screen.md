# Screen - Full-screen and Resizing

## Canvas View Port

```js
import './style.css'
// ...
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
```

---

## Canvas Viewport CSS

```css
/* Remove all margins and padding */
* {
    margin: 0;
    padding: 0;
}
/* Fix to top-right and remove outline */
.webgl {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
}
/* Remove scroll-bars */
html, body {
    overflow: hidden;
}
```

---

## Pixel Ratio

* Different screens have different `pixel ratios`.

    * `1` - Normal monitor.

    * `2` - Retina display.

* This defines how many `physical pixels` are use to render a `virtual pixel`.

* `3` should be enough. Large density cause rendering difficulty.

---

## Handle window resize events

```js
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    // Update Renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
```

---

## Full Screen

```js
window.addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if(!fullscreenElement) {
        if(canvas.requestFullscreen) {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    }
    else {
        if(document.exitFullscreen) {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
})
```