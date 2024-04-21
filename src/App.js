import './App.css';
import ThreeScene from './ThreeScene';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// import { OBJLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/OBJLoader.js';
import { PLYLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/PLYLoader.js';
import axios from 'https://cdn.skypack.dev/axios';
import Previewer from './Previewer';

// import { setupPreviewer } from './scripts/setupPreviewer';
// import { controls } from './scripts/interactions';

function App() {
  const [promptText, setPromptText] = useState('');
  const [guidanceScale, setGuidanceScale] = useState(1);

    const handleGenerateClick = () => {
        // loadPLYFromAPI(promptText, guidanceScale, loadPLYtoPreviewer);
    };

    const handleAreaGeneratingClick = () => {
        // Assuming you have defined these functions and states elsewhere
        // setIsSelectionModeActive(true);
        // controls.enabled = false;
        // enableSelectionListeners();
    };

  return (
          <div>
            Shap-Explorer 1.0
            <div>
                <ThreeScene />
            </div>

            <div className = "toolbar">
              <div>
                <Previewer />
              </div>
            <input 
                type="text" 
                value={promptText} 
                onChange={e => setPromptText(e.target.value)}
                placeholder="Enter your prompt"
            />
            <input 
                type="number" 
                defaultValue={16}
                value={guidanceScale} 
                onChange={e => setGuidanceScale(e.target.value)}
                placeholder="Enter your guidance scale"
            />
            <button onClick={handleGenerateClick}>Generate</button>
            <button onClick={handleAreaGeneratingClick}>Area Generating</button>
            
            </div>
        </div>
        
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
