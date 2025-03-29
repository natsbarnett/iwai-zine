import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Socials = () => {
  const [social, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://iwai-zine.vercel.app/socials");
        const socialData = Object.entries(response.data);
        setSocials(socialData);
        
        // Ajouter un léger délai avant de cacher le loader
        setTimeout(() => {
          setLoading(false);
        }, 500); // 500 ms de délai

      } catch (error) {
        console.error("Error trying to get socials", error);
        setLoading(false); // Désactive le loader même en cas d'erreur
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <Loader style={{ display: "flex" }} />;
  }

  return (
    <div className="socials-list">
      {social.map(([key, value]) => (
        <div key={key} className="socials-item">
          <a
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`socials ` + value.name.toLowerCase()}
            title={`See the Iwai Zine project ${value.name} account`}
          >
            {value.handle}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
