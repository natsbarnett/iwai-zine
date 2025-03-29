import React from "react";
import { Link } from "react-router-dom";
const ReturnHomeIcon = () => {
  return (
    <Link to="/" className="return-home-icon" viewTransition>
      <img src="/home.svg" title="return home" />
    </Link>
  );
};

export default ReturnHomeIcon;
