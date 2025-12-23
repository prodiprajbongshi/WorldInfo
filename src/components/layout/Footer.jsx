import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-white/80 pt-6 md:pt-16">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          {/* Logo */}
          <NavLink to="/" className="text-xl font-semibold">
            <span className="text-blue-500 text-2xl">World</span> info
          </NavLink>

          {/* Right */}
          <div className="flex space-x-6 text-sm">
            <NavLink to="privacy-policy">
              <span className="hover:text-blue-500 cursor-pointer transition">
                Privacy Policy
              </span>
            </NavLink>
            <NavLink to="terms">
              <span className="hover:text-blue-500 cursor-pointer transition">
                Terms
              </span>
            </NavLink>
            <NavLink to="contact">
              <span className="hover:text-blue-500 cursor-pointer transition">
                Contact
              </span>
            </NavLink>
          </div>
        </div>
        <hr className="my-3" />
        <div className="mt-6">
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-blue-500 font-semibold">World Info</span>.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
