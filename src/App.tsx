import React from 'react';
import './App.css';
import { Counter } from './app/features/counter/Counter';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
