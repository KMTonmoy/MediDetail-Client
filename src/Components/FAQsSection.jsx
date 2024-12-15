"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQsSection = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "Our platform helps you manage your health and access medical details with ease.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use top-tier security measures to ensure your data's safety and privacy.",
    },
    {
      question: "How do I get started?",
      answer:
        "Sign up for an account and follow our guided steps to explore our features.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          FAQs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* FAQ List */}
          <div>
            <motion.div
              className="max-w-3xl mx-auto space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b pb-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
                    {faq.question}
                    <motion.span
                      className="text-gray-500"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {openIndex === index ? "-" : "+"}
                    </motion.span>
                  </h3>
                  {openIndex === index && (
                    <motion.p
                      className="text-gray-600 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/doctor-holding-tablet-text-faq-frequently-asked-questions-medical-concept-card-hands-s-blue-gloves-sheet-paper-short-210144395.jpg"
              alt="FAQs Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
