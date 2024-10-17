import React from "react";
import { Outlet } from "react-router-dom";

function bars() {
  return (
    <div>
      <div className="bg-">sidebar</div>
      <div className="">header</div>
      <div>{<Outlet />}</div>
    </div>
  );
}

export default bars;
