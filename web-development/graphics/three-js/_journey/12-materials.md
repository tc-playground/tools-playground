# Materials

## Overview

* `Materials` are used to `put a color` on each `visible pixel` of the `geometries`.

* The `algorithms` that decide on the `color of each pixel` are written in programs called `shaders`. 

* Standard `materials` are available with built-in `shaders`.

* Different materials behave differently, and, have different computational requirements.

    * e.g. basic bitmap materials, materials that need a light source, etc. 

* __Material Types__

    * __Basic__ - `MeshBasicMaterial`, `MeshNormalMaterial`, `MeshMatcapMaterial`, `MeshDepthMateria`.

    * __Physical__ - `MeshLambertMaterial`, `MeshPhongMaterial`, `MeshLambertMaterial`, `MeshToonMaterial`, `MeshStandardMaterial`, `MeshPhysicalMaterial`. Require lighting.

* __Environment Maps__

    * Provide a `surrounding image` to `reflect into the scene`.

    * `ThreeJS` only support `cube maps` 


---

## Standard Mesh Materials

* __MeshBasicMaterial__

    * Basic material, low computation cost. Requires no lighting.

    * Wireframes, opacity, sidedness.

    * Must set `transparent` to true to enable transparency.

    ```js
    const material = new THREE.MeshBasicMaterial()
    material.map = albedoTexture
    material.color = new THREE.Color('#ff0000')
    material.wireframe = false
    material.transparent = true
    material.opacity = 0.5
    material.alphaMap = alphaTexture
    // THREE.FrontSide
    // THREE.BackSide
    // THREE.DoubleSide
    material.side = THREE.DoubleSide
    ```

* __MeshNormalMaterial__

    * Extends the `MeshBasicMaterial` to be able to incorporate `normal maps`.

    * These provide data about the `normals of each pixels` that allow shaders to produce additional effects, e.g. `flat shading`.

    ```js
    const material = new THREE.MeshNormalMaterial()
    material.flatShading = true
    ```

* __MeshMatcapMaterial__

    * `Material Capture` materials uses a special `pixel map` that the renderer `select pixels from` to `simulate shading`.

    * `MatCap shaders` requires a `spherical image` as a `source`.

    ```js
    const matcapTexture = textureLoader.load('/textures/matcaps/1.png')
    const material = new THREE.MeshMatcapMaterial()
    material.matcap = matcapTexture
    ```

* __MeshDepthMaterial__

    * Color the geometry based on how far it is to the camera.

        * `white` if it's close to the camera's `near value`.
        
        * `black` if it's close to the camera's `far value`.
    
    ```js
    const material = new THREE.MeshDepthMaterial()
    ```

* __MeshLambertMaterial__

    * Requires lighting.

    * Supports same properties as `MeshBasicMaterial`.

    * Low computational requirements, but, has some artifacts.

    ```js
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)
    // Material
    const material = new THREE.MeshLambertMaterial()
    ```

* __MeshPhongMaterial__

    * Requires lighting.

    * Less performant than `MeshLambertMaterial`, but, has fewer artifacts.

    * Can control `shininess` and `specular` highlights.

    ```js
    const material = new THREE.MeshPhongMaterial()
    material.shininess = 100
    material.specular = new THREE.Color(0x1188ff)
    ```

* __MeshToonMaterial__

    * Requires lighting.

    * `cell-shading`, `cartoon effect`, `chiaroscuro`.

    ```js
    const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')
    const material = new THREE.MeshToonMaterial()
    material.gradientMap = gradientTexture
    // Handle tiny texture gradientMaps.
    gradientTexture.minFilter = THREE.NearestFilter
    gradientTexture.magFilter = THREE.NearestFilter
    gradientTexture.generateMipmaps = false
    ```

* __MeshStandardMaterial__

    * Requires lighting.

    * Uses `physically based rendering` principles.

        * e.g. Supports `metalness`, `roughness`, `ambient occlusion`, `displacement`, `normals`, `alphas`, etc.

    ```js
    const material = new THREE.MeshStandardMaterial()
    material.map = albedoTexture
    // material.metalness = 0.45
    // material.roughness = 0.65

    // Clone and create new set of UV coordinates.
    mesh.geometry.setAttribute('uv2', new THREE.BufferAttribute(mesh.geometry.attributes.uv.array, 2))

    // 'aoMap' property (literally "ambient occlusion map") will add shadows where the texture is dark. 
    //
    material.aoMap = ambientOcclusionTexture
    material.aoMapIntensity = 1

    // Displacement Map - NB: Requires enough sub-division in the mesh geometry.
    material.displacementMap = displacementTexture

    // Metalness Map
    material.metalnessMap = metalnessTexture
    
    // Roughness Map
    material.roughnessMap = roughnessTexture

    // Normal Map
    material.normalMap = normalTexture
    material.normalScale.set(0.5, 0.5)

    // Alpha Map
    material.transparent = true
    material.alphaMap = alphaTexture
    ```

* __MeshPhysicalMaterial__

    * The same as the MeshStandardMaterial.
    
    * Additionally supports `clear coat` effects.

* __PointsMaterial__

    * Produce `particle effects`.

* __ShaderMaterial__ and __RawShaderMaterial__

    * Create `custom materials` with `custom shaders`.

---

## Environment Maps

```js
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)

const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.jpg',
    '/textures/environmentMaps/0/nx.jpg',
    '/textures/environmentMaps/0/py.jpg',
    '/textures/environmentMaps/0/ny.jpg',
    '/textures/environmentMaps/0/pz.jpg',
    '/textures/environmentMaps/0/nz.jpg'
])
material.envMap = environmentMapTexture
```

---

## Resources

* __Three__

    * [MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)

    * [Colour](https://threejs.org/docs/index.html#api/en/math/Color)

* __Matcap__

    * [MatCap Shader](https://learn.foundry.com/modo/901/content/help/pages/shading_lighting/shader_items/matcap.html)

* __Environment Map Resources__

    * [HDRI Haven](https://hdrihaven.com/)