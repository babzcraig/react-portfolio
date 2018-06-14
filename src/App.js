import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./constants/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header linkTo={"home"} />
          <Route path="/" component={MainContent} />
          <Navbar navItems={routes} />
        </div>
      </Router>
    );
  }
}

export default App;
