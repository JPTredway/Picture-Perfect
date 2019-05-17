import React, { useState } from "react";

const useFetch = (initialLoading = false) => {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(null);

  const defaultConfig = {
    method: "GET",
    credentials: "include"
  };

  const sendRequest = async (url, config = {}) => {
    setLoading(true);
    config = {
      ...defaultConfig,
      ...config
    };
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        // TODO: create util function to return specific error messages
        throw new Error("Something went wrong...");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [{ loading, error }, sendRequest];
};

export { useFetch };
