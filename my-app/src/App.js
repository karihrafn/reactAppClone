import React from 'react';
import './App.css';
import { Home } from './features/Home/Home';

function App() {
  return (
    <div>
      <header className="App-header">
        <p>HEADER</p>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
