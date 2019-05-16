import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../config";
import { Loader } from "../components/Loader";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import { Images } from "../components/Images";
import { Upload } from "../components/Upload";
import { NotFound } from "../components/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(AuthContext);
  const [{ loading, data }, sendRequest] = useFetch({
    initialLoading: true
  });

  useEffect(() => {
    const checkAuth = async () => {
      const url = `${API_URL}/user`;
      try {
        await sendRequest(url);
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    setUser(data);
  }, [data]);

  if (loading) {
    return <Loader loading={loading} />;
  } else {
    return (
      <Route
        {...rest}
        render={props =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
};

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/images" component={Images} />
    <PrivateRoute exact path="/upload" component={Upload} />
    <Route component={NotFound} />
  </Switch>
);

export { Routes };
