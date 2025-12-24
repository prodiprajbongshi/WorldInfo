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
    <div className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {country && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
      bg-white rounded-2xl shadow-xl p-6 md:p-10"
          >
            {/* Flag */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={country.flags.png}
                alt={country.flags.alt || country.name.official}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-5">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {country.name.official}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">
                    Native Names:
                  </span>{" "}
                  {Object.keys(country.name.nativeName || {})
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ") || "N/A"}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Population:
                  </span>{" "}
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">Region:</span>{" "}
                  {country.region}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Sub Region:
                  </span>{" "}
                  {country.subregion || "N/A"}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">Capital:</span>{" "}
                  {country.capital?.[0] || "N/A"}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Top Level Domain:
                  </span>{" "}
                  {country.tld?.[0] || "N/A"}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Currencies:
                  </span>{" "}
                  {Object.keys(country.currencies || {})
                    .map((cur) => country.currencies[cur].name)
                    .join(", ") || "N/A"}
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
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
                <button className="bg-blue-700 text-white px-3 py-1 rounded-sm hover:bg-blue-900 cursor-pointer transition-all duration-300">Go Back</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
