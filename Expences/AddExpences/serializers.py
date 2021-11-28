from rest_framework import serializers
from .models import Expences

class ExpencesSerializer(serializers.ModelSerializer):
    class Meta():
        model = Expences
        fields='__all__'