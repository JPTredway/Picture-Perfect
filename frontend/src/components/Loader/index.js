import React from "react";
import { Spinner } from "./styles";

const Loader = ({ loading }) =>
  loading ? (
    <Spinner>
      <div />
    </Spinner>
  ) : null;

export { Loader };
