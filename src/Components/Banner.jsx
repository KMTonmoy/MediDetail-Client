"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://mediserver.vercel.app/banners");
      const data = await response.json();
      setSlides(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (slides.length === 0)
    return (
      <div className="h-[500px] flex items-center justify-center">
        Loading...
      </div>
    );

  const currentSlide = slides[currentIndex];

  const getBackgroundStyle = (color) => {
    switch (color.toLowerCase()) {
      case "green":
        return "rgba(34, 139, 34, 0.1)";
      case "red":
        return "rgba(255, 0, 0, 0.1)";
      case "blue":
        return "rgba(0, 0, 255, 0.1)";
      case "yellow":
        return "rgba(255, 255, 0, 0.1)";
      case "purple":
        return "rgba(128, 0, 128, 0.1)";
      case "orange":
        return "rgba(255, 165, 0, 0.1)";
      case "pink":
        return "rgba(255, 192, 203, 0.1)";
      case "teal":
        return "rgba(0, 128, 128, 0.1)";
      case "brown":
        return "rgba(165, 42, 42, 0.1)";
      case "gray":
        return "rgba(128, 128, 128, 0.1)";
      default:
        return color;
    }
  };

  const backgroundColor = getBackgroundStyle(currentSlide.bgColor);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={`relative flex flex-col sm:flex-row items-center sm:justify-between h-[500px] md:h-[600px] px-4 md:px-12 overflow-hidden`}
      style={{
        backgroundColor,
      }}
    >
      <motion.div
        className="w-full sm:w-1/2 h-[50%] sm:h-full flex items-center justify-center"
        key={currentIndex}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={currentSlide.image}
          alt="Slide"
          className="h-full sm:h-[80%] w-auto object-contain"
        />
      </motion.div>
      <motion.div
        className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center text-center sm:text-left space-y-2 sm:space-y-4 mt-4 sm:mt-0"
        key={`text-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800">
          {currentSlide.title}
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-gray-600">
          {currentSlide.text}
        </p>
      </motion.div>

      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
