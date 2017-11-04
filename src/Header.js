import React from 'react';

const Header = ({linkTo}) => (
  <header className="App-header">
    <a className="logo-window" href={linkTo}>
      <div className="name">Babs</div>
      <div className="name">Craig</div>
    </a>
  </header>
)

export default Header;
