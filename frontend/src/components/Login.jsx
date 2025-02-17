import React from 'react'
import Navbar from './Navbar';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import LoginDoctor from "../assets/LoginPic.png"

const Login = () => {

  const { loginUser } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
  }

  return (
    <div className="relative h-screen bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white pt-12 flex items-center justify-center">
      <Navbar />
      <div className="bg-white backdrop-blur-lg shadow-lg rounded-md p-14 w-[800px] flex flex-col items-center min-h-[500px] relative">
        <h1 className="absolute top-12 text-4xl font-semibold text-gray-900 text-center">
          MedAhead
        </h1>
        <div className="flex w-full justify-between mt-8">
          {/* Left Side - Form */}
          <div className="w-1/2 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full">
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
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  name='email'
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  name='password'
                />
              </div>
              <button
                type="submit"
                className="w-full bg-midTeal text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-700">
              Don’t have an account?{' '}
              <a href="/signin" className="text-teal-600 hover:underline">
                Register here
              </a>
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={LoginDoctor} alt="Login Illustration" className="w-[350px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
