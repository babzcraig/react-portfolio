import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Navbar
          navItems={[
            {text: "Portfolio", link: "portfolio", id: 1},
            {text: "Skills", link: "skills", id: 2},
            {text: "About", link: "about", id: 3},
            {text: "Connect", link: "connect", id: 4}
          ]} />
      </div>
    );
  }
}

export default App;
