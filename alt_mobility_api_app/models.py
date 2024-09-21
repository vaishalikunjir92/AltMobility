from django.db import models
from celery import shared_task

PRIORITY_CHOICES = [
    ('critical', 'Critical'),
    ('non_critical', 'Non-Critical')
]

class VehicleData(models.Model):
    vehicle_id = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)
    speed = models.FloatField()
    engine_temp = models.FloatField()
    location = models.CharField(max_length=100)  # Could also use a GeoField for geolocation
    alert_type = models.CharField(max_length=100)

    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='non_critical')
    impact = models.IntegerField(default=0)  # Scale of 1-10

    def __str__(self):
        return f"Vehicle {self.vehicle_id} - {self.timestamp}"
    

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