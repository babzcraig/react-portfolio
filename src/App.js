import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import routes from "./constants/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header linkTo={"/home"} />
        <Switch>
          <Route path="/" component={MainContent} />
        </Switch>
        <Navbar navItems={routes} />
      </div>
    );
  }
}

export default App;
