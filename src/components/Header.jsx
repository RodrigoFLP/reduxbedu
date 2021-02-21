import React from "react";
import {Link} from "react-router-dom";
import "../assets/styles/Header.scss"

const Header = () => {
  return (
    <nav id="header">
      <Link to="/">Inicio</Link>
      <Link to="/users">Usuarios</Link>
    </nav>
  );
};

export default Header;
