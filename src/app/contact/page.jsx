"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section: Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.websitebuilderexpert.com/wp-content/uploads/2023/02/13045442/Contact-Us-Page-Examples.jpg" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>

          {/* Right Section: Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              Have any questions or feedback? Feel free to reach out!
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:border-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:border-green-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:border-green-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
