import React, { useEffect, useState } from "react";
import axios from "axios";

const Socials = () => {
  const [social, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://iwai-zine.vercel.app/socials");
        const socialData = Object.entries(response.data);
        setSocials(socialData);
        setLoading(false);
      } catch (error) {
        console.error("Error trying to get socials", error);
      }
    };
    fetch();
  }, []);

if (loading){
    return <div>Loading...</div>
}

return(
    <div className="socials-list">
        {social.map(([key, value])=>(
            <div key={key} className="socials-item">
                <a href={value.link} target="_blank" rel="noopener noreferrer" className={`socials ` + value.name.toLowerCase()} title={`See the Iwai Zine project ${value.name} account`}>
                    {value.handle}
                </a>
            </div>
        ))}
    </div>
)


};

export default Socials;
