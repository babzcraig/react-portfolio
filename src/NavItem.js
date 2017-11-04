import React from 'react';

const NavItem = ({
  navItem,
  width
}) => {
  const { id, link, text } = navItem;
  
  return (
    <a style={{flex: `0 0 ${width}%`}} className={`n${id}`} href={link}>
      <span className="blt">•</span>
      <span className="lnk">{text}</span>
    </a>
  );
}

export default NavItem;
