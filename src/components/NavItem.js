import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import getThemeColorForRoute from "../utilities/getThemeColorForRoute";

const NavItem = ({ navItem, width, location: { pathname } }) => {
  const { link, text } = navItem;

  return (
    <StyledNavLinkItem
      style={{ flex: `0 0 ${width}%` }}
      className={`${text.toLowerCase()}`}
      to={link}
    >
      <span className="blt">•</span>
      <span className="lnk">{text}</span>
    </StyledNavLinkItem>
  );
};

const StyledNavLinkItem = styled(Link)`
  position: relative;
  display: block;
  height: 4em;
  text-align: center;
  color: #949597;
  border-left: 1px solid #e5e5e5;
  box-sizing: border-box;
  background: #fff;

  &:first-child {
    border-left: none;
  }

  span.blt {
    position: absolute;
    z-index: 865;
    left: 0;
    display: inline-block;
    background: #949597;
    width: 100%;
    height: 0.8em;
    text-indent: -9999px;
    overflow: hidden;
    transition: all 1s ease;
  }

  &.portfolio span.blt {
    background: ${() => getThemeColorForRoute(`/portfolio`)};
  }

  &.skills span.blt {
    background: ${() => getThemeColorForRoute(`/skills`)};
  }

  &.about span.blt {
    background: ${() => getThemeColorForRoute(`/about`)};
  }

  &.connect span.blt {
    background: ${() => getThemeColorForRoute(`/connect`)};
  }

  .lnk {
    position: absolute;
    z-index: 870;
    top: 2em;
    left: 0;
    width: 100%;
    color: #949597;
    transition: all 1s ease;
  }

  &.portfolio .lnk {
    color: ${() => getThemeColorForRoute(`/portfolio`)};
  }

  &.skills .lnk {
    color: ${() => getThemeColorForRoute(`/skills`)};
  }

  &.about .lnk {
    color: ${() => getThemeColorForRoute(`/about`)};
  }

  &.connect .lnk {
    color: ${() => getThemeColorForRoute(`/$connect`)};
  }

  &:hover span.blt {
    height: 4em;
  }

  &:hover .lnk {
    top: 1.6em;
    color: #fff;
  }
`;

export default withRouter(NavItem);
