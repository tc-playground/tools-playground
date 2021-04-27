# Debug

## Overview

* Add UI widgets to render canvas to tweak properties of objects.

---

## dat.gui

* __Elements__

    * `Range` — for numbers with minimum and maximum value
    * `Color` — for colors with various formats
    * `Text` — for simple texts
    * `Checkbox` — for booleans (true or false)
    * `Select` — for a choice from a list of values
    * `Button` — to trigger functions
    * `Folder` — to organize your panel if you have too many elements


* __Example__

```js
import * as dat from 'dat.gui'

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Parameters
const parameters = {
    color: 0xff0000,
    spin: () => {
        gsap.to(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI * 2 })
    }
}

// Debug
const gui = new dat.GUI({
    // closed: true,
    width: 400
})
// gui.hide()
gui.add(mesh.position, 'y').min(- 3).max(3).step(0.01).name('elevation')
gui.add(mesh, 'visible')
gui.add(material, 'wireframe')
gui
    .addColor(parameters, 'color')
    .onChange(() =>{
        material.color.set(parameters.color)
    })
gui.add(parameters, 'spin')
```
---

## Libraries

* [dat.gui](https://github.com/dataarts/dat.gui)

* [control-panel](https://github.com/freeman-lab/control-panel)

* [controlkit.js](https://github.com/automat/controlkit.js)

* [guify](https://github.com/colejd/guify)

* [oui](https://github.com/wearekuva/oui)