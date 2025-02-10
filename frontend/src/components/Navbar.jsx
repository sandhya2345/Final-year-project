import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/MedAhead_logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Get the current path

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setMenuOpen(false); // Close menu on route change
    }, [location]);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="flex justify-between items-center px-4 lg:px-12 py-3">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="MedAhead Logo" className="h-16" />
                        <h2 className={`text-3xl font-medium ${isScrolled ? "text-customTeal" : "text-white"}`}>
                            MedAhead
                        </h2>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center text-lg">
                    <ul className="flex space-x-10">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About us", path: "/about" },
                            { name: "Hospitals", path: "/hospital" },
                            { name: "News", path: "/news" },
                            { name: "Services", path: "/services" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`transition ${
                                        isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-4 ml-auto">
                    <ul className="list-none flex space-x-6">
                        <li>
                            <Link
                                to="/login"
                                className={`px-4 py-2 rounded font-medium transition ${
                                    isScrolled ? "bg-customTeal text-white hover:bg-teal-700" : "bg-white text-teal-600 hover:bg-teal-100"
                                }`}
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/predict"
                                className="px-4 py-2 rounded font-medium bg-customTeal text-white hover:bg-teal-800 transition"
                            >
                                Predict Diseases
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                        {menuOpen ? <X size={30} className="text-customTeal" /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}>
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-5 right-5 text-gray-700"
                >
                    <X size={30} />
                </button>
                <ul className="flex flex-col items-center mt-20 space-y-6 text-lg">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About us", path: "/about" },
                        { name: "Hospitals", path: "/hospital" },
                        { name: "News", path: "/news" },
                        { name: "Services", path: "/services" },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className="text-customTeal font-medium hover:text-gray-500"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/login"
                            className="block text-white bg-customTeal px-6 py-2 rounded-md"
                            onClick={() => setMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/predict"
                            className="block text-white bg-teal-600 px-6 py-2 rounded-md"
                            onClick={() => setMenuOpen(false)}
                        >
                            Predict Diseases
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
