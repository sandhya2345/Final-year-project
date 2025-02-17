import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SignupImage from "../assets/SignPic.png"; 

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

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await registerUser(email, username, password, confirmPassword, phone, role);
      setSuccessMessage("Registration Successful! Please log in.");
      setError("");
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="relative h-full bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white pt-2 flex items-center justify-center">
      <div className="bg-white backdrop-blur-lg shadow-lg rounded-md p-14 w-[900px] flex items-center min-h-[520px] mt-20">
        
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-gray-900 text-center mb-6">MedAhead</h1>
          
          {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Passwords Row */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-lg font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-lg font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Role</label>
              <select
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-midTeal text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? */}
          <p className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-teal-600 hover:underline">
              Login here
            </a>
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="w-1/2 flex justify-center">
          <img src={SignupImage} alt="Signup Illustration" className="w-[380px] h-[400px] mb-12" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
