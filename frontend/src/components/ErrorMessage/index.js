import React from "react";
import { ErrorStyles } from "./styles";

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((e, i) => (
      <ErrorStyles key={i}>
        <p>Oops! {e.message}</p>
      </ErrorStyles>
    ));
  } else {
    return (
      <ErrorStyles>
        <p>Oops! {error.message}</p>
      </ErrorStyles>
    );
  }
};

ErrorMessage.defaultProps = {
  error: {}
};

export { ErrorMessage };
