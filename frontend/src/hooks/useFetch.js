import React, { useState } from "react";

const useFetch = (userConfig = {}) => {
  const config = {
    initialLoading: false,
    dataShape: null,
    ...userConfig
  };
  const [loading, setLoading] = useState(config.initialLoading);
  const [error, setError] = useState(null);
  const [data, setData] = useState(config.dataShape);

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
      if (data) setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [{ loading, error, data }, sendRequest];
};

export { useFetch };
