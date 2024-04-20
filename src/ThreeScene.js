import React, { useEffect, useRef } from 'react';
import { setupScene, animate, scene, camera, renderer } from './scripts/sceneSetup';

const ThreeScene = () => {
    const viewerRef = useRef();

    useEffect(() => {
        if (viewerRef.current) {
            // Setup the scene
            setupScene(viewerRef.current);

            // Start the animation loop
            animate();

            // Cleanup function to stop the animation and clean up Three.js objects
            return () => {
                // Stop the animation
                cancelAnimationFrame(animate);

                // Clean up the renderer and remove it from the DOM
                viewerRef.current.removeChild(renderer.domElement);
                renderer.dispose();

                // Optional: Clean up other resources, like geometries, materials, textures
            };
        }
    }, []);

    return <div ref={viewerRef} id="viewer" style={{ width: '100%', height: '100%' }} />;
};

export default ThreeScene;
