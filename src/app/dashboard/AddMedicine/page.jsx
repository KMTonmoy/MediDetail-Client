'use client';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
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

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false); // State for controlling uploading message
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
    setLoading(true);
    setUploading(true); // Show uploading message

    const medicineData = {
      ...medicine,
      userEmail: user?.email,
    };

    try {
      const response = await fetch('https://mediserver.vercel.app/medicinespost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicineData),
      });

      if (response.ok) {
        // Delay for 5 seconds before showing success
        setTimeout(() => {
          toast.success('Medicine added successfully!');
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
          setUploading(false); // Hide uploading message after success
        }, 5000);
      } else {
        toast.error('Error adding medicine.');
        setUploading(false); // Hide uploading message if error occurs
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred.');
      setUploading(false); // Hide uploading message in case of error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen py-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Add New Medicine
        </h1>

        <form onSubmit={handleSubmit}>
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
              disabled={loading}
            >
              {uploading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin border-4 border-t-transparent border-indigo-600 w-6 h-6 rounded-full"></div>
                  <span className="ml-2">Uploading...</span>
                </div>
              ) : (
                'Add Medicine'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicinePage;
