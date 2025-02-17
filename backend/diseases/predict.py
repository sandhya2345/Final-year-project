# diseases/predict.py
import joblib
import numpy as np

# Load the saved model and scaler
model = joblib.load('diseases/ml_models/diabetes_model.pkl')
scaler = joblib.load('diseases/ml_models/scaler.pkl')

# Load the saved model for Thyroid disease prediction
thyroid_model = joblib.load('diseases/ml_models/thyroid_model.pkl')

def predict_diabetes(input_data):
    # Convert the input data to numpy array
    input_data_as_numpy_array = np.asarray(input_data)
    
    # Reshape the input data to match the model's expected input
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    
    # Standardize the input data using the same scaler
    standardized_data = scaler.transform(input_data_reshaped)
    
    # Make prediction
    prediction = model.predict(standardized_data)
    
    return prediction[0]


# Prediction function for thyroid disease
def predict_thyroid(input_data):
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    prediction = thyroid_model.predict(input_data_reshaped)
    
    # Map the prediction to the corresponding target label
    target_labels = {0: "Normal", 1: "Hypothyroid", 2: "Hyperthyroid"}
    
    return target_labels.get(prediction[0], 'Unknown')