import React from 'react';

const Footer = () => {
    return (
        <>
        {/* <!-- Footer - original styling --> */}
    <footer className="bg-gray-900 text-white py-8 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <span className="text-xl font-bold text-blue-400">Kalpana-AI</span>
          <p className="text-gray-400 text-xs mt-1">© 2024 All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
  </>
    );
}

export default Footer;
