import React, { useEffect, useRef } from 'react';
import { setupPreviewer, animatePreviewer, loadPLYFileToPreviewer } from './scripts/setupPreviewer';

function Previewer() {
    const previewerRef = useRef(null);

    useEffect(() => {
        if (previewerRef.current) {
            setupPreviewer(previewerRef.current); // Pass the ref element to the setup function
            loadPLYFileToPreviewer(0); // Optionally start with a predefined model index
        }

        // return () => {
        //     // Cleanup when the component unmounts
        //     if (previewerRef.current) {
        //         previewerRef.current.removeChild(previewRenderer.domElement);
        //         previewRenderer.dispose();
        //     }
        // };
    }, []);

    return <div ref={previewerRef} id = "previewer"></div>;
}

export default Previewer;
