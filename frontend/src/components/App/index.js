import React from "react";
import { Router } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import { ImageProvider } from "../ImageContext";
import { history } from "../../routes/history";
import { Page } from "../Page";
import { Routes } from "../../routes";

const App = () => (
  <AuthProvider>
    <Router history={history}>
      <Page>
        <ImageProvider>
          <Routes />
        </ImageProvider>
      </Page>
    </Router>
  </AuthProvider>
);

export { App };
