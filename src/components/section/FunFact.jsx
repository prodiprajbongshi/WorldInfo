import React, { useState } from "react";
import facts from "../../api/fackData.json";

const FunFact = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const { country, fact } = facts[currentFactIndex];

  const nextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Gradient Border Wrapper */}
        <div className="p-[2px] rounded-3xl bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500">
          {/* Inner Content */}
          <div className="bg-[#202020]/95 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col items-center text-center">
            
            <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-full mb-6">
              Did you know? ({country})
            </span>

            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 min-h-24 flex items-center">
              “{fact}”
            </h2>

            <button
              onClick={nextFact}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold 
              hover:bg-blue-700 transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Show another fact
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
