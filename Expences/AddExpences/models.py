from django.db import models

# Create your models here.
class Expences(models.Model):
    date = models.CharField(max_length=20)
    subject = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
    year = models.CharField(max_length=4)

    def __str__(self):
        return 'Expences'
