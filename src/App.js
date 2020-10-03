/*global chrome*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={ "/news.png"} width="40" height="40"/>
          <h1 className="App-title">FONT chrome extension by React</h1>
          <img src={logo} className="App-logo" alt="logo" width="35" height="35" />
          </header>
      </div>
    );
  }
}

export default App;
