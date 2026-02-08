import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 my-4">The page you're looking for doesn't exist.</p>
      <button
        className="px-3 py-1.5 md:px-6 md:py-3 bg-blue-500 text-white rounded-sm md:rounded-lg text-sm md:text-base hover:bg-opacity-80 transition"
        onClick={() => navigate("/")}
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
