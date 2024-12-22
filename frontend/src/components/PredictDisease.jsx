import React from 'react'

const PredictDisease = () => {
  return (
    <div className="relative h-ful bg-gradient-to-b from-midTeal
      via-midTeal to-midTeal text-white pt-12
     flex items-center justify-center">
      <div className="w-[35%] bg-white bg-opacity-70
       backdrop-blur-md text-white
       p-6 mb-44
       ">
        <h2 className="text-2xl font-bold mb-6">Multiple Disease Detection</h2>
        <ul className="space-y-5">
          <li>
            <button className="w-full text-left bg-midTeal
             hover:bg-teal-600 text-white py-2 px-4 rounded">
              Diabetes Prediction System
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-midTeal
             hover:bg-teal-600 text-white py-2 px-4 rounded">
              Heart Disease Prediction
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-midTeal
             hover:bg-teal-600 text-white py-2 px-4 rounded">
              Cancer Detection System
            </button>
          </li>
          <li>
            <button className="w-full text-left bg-midTeal
             hover:bg-teal-600 text-white py-2 px-4 rounded">
              Kidney Disease Prediction
            </button>
          </li>
        </ul>
      </div>

     
      <div className="w-[85%]
      p-16  mb-18
      ">
        <h1 className="text-3xl font-bold mb-6  ">Diabetes Prediction System</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="pregnancies" className="block text-lg font-medium">
              Number of Pregnancies:
            </label>
            <input
              type="number"
              id="pregnancies"
              placeholder="Enter number of pregnancies"
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2  focus:outline-none"
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
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2  focus:outline-none"
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
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2  focus:outline-none"
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
              className="w-full mt-2 px-4 py-2 border rounded focus:ring-2 focus:outline-none"
            />
          </div>
          <button 
            type="submit"
            className="w-[50%] bg-customTeal  text-white py-3 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Predict
          </button>
        </form>
      </div>
    </div>
  )
}

export default PredictDisease