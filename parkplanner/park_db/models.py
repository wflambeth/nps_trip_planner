from django.db import models

class Park (models.Model):
    def __str__(self):
        return self.park_code
    
    park_code = models.CharField(max_length=10, unique=True)
    park_fullname = models.CharField(max_length=512, default="")

