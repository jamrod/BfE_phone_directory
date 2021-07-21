from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=50, default='', blank=True)
    last_name = models.CharField(max_length=50, default='', blank=True)
    phone_number = models.CharField(max_length=16, default='', blank=True)
    email = models.EmailField(max_length=255, default='', blank=True)
    notes = models.TextField(default='etc...', blank=True)

    def __str__(self):
        return f"{self.last_name}, {self.first_name}"


