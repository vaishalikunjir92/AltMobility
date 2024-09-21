from rest_framework import viewsets
from .serializers import VehicleDataSerializer, AlertDataSerializer, AdditinalDataSerializer
from django.shortcuts import render
from celery import shared_task
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




def classify_and_prioritize(vehicle_data):
    if vehicle_data.speed > 120 or vehicle_data.engine_temp > 100:
        vehicle_data.priority = 'critical'
        vehicle_data.impact = 10
    else:
        vehicle_data.priority = 'non_critical'
        vehicle_data.impact = 3
    vehicle_data.save()
    
def detect_anomalies(vehicle_data):
    if vehicle_data.speed > 150 or vehicle_data.engine_temp > 120:
        # Trigger an alert for anomaly
        send_notification(f"Anomaly detected in Vehicle {vehicle_data.vehicle_id}")
    if vehicle_data.priority == 'critical':
        send_notification.delay(f"Critical alert for Vehicle {vehicle_data.vehicle_id}")


@shared_task
def send_notification(message):
    # Logic to send notification (e.g., email, SMS, push notification)

    print(f"Notification: {message}")




def dashboard(request):
    data = VehicleInfo.objects.all()
    context = {'data': data}
    return render(request, 'dashboard.html', context)