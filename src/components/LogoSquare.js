import React from "react";
import styled from "styled-components";

const LogoSquare = ({ linkTo, style, homeVersion, onHover, themeColor }) => {
  return (
    <StyledLogoSquare
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      homeVersion={homeVersion}
      themeColor={themeColor}
      style={style}
      className="logo-window"
      href={linkTo}
    >
      <div className="name">Babs</div>
      <div className="name">Craig</div>
    </StyledLogoSquare>
  );
};

const StyledLogoSquare = styled.a`
  position: ${({ homeVersion }) => (homeVersion ? "static" : "absolute")};
  top: 20px;
  left: 20px;
  border: ${({ homeVersion, themeColor }) => {
    if (homeVersion) return "11px solid #000";
    return `8px solid ${themeColor}`;
  }};
  width: ${({ homeVersion }) => (homeVersion ? "300px" : "154px")};
  height: ${({ homeVersion }) => (homeVersion ? "300px" : "154px")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 1.15;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
    opacity: 0.65;
  }

  .name {
    font-size: ${({ homeVersion }) => (homeVersion ? "4rem" : "2rem")};
  }

  @media only screen and (max-width: 700px) {
    width: 93px;
    height: 93px;
    line-height: 1.15;
    border-width: 5px;
    .name {
      font-size: 1.3rem;
    }
  }
`;

export default LogoSquare;
