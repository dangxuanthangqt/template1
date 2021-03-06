import './App.css';

import React from 'react';

import HomePage from '@/containers/HomePage';

import logo from './logo.svg';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
};

export default App;
