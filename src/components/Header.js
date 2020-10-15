import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`
  display: inline-flex;
`;

const Title = styled.h1`
  font-family: sans-serif;
`;

const StyledNavLink = styled(NavLink)

const Header = (props) => {
  return (
    <HeaderStyled>
      <Title>Fruit Emporium</Title>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
