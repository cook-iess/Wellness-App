import React from "react";
import { Link } from "react-router-dom";

function excercises() {
  return (
    <div>
      <p>this is excercises page</p>
      <Link to="/" className="underline">go to dashboard</Link>
    </div>
  );
}

export default excercises;
