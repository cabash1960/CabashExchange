import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
import logoC from "../assets/logoC.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Adjust the offset based on your design
    const offset = 70;

    // Check if the scroll position is beyond a certain point
    setIsScrolled(scrollPosition > offset);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".navbar-container")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-gray-950" : "bg-gray-900"
      } p-4 sticky top-0 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img src={logoC} alt="logo" className="lg:w-40 w-32" />
        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`${
            menuOpen
              ? "fixed inset-0 bg-black bg-opacity-50 pt-6 z-40  flex  flex-col gap-3"
              : "hidden"
          } lg:flex lg:flex-row lg:gap-6 items-center lg:bg-transparent bg-black bg-opacity-50 flex-col navbar-container`}
        >
          <ScrollLink
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </ScrollLink>
          <ScrollLink
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 cursor-pointer"
            onClick={closeMenu}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="solutions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 cursor-pointer"
            onClick={closeMenu}
          >
            Solutions
          </ScrollLink>
          <Button
            text="Login"
            variant="primary"
            to="/SignInForm"
            onClick={closeMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
