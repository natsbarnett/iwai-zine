import React from "react";
import ContribList from "../components/ContributorsList";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";
import { useEffect } from "react";

const Contributors = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="contributors">
      <div className="description">
        <ReturnHomeIcon/>
        <h1>Contributors</h1>
        <ContribList />
        <ReturnHome/>
      </div>
    </div>
  );
};
export default Contributors;
