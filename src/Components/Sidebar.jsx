import React, { useState } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import { RiArrowUpDownLine, RiSettings5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`relative bg-slate-200 h-screen p-5 transition-all duration-300 flex flex-col text-md font-semibold ${
          sidebarOpen ? "w-72" : "w-12"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-9 cursor-pointer rounded-full border-2 border-black bg-white p-1"
        >
          {/* SVG icon */}
          <RiArrowUpDownLine
            className={`h-6 w-6 transform transition-transform duration-300 ${
              sidebarOpen ? "rotate-270" : "rotate-90"
            }`}
          />
        </button>
      
        <ul className="flex flex-col space-y-1 overflow-y-auto overflow-x-hidden scrollbar">
          {/* Main menu items */}
          <span className="text-gray-400 font-bold">Main</span>
          <li className="group">
            <Link
              to="/Dashboard"
              className="flex items-center space-x-2 py-2 px-4 rounded-md text-black hover:bg-sky-300 transition-colors duration-300"
            >
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="group">
            <Link
              to="/Transaction"
              className="flex items-center space-x-2 py-2 px-4 rounded-md text-black hover:bg-sky-300 transition-colors duration-300"
            >
              <RiArrowUpDownLine />
              <span>Transactions</span>
            </Link>
          </li>
          {/* Personal menu items */}
          <span className="text-gray-400 font-bold">Personal</span>
          <li className="group">
            <Link
              to="/User"
              className="flex items-center space-x-2 py-2 px-4 rounded-md text-black hover:bg-sky-300 transition-colors duration-300"
            >
              <FaUserCircle />
              <span>Personal Information</span>
            </Link>
          </li>
          <li className="group">
            <Link
              to="/TransactionHistory"
              className="flex items-center space-x-2 py-2 px-4 rounded-md text-black hover:bg-sky-300 transition-colors duration-300"
            >
              <BiHistory />
              <span>Transaction History</span>
            </Link>
          </li>
          <li className="group">
            <Link
              to="/Settings"
              className="flex items-center space-x-2 py-2 px-4 rounded-md text-black hover:bg-sky-300 transition-colors duration-300"
            >
              <RiSettings5Fill />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
