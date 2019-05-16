import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "../Header";

const theme = {
  maxWidth: "1300px",
  primary: "#07393C",
  secondary: "#2C666E",
  accent: "#90DDF0",
  white: "#F0EDEE",
  black: "#0A090C"
};

const StyledPage = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|IBM+Plex+Serif');

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'IBM Plex Serif', serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

const Page = ({ children }) => (
  <>
    <Global />
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  </>
);
export { Page };
