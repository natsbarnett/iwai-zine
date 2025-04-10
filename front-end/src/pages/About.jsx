import React from "react";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="description">
        <ReturnHomeIcon />
        <h1>About</h1>
        <h2>
          "You help me out with my "business"... Smugglin' goods, destroyin'
          evidence... And as a reward, I'll introduce you to the "special menu,"
          with good prices for a punk like you. ...Whaddaya say? Not bad, huh?"
        </h2>
        <p className="text">
          <span className="green">Connected by the Gecko</span> is a free and
          digital only Persona 5 fanzine centered around the character of Iwai.
        </p>
        <h3>Warnings</h3>
        <p className="text">
          This zine will NOT be spoiler free, with possibily significant
          spoilers for the plot of Persona 5 and Persona 5 Royal throughout!{" "}
        </p>
        <ReturnHome />
      </div>
    </div>
  );
};
export default About;
