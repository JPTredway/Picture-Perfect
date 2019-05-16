import React from "react";
import { SuccessStyles } from "./styles";

const SuccessMessage = ({ success }) => {
  if (!success || !success.message) return null;
  return (
    <SuccessStyles>
      <p>Success! {success.message}</p>
    </SuccessStyles>
  );
};

export { SuccessMessage };
