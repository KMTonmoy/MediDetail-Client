'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("./galleryData.json");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Our Gallery</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {images.slice(0, showMore ? images.length : 8).map((image, index) => (
            <motion.div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => openModal(index)}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } }
              }}
            >
              <img
                src={image.url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowMore}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="relative">
                <motion.img
                  src={images[selectedIndex].url}
                  alt="Selected Image"
                  className="w-full h-full object-contain max-w-3xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-5 right-5 text-white text-3xl"
                >
                  ×
                </button>
                <motion.button
                  onClick={handlePrev}
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
