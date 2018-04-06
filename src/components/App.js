import React, { Component } from 'react';
import './App.css';
import Intercom from './Intercom/Intercom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
          <h1 className="App-title">Welcome to Intercom News</h1>
        </header>
        <Intercom />
      </div>
    );
  }
}

export default App;
