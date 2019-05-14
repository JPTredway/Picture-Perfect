import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { NavLink } from "react-router-dom";
import { history } from "../../routes/history";
import { AuthContext } from "../AuthContext";
import { StyledNav } from "./styles";

const Nav = () => {
  const { user, setUser } = useContext(AuthContext);
  const [_, sendRequest] = useFetch();

  const handleLogout = async () => {
    const url = `${API_URL}/logout`;
    try {
      await sendRequest(url);
      setUser(null);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledNav>
      {user ? (
        <>
          <NavLink exact to="/images">
            Images
          </NavLink>
          <NavLink exact to="/upload">
            Upload
          </NavLink>
          <a onClick={handleLogout}>Logout</a>
        </>
      ) : (
        <>
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/signup">
            Signup
          </NavLink>
        </>
      )}
    </StyledNav>
  );
};

export { Nav };
