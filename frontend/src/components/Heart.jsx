import React, { useState } from 'react';
import axios from 'axios';

const Heart = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [cp, setCp] = useState('');
  const [trestbps, setTrestbps] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('');
  const [restecg, setRestecg] = useState('');
  const [thalach, setThalach] = useState('');
  const [exang, setExang] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [slope, setSlope] = useState('');
  const [ca, setCa] = useState('');
  const [thal, setThal] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      age: Number(age),
      sex: Number(sex),
      cp: Number(cp),
      trestbps: Number(trestbps),
      chol: Number(chol),
      fbs: Number(fbs),
      restecg: Number(restecg),
      thalach: Number(thalach),
      exang: Number(exang),
      oldpeak: parseFloat(oldpeak),
      slope: Number(slope),
      ca: Number(ca),
      thal: Number(thal),
    };
    

    console.log("Sending Data:", formData); 

    try {
      const response = await axios.post('http://127.0.0.1:8000/diseases/predict/heart/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log("Response:", response.data); // Debugging log
      setPrediction(response.data.message);
    } catch (error) {
      console.error("Error predicting heart disease:", error.response ? error.response.data : error);
    }
  };

  return (
    <div className="flex min-h-screen bg-midTeal text-white">
      <div className="w-3/4 ml-[12%] flex justify-center items-center py-20">
        <div className="w-[80%] bg-white bg-opacity-0 p-4 rounded-sm">
          <h1 className="text-4xl font-bold mb-6 text-white text-center">Heart Disease Prediction System</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-white">Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Sex (1=Male, 0=Female):</label>
                <input
                  type="number"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Chest Pain Type (0-3):</label>
                <input
                  type="number"
                  value={cp}
                  onChange={(e) => setCp(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Resting Blood Pressure:</label>
                <input
                  type="number"
                  value={trestbps}
                  onChange={(e) => setTrestbps(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Cholesterol:</label>
                <input
                  type="number"
                  value={chol}
                  onChange={(e) => setChol(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Fasting Blood Sugar (1=Yes, 0=No):</label>
                <input
                  type="number"
                  value={fbs}
                  onChange={(e) => setFbs(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Resting ECG (0-2):</label>
                <input
                  type="number"
                  value={restecg}
                  onChange={(e) => setRestecg(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Max Heart Rate Achieved:</label>
                <input
                  type="number"
                  value={thalach}
                  onChange={(e) => setThalach(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Exercise-Induced Angina (1=Yes, 0=No):</label>
                <input
                  type="number"
                  value={exang}
                  onChange={(e) => setExang(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">ST Depression Induced:</label>
                <input
                  type="float"
                  value={oldpeak}
                  onChange={(e) => setOldpeak(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Slope of ST Segment (0-2):</label>
                <input
                  type="number"
                  value={slope}
                  onChange={(e) => setSlope(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Number of Major Vessels (0-3):</label>
                <input
                  type="number"
                  value={ca}
                  onChange={(e) => setCa(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Thalassemia (0-3):</label>
                <input
                  type="number"
                  value={thal}
                  onChange={(e) => setThal(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-1/3 bg-white hover:bg-red-600 text-red-700 py-2 px-4 rounded mt-4 mx-auto block"
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

export default Heart;
