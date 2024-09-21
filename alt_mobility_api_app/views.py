from rest_framework import viewsets
from .models import VehicleData
from .serializers import VehicleDataSerializer
from django.shortcuts import render
from .models import VehicleData

class VehicleDataViewSet(viewsets.ModelViewSet):
    queryset = VehicleData.objects.all()
    serializer_class = VehicleDataSerializer


def dashboard(request):
    data = VehicleData.objects.all()
    context = {'data': data}
    return render(request, 'dashboard.html', context)