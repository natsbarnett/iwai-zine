import React from "react";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";
const FAQ = () => {
  return (
    <div className="faq">
      <div className="description">
        <ReturnHomeIcon/>
        <h1>FAQ</h1>
        <div className="content-faq">
          <div className="question">
            <h2>What is a zine?</h2>
            <div className="answer">
              <p>
                A "zine" or "fanzine" is a fan-made and fan-published collection
                of art and writing for a certain franchise. This zine is
                dedicated to Persona 5 and centered around the character of
                Iwai.
              </p>
            </div>
          </div>
          <div className="question">
            <h2>Is the zine digital or physical?</h2>
            <div className="answer">
              <p>
                The zine will be a free and digital only zine. There will be
                digital merch and printables. This choice has been made to show
                off the love Iwai deserves to the world and for everyone to have
                fun.
              </p>
            </div>
          </div>
          <div className="question">
            <h2>Will there be merch?</h2>
            <div className="answer">
              <p>
                Yes. We will offer a variety of digital merch alongside the
                zine. Please stay tuned to see what merch awaits you!
              </p>
            </div>
          </div>
          <div className="question">
            <h2>How many contributors will work on this zine?</h2>
            <div className="answer">
              <p>
                This will be determined by the results of the applications!
                Since we are not limited to a physical version, we wish to
                accept as many people as possible.
              </p>
            </div>
          </div>
          <div className="question">
            <h2>Are OCs allowed?</h2>
            <div className="answer">
              <p>
                Yes, OCs are allowed as long as the focus on Iwai is not taken
                away in your work.
              </p>
            </div>
          </div>
          <div className="question">
            <h2>Are collaborations allowed?</h2>
            <div className="answer">
              <p>
                Yes, page artists and writers are free to work together. Kindly
                notify us during check-ins or before anything is made!
              </p>
            </div>
          </div>
          <div className="question">
            <h2>Is traditional art allowed?</h2>
            <div className="answer">
              <p>
                Yes, but we require a clean an high quality scan of your work.
                You will need a scan of 300 DPI
              </p>
            </div>
          </div>
          <div className="question">
            <h2>Are reference poses allowed?</h2>
            <div className="answer">
              <p>
                Yes, we do allow the use of references. We encourage artists to
                use whatever tools they find helpful in bringing their vision to
                life, though we don't allow tracing.
              </p>
            </div>
          </div>
          <div className="question">
            <h2>What other language support do you have?</h2>
            <div className="answer">
              <p>
                If you have any questions, please feel free to contact these
                mods for the following languages: Nats, Ibuki : French
                
              </p>
            </div>
          </div>
        </div>

        <ReturnHome />
      </div>
    </div>
  );
};
export default FAQ;
