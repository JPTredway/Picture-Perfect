import React from "react";
import { Header } from "../Header";
import { StyledPage, Inner } from "./styles";

const Page = ({ children }) => (
  <StyledPage>
    <Header />
    <Inner>{children}</Inner>
  </StyledPage>
);
export { Page };
