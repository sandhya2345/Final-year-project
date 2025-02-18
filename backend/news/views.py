from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import News
from .serializers import NewsSerializer

class NewsListView(APIView):
    parser_classes = (MultiPartParser, FormParser) 

    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request):
        serializer = NewsSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
