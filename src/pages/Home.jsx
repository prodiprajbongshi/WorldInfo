import React from "react";
import { Button } from "@/components/ui/button";
import Hero from "../components/section/Hero";
import CountryCart from "../components/section/CountryCart";
import countryData from "../api/countruyData.json";
import FunFact from "../components/section/FunFact";
import SearchPreview from "../components/section/SearchPreview";

const Home = () => {


  return (
    <div className="bg-black text-white pt-16">
      {/* hero section  */}
      <section>
        <Hero />
      </section>
      {/* country search section  */}
      <section>
        <SearchPreview />
      </section>
      {/* about section  */}
      <section className="container mx-auto py-8 px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl mx-auto py-4 md:py-12 text-center  max-w-2xl">
          Here are the Interesting Facts we’re proud of.
        </h1>
        <CountryCart countryData={countryData} />
      </section>

      {/* country fun fact  */}
      <section>
        <FunFact />
      </section>
    </div>
  );
};

export default Home;
