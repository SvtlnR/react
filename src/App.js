import React, { Component } from 'react';
import Button from './Button.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Речь политика</h1>
        </header>
        <p className="App-intro">
          <div>
            <Button/>
          </div>  
        </p>
      </div>
    );
  }
}

export default App;
