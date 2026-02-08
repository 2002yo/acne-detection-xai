// src/App.jsx
import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/home";
import About from "@/pages/about";
import Detect from "@/pages/detect";
import Result from "@/pages/result";
import NotFound from "@/pages/NotFound";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import HowItWorks from "@/pages/howitworks";

// 🔁 Export the Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/detect" element={<Detect />} />
              <Route path="/result" element={<Result />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/howitworks" element={<HowItWorks />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
