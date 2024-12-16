"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-green-700">About MediDetail</h2>
          <p className="mt-4 text-xl text-gray-600">
            MediDetail is dedicated to providing reliable healthcare information and services to improve your well-being. Our mission is to bridge the gap between medical professionals and patients with easy access to healthcare details.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600">
            We aim to provide a trustworthy platform for users to access vital health information, connect with medical professionals, and take proactive steps towards a healthier life.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600">Accurate Health Information</h3>
            <p className="mt-4 text-gray-700">
              Access accurate and up-to-date medical content about various health topics, conditions, treatments, and more.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-purple-600">Expert Consultations</h3>
            <p className="mt-4 text-gray-700">
              Connect with healthcare professionals for personalized consultations to address your health concerns.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-teal-600">Health Resources</h3>
            <p className="mt-4 text-gray-700">
              Explore a wide range of health resources including articles, videos, and guides on staying healthy and preventing illnesses.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Get In Touch</h3>
          <p className="mt-4 text-xl text-gray-600">We’d love to hear from you! Feel free to reach out for any questions, feedback, or assistance.</p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="mailto:support@medidetail.com"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
