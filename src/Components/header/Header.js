import React from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Shop Car</Link>
      <Navigation/>
    </HeaderContainer>
  );
};

export default Header;
