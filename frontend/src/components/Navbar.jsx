import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MedAhead_logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Step 2: Add a scroll event listener to track if the user has scrolled
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // User scrolled down
            } else {
                setIsScrolled(false); // User is at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <nav className="flex justify-between items-center px-8 lg:px-12 py-0">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="MedAhead Logo" className="h-20" />
                        <h2
                            className={`text-3xl font-md ${isScrolled ? "text-customTeal" : "text-white"
                                }`}
                        >
                            MedAhead
                        </h2>
                    </Link>
                </div>

                <div className="flex flex-1 justify-center text-lg">
                    <ul className="flex space-x-12">
                        <li>
                            <Link
                                to="/"
                                className={`transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"
                                    }`}
                            >
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hospital"
                                className={`transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"
                                    }`}
                            >
                                Hospitals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/news"
                                className={`transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"
                                    }`}
                            >
                                News
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={`transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"
                                    }`}
                            >
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className="flex space-x-4 ml-auto">
                    <ul className="list-none flex space-x-8">
                        <li>
                            <Link
                                to="/login"
                                className={`px-4 py-2 rounded font-medium transition ${isScrolled
                                        ? "bg-customTeal text-white hover:bg-teal-700"
                                        : "bg-white text-teal-600 hover:bg-teal-100"
                                    }`}
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/predict"
                                className={`px-4 py-3 rounded font-medium transition ${isScrolled
                                        ? "bg-customTeal text-white hover:bg-teal-800"
                                        : "bg-customTeal text-white hover:bg-teal-800"
                                    }`}
                            >
                                Predict Diseases
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
