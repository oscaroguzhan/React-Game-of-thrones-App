import React from "react";
import logo from "./assets/ozzylogo.png";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="my logo picture" />
      <h1> Game of thrones API</h1>
    </header>
  );
};

export default Header;
