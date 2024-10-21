import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaDumbbell, FaUtensils, FaSignOutAlt, FaUser } from "react-icons/fa"; // Import icons, including FaUser
import logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-white to-secondary_color text-primary_color p-3 flex flex-col h-screen w-64">
      {/* Logo and App Name */}
      <div className="flex items-center gap-1 px-1 py-2">
        <img src={logo} alt="logo" className="w-20" />
        <span className="text-xl font-semibold font-custfont">Well App</span>
      </div>

      {/* Divider */}
      <hr className="my-4 border-t border-gray-300" />

      {/* Top Part: Exercises, Meals, and Users */}
      <div className="flex-1">
        <ul className="space-y-4 pl-4">
          <li>
            <Link
              to="/"
              className="no-underline flex items-center gap-3 text-lg text-primary_color hover:text-secondary_color"
            >
              <FaDumbbell className="text-xl" />
              <span>Exercises</span>
            </Link>
          </li>
          <hr className="my-2 border-t border-gray-400" /> {/* Divider */}
          <li>
            <Link
              to="/meals"
              className="no-underline flex items-center gap-3 text-lg text-primary_color hover:text-secondary_color"
            >
              <FaUtensils className="text-xl" />
              <span>Meals</span>
            </Link>
          </li>
          <hr className="my-2 border-t border-gray-400" /> {/* Divider */}
          <li>
            <Link
              to="/users"  
              className="no-underline flex items-center gap-3 text-lg text-primary_color hover:text-secondary_color"
            >
              <FaUser className="text-xl" />  {/* User icon */}
              <span>Users</span>  {/* Users label */}
            </Link>
          </li>
          <hr className="my-2 border-t border-gray-400" /> {/* Divider */}
        </ul>
      </div>

      {/* Divider */}
      <hr className="my-4 border-t border-gray-400" />

      {/* Bottom Part: Logout */}
      <div className="py-2">
        <ul className="space-y-4 pl-4">
          <li>
            <Link
              to="/logout"
              className="no-underline flex items-center gap-3 text-lg text-primary_color hover:text-secondary_color hover:bg-secondary_color"
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
