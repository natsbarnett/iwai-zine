import React from "react";
import { Link } from "react-router-dom";
const ReturnHomeIcon = () => {
  return (
    <Link to="/" className="return-home-icon">
     <img src='../../public/home.svg' title="return home"/>
    </Link>
  );
};

export default ReturnHomeIcon;
