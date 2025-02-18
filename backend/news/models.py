from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='news_images/')
    
    def __str__(self):
        return self.title
