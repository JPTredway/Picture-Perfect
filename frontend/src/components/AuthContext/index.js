import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [{ loading, error }, sendRequest] = useFetch();

  useEffect(() => {
    const checkAuth = async () => {
      const url = `${API_URL}/user`;
      try {
        const user = await sendRequest(url);
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);

  const value = {
    user,
    setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export { AuthContext };
