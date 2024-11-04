import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowBack } from 'react-icons/md';

function Header({ toggleSidebar, isSidebarVisible }) {
  return (
    <header className="flex justify-between items-center py-3 px-4 bg-sky-800 transition-all duration-300">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-white mr-4 hover:bg-sky-900 p-2 rounded-md transition duration-300"
        >
          {isSidebarVisible ? <MdArrowBack size={24} />: <FiMenu size={28} />}
        </button>

        <h1 className="text-xl font-extrabold text-white drop-shadow-md items-center mt-1">
          Dashboard
        </h1>
      </div>
      {/* Search */}
      <div className="flex items-center">
        <input
          type="text"
          className="w-60 py-1 pr-2 pl-4 rounded-full bg-white text-primary_color placeholder-gray-400 shadow-md focus:outline-none focus:ring focus:ring-sky-700 transition duration-300"
          placeholder="Search..."
        />

        <div className="flex items-center ml-6 border-l-2 border-white pl-6">
          {/* Profile picture */}
          <img
            src="src/assets/sample_pp.png"
            alt="Profile"
            className="w-10 h-10 rounded-full shadow-lg mr-3"
          />
          <span className="text-white font-semibold text-lg">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
