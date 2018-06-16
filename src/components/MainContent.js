import React from "react";
import {
  Home,
  PortfolioWithLogoSquareConsumer,
  AboutWithLogoSquareConsumer,
  ConnectWithLogoSquareConsumer,
  SkillsWithLogoSquareConsumer
} from "../pages";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

class MainContent extends React.Component {
  _setMainContentRef = e => (this.mainContentRef = e);

  componentDidUpdate(e) {
    // if (
    //   window.innerWidth < 993 &&
    //   e.history.location.pathname !== e.location.pathname &&
    //   document.documentElement.className.indexOf("nav-open") !== -1
    // ) {
    //   document.documentElement.classList.toggle("nav-open");
    // }
    // Scroll to top on page change
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainContentRef.scrollTop = 0;
    }
  }

  render() {
    // const { enter, innerHTML, entryCount } = this.state;

    return (
      <StyledMainContent className="main-content" ref={this._setMainContentRef}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/portfolio"
            component={PortfolioWithLogoSquareConsumer}
          />
          <Route path="/skills" component={SkillsWithLogoSquareConsumer} />
          <Route path="/connect" component={ConnectWithLogoSquareConsumer} />
          <Route path="/about" component={AboutWithLogoSquareConsumer} />
          <Redirect to="/home" />
        </Switch>
      </StyledMainContent>
    );
  }
}

const StyledMainContent = styled.div``;

export default MainContent;
