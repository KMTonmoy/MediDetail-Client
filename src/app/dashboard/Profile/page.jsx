'use client';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { AuthContext } from '../../../Provider/AuthProvider';

const ProfilePage = () => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [showEditor, setShowEditor] = useState(false);
    const cropperRef = useRef(null); // Using useRef instead of createRef
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const { user, logOut } = useContext(AuthContext);
    const email = user?.email || '';

    useEffect(() => {
        if (email) {
            fetch(`https://mediserver.vercel.app/users/${email}`)
                .then((res) => res.json())
                .then((userData) => {
                    setData(userData);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching user data:", err);
                    setLoading(false);
                });
        }
    }, [email]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setShowEditor(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCrop = () => {
        if (cropperRef.current) {
            const croppedDataUrl = cropperRef.current.getCroppedCanvas().toDataURL();
            setCroppedImage(croppedDataUrl);
            setShowEditor(false); // Hide editor after crop
        }
    };

    const handleRotate = () => {
        if (cropperRef.current) {
            cropperRef.current.rotate(90); // Rotate the image by 90 degrees
        }
    };

    const handleFlip = () => {
        if (cropperRef.current) {
            cropperRef.current.scaleX(-cropperRef.current.getData().scaleX); // Flip horizontally
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex justify-center items-center '>
            <div>
                {/* Header Card Style for Profile Info */}
                <div className="profile-header bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-6">
                    <div className="flex items-center">
                        <img
                            src={data.photo || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-white mr-6"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{data.name}</h2>
                            <p className="text-lg">{data.email}</p>
                            <p className="text-sm text-gray-300">{data.role}</p>
                        </div>
                    </div>
                </div>

                {/* Change Profile Button */}
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded mb-4"
                    onClick={() => document.getElementById('imageUpload').click()}
                >
                    Change Profile
                </button>

                <input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>

            {/* Image Editor Modal */}
            {showEditor && (
                <div className="image-editor-modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-3/5">
                        <div className="absolute top-0 right-0 p-2 cursor-pointer" onClick={() => setShowEditor(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <Cropper
                            ref={cropperRef}
                            src={imagePreview}
                            style={{ height: 400, width: '100%' }}
                            aspectRatio={1}
                            guides={false}
                        />

                        <div className="actions mt-4 flex justify-between">
                            <button
                                className="bg-green-600 text-white py-2 px-4 rounded"
                                onClick={handleCrop}
                            >
                                Crop Image
                            </button>
                            <button
                                className="bg-yellow-600 text-white py-2 px-4 rounded"
                                onClick={handleRotate}
                            >
                                Rotate
                            </button>
                            <button
                                className="bg-red-600 text-white py-2 px-4 rounded"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Display Cropped Image */}
            {croppedImage && (
                <div className="image-preview mb-4">
                    <img src={croppedImage} alt="Cropped" className="w-32 h-32 rounded-full" />
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
