import React, { useEffect, useRef } from 'react';
import { setupScene, animate, renderer, camera } from './scripts/sceneSetup';
// import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import * as THREE from 'three';

const ThreeScene = () => {
    const viewerRef = useRef(null);
    
    useEffect(() => {
        if (viewerRef.current) {
            // Setup the scene
            // viewerRef.current.appendChild(renderer.domElement);
            // renderer.setSize(viewerRef.current.clientWidth, viewerRef.current.clientHeight);

            const onWindowResize = () => {
                if (viewerRef.current && camera && renderer) {
                    camera.aspect = viewerRef.current.clientWidth / viewerRef.current.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(viewerRef.current.clientWidth, viewerRef.current.clientHeight);
                }
            };

            if (viewerRef.current) {
            setupScene(viewerRef.current);

            const animationId = requestAnimationFrame(animate);

            window.addEventListener('resize', onWindowResize);

            // Cleanup function to stop the animation and clean up Three.js objects
            return () => {
                cancelAnimationFrame(animationId);
                window.removeEventListener('resize', onWindowResize);
                viewerRef.current.removeChild(renderer.domElement);
                renderer.dispose(); // Clean up the renderer

                // Optional: Clean up other resources, like geometries, materials, textures
            };
        }
        }
    }, []);

    return <div ref={viewerRef} id="viewer"></div>;
};

export default ThreeScene;
