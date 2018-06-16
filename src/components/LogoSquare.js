import React from "react";
import styled from "styled-components";

const LogoSquare = ({
  linkTo,
  style,
  homeVersion,
  onHover,
  themeColor,
  logoIsVisible
}) => {
  return (
    <StyledLogoSquare
      // if homeVersion, logoVisible has to be permanently true
      logoIsVisible={homeVersion ? true : logoIsVisible}
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
  text-decoration: none;
  color: ${({ themeColor }) => themeColor};
  position: ${({ homeVersion }) => (homeVersion ? "static" : "fixed")};
  top: 20px;
  left: ${({ logoIsVisible }) => (logoIsVisible ? "20px" : "-160px")};
  opacity: ${({ logoIsVisible }) => (logoIsVisible ? "1" : "0")};

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
  transition: all 0.5s ease-in-out;

  &:hover {
    text-decoration: none;
    color: ${({ themeColor }) => themeColor};
    opacity: 0.65;
  }

  .name {
    font-size: ${({ homeVersion }) => (homeVersion ? "4rem" : "2rem")};
  }

  @media only screen and (max-width: 700px) {
    width: ${({ homeVersion }) => (homeVersion ? "186px" : "93px")};
    height: ${({ homeVersion }) => (homeVersion ? "186px" : "93px")};
    line-height: 1.15;
    border-width: ${({ homeVersion }) => (homeVersion ? "8px" : "5px")};

    .name {
      font-size: ${({ homeVersion }) => (homeVersion ? "2.6rem" : "1.3rem")};
    }
  }
`;

export default LogoSquare;
