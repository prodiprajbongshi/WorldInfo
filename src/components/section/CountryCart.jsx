import React from "react";

const CountryCart = ({ countryData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      {countryData.map((item) => (
        <div
          key={item.id}
          className="relative group rounded-2xl p-0.5
      bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500
      hover:from-purple-500 hover:via-pink-500 hover:to-orange-500
      transition-all duration-700"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-30
        bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500
        group-hover:opacity-60 transition duration-700"
          />

          {/* Card */}
          <div
            className="relative bg-[#202020]/95 backdrop-blur-xl text-white
        rounded-2xl p-6 h-full
        transform transition-all duration-500
        group-hover:-translate-y-2 group-hover:scale-[1.03]
        shadow-lg group-hover:shadow-2xl"
          >
            {/* Title */}
            <h1 className="text-2xl font-bold mb-3 bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              {item.countryName}
            </h1>

            {/* Info */}
            <p className="text-sm text-white/70 mb-1">
              <span className="font-semibold text-white">Capital:</span>{" "}
              {item.capital}
            </p>
            <p className="text-sm text-white/70 mb-4">
              <span className="font-semibold text-white">Population:</span>{" "}
              {item.population}
            </p>

            {/* Fact */}
            <p className="text-sm text-white/80 leading-relaxed">
              {item.interestingFact}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCart;
