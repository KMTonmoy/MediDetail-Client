"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MedicineDetailsPage = ({ params }) => {
  const { _id } = params;
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicineData = async () => {
      try {
        const response = await fetch(
          `https://medi-detail-server.vercel.app/medicines/${_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch medicine details");
        }
        const data = await response.json();
        setMedicine(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicineData();
  }, [_id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader text-green-500 text-2xl font-bold animate-bounce">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!medicine) {
    return <div className="text-center py-10">Medicine not found.</div>;
  }

  return (
    <div className="mt-20 py-10 px-5 bg-gray-50 min-h-screen">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <motion.h1
          className="text-4xl font-semibold mb-4 text-[#25527E] underline"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {medicine.name}
        </motion.h1>
        {/* <motion.img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-80 object-cover mb-6 rounded"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        /> */}
<motion.img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-80 object-contain mb-6 rounded cursor-pointer"
          onClick={() => setIsModalOpen(true)} // Open modal on click
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.p
          className="text-gray-700 text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <strong>Description:</strong> {medicine.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <strong>Company:</strong> {medicine.company}
          </motion.div>
          <motion.div
            className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <strong>Age Range:</strong> {medicine.ageRange}
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-green-100 transition duration-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <strong>Ingredients:</strong>
            <ul className="list-disc pl-5">
              {medicine.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-green-100 transition duration-300"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <strong>Uses:</strong>
            <ul className="list-disc pl-5">
              {medicine.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.p
          className="text-lg font-bold text-red-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <strong>Warnings:</strong> {medicine.warnings}
        </motion.p>
        <motion.p
          className="text-gray-700 text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <strong>Side Effects:</strong> {medicine.sideEffects}
        </motion.p>
        <motion.div
          className="flex justify-between items-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-sm text-gray-500">
            <strong>By:</strong> {medicine.company}
          </span>
          <span className="text-sm text-gray-500">
            <strong>Published on:</strong>{" "}
            {new Date(medicine.date).toLocaleDateString()}
          </span>
        </motion.div>
        <Link href="/find">
          <motion.button
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Back to Medicines List
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default MedicineDetailsPage;
