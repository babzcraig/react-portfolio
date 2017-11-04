import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Navbar
          navItems={[
            {text: "Portfolio", link: "portfolio"},
            {text: "Skills", link: "skills"},
            {text: "About", link: "about"},
            {text: "Connect", link: "connect"}
          ]} />
      </div>
    );
  }
}

export default App;
