import { Loader } from "lucide-react";
import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/country";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getCountryIndData(params.id);
      startTransition(() => {
        setCountry(res.data[0]);
      });
    };

    fetchCountries();
  }, []);
  console.log(country);

  if (isPending) return <Loader />;

  return (
    <div className="bg-black pt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {country && (
          <div
            className="max-w-4xl  gap-8 items-center
         "
          >
            <div
              className="rounded-[2.5rem] my-20 p-4
                    bg-linear-to-b from-[#1a1a1a] via-black to-[#0a0a0a]
                    shadow-[0_0_40px_rgba(255,255,255,0.08)]
                    border border-white/20"
            >
              {/* Flag */}
              <div className="overflow-hidden rounded-xl shadow-md max-h-60 max-w-60 lg:max-h-80 lg:max-w-80">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt || country.name.official}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-5">
                <h1 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  {country.name.official}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm  my-4 text-white/80">
                  <p>
                    <span className="font-semibold text-white">
                      Native Names:
                    </span>{" "}
                    {Object.keys(country.name.nativeName || {})
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ") || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Population:
                    </span>{" "}
                    {country.population.toLocaleString()}
                  </p>

                  <p>
                    <span className="font-semibold text-white">Region:</span>{" "}
                    {country.region}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Sub Region:
                    </span>{" "}
                    {country.subregion || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Capital:
                    </span>{" "}
                    {country.capital?.[0] || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Top Level Domain:
                    </span>{" "}
                    {country.tld?.[0] || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Currencies:
                    </span>{" "}
                    {Object.keys(country.currencies || {})
                      .map((cur) => country.currencies[cur].name)
                      .join(", ") || "N/A"}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Languages:
                    </span>{" "}
                    {Object.keys(country.languages || {})
                      .map((key) => country.languages[key])
                      .join(", ") || "N/A"}
                  </p>
                </div>
              </div>
              {/* back btn  */}
              <div className=" ">
                <NavLink to="/country" className="backBtn">
                  <button className="bg-blue-700 text-white px-3 py-1 rounded-sm hover:bg-blue-900 cursor-pointer transition-all duration-300">
                    Go Back
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
