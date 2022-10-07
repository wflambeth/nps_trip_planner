from django.db import models

class Park (models.Model):
    park_code = models.CharField(max_length=10, unique=True)
    park_fullname = models.CharField(max_length=512, default="")

