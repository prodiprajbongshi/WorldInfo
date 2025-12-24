import React, { useEffect, useState, useTransition } from "react";
import { NavLink } from "react-router-dom";
import { getAllCountryData } from "../api/country";
import Loader from "../components/section/Loader";
import CountrySearch from "../components/section/CountrySearch";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getAllCountryData();
      startTransition(() => {
        setCountries(res.data);
      });
    };

    fetchCountries();
  }, []);

  if (isPending) return <Loader />;

  return (
    <div className="bg-black">
      <div className="container mx-a">
        <section>
          <CountrySearch />
        </section>
      </div>
      <section className="container mx-auto px-4 py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => {
            const { flags, name, population, region, capital } = country;
            return (
              <li key={index} className=" ">
                <div
                  className="relative w-72 rounded-[2.5rem] p-6
    bg-linear-to-b from-[#1a1a1a] via-black to-[#0a0a0a]
    shadow-[0_0_40px_rgba(255,255,255,0.08)]
    border border-white/20"
                >
                  {/* Flag */}
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src={flags.svg}
                      alt={flags.alt || name.common}
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6 space-y-3 text-white">
                    <h2 className="text-xl font-serif font-bold tracking-wide">
                      {name.common}
                    </h2>

                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-gray-200">
                        Population:
                      </span>{" "}
                      {population.toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-gray-200">
                        Region:
                      </span>{" "}
                      {region}
                    </p>

                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-gray-200">
                        Capital:
                      </span>{" "}
                      {capital?.[0] || "N/A"}
                    </p>

                    {/* Button */}
                    <NavLink to={`/country/${name.common}`}>
                      <button
                        className="mt-6 px-6 py-2 text-sm font-medium text-white
          rounded-full border border-white/80
          hover:bg-white hover:text-black
          transition-all duration-300"
                      >
                        Read More
                      </button>
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Country;
