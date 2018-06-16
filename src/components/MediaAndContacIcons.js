import React from "react";
import styled from "styled-components";
import { StyledConnectLink } from "../styled";

const SocialMediaIconWithHandle = ({ handle, name, link }) => {
  return (
    <StyledSocialMediaIconContainer name={name}>
      <StyledIconLink
        className="icon-link"
        name={name}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-${name}`} />
      </StyledIconLink>
      <span style={{ lineHeight: 1 }}>{handle}</span>
    </StyledSocialMediaIconContainer>
  );
};

const ContactIconWithDetails = ({ details, msg, name, link }) => {
  return (
    <StyledSocialMediaIconContainer name={name}>
      <StyledIconLink
        className="icon-link"
        name={name}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fas fa-${name}`} />
      </StyledIconLink>
      <div>
        {msg && (
          <span style={{ lineHeight: 1, display: "inline-block" }}>{msg}</span>
        )}
        <StyledConnectLink href={link}>{details}</StyledConnectLink>
      </div>
    </StyledSocialMediaIconContainer>
  );
};

const StyledSocialMediaIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 32px;
  cursor: pointer;

  &:hover {
    .icon-link {
      text-decoration: none;
      background: white;
      color: ${({ name }) => {
        switch (name) {
          case "twitter":
            return "#009cfa";
          case "github":
            return "#24292f";
          case "medium-m":
            return "#00c072";
          case "envelope":
            return "#e43a29";
          case "phone":
            return "#0067ca";
          default:
            return "#ababab";
        }
      }};
    }
  }
`;

const StyledIconLink = styled.a`
  background: ${({ name }) => {
    switch (name) {
      case "twitter":
        return "#009cfa";
      case "github":
        return "#24292f";
      case "medium-m":
        return "#00c072";
      case "envelope":
        return "#e43a29";
      case "phone":
        return "#0067ca";
      default:
        return "#ababab";
    }
  }};
  color: white;
  margin-right: 1.2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

export { SocialMediaIconWithHandle, ContactIconWithDetails };
