import React from "react";
import styled from "styled-components";

const SocialMediaIconWithHandle = ({ handle, name, link }) => {
  return (
    <StyledSocialMediaIconContainer>
      <StyledIconLink
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

const StyledSocialMediaIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 32px;
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
      default:
        return "#ababab";
    }
  }};
  color: white;
  margin-right: 1.2rem;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

export default SocialMediaIconWithHandle;
