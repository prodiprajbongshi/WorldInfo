import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="container mx-auto ">
      <section className="flex  flex-col-reverse md:flex-row items-center justify-between px-8 py-12 space-x-6 md:py-36 ">
        <div className="w-full md:w-[50%] ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl   max-w-2xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="max-w-xl my-4">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink className="cursor-pointer" to="/country">
            <div className="flex items-center justify-center w-48 py-1.5 rounded-sm outline-2 outline-blue-200  bg-gray-400 ">
              <input className="cursor-pointer" type="button" value="Start Exploring" />
              <span className="ml-2">
                <FaLongArrowAltRight />
              </span>
            </div>
          </NavLink>
        </div>
        <div className="w-full md:w-[50%] mb-12 md:mb-0 ">
            <img className="w-full" src="/home/heroImage.jpg" alt="World" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
