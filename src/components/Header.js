import React from "react";
import { withRouter } from "react-router-dom";

const Header = ({ linkTo, match, location }) => {
  const isOnHomeRoute =
    location.pathname === "/" || location.pathname === "/home";

  if (isOnHomeRoute) return null;
  return (
    <header className="App-header">
      <a className="logo-window" href={linkTo}>
        <div className="name">Babs</div>
        <div className="name">Craig</div>
      </a>
    </header>
  );
};

export default withRouter(Header);
