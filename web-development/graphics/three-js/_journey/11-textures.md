# Textures

## Overview

* __Textures__ are sets of `data` that can me applied to `geometries`.

* __Texture Types__ - `Albedo`, `alpha`, `height`, `normal`, `ambient occlusion`, `metalness`, `roughness`.

* __Materials__

    * `Textures` are applied to `materials` which are paired with `geometries` in a `mesh`.

    * The `material` the `texture` is applied too affects how it `behaves`.

* `Physically Based Rendering (PBR)`.

* __UV Unwrapping__

    * `UV Coordinates` are 2D coordinates that mark sections of the `texture`.

    * Textures are `stretched` / `squeezed` to fi the target `geometry`.

* __Filtering and Mipmapping__ - Using different images textures at different ranges.

    * __Minification Filters__

    * __Magnification Filters__

* __Texture Dimensions__

    * `weight` - The number of bytes used by an image. `.jpg` for loss compression. `.png` for non-lossy compression.
    * `size/resolution` - Size of the image. Must be `2^N` to prevent stretching.
    * `data` - Alpha maps, normal textures, etc.

* __Loading__ - Vanilla JS, `TextureLoader`, `LoadingManager`.

---

## Texture Types

* __Color (Albedo) Textures__

    * Take the pixels of the texture and apply them to the geometry.

* __Alpha Textures__ 

    * A grayscale image. Whiter pixels will be more visible. Can be used for masking.

* __Height Textures__ 

    * The `height texture` is a `grayscale image` that will move the vertices to create `relief effects`. 
    
    * Requires subdivisions in the `geometry mesh` to be applied.

* __Normal Textures__ 

    * Provides data defining the `normals` for pixels in a `geometry mesh`.

    * The normal texture can be used to add small details for `physical based rendering`. 
    
    * Have good performance as there is no need to subdivide the geometry.

* __Ambient Occlusion Texture__

    *  The ambient occlusion texture is a `grayscale image` that will `fake shadows` in the surface's crevices.

    > For the default `Three.js shader` you need create an additional `uv coordinates` property called `uv2`.

* __Metalness Textures__ 

    * A `grayscale image` that will specify which parts of the `mesh geometry` are `metallic (white)` and `non-metallic (black`). 
    
    * Used to create reflections.

    * Physical based rendering.

* __Roughness Textures__ 

    * A `grayscale image` that will specify which parts of the `mesh geometry` are `rough (white)` and `smooth (black)`. 
    
    * Used to create areas where light is diffused.

    * Physical based rendering.

---

## Loading textures and apply to them to material.

* __Vanilla JavaScript__

```js
const image = new Image()
const texture = new THREE.Texture(image)
image.addEventListener('load', () => {
    texture.needsUpdate = true
})
image.src = '/textures/door/color.jpg'
const material = new THREE.MeshBasicMaterial({ map: texture })
```

* __Texture Loader__

```js
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load(
    '/textures/door/color.jpg',
    () => {
        console.log('loading finished')
    },
    () => {
        console.log('loading progressing')
    },
    () => {
        console.log('loading error')
    }
)
```

* __Loading Manager (mulitple textures)__

```js
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('loading started')
}
loadingManager.onLoad = () => {
    console.log('loading finished')
}
loadingManager.onProgress = () => {
    console.log('loading progressing')
}
loadingManager.onError = () => {
    console.log('loading error')
}
const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
```

---

## UV Coordinates

* __UV Coordinates__

    ```js
    geometry.attributes.uv
    ```

* __Create UV Coordinates for Ambient Occlusion Map__

    ```js
    mesh.geometry.setAttribute('uv2', new THREE.BufferAttribute(mesh.geometry.attributes.uv.array, 2))
    material.aoMap = ambientOcclusionTexture
    material.aoMapIntensity = 1
    ```

    > NB: For the default `Three.js` shader this attribute is called `uv2`.

* __Transforming Textures__

    ```js
    // Repeat
    colorTexture.repeat.x = 2
    colorTexture.repeat.y = 3
    // Wrap
    colorTexture.wrapS = THREE.RepeatWrapping
    colorTexture.wrapT = THREE.RepeatWrapping
    colorTexture.wrapS = THREE.MirroredRepeatWrapping
    colorTexture.wrapT = THREE.MirroredRepeatWrapping
    // Offset
    colorTexture.offset.x = 0.5
    colorTexture.offset.y = 0.5
    // Rotation
    colorTexture.rotation = Math.PI * 0.25
    colorTexture.center.x = 0.5
    colorTexture.center.y = 0.5
    ```

* __Filtering and Mipmapping__

    * __Filtering__ deals with using `different textures at different ranges`.

    * __Mipmaps__ are an artifact where smaller version of a texture precomputed.

        * A new texture image is created for each half size down to 1 pixel.

        * All image are stored in a `mipmap` image. This is twice the size of the original image.

        * The `mipmap` is stored directly in the graphic card memory.

        * The graphics card determine which image to use based on it's rendered size.

    ```js
    // Min Filters
    //
    // THREE.NearestFilter
    // THREE.LinearFilter
    // THREE.NearestMipmapNearestFilter
    // THREE.NearestMipmapLinearFilter
    // THREE.LinearMipmapNearestFilter
    // THREE.LinearMipmapLinearFilter
    colorTexture.minFilter = THREE.NearestFilter
    // colorTexture.generateMipmaps = false

    // Max Filters
    //
    // THREE.NearestFilter
    // THREE.LinearFilter
    colorTexture.magFilter = THREE.NearestFilter
    ```

---

## References

* __Physical Based Rendering__

    * [Basic Theory of Physically-Based Rendering](https://marmoset.co/posts/basic-theory-of-physically-based-rendering/)

    * [Physically-Based Rendering, And You Can Too!](https://marmoset.co/posts/physically-based-rendering-and-you-can-too/)

* __Texture Libraries__

    * [3D Textures](https://3dtextures.me/)

        * [Door Texture](https://3dtextures.me/2019/04/16/door-wood-001/)

    * [poliigon.com](https://www.poliigon.com/)

    * [Arroway Textures](https://www.arroway-textures.ch/)

* __Compression__

    * [TinyPNG](https://tinypng.com/)

* [Moire Patterns](https://en.wikipedia.org/wiki/Moir%C3%A9_pattern)

