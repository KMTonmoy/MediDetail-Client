"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../Provider/AuthProvider";
import { imageUpload } from "../../api/utils/index";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const { createUser, updateUserProfile } = React.useContext(AuthContext);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleProfilePicChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!image) {
      Swal.fire({
        title: "Profile Picture Required 😱",
        text: "Please upload a profile picture. We need to see your awesome face! 😎",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords Don't Match! 😬",
        text: "Uh-oh! Looks like you've typed different passwords. Try again! 🧐",
        icon: "error",
        confirmButtonText: "Oops, I see my mistake!",
      });
      return;
    }

    try {

      const imageUrl = await imageUpload(image);

      await createUser(email, password);


      await updateUserProfile(`${firstName} ${lastName}`, imageUrl);

      const userInfo = { email, name: `${firstName} ${lastName}`, phone, imageUrl, password };
      await axiosPublic.post("/users", userInfo);

      Swal.fire({
        title: "Signup Successful! 🎉",
        text: "You have successfully signed up. Welcome to the family! 🎉",
        icon: "success",
        confirmButtonText: "Let's Go!",
      });

      router.push("/login");
    } catch (err) {
      const randomErrors = [
        "Something went wrong. Did you break the internet? 🌐💥",
        "Oops! We couldn't create your account. Try again later. 🛠️",
        "The servers are having a nap. Please wait a moment. 😴",
        "Something went wrong. Don't worry, it's not you, it's us. 🤷‍♂️",
      ];
      const randomErrorMessage = randomErrors[Math.floor(Math.random() * randomErrors.length)];

      Swal.fire({
        title: "Signup Failed! 😢",
        text: randomErrorMessage,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mt-6">Join MediDetail</h1>
        <p className="text-gray-600 mt-2">Sign up now to access personalized medical details and updates. 🚀</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-lg p-6 mt-8 w-11/12 max-w-md"
        onSubmit={handleSignup}
      >
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">Last Name <span className='font-light'>(Optional)</span></label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your last name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Re-enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="profile-pic" className="block text-gray-700 font-medium mb-2">Profile Picture</label>
          <input
            type="file"
            id="profile-pic"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          type="submit"
        >
          Register 📝
        </motion.button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-500 hover:text-green-700 font-medium transition"
          >
            Login 🤩
          </a>
        </p>
      </motion.form>
    </div>
  );
};

export default RegisterPage;
