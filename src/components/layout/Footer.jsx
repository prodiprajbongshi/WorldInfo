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
            <span className="hover:text-blue-500 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-blue-500 cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-blue-500 cursor-pointer transition">
              Contact
            </span>
          </div>
        </div>
        <hr className="my-3" />
        <div className="">
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
