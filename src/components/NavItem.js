import React from 'react';
import {
  Link
} from 'react-router-dom'

const NavItem = ({
  navItem,
  width
}) => {
  const { id, link, text } = navItem;
  
  return (
    <Link style={{flex: `0 0 ${width}%`}} className={`n${id}`} to={link}>
      <span className="blt">•</span>
      <span className="lnk">{text}</span>
    </Link>
  );
}

export default NavItem;
