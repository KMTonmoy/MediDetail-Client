"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const detailsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16 my-10">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <form>
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 border rounded-md"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 border rounded-md"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 border rounded-md h-32"
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              ></motion.textarea>
              <motion.button
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Reach Us At
            </h3>
            <motion.p
              className="text-gray-600 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <strong>Address:</strong> 123 Health Lane, MediCity, HealthState
            </motion.p>
            <motion.p
              className="text-gray-600 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <strong>Email:</strong> support@mediplatform.com
            </motion.p>
            <motion.p
              className="text-gray-600 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <strong>Phone:</strong> +123 456 7890
            </motion.p>
            <motion.p
              className="text-gray-600"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              We are here to assist you 24/7. Feel free to reach out!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
