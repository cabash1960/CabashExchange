import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container lg:mx-10 mx-5 grid lg:grid-cols-5 gap-3 items-center py-8">
        <div className="flex col-span-2 items-start flex-col gap-4">
          <img src={logo} alt="CABASH Logo" className="h-8" />
          <p className="text-sm text-slate-400">
            CABASH, a secured online payment gateway that allows payment in
            multiple currencies easily, safely and securely.
          </p>
        </div>
        <div className="flex col-span-2 flex-col lg:items-center text-start  gap-2">
          <h3 className="font-medium text-slate-300">Quick Links</h3>
          <ScrollLink
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-slate-400 hover:text-white cursor-pointer"
          >
            Products
          </ScrollLink>
          <ScrollLink
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-slate-400 hover:text-white cursor-pointer"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="solutions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-slate-400 hover:text-white cursor-pointer"
          >
            Solutions
          </ScrollLink>
        </div>
        <div className="flex col-span-1 flex-col gap-3">
          <h4 className="font-medium text-slate-300">Social Links</h4>
          <div className="flex gap-3">
            <FaFacebook
              className="text-xl cursor-pointer text-white-950 hover:text-gray-70000"
              onClick={() =>
                openLinkInNewTab("https://www.facebook.com/blessing.akinlabi.7?mibextid=LQQJ4d/")
              }
            />
            <FaInstagram
              className="text-xl cursor-pointer text-white-950 hover:text-gray-70000"
              onClick={() =>
                openLinkInNewTab("https://www.instagram.com/cabash_treats?igsh=YTQwZjQ0NmI0OA==/")
              }
            />
            <FaTwitter
              className="text-xl cursor-pointer text-white-950 hover:text-gray-70000"
              onClick={() =>
                openLinkInNewTab("https://twitter.com/")
              }
            />
            <FaWhatsapp
              className="text-xl cursor-pointer text-white-950 hover:text-gray-70000"
              onClick={() =>
                openLinkInNewTab("https://wa.me/message/T4QZHWSV5MBXL1/")
              }
            />
          </div>
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
