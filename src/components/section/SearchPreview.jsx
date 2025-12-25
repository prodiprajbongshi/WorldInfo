import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCountryIndData } from "../../api/country";

const CountrySearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    // Empty validation
    if (!search.trim()) {
      setError("Please enter a country name");
      return;
    }

    // Letters only validation
    if (!/^[a-zA-Z\s]+$/.test(search)) {
      setError("Country name should contain only letters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await getCountryIndData(search.trim());
      navigate(`/country/${search.trim()}`);
    } catch (err) {
      setError("Country not found. Please enter a valid country name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-4 text-center">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl text-white mb-4">
            Search for Any Country
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Enter an exact country name to explore population, capital, region,
            and more.
          </p>
        </div>

        {/* Gradient Border */}
        <div className="p-[2px] rounded-2xl bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500">
          <form
            onSubmit={handleSearch}
            className="bg-[#202020] rounded-2xl p-4 flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="e.g. Bangladesh"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setError("");
              }}
              className="flex-1 px-5 py-3 rounded-xl bg-black text-white
              placeholder-gray-500 border border-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-xl font-semibold text-white 
              transition-all shadow-lg ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 active:scale-95"
              }`}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {/* Error Section with CTA */}
        {error && (
          <div className="mt-6 bg-[#1a1a1a] border border-red-500/30 rounded-xl p-5">
            <p className="text-red-500 font-medium mb-2">
              {error}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              You can visit the country page to browse all countries and search
              manually.
            </p>
            <button
              onClick={() => navigate("/country")}
              className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold
              hover:bg-red-700 transition-all"
            >
              Go to Country Page
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CountrySearch;
