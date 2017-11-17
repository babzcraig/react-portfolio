import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header linkTo={"home"} />
          <Route path="/" component={MainContent} />
          <Navbar
            navItems={[
              {text: "Portfolio", link: "/portfolio"},
              {text: "Skills", link: "/skills"},
              {text: "About", link: "/about"},
              {text: "Connect", link: "/connect"}
            ]} />
        </div>
      </Router>
    );
  }
}

export default App;
