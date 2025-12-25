const CountrySearch = ({ search, setSearch }) => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-2xl mx-auto px-4 text-center">

        <div className="mb-8">
          <h1 className="text-xl md:text-3xl lg:text-5xl text-white mb-4">
            Search for Any Country
          </h1>
          <p className="text-gray-400">
            Type a country name to filter the list below.
          </p>
        </div>

        <div className="p-[2px] rounded-2xl bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500">
          <div className="bg-[#202020] rounded-2xl p-4">
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-black text-white
              placeholder-gray-500 border border-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CountrySearch;
