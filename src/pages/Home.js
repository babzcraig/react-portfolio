import React, { Component } from "react";
import styled from "styled-components";
import LogoSquare from "../components/LogoSquare";
import OverlayComponent from "../components/OverlayComponent";

class Home extends Component {
  state = {
    overlayVisible: false
  };

  _toggleOverlayVisibility = () => {
    this.setState(({ overlayVisible }) => ({
      overlayVisible: !overlayVisible
    }));
  };

  render() {
    const { overlayVisible } = this.state;
    const logoSquareHoverStyle = {
      borderColor: "white",
      color: "white",
      opcacity: 1
    };
    return (
      <StyledHome>
        <div className="logo-container">
          <LogoSquare
            onHover={this._toggleOverlayVisibility}
            homeVersion
            linkTo={"/portfolio"}
            style={overlayVisible ? logoSquareHoverStyle : null}
          />
          <p style={overlayVisible ? { color: "white" } : null}>
            Software Engineer, React + React Native Specialist
          </p>
        </div>
        <OverlayComponent visible={overlayVisible} />
      </StyledHome>
    );
  }
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;

  .logo-container {
    margin-top: 54px;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { Home };
