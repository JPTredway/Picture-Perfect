import React, { useContext, useEffect } from "react";
import { Router } from "react-router-dom";
import { API_URL } from "../../config";
import { history } from "../../routes/history";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../AuthContext";
import { ThemeProvider } from "styled-components";
import { theme, Global } from "./styles";
import { Loader } from "../Loader";
import { Page } from "../Page";
import { Routes } from "../../routes";

const App = () => {
  const { setUser } = useContext(AuthContext);
  const [{ loading }, sendRequest] = useFetch(true);

  useEffect(() => {
    const checkAuth = async () => {
      const url = `${API_URL}/user`;
      try {
        const user = await sendRequest(url);
        if (user) setUser(user);
      } catch (err) {
        console.log(err);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <Loader />;

  return (
    <Router history={history}>
      <Global />
      <ThemeProvider theme={theme}>
        <Page>
          <Routes />
        </Page>
      </ThemeProvider>
    </Router>
  );
};

export { App };
