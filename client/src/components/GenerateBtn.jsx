import React from "react";

const GenerateBtn = () => {
  return (
    <div className="h-[40vh] flex flex-col justify-between pt-0 pb-6 md:pb-10 lg:pb-40">
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-800  mb-12 mt-24 text-center">
          See the magic. Try now
        </h1>
        <button className="px-10 py-4 bg-black text-white rounded-full text-xl font-medium flex items-center gap-2 shadow-lg hover:bg-gray-900 transition">
          Generate Images <span className="ml-2">✨</span>
        </button>
      </div>
    </div>
  );
};

export default GenerateBtn;
