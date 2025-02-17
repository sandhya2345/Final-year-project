from django.db import models

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    specialization = models.CharField(max_length=255)
    image = models.ImageField(upload_to='hospital_images/')
    
    def __str__(self):
        return self.name

