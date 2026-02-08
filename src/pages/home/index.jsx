import React from "react";
import heroImage from "../../assets/hero-face-clear.WEBP"; // Background image

const Home = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center text-white flex flex-col items-center justify-start px-6 py-24 transition-colors duration-300"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${heroImage})`,
      }}
    >
      {/* Hero Content */}
      <div className="max-w-4xl text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300 mb-6 drop-shadow-lg">
          Reveal Your Skin's Story with XAI SkinSense
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          An intelligent way to detect, interpret, and visualize acne using Explainable AI — know what’s happening on your skin, and why.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/detect"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            🔍 Start Detection
          </a>
          <a
            href="/about"
            className="bg-white/90 hover:bg-white text-amber-700 font-semibold py-3 px-8 rounded-full shadow-md border border-amber-600 transition duration-300"
          >
            📘 Learn More
          </a>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-24">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-4">AI-Powered Acne Detection</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Upload your image and our AI detects multiple acne types — including blackheads, papules, and nodules — accurately and instantly.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-4">Explainable Visual Insights</h2>
          <p className="text-gray-600 dark:text-gray-300">
            See heatmaps like Grad-CAM & LIME that reveal how the model makes decisions — giving you full transparency into the detection process.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-4">Deep Dive Into Your Skin Health</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get a breakdown of acne severity, confidence levels, and if AI predictions align — helping you reflect and consult experts wisely.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-white/80 text-sm mt-20">
        <p className="italic">Empowering you to take control of your skin health — one transparent insight at a time. ✨</p>
      </div>
    </div>
  );
};

export default Home;
