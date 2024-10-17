import React from "react";
import logo from "../../assets/logo.png"

function sidebar() {
  return (
    <div className="bg-gradient-to-b from-white to-secondary_color text-primary_color w-60 p-3 flex flex-col">
      <div className="flex items-center gap-1 px-1 py-2">
        <img src={logo} alt="" className="w-20"/>
        <span className="text-xl  font-bold">Well App</span>
      </div>
      <div className="flex-1">top part</div>
      <div>bottom part</div>
    </div>
  );
}

export default sidebar;
