from django.urls import path
from .views import DiabetesPredictionAPIView, ThyroidPredictionAPIView

urlpatterns = [
    path('api/predict/', DiabetesPredictionAPIView.as_view(), name='api-predict'),
    path('predict/thyroid/', ThyroidPredictionAPIView.as_view(), name='predict_thyroid'),
    path('predict/kidney/', ThyroidPredictionAPIView.as_view(), name='predict_kidney'),
]
