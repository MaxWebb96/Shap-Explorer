// ShapE.js
import React, { useState } from 'react';

function ShapE() {
    const [guidanceScale, setGuidanceScale] = useState(16);

    const updateGuidanceScale = (value) => {
        setGuidanceScale(value);
    };

    return (
        <div className="module">
            <h2>Shap-E Generating</h2>
            <textarea id="prompt-text" rows="1" cols="50">a chair</textarea>
            <label htmlFor="guidance-scale">Guidance scale:</label>
            <span>{guidanceScale}</span>
            <input
                type="range"
                id="guidance-scale"
                name="range"
                min="0"
                max="100"
                step="1"
                value={guidanceScale}
                onChange={(e) => updateGuidanceScale(e.target.value)}
            />
            <button type="button">Generating</button>
            <button type="button">Area-Generating</button>
            <button type="button">Place</button>
            <button type="button">Undo</button>
        </div>
    );
}

export default ShapE;
