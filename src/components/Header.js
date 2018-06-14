import React from "react";
import { withRouter } from "react-router-dom";
import LogoSquare from "./LogoSquare";

const Header = ({ linkTo, match, location }) => {
  const isOnHomeRoute =
    location.pathname === "/" || location.pathname === "/home";

  if (isOnHomeRoute) return null;
  return (
    <header className="App-header">
      <LogoSquare linkTo={linkTo} />
    </header>
  );
};

export default withRouter(Header);
