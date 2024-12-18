'use client';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const Sidebar = () => {
    const [data, setData] = useState({});
    const { user, logOut } = useContext(AuthContext);
    const email = user?.email || '';
    const role = data?.role;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (email) {
            fetch(`https://medidetailapi.vercel.app/users/${email}`)
                .then((res) => res.json())
                .then(setData);
        }
    }, [email]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
        closed: {
            x: '-100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const handleLogout = () => {
        logOut().catch((error) => console.error('Logout failed:', error));
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-4 left-4 z-20 text-white bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 lg:hidden"
            >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            <motion.div
                className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-green-600 to-green-800 text-white shadow-lg lg:static lg:w-64 z-10"
                variants={sidebarVariants}
                animate={isOpen ? 'open' : 'closed'}
            >
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                    <ul className="space-y-4">
                        <li className="hover:translate-x-2 transform transition-all duration-300">
                            <a href="#" className="block text-lg font-semibold">
                                Home
                            </a>
                        </li>
                        <li className="hover:translate-x-2 transform transition-all duration-300">
                            <a href="#" className="block text-lg font-semibold">
                                Profile
                            </a>
                        </li>
                        <li className="hover:translate-x-2 transform transition-all duration-300">
                            <a href="#" className="block text-lg font-semibold">
                                Settings
                            </a>
                        </li>
                        <li className="hover:translate-x-2 transform transition-all duration-300">
                            <a href="#" className="block text-lg font-semibold">
                                Notifications
                            </a>
                        </li>

                        {/* Conditional Navigation */}
                        {role === 'agent' && (
                            <li className="hover:translate-x-2 transform transition-all duration-300">
                                <a href="#" className="block text-lg font-semibold">
                                    Add Medicine
                                </a>
                            </li>
                        )}

                        {role === 'admin' && (
                            <>
                                <li className="hover:translate-x-2 transform transition-all duration-300">
                                    <a href="#" className="block text-lg font-semibold">
                                        Manage Users
                                    </a>
                                </li>
                                <li className="hover:translate-x-2 transform transition-all duration-300">
                                    <a href="#" className="block text-lg font-semibold">
                                        Manage Agents
                                    </a>
                                </li>
                                <li className="hover:translate-x-2 transform transition-all duration-300">
                                    <a href="#" className="block text-lg font-semibold">
                                        Blocked Users
                                    </a>
                                </li>
                                <li className="hover:translate-x-2 transform transition-all duration-300">
                                    <a href="#" className="block text-lg font-semibold">
                                        Customize Banner
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow-lg transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
