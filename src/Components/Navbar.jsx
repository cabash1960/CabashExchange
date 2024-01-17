import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
import logoC from "../assets/logoC.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-400 p-4">
      <div className="container mx-auto flex justify-between gap-7 lg:gap-0 items-center">
        <img src={logoC} alt="logo" className="w-40" />
        <div className="flex lg:space-x-14 space-x-4 items-center">
          <ScrollLink
            to="product"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className="text-black cursor-pointer"
          >
            Product
          </ScrollLink>
          <ScrollLink
            to="feature"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black cursor-pointer"
          >
            Feature
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black cursor-pointer"
          >
            Contact
          </ScrollLink>
          <Button text="Login" variant="primary" to="/SignInForm" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
