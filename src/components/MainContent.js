import React from "react";
import { Portfolio, Home, About, Connect, Skills } from "../pages";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

class MainContent extends React.Component {
  state = {
    enter: false,
    innerHTML: "waiting to be changed...",
    entryCount: 0
  };

  mouseEnter = e => {
    this.setState(prevState => {
      prevState.entryCount = prevState.entryCount + 1;
      prevState.enter = true;
    });
  };

  mouseLeave = e => {
    this.setState({
      enter: false,
      innerHTML: "moved once now waiting again..."
    });
  };

  mouseMove = e => {
    const x = e.clientX;
    const y = e.clientY;

    const innerHTML = `Moved to X: ${x}, Y: ${y}`;
    this.setState({ innerHTML: innerHTML });
  };

  render() {
    // const { enter, innerHTML, entryCount } = this.state;

    return (
      <StyledMainContent className="main-content">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/connect" component={Connect} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
      </StyledMainContent>
    );
  }
}

const StyledMainContent = styled.div``;

export default MainContent;
