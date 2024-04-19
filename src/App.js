import logo from './logo.svg';
import './App.css';
import ShapE from './ShapE';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
            <ShapE />
            {/* Add other components similarly */}
        </div>
    </div>
        
  );
}

export default App;
