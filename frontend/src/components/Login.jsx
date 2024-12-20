import React from 'react'
import Navbar from './Navbar';

const Login = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-customTeal via-midTeal to-midTeal text-white pt-8 flex items-center justify-center">
      <Navbar />
      <div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-md p-14 w-[500px]">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-4">MedAhead</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-midTeal text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <a href="/register" className="text-teal-600 hover:underline">
            Register here
          </a>
        </p>
      </div>

    </div>
  )
}

export default Login