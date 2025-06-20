import React, { useEffect, useState } from "react";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";

const Mods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mods">
      <div className="description">
        <ReturnHomeIcon />
        <h1>Mods</h1>

        <div className="mod">
          <div className="image-socials">
            <div className="image">
              <img src="/contributors/ember.png" alt="Ember" />
            </div>
            <div className="socials">
              <a
                href="https://www.tumblr.com/lakeside-paradise?source=share"
                className="tumblr"
                target="_blank"
                title="Visit Ember's social media : Tumblr"
              >
                Tumblr
              </a>
            </div>
          </div>
          <div className="text">
            <h2>Ember</h2>
            <div className="role-infos">
              <h3 className="role">Writing Mod</h3>
              <p>
                Pronouns: They/Them - It/Its <span> • </span>Languages: English,
                Spanish
              </p>
            </div>
            <div className="intro" style={{ "--name-mod": "'Ember'" }}>
              <p>
                I've been a writer for about 5 years
                now, and I've been picking up fandoms wherever I go! I've been
                very interested in Persona 5 Royal for a good few months, and
                I'm super excited to bring a zine dedicated to Iwai to life as a
                mod! 
              </p>
            </div>
            <h3 className="role">Past experience :</h3>
            <p>
              Contributor in a few zines and other writing projects over the years, the most recent being a Big Bang that is due to be released soon! (Stay tuned :3)
            </p>
          </div>
        </div>
        <div className="mod">
          <div className="image-socials">
            <div className="image">
              <img src="/contributors/ibuki.jpg" alt="Ibuki" />
            </div>
            <div className="socials">
              <a
                href="https://www.instagram.com/ibuki_does_drawing/"
                className="ig"
                target="_blank"
                title="Visit Ibuki's social media : Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@ibuki.draws"
                className="tt"
                target="_blank"
                title="Visit Ibuki's social media : Tiktok"
              >
                TikTok
              </a>
              <a
                href="https://x.com/Ibuki_draws"
                className="twt"
                target="_blank"
                title="Visit Ibuki's social media : Twitter / X"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="text">
            <h2>Ibuki</h2>
            <div className="role-infos">
              <h3 className="role">Art Mod</h3>
              <p>
                Pronouns: They/Them - She/Her <span> • </span>Languages: French,
                English
              </p>
            </div>
            <div className="intro" style={{ "--name-mod": "'Ibuki'" }}>
              <p>
                I'm a self taught artist who just enjoys doing art for fun ! I'm
                in multiple fandoms, but a really big fan of Persona 5. It's a
                pleasure to be working on this zine on the mod team !
              </p>
            </div>
            <h3 className="role">Past experience :</h3>
            <p>
              Contributor of the{" "}
              <a
                href="https://x.com/BlossomsZine"
                target="_blank"
                title="Check out the Demon Slayer : Wisteria Blossoms: A ShinoMitsu Zine"
              >
                Wisteria Blossoms Zine
              </a>{" "}
              and multiple artist collabs
            </p>
          </div>
        </div>
        <div className="mod">
          <div className="image-socials">
            <div className="image">
              <img src="/contributors/nats.jpg" alt="Nats" />
            </div>
            <div className="socials">
              <a
                href="https://bsky.app/profile/sharkhoney-draws.bsky.social"
                className="bsky"
                target="_blank"
                title="Visit Nats's social media : BlueSky"
              >
                BlueSky
              </a>
              <a
                href="https://sharkhoney-draws.tumblr.com"
                className="tumblr"
                target="_blank"
                title="Visit Nats's social media : Tumblr"
              >
                Tumblr
              </a>
              <a
                href="https://www.instagram.com/sharkhoney_draws/"
                className="ig"
                target="_blank"
                title="Visit Nats's social media : Instagram"
              >
                Instagram
              </a>
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
                The name's Nats, happy to meet you all! Ever since playing Persona 5 Royal, I really wanted to make a zine about the game but couldn't bring myself to do it, that was until I met Iwai in the game. Now here we are, lead mod and totally normal about that man. <br />Let's all have fun together with this project!
              </p>
            </div>
            <h3 className="role">Past experience :</h3>
            <p>
              Contributor of the{" "}
              <a
                href="https://naruloveproject.itch.io/naru-love-project"
                target="_blank"
                title="Check out the Naru Love Project Zine on itch.io"
              >
                Naru Love Project Zine
              </a>
              ,{" "}
              <a
                href="https://simporiem-studios.itch.io/light-the-way"
                target="_blank"
                title="Check out Light The Way Luxiem Dating Sim on itch.io"
              >
                Light The Way • Luxiem Dating Sim
              </a>
              , as well a a bunch of IRL projects not art-related.
            </p>
          </div>
        </div>
        <ReturnHome />
      </div>
    </div>
  );
};

export default Mods;
