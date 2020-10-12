/*global chrome*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaCard from './MediaCard.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ "/news.png"} className="App-logo" alt="logo" width="15" height="15"/>
            <div>FONT</div>
          </header>
          
              
  <div style={{ 
             background: "#1B1D2C",
              display: "flex",
              justifyContent: "space-evenly"}} >

          <div>
              <div className="header2"> 📺  Latest NEWS </div>
              <div style={{
              display: "flex",
              flexWrap: "wrap"
              }}>
               <MediaCard />
               <MediaCard />
               <MediaCard />
               <MediaCard />
               <MediaCard />
               <MediaCard />
               </div>
          </div>

          <div>
              <div className="header2">💡 Recommended NEWS </div>
              <div style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
               <MediaCard />
               <MediaCard />
               </div>
            </div>
          </div>  

      </div>
    );
  }
}

export default App;
