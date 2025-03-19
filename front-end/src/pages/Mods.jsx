import React, { useEffect, useState } from "react";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";

const Mods = () => {
  return (
    <div className="mods">
      <div className="description">
        <ReturnHomeIcon />
        <h1>Mods</h1>
        <div className="mod">
          <div className="image-socials">
            <div className="image">
              <img src="../../public/contributors/nats.png" alt="Nats" />
            </div>
            <div className="socials">
              <a href="https://bsky.app/profile/sharkhoney-draws.bsky.social" className="bsky" target="_blank" title="Visit Nats's social media : BlueSky">BlueSky</a>
              <a href="https://sharkhoney-draws.tumblr.com" className="tumblr" target="_blank" title="Visit Nats's social media : Tumblr">Tumblr</a>
              <a href="https://www.instagram.com/sharkhoney_draws/" className="ig" target="_blank" title="Visit Nats's social media : Instagram">Instagram</a>
            </div>
          </div>
          <div className="text">
            <h2>Nats / SharkHoney</h2>
            <div className="role-infos">
              <h3 className="role">Art Mod & Web designer</h3>
              <p>
                Pronouns: any <span> • </span>Languages: French, English
              </p>
            </div>
            <div className="intro" style={{ "--name-mod": "'Nats'" }}>
              <p>
                Hello everyone! My name is Nats and I'm super excited to finally
                be able to make this zine a reality. I felt like I needed to
                make this zine a reality and show Iwai a little bit more love
                than what he currently has!
              </p>
            </div>
            <h3 className="role">Past experience :</h3>
            <p>
              Contributor of the Naru Love Project Zine, Professor Layton gift
              exchange, as well a a bunch of IRL projects not art-related.
            </p>
          </div>
        </div>

        <ReturnHome />
      </div>
    </div>
  );
};

export default Mods;
