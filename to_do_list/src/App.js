import React, { Component } from 'react';
import './App.css';
import './Main.js'
import Main from "./Main";
import BackgroundImage from './BackgroundImage.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
