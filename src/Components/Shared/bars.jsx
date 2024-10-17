import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

function bars() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="">
        <div className="bg-teritary_color">header</div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}

export default bars;
