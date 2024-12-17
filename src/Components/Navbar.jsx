"use client";
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

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
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/about">About</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/services">Services</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/contact">Contact</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/find">Find Medicine</Link>
          </motion.li>
        </motion.ul>

        <div className="flex gap-5">
          {!user ? (
            <Link href="/register">
              <motion.button
                className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Register
              </motion.button>
            </Link>
          ) : (
            <div className="md:flex hidden items-center gap-3">
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <button
                onClick={logOut}
                className="bg-red-600 text-white px-4 py-2 rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div
          className="md:hidden text-green-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user ? (
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <p className='text-2xl font-extrabold'>
              ☰
            </p>
          )}
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
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/about">About</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/services">Services</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/contact">Contact</Link>
          </motion.li>
          <motion.li
            className="hover:text-green-700 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/Find">Find Medicine</Link>
          </motion.li>
          <div className="mt-10">
            {!user ? (
              <Link href="/register">
                <motion.button
                  className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Register
                </motion.button>
              </Link>
            ) : (
              <button
                onClick={logOut}
                className="bg-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            )}
          </div>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
