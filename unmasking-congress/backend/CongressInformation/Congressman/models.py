from django.db import models


# Create your models here.
class Congressman(models.Model):
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    party = models.CharField(max_length=100)
    twitter_handle = models.CharField(max_length=100)

    def __str__(self):
        return self.name
