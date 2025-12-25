import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true); // show/hide navbar
  const [lastScroll, setLastScroll] = useState(0);

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const linkClass = ({ isActive }) =>
    `text-xl transition-all duration-300
     decoration-2 underline-offset-6
     ${
       isActive
         ? "underline decoration-blue-500"
         : "hover:underline hover:decoration-blue-500"
     }`;

  return (
    <header
      className={`bg-[#202020] text-white/90 fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <section className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-semibold">
            <span className="text-blue-500 text-2xl">World</span> info
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className={linkClass}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </button>

          {/* Mobile Menu */}
          <nav
            className={`md:hidden fixed top-0 left-0 h-screen w-[60%] bg-blue-500 z-50
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <ul className="flex flex-col mt-20 ms-6 space-y-6">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-xl hover:underline decoration-2 underline-offset-6 hover:decoration-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="text-xl hover:underline decoration-2 underline-offset-6 hover:decoration-white"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  onClick={() => setOpen(false)}
                  className="text-xl hover:underline decoration-2 underline-offset-6 hover:decoration-white"
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-xl hover:underline decoration-2 underline-offset-6 hover:decoration-white"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
