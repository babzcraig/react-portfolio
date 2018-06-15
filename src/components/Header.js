import React from "react";
import { withRouter } from "react-router-dom";
import LogoSquare from "./LogoSquare";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";
import styled from "styled-components";

const Header = ({ linkTo, match, location }) => {
  const { pathname } = location;
  const isOnHomeRoute = pathname === "/" || pathname === "/home";

  if (isOnHomeRoute) return null;
  return (
    <StyledHeader className="App-header">
      <LogoSquare
        themeColor={getThemeColorForRoute(pathname)}
        linkTo={linkTo}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #222;
  height: 205px;
  padding: 20px;
  color: white;

  @media only screen and (max-width: 700px) {
    height: 130px !important;
  }
`;

export default withRouter(Header);
