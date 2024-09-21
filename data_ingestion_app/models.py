from django.db import models

class TelematicsData(models.Model):
    device_id = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    speed = models.FloatField(null=True, blank=True)
    sensor_data = models.JSONField()  # Store various sensor data as JSON

    def __str__(self):
        return f"Device {self.device_id} @ {self.timestamp}"
    
