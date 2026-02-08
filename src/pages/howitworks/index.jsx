// src/pages/howitworks/index.jsx
import React, { useContext } from "react";
import { ThemeContext } from '@/App';
import heroImage from "../../assets/hero-face-clear.WEBP";

const HowItWorks = () => {
  const { darkMode } = useContext(ThemeContext);

  const steps = [
    {
      title: "1. Upload Your Skin Image",
      description: "Simply upload a clear photo of the affected skin area. Ensure good lighting and minimal makeup for accurate analysis.",
    },
    {
      title: "2. Our AI Analyzes Your Skin",
      description: "Using a deep learning model and Explainable AI (XAI) techniques, we detect acne types, severity levels, and related skin attributes.",
    },
    {
      title: "3. Get Instant Results & Insights",
      description: "Receive a detailed report showing acne classification, severity, probable causes, and healing time correlations — all explained clearly.",
    },
    {
      title: "4. Understand and Act",
      description: "We empower you with actionable insights so you can make better skincare decisions — personalized for your skin's unique needs.",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-6 transition-colors duration-300 bg-cover bg-center"
      style={{
        backgroundImage: darkMode
          ? `linear-gradient(to bottom, rgba(30,30,30,0.6), rgba(30,30,30,0.75)), url(${heroImage})`
          : `linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.75)), url(${heroImage})`
      }}
    >
      <div className="relative z-10 w-full max-w-6xl text-gray-900 dark:text-white">
        <h1 className="text-4xl font-extrabold text-amber-700 dark:text-amber-400 mb-10 text-center">
          How It Works
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-4">{step.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We combine advanced AI technology with skin health knowledge to bring you
            transparent, accurate, and understandable acne detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
