import React, { useEffect, useState } from "react";
import axios from "axios";

const Dates = () => {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://iwai-zine.vercel.app/dates");
        //console.log(response.data)
        const datesData = Object.entries(response.data);
        setDates(datesData);
        setLoading(false);
      } catch (error) {
        console.error("Error trying to get dates", error);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDate = (timestamp) =>
    timestamp ? new Date(timestamp * 1000).toLocaleDateString() : "TBD";

  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="date-name">Event</div>
        <div className="date-name">Start Date</div>
        <div className="date-name">End Date</div>
      </div>
      {dates.map(([key, value]) => (
        <div key={key} className="timeline-item">
          <div className="date-name">{value.description}</div>
          <div>{formatDate(value["start-date"])}</div>
          <div>{formatDate(value["end-date"])}</div>
        </div>
      ))}
    </div>
  );
};

export default Dates;
