import React from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import {  RiArrowUpDownLine, RiSettings5Fill } from 'react-icons/ri';
import { Link } from "react-router-dom";

function Sidebar() {
 
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-slate-300 p-4 z-50 sidebar-menu transition-transform">
        <Link
          to="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <h2 className="font-bold flex justify-center items-center text-2xl">
            CABASH
            <span className="bg-slate-800 text-lg text-white px-2 pb-1 rounded-md">
              Exchange
            </span>
          </h2>
        </Link>
        <ul className="mt-10">
          <span className="text-gray-400 text-lg font-bold">Main</span>
          <li className="mb-4 group">
            <Link
              to="/Dashboard"
              className="flex  gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <FaHome className="text-xl" />
              <span className="text-md">Dashboard</span>
            </Link>
          </li>
          <li className="mb-4 group">
            <Link
              to="/Transaction"
              className="flex  gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <RiArrowUpDownLine className="text-xl"/>
              <span className="text-md">Transaction</span>
            </Link>
          </li>

          <span className="text-gray-400 font-bold">PERSONAL</span>

          <li className="mb-1 group">
            <Link
              to="/User"
              className="flex gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <FaUserCircle className="text-xl" />
              <span className="text-md">Personal Information</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <Link
              to="/TransactionHistory"
              className="flex gap-2 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <BiHistory className="text-xl" />
              <span className="text-md">Transaction History</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <Link
              to="/Settings"
              className="flex gap-1.5 font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <RiSettings5Fill className="text-2xl" />
              <span className="text-md">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
