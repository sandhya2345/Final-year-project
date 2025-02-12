from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .predict import predict_diabetes

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
        
        # Validate the input data
        if None in input_data:
            return Response({"error": "Missing input data"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Get the prediction from the model
        result = predict_diabetes(input_data)
        
        # Send the response back to the client
        if result == 1:
            return Response({"message": "The person is likely to have diabetes."}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "The person is unlikely to have diabetes."}, status=status.HTTP_200_OK)
