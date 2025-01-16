'use client'
import React, { useContext, useState } from 'react';
import { imageUpload } from '../../../api/utils';
import { AuthContext } from '../../../Provider/AuthProvider';

const MedicinePage = () => {
  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    company: '',
    sideEffects: '',
    ageRange: '',
    image: '',
    ingredients: '',
    uses: '',
    warnings: '',
  });

  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await imageUpload(file);
      setMedicine((prevMedicine) => ({
        ...prevMedicine,
        image: uploadedImageUrl,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const medicineData = {
      ...medicine,
      userId: user?._id,
    };

    try {
      const response = await fetch('http://localhost:8000/medicinespost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicineData),
      });

      if (response.ok) {
        alert('Medicine added successfully!');
        setMedicine({
          name: '',
          description: '',
          company: '',
          sideEffects: '',
          ageRange: '',
          image: '',
          ingredients: '',
          uses: '',
          warnings: '',
        });
      } else {
        alert('Error adding medicine.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen py-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Add New Medicine
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Medicine Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={medicine.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={medicine.description}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Company & Side Effects */}
          <div className="flex gap-5">
            <div className="mb-4 w-1/2">
              <label htmlFor="company" className="block text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={medicine.company}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>

            <div className="mb-4 w-1/2">
              <label htmlFor="sideEffects" className="block text-gray-700">
                Side Effects
              </label>
              <input
                type="text"
                id="sideEffects"
                name="sideEffects"
                value={medicine.sideEffects}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>
          </div>

          {/* Age Range & Image Upload */}
          <div className="flex gap-5">
            <div className="mb-4 w-1/2">
              <label htmlFor="ageRange" className="block text-gray-700">
                Age Range
              </label>
              <input
                type="text"
                id="ageRange"
                name="ageRange"
                value={medicine.ageRange}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>

            <div className="mb-4 w-1/2">
              <label htmlFor="image" className="block text-gray-700">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700">
              Ingredients
            </label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              value={medicine.ingredients}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Uses */}
          <div className="mb-4">
            <label htmlFor="uses" className="block text-gray-700">
              Uses
            </label>
            <input
              type="text"
              id="uses"
              name="uses"
              value={medicine.uses}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Warnings */}
          <div className="mb-4">
            <label htmlFor="warnings" className="block text-gray-700">
              Warnings
            </label>
            <input
              type="text"
              id="warnings"
              name="warnings"
              value={medicine.warnings}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicinePage;
