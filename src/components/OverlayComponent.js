import React from "react";
import styled from "styled-components";

export default class OverlayComponent extends React.Component {
  render() {
    const { visible } = this.props;
    const classes = [];
    if (visible) classes.push("overlay");
    return (
      <StyledOverlayContainer>
        <div className={classes.join(" ")} />
      </StyledOverlayContainer>
    );
  }
}

const StyledOverlayContainer = styled.div`
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    opacity: 0.65;
    z-index: 90;
    transition: all 0.4s ease-in-out;
  }
`;
