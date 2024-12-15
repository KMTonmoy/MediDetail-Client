"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-green-700 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          MediDetail
        </motion.div>

        <motion.ul
          className="hidden md:flex space-x-6 text-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Home
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Services
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.li>
        </motion.ul>

        <div className="flex gap-5">
          <Link href="register">
            <motion.button
              className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Register
            </motion.button>
          </Link>
        </div>

        <div
          className="md:hidden text-green-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      <motion.div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gray-50 shadow-lg text-gray-700 z-50 transition-transform`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 flex justify-end">
          <button
            className="text-green-700 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        <motion.ul
          className="space-y-6 text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Home
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Services
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.li>
          <Link href="register">
            <motion.button
              className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Register
            </motion.button>
          </Link>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
