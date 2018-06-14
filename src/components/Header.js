import React from "react";
import { withRouter } from "react-router-dom";
import LogoSquare from "./LogoSquare";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";

const Header = ({ linkTo, match, location }) => {
  const { pathname } = location;
  const isOnHomeRoute = pathname === "/" || pathname === "/home";

  if (isOnHomeRoute) return null;
  return (
    <header className="App-header">
      <LogoSquare
        themeColor={getThemeColorForRoute(pathname)}
        linkTo={linkTo}
      />
    </header>
  );
};

export default withRouter(Header);
