import React from 'react';
import NavItem from './NavItem';

const Nav = ({
  navItems
}) => {
  const navs = navItems.map((item) => {
    // Used to determine the flex width within the nav item component
    const width = 100 / navItems.length;
    return (
      <NavItem width={width} navItem={item} key={item.id} />
    );
  })

  return (
    <nav className="menu">
      {navs}
    </nav>
  )
}

export default Nav;