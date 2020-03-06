import React from 'react';
import logo from './logo.svg';
import AppText from './shared/AppText';
import AppLink from './shared/AppLink';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppText />
        <AppLink />
      </header>
    </div>
  );
}

export default App;
