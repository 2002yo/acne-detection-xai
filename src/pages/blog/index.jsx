// src/pages/blog/index.jsx
import React, { useContext } from "react";
import { ThemeContext } from '@/App';
import heroImage from "../../assets/hero-face-clear.WEBP";

const Blog = () => {
  const { darkMode } = useContext(ThemeContext);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Different Types of Acne",
      excerpt: "Learn about blackheads, whiteheads, papules, pustules, nodules, and cysts — and how they differ.",
      date: "April 2025",
    },
    {
      id: 2,
      title: "Top 5 Skincare Tips to Prevent Acne",
      excerpt: "Simple changes in your daily skincare routine can significantly reduce acne breakouts.",
      date: "March 2025",
    },
    {
      id: 3,
      title: "How Diet and Stress Affect Your Skin",
      excerpt: "Discover how what you eat and how you feel impacts your skin’s health and acne conditions.",
      date: "February 2025",
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
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-4xl font-extrabold text-amber-700 dark:text-amber-400 mb-10 text-center">
          Our Latest Blog Posts
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{post.excerpt}</p>
                <div className="mt-4 text-sm text-gray-400 dark:text-gray-500">{post.date}</div>
              </div>
              <div className="bg-amber-400 hover:bg-amber-500 text-white text-center py-3 font-semibold cursor-pointer">
                Read More
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
