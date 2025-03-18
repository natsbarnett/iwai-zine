import React from "react";
import ContribList from "../components/ContributorsList";
import ReturnHome from "../components/ReturnHome";

const Contributors = () => {
  return (
    <div className="contributors">
      <div className="description">
        <h1>Contributors</h1>
        <ContribList />
        <ReturnHome/>
      </div>
    </div>
  );
};
export default Contributors;
