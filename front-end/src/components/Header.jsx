import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/contributors"}>Contributors</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/rules"}>Rules</Link>
      </nav>
    </header>
  );
};

export default Header;
