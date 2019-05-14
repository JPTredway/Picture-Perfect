import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import { history } from "../../routes/history";
import { Page } from "../Page";
import { Routes } from "../../routes";

const App = () => (
  <AuthProvider>
    <Router history={history}>
      <Page>
        <Routes />
      </Page>
    </Router>
  </AuthProvider>
);

export { App };
