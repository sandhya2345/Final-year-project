from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .predict import predict_diabetes, predict_thyroid, predict_ckd

class DiabetesPredictionAPIView(APIView):
    def post(self, request, *args, **kwargs):
        input_data = [
            request.data.get('Pregnancies'),
            request.data.get('Glucose'),
            request.data.get('BloodPressure'),
            request.data.get('SkinThickness'),
            request.data.get('Insulin'),
            request.data.get('BMI'),
            request.data.get('DiabetesPedigreeFunction'),
            request.data.get('Age')
        ]
        
        if None in input_data:
            return Response({"error": "Missing input data"}, status=status.HTTP_400_BAD_REQUEST)
        
        result = predict_diabetes(input_data)
        
        message = "The person is likely to have diabetes." if result == 1 else "The person is unlikely to have diabetes."
        return Response({"message": message}, status=status.HTTP_200_OK)

class ThyroidPredictionAPIView(APIView):
    def post(self, request, *args, **kwargs):
        input_data = [
            request.data.get('Age'),
            request.data.get('Sex'),
            request.data.get('TT4'),
            request.data.get('T3'),
            request.data.get('T4U'),
            request.data.get('FTI'),
            request.data.get('TSH'),
            request.data.get('Pregnant')
        ]
        
        if None in input_data:
            return Response({"error": "Missing input data"}, status=status.HTTP_400_BAD_REQUEST)

        result = predict_thyroid(input_data)
        return Response({"message": f"The thyroid condition is: {result}"}, status=status.HTTP_200_OK)

class KidneyPredictionAPIView(APIView):
    def post(self, request, *args, **kwargs):
        input_data = [
            request.data.get('age'),
            request.data.get('blood_pressure'),
            request.data.get('specific_gravity'),
            request.data.get('albumin'),
            request.data.get('sugar'),
            request.data.get('red_blood_cells'),
            request.data.get('pus_cell'),
            request.data.get('pus_cell_clumps'),
            request.data.get('bacteria'),
            request.data.get('blood_glucose_random'),
            request.data.get('blood_urea'),
            request.data.get('serum_creatinine'),
            request.data.get('sodium'),
            request.data.get('potassium'),
            request.data.get('haemoglobin'),
            request.data.get('packed_cell_volume'),
            request.data.get('white_blood_cell_count'),
            request.data.get('red_blood_cell_count'),
            request.data.get('hypertension'),
            request.data.get('diabetes_mellitus'),
            request.data.get('coronary_artery_disease'),
            request.data.get('appetite'),
            request.data.get('peda_edema'),
            request.data.get('aanemia')
        ]

        if None in input_data:
            return Response({"error": "Missing input data"}, status=status.HTTP_400_BAD_REQUEST)

        result = predict_ckd(input_data)
        return Response({"message": result}, status=status.HTTP_200_OK)
