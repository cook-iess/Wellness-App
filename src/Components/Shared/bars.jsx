import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

function Bars() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar with smooth transition */}
      <div
        className={`transition-all duration-300 ease-in-out ${isSidebarVisible ? 'w-64' : 'w-0'} bg-blue-100`}
      >
        {/* Only render Sidebar when visible */}
        {isSidebarVisible && <Sidebar />}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
        <div className="p-4 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Bars;
