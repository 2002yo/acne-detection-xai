import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-amber-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center py-12 px-6 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-lg p-10 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-amber-700 dark:text-amber-400 mb-6 text-center">
          Get In Touch
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
          Have any questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you shortly!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-rose-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-rose-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-rose-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
