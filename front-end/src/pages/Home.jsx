import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dates from "../components/DatesList";
import Socials from "../components/SocialsList";

const Home = () => {
  return (
    <div className="home">
      <div className="description">
      <h1>Iwai Zine Project</h1>
        This zine is a free, digital Persona 5 fanzine centered around the theme of Iwai Munehisa
        <br />
        Interest checks are now OPEN !
        <div >
          <a href="https://forms.gle/MNQxSpE9jqMYUgqdA" target="_blank" className="link">
            INTEREST CHECKS
          </a>
        </div>
        <h2>Socials</h2>
        <Socials />
        <h2>Timeline</h2>
        <p>Discover the timeline of the project!</p>
        <Dates />
        <h2>Links</h2>
        <div className="links-zine">
          <Link to="/about">About</Link>
          <Link to="/contributors">Contributors</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
