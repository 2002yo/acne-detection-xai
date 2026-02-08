// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-rose-200 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#a76c79] italic">
            <span className="tracking-widest">XAI</span> SkinSense
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Empowering you with smarter skin health insights.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <Link to="/" className="text-gray-600 hover:text-[#a76c79] text-sm">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-[#a76c79] text-sm">About</Link>
          <Link to="/howitworks" className="text-gray-600 hover:text-[#a76c79] text-sm">How It Works</Link>
          <Link to="/detect" className="text-gray-600 hover:text-[#a76c79] text-sm">Skin Analysis</Link>
          <Link to="/result" className="text-gray-600 hover:text-[#a76c79] text-sm">Results</Link>
          <Link to="/blog" className="text-gray-600 hover:text-[#a76c79] text-sm">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#a76c79] text-sm">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} XAI SkinSense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
