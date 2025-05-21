import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  return (
    <div>
      {/* <!-- Mobile-first header --> */}
      <header className="w-full py-4 sm:py-5 px-4 sm:px-8 md:px-16 flex flex-wrap justify-between items-center shadow-sm">
        {/* <!-- Logo --> */}
        <div className="flex items-center space-x-2">
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
          <span
            onClick={() => navigate("/home")}
            className="text-xl sm:text-2xl font-bold text-black cursor-default "
          >
            Kalpana-AI
          </span>
        </div>

        {/* <!-- Mobile menu toggle --> */}
        {/* <button id="menu-toggle" className="md:hidden p-2 focus:outline-none" aria-label="Menu">
        <i className="fas fa-bars text-xl text-gray-700"></i>
      </button>
       */}
        {/* Implementation left for later */}

        {/* <!-- Mobile nav (hidden by default) --> */}

        {!user ? (
          <>
            <nav id="mobile-nav" className="w-full md:hidden bg-white">
              <div className="flex flex-col space-y-3 py-3">
                <a
                  onClick={() => navigate("/buy")}
                  className="text-gray-700 text-sm hover:underline p-2 cursor-default"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition text-center"
                >
                  Login
                </a>
              </div>
            </nav>

            {/* <!-- Desktop nav -->  */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-2">
              <a
                onClick={() => navigate("/buy")}
                className="text-gray-700 text-sm lg:text-base hover:underline p-2 cursor-default"
              >
                Pricing
              </a>
              <a
                href="#"
                className="px-8 py-2 bg-black text-white rounded-full text-sm lg:text-base font-medium hover:bg-gray-800 focus:outline-none transition"
              >
                Login
              </a>
            </nav>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 bg-[#e6f0fc] px-5 py-2 rounded-full font-medium text-[#3885ff] text-base">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="#3885ff" />
                <polygon points="10,5 12,13 8,13" fill="white" />
              </svg>
              Credits left: 4
            </span>
            <span className="text-[#333] font-normal text-base">
              Hi! Richard
            </span>
            <span className="relative group inline-flex items-center justify-center w-9 h-9 bg-white  rounded-full">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" fill="#dbeafe" />
                <ellipse cx="12" cy="16" rx="6" ry="4" fill="#dbeafe" />
              </svg>
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md  text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </span>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
