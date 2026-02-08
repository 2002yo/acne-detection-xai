import React, { useContext } from 'react';
import { ThemeContext } from '@/App';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="text-2xl font-bold text-[#a76c79] dark:text-amber-300 italic">
        <span className="tracking-widest">XAI</span> SkinSense
      </div>
      <nav className="space-x-6 text-gray-700 dark:text-gray-300 text-sm font-medium">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/howitworks">How It Works</a>
        <a href="/detect">Skin Analysis</a>
        <a href="/result">Results</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-6 px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;
