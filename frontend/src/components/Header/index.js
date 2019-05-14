import React from "react";
// import { AuthProvider } from "../AuthContext";
import { Link } from "react-router-dom";
import { Nav } from "../Nav";
import { StyledHeader, Logo } from "./styles";

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Logo>Picture Perfect</Logo>
    </Link>
    <Nav />
  </StyledHeader>
);

export { Header };
