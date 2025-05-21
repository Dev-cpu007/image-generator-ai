import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer - original styling --> */}
      <footer className="w-full">
        <div className="  flex items-center justify-between py-5 px-12">
          {/* Left: Logo and Name */}
          <div className="flex items-center gap-3">
            <span className="inline-block bg-[#3885ff] rounded-lg p-2">
              {/* <!-- Logo --> */}
              <svg
                onClick={() => navigate("/home")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#3885ff" />
                <circle cx="8" cy="8" r="2" fill="white" />
                <circle cx="16" cy="8" r="2" fill="white" />
                <circle cx="12" cy="16" r="2" fill="white" />
                <path
                  d="M8 8L12 16M16 8L12 16"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <span className="text-2xl font-bold text-gray-900 ">
              Kalpana-AI
            </span>
            <span className="mx-7 text-2xl font-extralight text-gray-300">
              |
            </span>
            <span className="text-lg text-gray-500 font-[Montserrat]">
              All right reserved. Copyright @Kalpana-AI
            </span>
          </div>
          {/* Right: Social Media */}
          <div className="flex gap-5">
            <button className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              {/* Facebook */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  d="M17 2.1H14.5a5.5 5.5 0 0 0-5.5 5.5V9H6.2A.2.2 0 0 0 6 9.2v3.6c0 .11.09.2.2.2H9v9.1c0 .11.09.2.2.2h3.6c.11 0 .2-.09.2-.2V13h2.17c.12 0 .22-.08.24-.19l.5-3.6a.2.2 0 0 0-.2-.21H13v-1.4c0-.61.39-.92.89-.92H17a.2.2 0 0 0 .2-.2V2.3a.2.2 0 0 0-.2-.2z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              {/* Twitter */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  d="M22 5.924c-.793.352-1.646.59-2.543.697A4.498 4.498 0 0 0 21.428 4.1a8.918 8.918 0 0 1-2.825 1.08A4.482 4.482 0 0 0 11.03 9.2C7.726 9.034 4.768 7.581 2.745 5.183a4.467 4.467 0 0 0-.605 2.245c0 1.55.789 2.917 1.987 3.722a4.46 4.46 0 0 1-2.034-.563v.057c0 2.166 1.543 3.974 3.588 4.382a4.495 4.495 0 0 1-2.025.077c.572 1.789 2.228 3.09 4.19 3.126A8.977 8.977 0 0 1 2 19.107a12.66 12.66 0 0 0 6.853 2.008c8.222 0 12.725-6.815 12.725-12.727 0-.194-.004-.387-.013-.578A9.025 9.025 0 0 0 24 4.59a8.834 8.834 0 0 1-2.559.701A4.531 4.531 0 0 0 22 5.924z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              {/* Instagram */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-900"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  fill="currentColor"
                  fillOpacity="0.13"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
