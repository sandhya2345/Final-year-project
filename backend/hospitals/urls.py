# urls.py
from django.urls import path
from .views import HospitalListView

urlpatterns = [
    path('api/hospitals/', HospitalListView.as_view(), name='hospital-list'),
]
