"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return Swal.fire({
        title: "Oops!",
        text: "Please fill in both fields.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }

    try {
      Swal.fire({
        title: "Logging in...",
        text: "Please wait while we process your login.",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });

      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "You are logged in.",
          icon: "success",
          confirmButtonText: "Continue",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Invalid credentials. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mt-6">Welcome Back</h1>
        <p className="text-gray-600 mt-2">
          Login to your account to access personalized details and updates.
        </p>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-lg p-6 mt-8 w-11/12 max-w-md"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </motion.button>
        <p className="text-center text-gray-600 mt-4">
          Forgot your password?{" "}
          <a
            href="/reset-password"
            className="text-green-500 hover:text-green-700 font-medium transition"
          >
            Reset here
          </a>
        </p>
        <p className="text-center text-gray-600 mt-2">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-green-500 hover:text-green-700 font-medium transition"
          >
            Register now
          </a>
        </p>
      </motion.form>
    </div>
  );
};

export default LoginPage;
