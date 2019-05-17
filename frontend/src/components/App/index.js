import React, { useContext, useEffect } from "react";
import { Router } from "react-router-dom";
import { API_URL } from "../../config";
import { history } from "../../routes/history";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext } from "../AuthContext";
import { Page } from "../Page";
import { Routes } from "../../routes";

const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const [_, sendRequest] = useFetch();

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
    if (!user) checkAuth();
  }, []);

  return (
    <Router history={history}>
      <Page>
        <Routes />
      </Page>
    </Router>
  );
};

export { App };
