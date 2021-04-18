// Canvas - The DOM canvas where the scene will be drawn.
//
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene - A 'scene' consisting of 'meshes' and 'cameras'.
//
const scene = new THREE.Scene()

// Object - A 'mesh' consisting of a 'geometry' and a 'material.
//
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000' // Red
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera - View point from which the scene is rendered.
//
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3 // Move the three unit towards the screen (from the origin)
scene.add(camera)

// Renderer - Renders and displays the scene.
//
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera) // Define which scene camera is used.