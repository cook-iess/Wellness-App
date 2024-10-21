import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 

function Header({ toggleSidebar, isSidebarVisible }) {
  return (
    <header className="flex justify-between items-center p-4 bg-primary_color transition-all duration-300">
      <div className="flex items-center">
        {/* Toggle button with a nice hover effect */}
        <button onClick={toggleSidebar} className="text-white mr-4 hover:bg-sky-800 p-2 rounded-md transition duration-300">
          {isSidebarVisible ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Title with enhanced font style */}
        <h1 className="text-2xl font-extrabold text-white drop-shadow-md items-center mt-1">Dashboard</h1>
      </div>

      <div className="flex items-center">
        {/* Search input with a subtle shadow and focus effect */}
        <input
          type="text"
          className="w-60 py-2 pr-2 pl-4 rounded-full bg-white text-primary_color placeholder-teritary_color shadow-md focus:outline-none focus:ring focus:ring-sky-700 transition duration-300"
          placeholder="Search..."
        />

        <div className="flex items-center ml-4 border-l-2 border-white pl-6">
          {/* Profile picture with a border and shadow */}
          <img
            src="src/assets/sample_pp.png" // Replace with actual URL
            alt="Profile"
            className="w-11 h-11 rounded-full shadow-lg mr-3"
          />
          <span className="text-white font-semibold text-lg">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
