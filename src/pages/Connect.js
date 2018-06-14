import React, { Component } from "react";
import { StyledTitleText, StyledConnectLink } from "../styled";
import SocialMediaIconWithHandle from "../components/SocialMediaIconWithHandle";
// import styled from "styled-components";

class Connect extends Component {
  render() {
    return (
      <div className="connect">
        <StyledTitleText>{"I'd Love to hear from you"}</StyledTitleText>
        <div>
          <span className="tagline">Send an email...</span>
          <StyledConnectLink href="mailto:babscraig@gmail.com">
            babscraig@gmail.com
          </StyledConnectLink>
        </div>
        <div>
          <span className="tagline">
            {"Or call. I'm available between 9am to 6pm EDT"}
          </span>
          <StyledConnectLink href="tel:+2348095997279">
            +234 809 599 7279
          </StyledConnectLink>
        </div>
        <span className="margin24pxV" />
        <StyledTitleText className="title">{"Connect With me"}</StyledTitleText>
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
      </div>
    );
  }
}

export { Connect };
