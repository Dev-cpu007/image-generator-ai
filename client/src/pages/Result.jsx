import React from "react";

const Result = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center mt-16">
        {/* Generated Image Block */}
        <div className="bg-white rounded-md overflow-hidden shadow-md flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=450&q=80"
            alt="Generated"
            className="w-80 h-80 object-cover"
          />
          <div className="text-sm text-gray-500 px-2 py-2 w-full">
            Loading.....
          </div>
        </div>

        {/* Generate UI Bar */}
        <form className="w-full flex justify-center">
          <div className="flex w-[700px] mt-10 md:pb-[ 30vh] lg:pb-100 xl:pb-200">
            <input
              type="text"
              className="flex-1 rounded-l-full bg-gray-500/70 text-white focus:outline-none px-6 py-3 text-sm placeholder:text-white" // Change to your desired placeholder color
              placeholder="Describe what you want to generate"
            />
            <button
              type="submit"
              className="rounded-r-full bg-zinc-900 text-white px-10 text-sm font-medium hover:bg-zinc-800 transition"
            >
              Generate
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Result;
