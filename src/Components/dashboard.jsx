import React from "react";
import { Link } from "react-router-dom";

const dashboard = () => {
  return (
    <div>
      <p>this is excersises page</p>
      <Link to="/meals">go to meals</Link>
    </div>
  );
};

export default dashboard;
