"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaList, FaThLarge } from "react-icons/fa";

const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [search, setSearch] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch("/medicines.json");
        const data = await response.json();
        setMedicines(data);
        setFilteredMedicines(data.slice(0, visibleCount));
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };
    fetchMedicines();
  }, [visibleCount]);

  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredMedicines(medicines.slice(0, visibleCount));
      setIsSearchActive(false);
    } else {
      const filtered = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMedicines(filtered);
      setIsSearchActive(true);
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(9);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-green-600 py-10 px-6 text-center">
        <h1 className="text-white text-3xl font-bold mb-4">Medicine Store</h1>
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search for a medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-3 rounded-lg border-none shadow-lg focus:outline-none focus:ring focus:ring-green-300"
          />
          <button
            onClick={handleSearch}
            className="bg-white text-green-600 px-4 py-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300 flex items-center gap-2"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700">
            Displaying {filteredMedicines.length} medicine(s)
          </p>
          <button
            onClick={() => setIsGrid(!isGrid)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center gap-2"
          >
            {isGrid ? <FaList /> : <FaThLarge />}{" "}
            {isGrid ? "List View" : "Grid View"}
          </button>
        </div>
        <motion.div
          className={`grid ${
            isGrid ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          } gap-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredMedicines.map((medicine) => (
            <motion.div
              key={medicine._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {medicine.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {medicine.description}
              </p>
              <a href={`/find/${medicine._id}`}>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Details
                </button>
              </a>
            </motion.div>
          ))}
        </motion.div>
        {filteredMedicines.length === 0 && (
          <div className="text-center text-gray-600 mt-10">
            <p>No medicines found. Try searching for something else.</p>
          </div>
        )}
        {!isSearchActive && (
          <div className="flex justify-center gap-4 mt-8">
            {filteredMedicines.length < medicines.length && (
              <button
                onClick={handleShowMore}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Show More
              </button>
            )}
            {visibleCount > 9 && (
              <button
                onClick={handleShowLess}
                className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicinePage;