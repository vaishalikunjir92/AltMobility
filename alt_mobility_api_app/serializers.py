from rest_framework import serializers
from .models import  Alert, VehicleInfo, AdditionalAlert

class VehicleDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleInfo
        fields = '__all__'
    
class AlertDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = '__all__'   

class AdditinalDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalAlert
        fields = '__all__'