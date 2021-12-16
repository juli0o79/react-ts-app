import logo from './logo.svg';
import React from 'react';
import './App.css';
import Text from './componentes/Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text text="oiiii" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.ts</code> and save to reload.
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
    </div>
  );
}

export default App;
