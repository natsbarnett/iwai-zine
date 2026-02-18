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
          <span className="green">
            The Zine is now in production! The full zine will be released on WHITE DAY!
          </span>
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
          <Link
            to="/contributors"
            title="Do you want to check out the contributors of the zine? Learn more about them here!"
            viewTransition
          >
            Contributors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
