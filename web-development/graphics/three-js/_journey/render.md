# Render Screen

## Configure Canvas

```html
<canvas class="webgl"></canvas>
```

```js
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const fov = 75  // vertical degrees
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(fov, aspectRatio)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
```