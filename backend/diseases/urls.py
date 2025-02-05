from django.urls import path
from .views import DiabetesPredictionAPIView

urlpatterns = [
    path('api/predict/', DiabetesPredictionAPIView.as_view(), name='api-predict'),
]
