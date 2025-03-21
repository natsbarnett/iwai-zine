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
              <img src="/contributors/nats.png" alt="Nats" />
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
              Contributor of the <a href="https://naruloveproject.itch.io/naru-love-project" target="_blank" title="Check out the Naru Love Project Zine on itch.io">Naru Love Project Zine</a>, <a href="https://simporiem-studios.itch.io/light-the-way" target="_blank" title="Check out Light The Way Luxiem Dating Sim on itch.io">Light The Way • Luxiem Dating Sim</a>, as well a a bunch of IRL projects not art-related.
            </p>
          </div>
        </div>
        <div className="mod">
          <div className="image-socials">
            <div className="image">
              <img src="/contributors/ibuki.png" alt="Ibuki" />
            </div>
            <div className="socials">
              <a href="https://www.instagram.com/ibuki_does_drawing/" className="ig" target="_blank" title="Visit Ibuki's social media : Instagram">Instagram</a>
              <a href="https://www.tiktok.com/@ibuki.draws" className="tt" target="_blank" title="Visit Ibuki's social media : Tiktok">TikTok</a>
              <a href="https://x.com/Ibuki_draws" className="twt" target="_blank" title="Visit Ibuki's social media : Twitter / X">Twitter</a>
            </div>
          </div>
          <div className="text">
            <h2>Ibuki</h2>
            <div className="role-infos">
              <h3 className="role">Art Mod</h3>
              <p>
                Pronouns: They/Them - She/Her <span> • </span>Languages: French, English
              </p>
            </div>
            <div className="intro" style={{ "--name-mod": "'Ibuki'" }}>
              <p>
              I'm a self taught artist who just enjoys doing art for fun ! I'm in multiple fandoms, but a really big fan of Persona 5. It's a pleasure to be working on this zine on the mod team ! 
              </p>
            </div>
            <h3 className="role">Past experience :</h3>
            <p>
              Contributor of the <a href="https://x.com/BlossomsZine" target="_blank" title="Check out the Demon Slayer : Wisteria Blossoms: A ShinoMitsu Zine">Wisteria Blossoms Zine</a> and multiple artist collabs
            </p>
          </div>
        </div>

        <ReturnHome />
      </div>
    </div>
  );
};

export default Mods;
