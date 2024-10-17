import React from "react";
import { Link } from "react-router-dom";

const dashboard = () => {
  return (
    <div>
      <p>this is dashboard page</p>
      <Link to="/exercises">go to exercises</Link>
    </div>
  );
};

export default dashboard;
