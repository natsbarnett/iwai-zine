import React from "react";
import ContribList from "../components/ContributorsList";
import ReturnHome from "../components/ReturnHome";
import ReturnHomeIcon from "../components/ReturnHomeIcon";

const Contributors = () => {
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
