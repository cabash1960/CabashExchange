import React from "react";
import logoC from "../assets/logoc.png";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white ">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-8">
        <div className="flex items-start flex-col w-1/3 gap-4">
          <img src={logoC} alt="CABASH Logo" className="h-8" />
          <p className="text-sm text-slate-400">
            CABASH, a secured online payment gateway that allows payment in
            multiple currencies easily, safely and securely.
          </p>
        </div>
        <div className="flex flex-col items-center space-x-4">
          <h4 className="text-slate-300">Quick Links</h4>
          <a href="/home" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="/developer" className="text-gray-400 hover:text-white">
            Developer
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <h4 className="text-slate-300">Social Links</h4>
        </div>
      </div>
      <div className="bg-gray-950 text-center py-3">
        <p className="text-sm text-slate-400">
          &copy; 2023 CABASH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
