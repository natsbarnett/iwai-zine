import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Socials from "../components/SocialsList";
import ReturnHome from "../components/ReturnHome";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonAppeared, setButtonAppeared] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const buttonRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    if (!nom || !email || !message) return;
    setIsLoading(true);
    const templateParams = {
      from_name: `${nom}`,
      from_email: email,
      message: message,
    };
    emailjs
      .send("service_actm7xc", "template_hr03p8s", templateParams, {
        publicKey: "j-yzj32H9oNi5FLaM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsLoading(false);
          window.location.replace("/message-sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  const isButtonVisible = nom  && email && message;

  useEffect(() => {
    if (isButtonVisible && buttonRef.current && !buttonAppeared) {
      setButtonAppeared(true);
      const transition = buttonRef.current.animate(
        [
          { opacity: 0, transform: "scale(0.8)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        {
          duration: 600,
          easing: "ease-out",
        }
      );

      transition.onfinish = () => {
        buttonRef.current.style.opacity = 1;
      };
    } else if (!isButtonVisible && buttonRef.current && buttonAppeared) {
      const transition = buttonRef.current.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(0.8)" },
        ],
        {
          duration: 400,
          easing: "ease-in",
        }
      );

      transition.onfinish = () => {
        setButtonAppeared(false);
      };
    }
  }, [isButtonVisible, buttonAppeared]);

  return (
    <div className="contact-form">
      <div className="description">
        <h1>Contact us</h1>
        <div className="contact-page-content">
          <p>
            Do you have a question? A suggestion? Please contact us through this form or on our social media!
          </p>
          <Socials/>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="form_name"
              placeholder="Your name"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />

            <input
              type="email"
              name="form_email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              ref={buttonRef}
              type="submit"
              disabled={isLoading}
              style={{
                opacity: isButtonVisible ? 1 : 0,
                transition: isButtonVisible ? "opacity 0.3s ease" : "none",
              }}
              title="Send your message"
            >
              {isLoading ? "Sending..." : "Send"}{" "}
              {/* Afficher un texte de chargement */}
            </button>
          </form>
        </div>
        <ReturnHome/>
      </div>
    </div>
  );
};

export default Contact;
