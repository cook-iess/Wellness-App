import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaDumbbell, FaUtensils, FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Sidebar() {
  const location = useLocation(); // Get the current location to determine the active link
  const [activeLink, setActiveLink] = useState(location.pathname); // Set the initial active link

  return (
    <div className="bg-gradient-to-b from-white to-secondary_color text-primary_color flex flex-col h-screen w-64">
      {/* Logo */}
      <div className="flex items-center gap-1 px-4 py-2 pt-4">
        <img src={logo} alt="logo" className="w-20" />
        <span className="text-xl font-semibold font-custfont">Well App</span>
      </div>

      <hr className="mt-4 border-t border-gray-300" />

      {/* Exercises, Meals, and Users Links */}
      <div className="flex-1">
        <ul className="space-y-4 pl-6">
          <li>
            <Link
              to="/"
              className={`pl-4 py-3 rounded-l-full rounded-r-lg flex items-center gap-3 text-lg text-primary_color no-underline ${
                activeLink === "/" ? "bg-blue-50 drop-shadow-2xl" : "hover:bg-blue-50"
              }`}
              onClick={() => setActiveLink("/")}
            >
              <FaDumbbell className="text-xl" />
              <span>Exercises</span>
            </Link>
          </li>
          <li>
            <Link
              to="/meals"
              className={`pl-4 py-3 rounded-l-full flex items-center gap-3 text-lg text-primary_color no-underline ${
                activeLink === "/meals" ? "bg-blue-50 drop-shadow-2xl" : "hover:bg-blue-50"
              }`}
              onClick={() => setActiveLink("/meals")}
            >
              <FaUtensils className="text-xl" />
              <span>Meals</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className={`pl-4 py-3 rounded-l-full flex items-center gap-3 text-lg text-primary_color no-underline ${
                activeLink === "/users"
                  ? "bg-blue-50 drop-shadow-2xl"
                  : "hover:bg-blue-50"
              }`}
              onClick={() => setActiveLink("/users")}
            >
              <FaUser className="text-xl" />
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </div>

      <hr className="my-4 border-t border-gray-400" />

      {/* Logout */}
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
