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
      <div className="container mx-auto px-16 mt-4 flex flex-col lg:flex-row items-center gap-8">

        <div className="lg:w-1/2 text-center lg:text-left space-y-6 mb-20">
          <h1 className="text-4xl font-extrabold text-white">Welcome to MedAhead!</h1>
          <p className="text-lg text-white">
            Join us and explore the latest advancements in medical technology. Stay updated with
            healthcare news, predict diseases early, and connect with top hospitals worldwide.
          </p>
          <ul className="text-teal-50 space-y-4">
            <li className="flex items-center gap-2">
              <span className="text-white text-2xl">✔</span> Disease Prediction System
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white text-2xl">✔</span> Latest Medical News
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white text-2xl">✔</span> Connect with Hospitals
            </li>
          </ul>
          <p className="mt-8 text-center text-md -ml-60
          text-white">
          Already have an account?{' '}
          <a href="/register" className="text-white
           hover:underline">
            Login here
          </a>
          </p>
          
        </div>

       
        <div className="lg:w-1/2/3 bg-white rounded-lg shadow-lg p-6 mx-auto space-y-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-md font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-md font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="queries" className="block text-md font-medium text-gray-700">
                Queries
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
              className="w-full bg-midTeal text-white font-semibold py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
