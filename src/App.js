import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header linkTo={"home"} />
        <MainContent />
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
