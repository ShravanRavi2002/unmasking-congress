from rest_framework import serializers
from .models import Representative

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Representative
        fields = ('name', 'state', 'party', 'twitter_handle')