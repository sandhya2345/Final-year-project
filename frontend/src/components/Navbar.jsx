import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import AuthContext from "../context/AuthContext";
import logo from "../assets/MedAhead_logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // For Services dropdown
    const location = useLocation();
    const { user, setAuthTokens, setUser } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false); 
        setDropdownOpen(false);
    }, [location]);

    const handleLogout = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authToken"); 
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <nav className="flex justify-between items-center px-4 lg:px-12 py-3">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="MedAhead Logo" className="h-16" />
                        <h2 className={`text-4xl font-large ${isScrolled ? "text-customTeal" : "text-white"}`}>
                            MedAhead
                        </h2>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center text-lg">
                    <ul className="flex space-x-10">
                        {[{ name: "Home", path: "/" }, { name: "About us", path: "/about" }, { name: "Hospitals", path: "/hospital" }, { name: "News", path: "/news" }].map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className={`transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* Services Dropdown */}
                        <li className="relative">
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className={`cursor-pointer transition ${isScrolled ? "text-customTeal hover:text-gray-500" : "text-white hover:text-gray-300"} flex items-center`}
                            >
                                Services{" "}
                                {dropdownOpen ? (
                                    <ChevronUp size={16} className="ml-2 transition-transform transform rotate-180" />
                                ) : (
                                    <ChevronDown size={16} className="ml-2 transition-transform" />
                                )}
                            </div>
                            {dropdownOpen && (
                                <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-md mt-2 text-customTeal">
                                    <li>
                                        <Link to="/predict" className="block px-4 py-2 hover:bg-gray-100">
                                            Predict Diseases
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/appointment" className="block px-4 py-2 hover:bg-gray-100">
                                            Book Appointment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/nearby-hospitals" className="block px-4 py-2 hover:bg-gray-100">
                                            Nearby Hospitals
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4 ml-auto">
                    {user ? (
                        <>
                            <Link to="/predict" className="px-4 py-2 rounded font-medium bg-customTeal text-white hover:bg-teal-800 transition flex items-center">
                                Predict Diseases
                            </Link>
                            <button onClick={handleLogout} className="px-4 py-2 rounded font-medium bg-red-600 text-white hover:bg-red-800 transition flex items-center">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="px-4 py-2 rounded font-medium bg-customTeal text-white hover:bg-teal-700 transition flex items-center">
                                Login
                            </Link>
                            <Link to="/signin" className="px-4 py-2 rounded font-medium bg-customTeal text-white hover:bg-teal-700 transition flex items-center">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-teal-400 focus:outline-none">
                        {menuOpen ? <X size={30} className="text-customTeal" /> : <Menu size={40} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
                <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-gray-700">
                    <X size={30} />
                </button>
                <ul className="flex flex-col items-center mt-20 space-y-6 text-lg">
                    {[{ name: "Home", path: "/" }, { name: "About us", path: "/about" }, { name: "Hospitals", path: "/hospital" }, { name: "News", path: "/news" }].map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className="text-customTeal font-medium hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Services */}
                    <li className="relative">
                        <div
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={`cursor-pointer text-customTeal font-medium flex items-center`}
                        >
                            Services{" "}
                            {dropdownOpen ? (
                                <ChevronUp size={16} className="ml-2 transition-transform transform rotate-180" />
                            ) : (
                                <ChevronDown size={16} className="ml-2 transition-transform" />
                            )}
                        </div>
                        {dropdownOpen && (
                            <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-md mt-2 text-customTeal">
                                <li>
                                    <Link to="/predict" className="block px-4 py-2 hover:bg-gray-100">
                                        Predict Diseases
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/appointment" className="block px-4 py-2 hover:bg-gray-100">
                                        Book Appointment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/nearby-hospitals" className="block px-4 py-2 hover:bg-gray-100">
                                        Nearby Hospitals
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {user ? (
                        <>
                            <li>
                                <Link to="/predict" className="block text-white bg-customTeal px-6 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
                                    Predict Diseases
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="block text-white bg-red-600 px-6 py-2 rounded-md">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="block text-white bg-customTeal px-6 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/signin" className="block text-white bg-customTeal px-6 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
