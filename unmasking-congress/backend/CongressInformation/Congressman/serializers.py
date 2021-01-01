from rest_framework import serializers
from .models import Congressman

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Congressman
        fields = ('name', 'state', 'party', 'twitter_handle')