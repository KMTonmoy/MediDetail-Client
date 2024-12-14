"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-50 relative overflow-hidden py-10 shadow-lg">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 rounded-full blur-3xl opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-blue-400 via-green-400 to-teal-300 rounded-full blur-3xl opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-800 font-serif">
              MediDetail
            </h2>
            <p className="text-sm text-gray-600">
              Your trusted partner for comprehensive medical insights.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "#15803D" }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer text-gray-600 hover:text-green-500"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <p className="text-sm text-gray-600">
              Email:{" "}
              <a
                href="mailto:info@medidetail.com"
                className="underline hover:text-purple-500"
              >
                info@medidetail.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="underline hover:text-purple-500"
              >
                +123 456 789
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Address: 123 Health Street, Wellness City
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-10 border-t border-gray-300 pt-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-sm text-gray-600"
            whileHover={{ scale: 1.05, color: "#6B46C1" }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} MediDetail. All Rights Reserved.
          </motion.p>
          <motion.p
            className="text-sm text-gray-600"
            whileHover={{ scale: 1.05, color: "#6B46C1" }}
            transition={{ duration: 0.3 }}
          >
            Designed by{" "}
            <span className="font-bold text-gray-800 hover:text-purple-500">
              Tonmoy Ahamed
            </span>
            .
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
