import ReactDOM from "react-dom";
import React from "react";
import { AuthProvider } from "./components/AuthContext";
import { App } from "./components/App";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("app")
);
