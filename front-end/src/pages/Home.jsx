import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dates from "../components/DatesList";
import Socials from "../components/SocialsList";

const Home = () => {
  return (
    <div className="home">
      <div className="description">
        <h1>Iwai Zine Project</h1>
        <div className="text">
          This zine is a free, digital Persona 5 fanzine centered around the
          theme of Iwai Munehisa
          <br />
          Interest checks are now OPEN !
          <div>
            <a
              href="https://forms.gle/MNQxSpE9jqMYUgqdA"
              target="_blank"
              className="link"
              title="Fill in the interest checks"
            >
              INTEREST CHECKS
            </a>
          </div>
        </div>
        <h2>Socials</h2>
        <Socials />
        <h2>Timeline</h2>
        <p className="text">Discover the timeline of the project!</p>
        <Dates />
        <h2>Links</h2>
        <div className="links-zine">
          <Link to="/about" title="Learn more about the project">About</Link>
          <Link to="/contributors" title="Discover the contributors">Contributors</Link>
          <Link to="/mods" title="Discover the rules of the Zine">Mods</Link>
          <Link to="/faq" title="Do you have a question? Learn about the zine in the FAQ">FAQ</Link>
          <Link to="/contact" title="Do you have a question? A suggestion? Contact the team via this form!">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
