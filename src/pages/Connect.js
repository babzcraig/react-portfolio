import React, { Component } from "react";
import { StyledTitleText, MidScreenContainer } from "../styled";
import {
  SocialMediaIconWithHandle,
  ContactIconWithDetails
} from "../components/SocialMediaIconWithHandle";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";

class Connect extends Component {
  render() {
    const { pathname } = this.props.location;
    const themeColor = getThemeColorForRoute(pathname);

    return (
      <MidScreenContainer>
        <StyledTitleText color={themeColor}>
          {"I'd Love to hear from you"}
        </StyledTitleText>
        <div style={{ marginBottom: 32 }}>
          <ContactIconWithDetails
            details={"babscraig@gmail.com"}
            msg={"Send an email..."}
            name={"envelope"}
            link={"mailto:babscraig@gmail.com"}
          />
        </div>
        <div style={{ marginBottom: 64 }}>
          <ContactIconWithDetails
            details={"+234 809 599 7279"}
            msg={"Or call. I'm available between 9am to 6pm EDT"}
            name={"phone"}
            link={"tel:+2348095997279"}
          />
        </div>
        <StyledTitleText color={themeColor} className="title">
          {"Connect With me"}
        </StyledTitleText>
        <SocialMediaIconWithHandle
          handle={"@babzcraig"}
          name={"github"}
          link={"https://github.com/babzcraig"}
        />
        <SocialMediaIconWithHandle
          handle={"@thebabscraig"}
          name={"medium-m"}
          link={"https://medium.com/@thebabscraig"}
        />
        <SocialMediaIconWithHandle
          handle={"@thebabscraig"}
          name={"twitter"}
          link={"https://www.twitter.com/thebabscraig"}
        />
      </MidScreenContainer>
    );
  }
}

export { Connect };
