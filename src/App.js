import logo from './logo.svg';
import './App.css';
import ShapE from './ShapE';
import { useEffect } from 'react';

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
// import { OBJLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/OBJLoader.js';
import { PLYLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/PLYLoader.js';
import axios from 'https://cdn.skypack.dev/axios';

import { setupScene, animate, scene } from './scripts/sceneSetup';
import { setupPreviewer } from './scripts/setupPreviewer';
import { controls } from './scripts/interactions';

function App() {
  useEffect(() => {
    // Initialize the scene
    setupScene(); 
    setupPreviewer();
    animate();
    
    // Example event binding
    const btnGenerate = document.getElementById('btn-generate');
    btnGenerate.addEventListener('click', generateHandler);

    return () => {
      btnGenerate.removeEventListener('click', generateHandler);
    };
  }, []);

  const generateHandler = (event) => {
    event.preventDefault();
    // Logic for button click
  };

  return (
    <div className="App">
      <header className="App-header">
        Shap-Explorer
      </header>

      <div>
            <ShapE />
            {/* Add other components similarly */}
        </div>
    </div>
        
  );
}

export default App;
