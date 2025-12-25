import React, { useEffect, useState, useTransition } from "react";
import { NavLink } from "react-router-dom";
import { getAllCountryData } from "../api/country";
import Loader from "../components/section/Loader";
import CountrySearch from "../components/section/CountrySearch";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

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

  // 🔍 SEARCH FILTER LOGIC
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen pt-16">

      {/* Search Section */}
      <CountrySearch search={search} setSearch={setSearch} />

      {/* Country List */}
      <section className="container mx-auto  px-4 py-10">
        {filteredCountries.length === 0 ? (
          <p className="text-center text-gray-400">
            No countries found.
          </p>
        ) : (
          <div className=" flex items-center justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country, index) => {
              const { flags, name, population, region, capital } = country;

              return (
                <li key={index}>
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
                      <h2 className="text-xl font-serif font-bold">
                        {name.common}
                      </h2>

                      <p className="text-sm text-gray-300">
                        <span className="font-semibold">Population:</span>{" "}
                        {population.toLocaleString()}
                      </p>

                      <p className="text-sm text-gray-300">
                        <span className="font-semibold">Region:</span>{" "}
                        {region}
                      </p>

                      <p className="text-sm text-gray-300">
                        <span className="font-semibold">Capital:</span>{" "}
                        {capital?.[0] || "N/A"}
                      </p>

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
            </div>
        )}
      </section>
    </div>
  );
};

export default Country;
