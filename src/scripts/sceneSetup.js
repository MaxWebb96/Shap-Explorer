// import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import * as THREE from 'three';
import { initControls } from './interactions.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

const scene = new THREE.Scene();
let camera, renderer;

function setupScene(viewerElement) {
    scene.background = new THREE.Color(0xaaaaaa);
    camera = new THREE.PerspectiveCamera(50, viewerElement.clientWidth / viewerElement.clientHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(viewerElement.clientWidth, viewerElement.clientHeight);
    viewerElement.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 1);
    scene.add(light);

    camera.position.z = 5;
    initControls(camera, renderer); // Ensure initControls is also adapted to be more modular

    scene.background = new THREE.Color(0xaaaaaa);
    initScene();
    // Further initialization as needed
}

function onWindowResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // Update controls if any
}

function initScene() {
    // Other scene setup like camera, lights, etc.

    // Create a large plane
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000); // Adjust size as needed
    const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000, // Color doesn't matter if the plane is invisible
        visible: false // Make the plane invisible
    });
    const selectionPlane = new THREE.Mesh(planeGeometry, planeMaterial);

    // Rotate the plane to align it with the ground or the selection area
    selectionPlane.rotation.x = -Math.PI / 2;

    // Add the plane to the scene
    scene.add(selectionPlane);

    // add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.name = 'cube'; // Set a name for the mesh
    scene.add(cube);

    loadPLY();
}

function loadPLY() {
    const loader = new PLYLoader();
    
    loader.load(

        './model/spiralStairs.ply',
        
        (geometry) => {
            geometry.computeVertexNormals();
            const material = new THREE.MeshStandardMaterial({ vertexColors: true });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.rotateX(-Math.PI / 2);
            mesh.name = 'spiralStairs'; // Set a name for the mesh
            scene.add(mesh);
            // console.log('Loaded PLY model');
        },
        undefined,
        (error) => console.error('An error happened:', error)
    );
};


export { setupScene, animate, scene, camera, renderer };
