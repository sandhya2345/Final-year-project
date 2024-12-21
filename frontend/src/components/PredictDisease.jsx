import React from 'react'

const PredictDisease = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-customTeal via-midTeal to-midTeal text-white pt-8 flex items-center justify-center">
      <div className="w-1/4 bg-teal-700 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Multiple Disease Detection</h2>
        <ul className="space-y-4">
          <li>
            <button className="w-full text-left bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded">
              Diabetes Prediction System
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded">
              Heart Disease Prediction
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded">
              Cancer Detection System
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded">
              Kidney Disease Prediction
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h1 className="text-3xl font-bold mb-8">Diabetes Prediction System</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="pregnancies" className="block text-lg font-medium">
              Number of Pregnancies:
            </label>
            <input
              type="number"
              id="pregnancies"
              placeholder="Enter number of pregnancies"
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="glucose" className="block text-lg font-medium">
              Glucose Level:
            </label>
            <input
              type="number"
              id="glucose"
              placeholder="Enter glucose level"
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="insulin" className="block text-lg font-medium">
              Insulin Level:
            </label>
            <input
              type="number"
              id="insulin"
              placeholder="Enter insulin level"
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="bmi" className="block text-lg font-medium">
              BMI Value:
            </label>
            <input
              type="number"
              id="bmi"
              placeholder="Enter BMI value"
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Predict
          </button>
        </form>
      </div>
      </div>
  )
}

export default PredictDisease