from rest_framework import viewsets
from .models import VehicleData
from .serializers import VehicleDataSerializer, AlertDataSerializer, AdditinalDataSerializer
from django.shortcuts import render
from .models import VehicleInfo, Alert, AdditionalAlert

class VehicleDataViewSet(viewsets.ModelViewSet):
    queryset = VehicleInfo.objects.all()
    serializer_class = VehicleDataSerializer


class AlertDataViewSet(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertDataSerializer

class AdditionalInfoDataViewSet(viewsets.ModelViewSet):
    queryset = AdditionalAlert.objects.all()
    serializer_class = AdditinalDataSerializer


def dashboard(request):
    data = VehicleData.objects.all()
    context = {'data': data}
    return render(request, 'dashboard.html', context)