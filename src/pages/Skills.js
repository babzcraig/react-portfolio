import React, { Component } from "react";
import { StyledTitleText, MidScreenContainer, StyledBodyText } from "../styled";
import { aboutText1 } from "../constants/copy";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";

class Skills extends Component {
  render() {
    const { pathname } = this.props.location;
    const themeColor = getThemeColorForRoute(pathname);

    return (
      <MidScreenContainer>
        <StyledTitleText color={themeColor} centered>
          {`Some of the skills I've picked up along the way`}
        </StyledTitleText>
        <StyledBodyText>{aboutText1}</StyledBodyText>
      </MidScreenContainer>
    );
  }
}

export { Skills };
