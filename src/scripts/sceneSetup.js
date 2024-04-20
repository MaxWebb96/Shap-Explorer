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

export { setupScene, animate, scene, camera, renderer };
