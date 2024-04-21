import React, { useEffect, useRef, useState } from 'react';
import { setupPreviewer, animatePreviewer, loadPLYFileToPreviewer } from './scripts/setupPreviewer';

function Previewer() {
    const previewerRef = useRef(null);
    const rendererRef = useRef(null);
    const meshRef = useRef(null);

    useEffect(() => {
        let renderer, mesh;
        if (previewerRef.current) {
            const setupObjects = setupPreviewer(previewerRef.current);
            renderer = setupObjects.renderer;
            mesh = setupObjects.mesh;
            loadPLYFileToPreviewer(0);
        }
    
        return () => {
            // Ensure all objects are available and the DOM element is attached before attempting to clean up
            if (previewerRef.current && renderer && renderer.domElement && previewerRef.current.contains(renderer.domElement)) {
                previewerRef.current.removeChild(renderer.domElement);
                renderer.dispose();
            }
            if (mesh) {
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) mesh.material.dispose();
            }
        };
    }, []);

    return <div ref={previewerRef} id="previewer"></div>;
}

export default Previewer;
