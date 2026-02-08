// src/pages/detect/index.jsx
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "@/App";

const Detect = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/analyze`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = response.data;
      navigate("/result", { state: { result } });
    } catch (error) {
      console.error("Prediction failed:", error);

      const message =
        error?.response?.data?.error ||
        error?.response?.data?.detail ||
        "Failed to analyze image. Please try again.";

      alert(`Server Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center py-12 px-6 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-rose-100 to-amber-100 text-gray-900"}`}>
      {/* Title */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-4xl font-bold text-amber-700 dark:text-amber-400 mb-4">Analyze Your Skin</h1>
        <p className="text-md text-gray-700 dark:text-gray-300">
          Upload a clear image of your skin and let our AI reveal insights about your acne condition and severity.
        </p>
      </div>

      {/* Upload Section */}
      <div className="flex justify-center w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 flex flex-col items-center space-y-6 max-w-md w-full">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="w-full h-64 object-cover rounded-xl shadow"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center border-2 border-dashed border-amber-300 rounded-xl text-amber-500">
              No image selected
            </div>
          )}

          {/* Upload Button */}
          <label className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow transition duration-300">
            Choose Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={!selectedImage || loading}
            className={`${
            selectedImage && !loading
              ? "bg-amber-600 hover:bg-amber-700"
              : "bg-amber-300 cursor-not-allowed"
          } text-white font-semibold py-3 px-8 rounded-full shadow transition duration-300 flex items-center justify-center gap-2`}

          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Analyzing...
              </>
            ) : (
              "Analyze My Skin"
            )}
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-12">
        <p>Please upload a clear and well-lit photo for accurate detection results. 📸</p>
      </div>
    </div>
  );
};

export default Detect;
