import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
`;

const NavWrapper = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-family: sans-serif;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0 16px;

  &.active {
    color: rebeccapurple;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: currentColor;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 50%;
    margin: auto;
    height: 3px;
    transform: scaleX(0);
    transform-origin: center center;
    border-radius: 2px;
  }
  &.active:after {
    transition: transform 250ms, opacity 150ms;
    transform: scaleX(1);
    opacity: 1;
  }
`;

const Header = (props) => {
  return (
    <HeaderStyled>
      <Title>Fruit Emporium</Title>
      <NavWrapper>
        <StyledNavLink exact activeClassName="active" to="/">
          Home
        </StyledNavLink>
        <StyledNavLink activeClassName="active" to="/about">
          About
        </StyledNavLink>
      </NavWrapper>
    </HeaderStyled>
  );
};

export default Header;
