import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Contacts = () => {
  const darkMode = useSelector((state) => state.theme.status);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleLogo = () => navigate("/");

  return (
    <div
      className={`min-h-screen pt-20 px-4 ${
        darkMode
          ? "bg-pink-800"
          : "bg-gradient-to-b from-black via-gray-900 to-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side - Form */}
        <div className="md:w-1/2 w-full p-5 mx-auto  bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-90 rounded-2xl shadow-lg ">
          {/* Logo */}
          <strong
            className="sm:hidden absolute top-4 left-4 text-cyan-300 cursor-pointer"
            onClick={handleLogo}
          >
            infoKey.in
          </strong>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-cyan-300 text-center md:text-left">
            Contact Us
          </h2>

          <p className="text-center md:text-left mb-6 text-gray-700 dark:text-gray-300">
            If you have any query related to the company or anything, you can
            ask here.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-800 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none h-32 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
