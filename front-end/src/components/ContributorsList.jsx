import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
const ContribList = () => {
  const [contribs, setContribs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://iwai-zine.vercel.app/contributors");
        const contribsData = Object.entries(response.data);
        setContribs(contribsData);
        // Ajouter un léger délai avant de cacher le loader
        setTimeout(() => {
          setLoading(false);
        }, 500); // 500 ms de délai
      } catch (error) {
        console.error("Error trying to get contributors", error);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="contributors-list">
      {contribs.map(([key, member]) =>
        member.name ? (
          <div key={key} className="member-card">
            {member.pfp ? (
              <img src={member.pfp} alt={member.name} className="profile-pic" />
            ) : (
              <div className="profile-placeholder">No Image</div>
            )}
            <h3>{member.name}</h3>
            <p>
              <strong>Roles:</strong>{" "}
              {member.roles ? member.roles.join(", ") : "N/A"}
            </p>
            <div className="social-links">
              {Object.values(member.socials).map(
                (social, index) =>
                  social && (
                    <div className={`social-link ${social.name.toLowerCase()}`}>
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${member.name}'s ${social.name} account`}
                      > 
                      <span className="icon"></span>
                      {social.handle}
                      </a>
                    </div>
                  )
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ContribList;
