"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-green-700">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We provide a wide range of medical services to help you live
            healthier and longer.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-green-700 text-3xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold text-gray-800">
                General Consultation
              </h3>
              <p className="text-gray-600 mt-4">
                Our experienced doctors offer general consultation for various
                health issues, ensuring the best care.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-green-700 text-3xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Pharmacy Services
              </h3>
              <p className="text-gray-600 mt-4">
                We provide a wide variety of pharmaceutical services, including
                prescription medications and over-the-counter drugs.
              </p>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-green-700 text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Specialized Treatments
              </h3>
              <p className="text-gray-600 mt-4">
                Our specialists offer personalized treatments for specific
                conditions, ensuring effective solutions.
              </p>
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-green-700 text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Laboratory Services
              </h3>
              <p className="text-gray-600 mt-4">
                We offer a range of lab services, from routine tests to
                specialized diagnostics, ensuring precise results.
              </p>
            </div>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-green-700 text-3xl mb-4">🩻</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Imaging Services
              </h3>
              <p className="text-gray-600 mt-4">
                Our state-of-the-art imaging services provide accurate results
                for diagnostics, including X-rays and MRIs.
              </p>
            </div>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-green-700 text-3xl mb-4">🧑‍⚕️</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Emergency Services
              </h3>
              <p className="text-gray-600 mt-4">
                Our 24/7 emergency services provide immediate care for critical
                medical conditions and emergencies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
