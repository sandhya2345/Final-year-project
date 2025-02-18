from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Hospital
from .serializers import HospitalSerializer

class HospitalListView(APIView):
    parser_classes = (MultiPartParser, FormParser) 

    def get(self, request):
        hospitals = Hospital.objects.all()
        serializer = HospitalSerializer(hospitals, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request):
        serializer = HospitalSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
