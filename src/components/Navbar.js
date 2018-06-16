import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const Nav = ({ navItems }) => {
  const navs = navItems.map((item, idx) => {
    // Used to determine the flex width within the nav item component
    const width = 100 / navItems.length;
    item.id = idx + 1;
    return <NavItem width={width} navItem={item} key={item.id} />;
  });

  return <StyledNavContainer className="menu">{navs}</StyledNavContainer>;
};

const StyledNavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4em;
  z-index: 300;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  display: flex;
`;

export default Nav;
