import React from "react";
import countryData from "../api/countruyData.json";
import CountryCart from "../components/section/CountryCart";

const About = () => {
  return (
    <div className="bg-black ">
      <section className="container mx-auto py-8 px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl mx-auto py-4 md:py-12 text-center  max-w-2xl">
          Here are the Interesting Facts we’re proud of.
        </h1>
        <CountryCart countryData={countryData} />
      </section>
    </div>
  );
};

export default About;
