from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Hospital
from .serializers import HospitalSerializer

class HospitalListView(APIView):
    def get(self, request):
        hospitals = Hospital.objects.all()
        serializer = HospitalSerializer(hospitals, many=True)
        return Response(serializer.data)
