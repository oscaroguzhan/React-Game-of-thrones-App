import React from "react";
import spinner from "../components/assets/Broken circle.gif";

const LoadingSpinner = () => {
  return (
    <img
      src={spinner}
      alt="loading animation "
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default LoadingSpinner;
