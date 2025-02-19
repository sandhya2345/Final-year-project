from django.urls import path
from .views import DiabetesPredictionAPIView, ThyroidPredictionAPIView, KidneyPredictionAPIView, HeartDiseasePredictionAPIView

urlpatterns = [
    path('api/predict/', DiabetesPredictionAPIView.as_view(), name='api-predict'),
    path('predict/thyroid/', ThyroidPredictionAPIView.as_view(), name='predict_thyroid'),
    path('predict/kidney/', KidneyPredictionAPIView.as_view(), name='predict_kidney'),
    path('predict/heart/', HeartDiseasePredictionAPIView.as_view(), name='predict_heart'),
]

