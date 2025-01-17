'use client';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const page = () => {
    const [userdata, setUser] = useState([]);
    const [mediDatas, setMediData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const { user } = useContext(AuthContext);
    const email = user?.email || '';

    useEffect(() => {
        if (email) {
            fetch(`https://mediserver.vercel.app/users/${email}`)
                .then((res) => res.json())
                .then((userData) => {
                    setUser(userData);
                });
        }
    }, [email]);

    useEffect(() => {
        fetch(`https://mediserver.vercel.app/medicines`)
            .then((res) => res.json())
            .then((mediData) => {
                setMediData(mediData);
            });
    }, []);


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://mediserver.vercel.app/medicines/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then(() => {
                        // Update state after deletion
                        setMediData((prevMediData) => prevMediData.filter((medicine) => medicine._id !== id));
                        Swal.fire('Deleted!', 'Your medicine has been deleted.', 'success');
                    })
                    .catch((error) => {
                        console.error('Error deleting medicine:', error);
                        Swal.fire('Error!', 'There was an issue deleting the medicine.', 'error');
                    });
            }
        });
    };

    const handleEdit = (medicine) => {
        setSelectedMedicine(medicine);
        setIsModalOpen(true); // Open modal
    };

    const handleUpdate = () => {
        const formData = new FormData(document.getElementById('editMedicineForm'));
        const updatedMedicine = Object.fromEntries(formData.entries());

        fetch(`https://mediserver.vercel.app/medicines/${selectedMedicine._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMedicine),
        })
            .then((res) => res.json())
            .then((updatedData) => {
                setMediData((prevMediData) =>
                    prevMediData.map((medicine) =>
                        medicine._id === updatedData._id ? updatedData : medicine
                    )
                );
                Swal.fire('Updated!', 'Your medicine has been updated.', 'success');
                setIsModalOpen(false); // Close modal
            })
            .catch((error) => {
                console.error('Error updating medicine:', error);
                Swal.fire('Error!', 'There was an issue updating the medicine.', 'error');
            });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Medicines</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mediDatas.map((medicine) => (
                    <div key={medicine._id} className="border rounded-lg p-4 shadow-md bg-white">
                        <img
                            src={medicine.image || 'https://via.placeholder.com/150'}
                            alt={medicine.name}
                            className="w-full h-40 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">{medicine.name}</h2>
                        <p><strong>Description:</strong> {medicine.description}</p>
                        <p><strong>Company:</strong> {medicine.company}</p>
                        <p><strong>Side Effects:</strong> {medicine.sideEffects}</p>
                        <p><strong>Age Range:</strong> {medicine.ageRange}</p>
                        <p><strong>Ingredients:</strong> {medicine.ingredients}</p>
                        <p><strong>Uses:</strong> {medicine.uses}</p>
                        <p><strong>Warnings:</strong> {medicine.warnings}</p>
                        <p><strong>Timestamp:</strong> {new Date(medicine.timestamp).toLocaleString()}</p>
                        <div className="mt-4 flex gap-2">
                            <button
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                onClick={() => handleDelete(medicine._id)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                                onClick={() => handleEdit(medicine)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>



            {isModalOpen && selectedMedicine && (
                <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Edit Medicine</h2>
                        <form id="editMedicineForm">
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={selectedMedicine.name}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={selectedMedicine.description}
                                    className="w-full p-2 border rounded"
                                ></textarea>
                            </div>
                            <div className='flex gap-5'>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        defaultValue={selectedMedicine.company}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Side Effects</label>
                                    <input
                                        type="text"
                                        name="sideEffects"
                                        defaultValue={selectedMedicine.sideEffects}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Age Range</label>
                                <input
                                    type="text"
                                    name="ageRange"
                                    defaultValue={selectedMedicine.ageRange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Ingredients</label>
                                <input
                                    type="text"
                                    name="ingredients"
                                    defaultValue={selectedMedicine.ingredients}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className='flex gap-5'>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Uses</label>
                                    <input
                                        type="text"
                                        name="uses"
                                        defaultValue={selectedMedicine.uses}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Warnings</label>
                                    <input
                                        type="text"
                                        name="warnings"
                                        defaultValue={selectedMedicine.warnings}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-500 text-white py-1 px-3 rounded"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    onClick={handleUpdate}
                                    className="bg-blue-500 text-white py-1 px-3 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default page;
