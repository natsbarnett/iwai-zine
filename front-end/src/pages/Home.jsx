import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dates from "../components/DatesList";
import Socials from "../components/SocialsList";
import Loader from "../components/Loader";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="description">
        <h1>
          Connected by <br />
          the Gecko
        </h1>
        <div className="text">
          This zine is a <span className="green">free, SFW, digital</span>{" "}
          Persona 5 fanzine centered around the character of{" "}
          <span className="green">Iwai Munehisa</span>
          <br />
          <span className="green">Applications are now OPEN !</span>
          <div className="links-forms">
            <a
              href="https://forms.gle/2Ni8CFecE4Ek1NQPA"
              target="_blank"
              className="link"
              title="Fill in the Artists Applications"
            >
              Artist <br />Applications
            </a>
            <a
              href="https://forms.gle/MDhassuSBfoHTeoZ6"
              target="_blank"
              className="link"
              title="Fill in the Writers Applications"
            >
              Writer <br />Applications
            </a>
            <a
              href="https://forms.gle/tzbvE1TPThzrQ2Ax9"
              target="_blank"
              className="link"
              title="Fill in the Misc. Artists Applications"
            >
              Misc. Artists Applications
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
          <Link
            to="/about/#"
            title="Learn more about the project"
            viewTransition
          >
            About
          </Link>
          <Link to="/mods" title="Discover the mods of the Zine" viewTransition>
            Mods
          </Link>
          {/* <Link to="/contributors" title="Discover the contributors">Contributors</Link> */}
          <Link
            to="/rules"
            title="Check out the rules of the zine"
            viewTransition
          >
            Rules
          </Link>
          <Link
            to="/faq"
            title="Do you have a question? Learn about the zine in the FAQ"
            viewTransition
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            title="Do you have a question? A suggestion? Contact the team via this form!"
            viewTransition
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
