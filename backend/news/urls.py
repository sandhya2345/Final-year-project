from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import NewsListView

urlpatterns = [
    path('api/news/', NewsListView.as_view(), name='news-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)