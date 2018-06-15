import React, { Component } from "react";
import { StyledTitleText, MidScreenContainer, StyledBodyText } from "../styled";
import avatar from "../assets/img/babs_headsot_new.jpg";
import Avatar from "../components/Avatar";
import { aboutText1, aboutText2, aboutText3 } from "../constants/copy";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";

class About extends Component {
  render() {
    const { pathname } = this.props.location;
    const themeColor = getThemeColorForRoute(pathname);

    return (
      <MidScreenContainer>
        <Avatar imageSrc={avatar} />
        <StyledTitleText color={themeColor} centered>
          {"Babs Craig"}
        </StyledTitleText>
        <StyledBodyText>{aboutText1}</StyledBodyText>
        <StyledBodyText>{aboutText2}</StyledBodyText>
        <StyledBodyText>{aboutText3}</StyledBodyText>
      </MidScreenContainer>
    );
  }
}

export { About };
