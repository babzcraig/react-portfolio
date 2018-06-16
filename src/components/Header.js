import React from "react";
import { withRouter } from "react-router-dom";
import LogoSquare from "./LogoSquare";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";
import styled from "styled-components";
import { LogoSquareConsumer } from "../context/LogoSquareContext";

const Header = ({ linkTo, match, location }) => {
  const { pathname } = location;
  const isOnHomeRoute = pathname === "/" || pathname === "/home";

  if (isOnHomeRoute) return null;
  return (
    <LogoSquareConsumer>
      {({ logoIsVisible }) => (
        <StyledHeader className="App-header">
          {console.log("is the logo visible?: ", logoIsVisible)}
          <LogoSquare
            logoIsVisible={logoIsVisible}
            themeColor={getThemeColorForRoute(pathname)}
            linkTo={linkTo}
          />
        </StyledHeader>
      )}
    </LogoSquareConsumer>
  );
};

const StyledHeader = styled.header`
  /* background-color: #222; */
  height: 205px;
  padding: 20px;
  color: white;

  @media only screen and (max-width: 700px) {
    height: 130px !important;
  }
`;

export default withRouter(Header);
