# 3D Text

## Overview

* __FontLoader__ - Can be used to load a `font`.

* __TextGeometry__ - Can be used to represent `3D Text`.

    * `bevels`, `curve segments`, `size`, etc.

---

## Load Font

```js
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
const fontLoader = new THREE.FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        const textGeometry = new THREE.TextGeometry(
            'Hello Three.js',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
    }
)
```

---

## Center Origin

```js
textGeometry.computeBoundingBox()
textGeometry.translate(
    - (textGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
    - (textGeometry.boundingBox.max.y - 0.02) * 0.5, // Subtract bevel size
    - (textGeometry.boundingBox.max.z - 0.03) * 0.5  // Subtract bevel thickness
)
```

```js
textGeometry.center()
```