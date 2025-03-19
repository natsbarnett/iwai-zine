import React from "react";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";

const Rules = () => {
  return (
    <div className="rules">
      <div className="description">
        <ReturnHomeIcon/>
        <h1>Rules</h1>
        <h2>Before you fill in your contributor application, please take into consideration the following rules and guidelines.</h2>
        <h3 className="green">This Zine is SFW</h3>
        <p className="text">Please, keep in mind that this zine will NOT allow any NSFW content !</p>
        <h3 className="green">To participate in this zine, you must be 16+</h3>
        <p>To ensure the safety of the members, and avoid exposure to more mature topics as Iwai's social link tend to delve into, you will need to be 16+</p>
        <h3 className="green">Ships are allowed as long as Iwai is the focus</h3>
        <p>Please, keep in mind that MinorxAdult relationships will NOT be allowed (including agedup!characters)</p>
        <h3 className="green">There isn't a theme; just Iwai</h3>
        <p>Be free, have fun, as long as you keep Iwai being the major focus in your works</p>
        <h3 className="green">Allowed media</h3>
        <p>Art and fanfiction are allowed to be submitted</p>
        <h3 className="green">Traditional art is accepted</h3>
        <p>Traditional art is accepted as long as the quality of the scan is high</p>
        <h3 className="green">Participants will be chosen by applications</h3>
        <ReturnHome/>
      </div>
    </div>
  );
};
export default Rules;
