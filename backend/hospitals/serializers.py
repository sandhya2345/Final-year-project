from rest_framework import serializers
from django.conf import settings
from .models import Hospital

class HospitalSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Hospital
        fields = ['id', 'name', 'location', 'specialization', 'image']

    def get_image(self, obj):
        if obj.image:
            request = self.context.get("request")
            return request.build_absolute_uri(obj.image.url) if request else f"{settings.MEDIA_URL}{obj.image}"
        return None
