import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); 
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Validate password matching
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
  
    try {
      await registerUser(email, username, password, confirmPassword, phone, role);
      setSuccessMessage("Registration Successful! Please log in.");
      setError(""); // Clear any previous errors
    } catch (err) {
      console.log(err.response ? err.response.data : err.message);
      setError(err.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="relative h-full bg-gradient-to-b from-customTeal via-midTeal to-midTeal text-black pt-8 flex items-center justify-center">
      <div className="container mx-auto px-16 mt-16 flex flex-col items-center gap-6">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Sign Up</h2>
          
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}  {/* Success message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-md font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="password" className="block text-md font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="role" className="block text-md font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-midTeal text-white font-semibold py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-teal-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
