import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReturnHome from "../components/ReturnHome";

const MessageSent = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="message-sent">
      <div className="description">
        <h1>Your message was sent successfully</h1>
        <p>
          Thank you for your message!
          <br />
          Your message has been sent successfully. The Iwai Zine Project Mods
          will reply to you as soon as possible.
        </p>
        <ReturnHome/>
      </div>
    </div>
  );
};
export default MessageSent;
