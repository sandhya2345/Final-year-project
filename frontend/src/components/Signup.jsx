import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("isSignedUp", true);
    navigate("/predict");
  };

  return (
    <div className="relative h-screen bg-gradient-to-b from-customTeal via-midTeal to-midTeal text-white pt-8 flex items-center justify-center">
    
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-20">Welcome to MedAhead!</h1>
        <p className="text-lg">
          Join us and explore the latest advancements in medical technology. 
          Stay updated with healthcare news, predict diseases early, and connect with top hospitals worldwide.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-3">
            <span className="text-teal-300 text-xl">✔</span> Disease Prediction System
          </li>
          <li className="flex items-center gap-3">
            <span className="text-teal-300 text-xl">✔</span> Latest Medical News
          </li>
          <li className="flex items-center gap-3">
            <span className="text-teal-300 text-xl">✔</span> Connect with Hospitals
          </li>
        </ul>
      </div>

    
      <div className="w-1/3 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-8 mr-20">
        <form onSubmit={handleSignup}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="queries" className="block text-sm font-medium text-gray-700">
              Queries:
            </label>
            <textarea
              id="queries"
              placeholder="Your Queries"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
