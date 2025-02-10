import React, { useState } from 'react';
import axios from 'axios';

const Diabetes = () => {
  const [pregnancies, setPregnancies] = useState('');
  const [glucose, setGlucose] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [skinThickness, setSkinThickness] = useState('');
  const [insulin, setInsulin] = useState('');
  const [bmi, setBmi] = useState('');
  const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState('');
  const [age, setAge] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Pregnancies: pregnancies,
      Glucose: glucose,
      BloodPressure: bloodPressure,
      SkinThickness: skinThickness,
      Insulin: insulin,
      BMI: bmi,
      DiabetesPedigreeFunction: diabetesPedigreeFunction,
      Age: age
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/diseases/api/predict/', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      setPrediction(response.data.message); // Store the exact message from backend
    } catch (error) {
      console.error('Error predicting disease:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white">
      <div className="w-3/4 ml-[12%] flex justify-center items-center py-20">
        <div className="w-[80%] bg-white bg-opacity-0 p-4 rounded-sm">
          <h1 className="text-4xl font-bold mb-6 text-white text-center">Diabetes Prediction System</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-white">Pregnancies:</label>
                <input
                  type="number"
                  value={pregnancies}
                  onChange={(e) => setPregnancies(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Glucose Level:</label>
                <input
                  type="number"
                  value={glucose}
                  onChange={(e) => setGlucose(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Blood Pressure:</label>
                <input
                  type="number"
                  value={bloodPressure}
                  onChange={(e) => setBloodPressure(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Skin Thickness:</label>
                <input
                  type="number"
                  value={skinThickness}
                  onChange={(e) => setSkinThickness(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Insulin:</label>
                <input
                  type="number"
                  value={insulin}
                  onChange={(e) => setInsulin(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">BMI:</label>
                <input
                  type="number"
                  value={bmi}
                  onChange={(e) => setBmi(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Diabetes Pedigree Function:</label>
                <input
                  type="number"
                  step="0.001"
                  value={diabetesPedigreeFunction}
                  onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-1/3 bg-white hover:bg-teal-600 text-customTeal py-2 px-4 rounded mt-4 mx-auto block"
            >
              Predict
            </button>
          </form>

          {prediction && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                Prediction: {prediction}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diabetes;
