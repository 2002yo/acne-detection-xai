import React, { useContext } from 'react';
import { ThemeContext } from '@/App';
import heroImage from "../../assets/hero-face-clear.WEBP"; // same as homepage

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-6 transition-colors duration-300 bg-cover bg-center"
      style={{
        backgroundImage: darkMode
        ? `linear-gradient(to bottom, rgba(30,30,30,0.6), rgba(30,30,30,0.75)), url(${heroImage})`
        : `linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.75)), url(${heroImage})`


      }}
    >
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title */}
        <div className="text-center max-w-4xl mb-12">
          <h1 className="text-5xl font-extrabold text-amber-700 dark:text-amber-400 mb-4">
            About Acne XAI Detection
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A revolutionary approach to understanding acne through the lens of technology and transparency.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-md p-10 text-gray-700 dark:text-gray-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-2">Our Mission</h2>
            <p>
              Acne XAI Detection was created with one purpose: to empower individuals with clear, understandable insights into their skin health.
              We believe that technology should not only detect problems but also help you understand them — in a human, compassionate way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-2">How It Works</h2>
            <p>
              Our system uses advanced deep learning models to detect acne types and severity from facial images.
              Unlike traditional AI that gives a simple \"yes\" or \"no,\" Acne XAI offers explainability — showing you which factors contribute to your acne,
              like oil production, clogged pores, and inflammation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-2">Why Explainable AI?</h2>
            <p>
              Trust is at the heart of skincare.
              With Explainable AI (XAI), every prediction is supported by visible reasons and evidence.
              You won't just see a result — you'll understand your skin better and make informed decisions about your care journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-2">What Makes Us Different</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>✔️ Transparent and user-centered predictions</li>
              <li>✔️ Personalized insights into your acne causes</li>
              <li>✔️ Non-invasive, secure, and privacy-respecting</li>
              <li>✔️ Built with a passion for beauty, science, and care</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-12">
          <p>We believe every skin story deserves to be heard and understood. 🌸</p>
        </div>
      </div>
    </div>
  );
};

export default About;
