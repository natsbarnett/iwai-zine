import React from "react";
import { Link } from "react-router-dom";

const ReturnHome = () =>{
    return (
        <Link to='/' className="return-home" viewTransition>Return Home</Link>
    )
}

export default ReturnHome;